'use client';

import { useState, useEffect } from 'react';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';
import styles from '../styles/wallet.module.css';

// Detect if we're running in the browser and wallet availability
const isBrowser = typeof window !== 'undefined';
const hasMetaMask = isBrowser && typeof window.ethereum !== 'undefined';

// Proper Stacks wallet detection based on actual wallet implementations
const getLeatherWallet = () => {
  if (isBrowser) {
    // Leather wallet injects itself as window.btc
    if (window.btc && typeof window.btc.request === 'function') {
      return window.btc;
    }
    // Alternative Leather detection
    if (window.LeatherProvider && typeof window.LeatherProvider.request === 'function') {
      return window.LeatherProvider;
    }
  }
  return null;
};



const getXverseWallet = () => {
  if (isBrowser) {
    // Try multiple possible Xverse wallet providers
    if (window.XverseProviders && window.XverseProviders.StacksProvider && window.XverseProviders.StacksProvider.request) {
      return window.XverseProviders.StacksProvider;
    }
    if (window.xverse && window.xverse.request) {
      return window.xverse;
    }
  }
  return null;
};

// Stacks wallet configurations with proper connection methods
const stacksWallets = [
  {
    id: 'leather',
    name: 'Leather Wallet',
    icon: '🔶',
    description: 'Connect with Leather Wallet for Stacks',
    downloadUrl: 'https://leather.io/',
    isAvailable: () => !!getLeatherWallet(),
    connect: async () => {
      const wallet = getLeatherWallet();
      if (!wallet) {
        throw new Error('Leather Wallet not found');
      }
      
      try {
        console.log('Attempting to connect to Leather wallet...');
        console.log('Wallet object:', wallet);
        
        // Leather wallet connection - try multiple methods
        let response;
        
        try {
          // Method 1: Standard stx_requestAccounts
          console.log('Trying stx_requestAccounts...');
          response = await wallet.request('stx_requestAccounts');
          console.log('Leather stx_requestAccounts response:', response);
        } catch (error1) {
          console.log('stx_requestAccounts failed:', error1);
          
          try {
            // Method 2: Object format request
            console.log('Trying object format request...');
            response = await wallet.request({ method: 'stx_requestAccounts' });
            console.log('Leather object format response:', response);
          } catch (error2) {
            console.log('Object format failed:', error2);
            
            try {
              // Method 3: Generic getAddresses (Leather specific)
              console.log('Trying getAddresses...');
              response = await wallet.request('getAddresses');
              console.log('Leather getAddresses response:', response);
            } catch (error3) {
              console.log('getAddresses failed:', error3);
              throw error1; // Throw the original error
            }
          }
        }
        
        // Handle different response formats
        let addresses = [];
        
        if (response && response.result && response.result.addresses) {
          // Standard format: response.result.addresses
          addresses = response.result.addresses.map(addr => addr.address || addr);
        } else if (response && response.addresses) {
          // Alternative format: response.addresses
          addresses = response.addresses.map(addr => addr.address || addr);
        } else if (Array.isArray(response)) {
          // Direct array format
          addresses = response.map(addr => addr.address || addr);
        } else if (response && typeof response === 'string') {
          // Single address string
          addresses = [response];
        }
        
        console.log('Parsed addresses:', addresses);
        
        if (addresses.length > 0) {
          return addresses;
        }
        
        throw new Error('No accounts returned from Leather');
      } catch (error) {
        console.error('Leather connection error details:', {
          error,
          message: error.message,
          code: error.code,
          stack: error.stack
        });
        
        // If the user rejected the connection
        if (error.code === 4001) {
          throw new Error('Connection rejected by user');
        }
        
        // Provide more specific error message
        const errorMessage = error.message || error.toString() || 'Unknown error';
        throw new Error(`Failed to connect to Leather Wallet: ${errorMessage}`);
      }
    }
  },
  {
    id: 'xverse',
    name: 'Xverse Wallet',
    icon: '⚡',
    description: 'Connect with Xverse Wallet for Bitcoin & Stacks',
    downloadUrl: 'https://www.xverse.app/',
    isAvailable: () => !!getXverseWallet(),
    connect: async () => {
      const wallet = getXverseWallet();
      if (!wallet) {
        throw new Error('Xverse Wallet not found');
      }
      
      try {
        // Try different connection methods for Xverse
        let response;
        
        // Method 1: Standard Stacks request
        try {
          response = await wallet.request('stx_requestAccounts');
        } catch (e) {
          // Method 2: Alternative request format
          try {
            response = await wallet.request({ method: 'stx_requestAccounts' });
          } catch (e2) {
            // Method 3: Generic request accounts
            response = await wallet.request('requestAccounts');
          }
        }
        
        // Handle different response formats
        if (response && response.result && response.result.addresses && response.result.addresses.length > 0) {
          return response.result.addresses;
        } else if (response && Array.isArray(response) && response.length > 0) {
          return response;
        } else if (response && typeof response === 'string') {
          return [response];
        }
        
        throw new Error('No accounts returned from Xverse');
      } catch (error) {
        console.error('Xverse connection error:', error);
        throw new Error(`Failed to connect to Xverse Wallet: ${error.message}`);
      }
    }
  }
];

/**
 * Custom wallet connection component for Pasifika
 * Focuses solely on wallet connections and handles disconnection with enhanced error handling
 */
export default function PasifikaWalletConnect() {
  const { primaryWallet, handleLogOut, sdkHasLoaded } = useDynamicContext();
  const [connecting, setConnecting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showMetaMaskInfo, setShowMetaMaskInfo] = useState(false);
  const [selectedWalletType, setSelectedWalletType] = useState('stacks'); // 'stacks' or 'evm'
  const [connectedStacksWallet, setConnectedStacksWallet] = useState(null);
  const [showWalletOptions, setShowWalletOptions] = useState(false);
  
  // Close the connection modal when a connection is established
  useEffect(() => {
    if (primaryWallet && connecting) {
      setConnecting(false);
      setErrorMessage('');
    }
  }, [primaryWallet, connecting]);
  
  // Debug wallet availability on component mount with delay for wallet loading
  useEffect(() => {
    if (isBrowser) {
      // Add delay to ensure wallet extensions have loaded
      const checkWallets = () => {
        console.log('=== WALLET AVAILABILITY CHECK ===');
        
        // Check Leather wallet
        const leatherWallet = getLeatherWallet();
        console.log('Leather wallet detected:', !!leatherWallet);
        if (leatherWallet) {
          console.log('Leather wallet object:', leatherWallet);
          console.log('Leather has request method:', typeof leatherWallet.request === 'function');
        }
        
        // Check Xverse wallet
        const xverseWallet = getXverseWallet();
        console.log('Xverse wallet detected:', !!xverseWallet);
        if (xverseWallet) {
          console.log('Xverse wallet object:', xverseWallet);
          console.log('Xverse has request method:', typeof xverseWallet.request === 'function');
        }
        
        console.log('MetaMask detected:', hasMetaMask);
        
        // Log all available window objects for debugging
        const walletObjects = [];
        if (window.btc) walletObjects.push('window.btc');
        if (window.leather) walletObjects.push('window.leather');
        if (window.LeatherProvider) walletObjects.push('window.LeatherProvider');
        if (window.StacksProvider) walletObjects.push('window.StacksProvider');
        if (window.hiro) walletObjects.push('window.hiro');
        if (window.HiroWalletProvider) walletObjects.push('window.HiroWalletProvider');
        if (window.XverseProviders) walletObjects.push('window.XverseProviders');
        if (window.xverse) walletObjects.push('window.xverse');
        
        console.log('Available wallet objects:', walletObjects);
        console.log('=== END WALLET CHECK ===');
        
        // Force component re-render to update wallet availability
        setShowWalletOptions(prev => prev);
      };
      
      // Check immediately
      checkWallets();
      
      // Check again after 1 second to catch late-loading wallets
      const timer = setTimeout(checkWallets, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  // Reset error message after 5 seconds
  useEffect(() => {
    let timer;
    if (errorMessage) {
      timer = setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [errorMessage]);
  
  // Handle Stacks wallet connection
  const handleStacksWalletConnect = async (wallet) => {
    setErrorMessage('');
    
    if (!wallet.isAvailable()) {
      setErrorMessage(`${wallet.name} not detected. Please install ${wallet.name} extension.`);
      return;
    }
    
    try {
      setConnecting(true);
      const accounts = await wallet.connect();
      
      let address = null;
      
      // Handle different response formats from different wallets
      if (Array.isArray(accounts) && accounts.length > 0) {
        // Direct array of addresses
        address = accounts[0];
      } else if (accounts && accounts.addresses && accounts.addresses.length > 0) {
        // Nested addresses array
        address = accounts.addresses[0];
      } else if (accounts && typeof accounts === 'string') {
        // Single address string
        address = accounts;
      }
      
      if (address) {
        setConnectedStacksWallet({
          ...wallet,
          address: address
        });
        setShowWalletOptions(false);
        setErrorMessage('');
      } else {
        throw new Error('No account address received');
      }
    } catch (error) {
      console.error(`${wallet.name} connection error:`, error);
      setErrorMessage(`Failed to connect to ${wallet.name}. ${error.message || 'Please try again.'}`);
    } finally {
      setConnecting(false);
    }
  };

  // Handle EVM wallet connection request with error handling
  const handleConnectWallet = () => {
    setErrorMessage('');
    
    // Check if MetaMask is installed
    if (!hasMetaMask) {
      setErrorMessage('MetaMask not detected. Please install MetaMask extension.');
      setShowMetaMaskInfo(true);
      return;
    }
    
    try {
      setConnecting(true);
    } catch (error) {
      console.error('Wallet connection error:', error);
      setErrorMessage('Failed to connect to wallet. Please try again.');
      setConnecting(false);
    }
  };
  
  // Handle wallet disconnect with error handling
  const handleDisconnectWallet = async () => {
    try {
      // Disconnect Stacks wallet if connected
      if (connectedStacksWallet) {
        setConnectedStacksWallet(null);
        setShowWalletOptions(false);
      }
      
      // Disconnect EVM wallet if connected
      if (handleLogOut && primaryWallet) {
        await handleLogOut();
        // Avoid full page reload, which can trigger errors
        setTimeout(() => {
          setConnecting(false);
        }, 500);
      }
      
      // Reset all connection states
      setConnecting(false);
      setSelectedWalletType('stacks');
      setShowWalletOptions(false);
    } catch (error) {
      console.error('Wallet disconnect error:', error);
      setErrorMessage('Failed to disconnect wallet. Please try again.');
    }
  };
  
  // Safe check to prevent runtime errors
  if (!isBrowser || !sdkHasLoaded) {
    return <div className="loading-wallet">Loading wallet connection...</div>;
  }
  
  // Button style object to avoid repetition
  const buttonStyle = {
    display: 'inline-block',
    padding: '12px 30px',
    background: 'linear-gradient(to right, #FF5722, #FF9800)',
    color: 'white',
    borderRadius: '30px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 8px rgba(255, 87, 34, 0.3)',
    border: 'none',
    cursor: 'pointer'
  };
  
  return (
    <div className={styles['pasifika-wallet-connect']}>
      {/* Error message display */}
      {errorMessage && (
        <div style={{
          background: 'rgba(255, 0, 0, 0.1)',
          border: '1px solid #ff0000',
          color: '#ff0000',
          padding: '10px 15px',
          borderRadius: '5px',
          marginBottom: '15px',
          fontSize: '14px'
        }}>
          {errorMessage}
        </div>
      )}
      
      {(primaryWallet || connectedStacksWallet) ? (
        // Connected wallet view
        <div className={styles['connected-wallet']}>
          <div className={styles['wallet-info']}>
            {connectedStacksWallet ? (
              <p className={styles['wallet-address']}>
                <strong>{connectedStacksWallet.name} Connected:</strong> {connectedStacksWallet.address.slice(0, 6)}...{connectedStacksWallet.address.slice(-4)}
              </p>
            ) : (
              <p className={styles['wallet-address']}>
                <strong>Connected:</strong> {primaryWallet.address.slice(0, 6)}...{primaryWallet.address.slice(-4)}
              </p>
            )}
          </div>
          <button 
            className={styles['disconnect-button']}
            onClick={handleDisconnectWallet}
          >
            Disconnect Wallet
          </button>
        </div>
      ) : (
        // Connect wallet view
        <div className="connect-wallet-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', margin: '20px 0' }}>
          {connecting && selectedWalletType === 'evm' ? (
            // Show the Dynamic Labs widget only when actively connecting to EVM wallets
            <>
              <DynamicWidget />
              <button 
                onClick={() => setConnecting(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  textDecoration: 'underline',
                  color: '#666',
                  cursor: 'pointer',
                  marginTop: '15px',
                  fontSize: '14px'
                }}
              >
                Cancel Connection
              </button>
            </>
          ) : (
            <>
              {/* Wallet Type Selection */}
              <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <h3 style={{ color: '#333', marginBottom: '15px', fontSize: '18px' }}>Choose Your Wallet</h3>
                
                {/* Debug Button */}
                <button
                  onClick={() => {
                    console.log('=== MANUAL WALLET DEBUG ===');
                    console.log('window.btc:', window.btc);
                    console.log('window.XverseProviders:', window.XverseProviders);
                    console.log('Leather detected:', !!getLeatherWallet());
                    console.log('Xverse detected:', !!getXverseWallet());
                    if (window.btc) {
                      console.log('window.btc methods:', Object.getOwnPropertyNames(window.btc));
                    }
                    if (window.XverseProviders && window.XverseProviders.StacksProvider) {
                      console.log('window.XverseProviders.StacksProvider methods:', Object.getOwnPropertyNames(window.XverseProviders.StacksProvider));
                    }
                  }}
                  style={{
                    padding: '4px 8px',
                    fontSize: '12px',
                    background: '#f0f0f0',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginBottom: '15px'
                  }}
                >
                  🔍 Debug Wallets
                </button>
                
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
                  <button
                    onClick={() => setSelectedWalletType('stacks')}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '20px',
                      border: selectedWalletType === 'stacks' ? '2px solid #FF5722' : '2px solid #ddd',
                      background: selectedWalletType === 'stacks' ? '#FF5722' : 'white',
                      color: selectedWalletType === 'stacks' ? 'white' : '#666',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    🔶 Stacks Wallets
                  </button>
                  <button
                    onClick={() => setSelectedWalletType('evm')}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '20px',
                      border: selectedWalletType === 'evm' ? '2px solid #FF5722' : '2px solid #ddd',
                      background: selectedWalletType === 'evm' ? '#FF5722' : 'white',
                      color: selectedWalletType === 'evm' ? 'white' : '#666',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    🦊 MetaMask
                  </button>
                </div>
              </div>

              {/* Stacks Wallets Section (Shown First) */}
              {selectedWalletType === 'stacks' && (
                <div style={{ width: '100%', maxWidth: '500px' }}>
                  <div style={{ marginBottom: '15px', textAlign: 'center' }}>
                    <p style={{ color: '#666', fontSize: '14px', margin: '0 0 20px 0' }}>
                      Connect with Bitcoin-secured Stacks wallets for the best experience
                    </p>
                  </div>
                  
                  {/* Stacks Wallet Options */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {stacksWallets.map((wallet) => (
                      <button
                        key={wallet.id}
                        onClick={() => handleStacksWalletConnect(wallet)}
                        disabled={connecting}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '16px 20px',
                          border: wallet.isAvailable() ? '2px solid #e0e0e0' : '2px solid #ffcccb',
                          borderRadius: '12px',
                          background: wallet.isAvailable() ? 'white' : '#f9f9f9',
                          cursor: wallet.isAvailable() && !connecting ? 'pointer' : 'not-allowed',
                          transition: 'all 0.3s ease',
                          opacity: connecting ? 0.6 : 1,
                          textAlign: 'left',
                          width: '100%'
                        }}
                        onMouseOver={(e) => {
                          if (wallet.isAvailable() && !connecting) {
                            e.currentTarget.style.borderColor = '#FF5722';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 87, 34, 0.2)';
                          }
                        }}
                        onMouseOut={(e) => {
                          if (wallet.isAvailable() && !connecting) {
                            e.currentTarget.style.borderColor = '#e0e0e0';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                          }
                        }}
                      >
                        <div style={{ fontSize: '24px', marginRight: '15px' }}>{wallet.icon}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: '600', fontSize: '16px', color: '#333', marginBottom: '4px' }}>
                            {wallet.name}
                          </div>
                          <div style={{ fontSize: '13px', color: '#666' }}>
                            {wallet.isAvailable() ? wallet.description : `${wallet.name} not installed`}
                          </div>
                        </div>
                        {!wallet.isAvailable() && (
                          <a
                            href={wallet.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                              fontSize: '12px',
                              color: '#FF5722',
                              textDecoration: 'none',
                              fontWeight: '500',
                              padding: '4px 8px',
                              border: '1px solid #FF5722',
                              borderRadius: '4px'
                            }}
                          >
                            Install
                          </a>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* MetaMask Section */}
              {selectedWalletType === 'evm' && (
                <div style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
                  <div style={{ marginBottom: '15px' }}>
                    <p style={{ color: '#666', fontSize: '14px', margin: '0 0 20px 0' }}>
                      Connect with MetaMask for future Bitcoin integration
                    </p>
                  </div>
                  
                  <button 
                    onClick={handleConnectWallet}
                    style={buttonStyle}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 6px 12px rgba(255, 87, 34, 0.4)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(255, 87, 34, 0.3)';
                    }}
                  >
                    Connect MetaMask
                  </button>
                </div>
              )}
              
              {/* MetaMask Info Section */}
              {showMetaMaskInfo && (
                <div style={{
                  marginTop: '20px',
                  padding: '15px',
                  background: '#f8f8f8',
                  borderRadius: '8px',
                  fontSize: '14px',
                  maxWidth: '450px',
                  textAlign: 'center',
                }}>
                  <p style={{ fontWeight: '500', marginBottom: '10px' }}>MetaMask Required</p>
                  <p>To connect your wallet, please install the MetaMask extension:</p>
                  <a 
                    href="https://metamask.io/download/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      marginTop: '10px',
                      color: '#FF5722',
                      textDecoration: 'none',
                      fontWeight: '500'
                    }}
                  >
                    Download MetaMask
                  </a>
                  <button 
                    onClick={() => setShowMetaMaskInfo(false)}
                    style={{
                      display: 'block',
                      margin: '15px auto 0',
                      background: 'none',
                      border: 'none',
                      textDecoration: 'underline',
                      color: '#666',
                      cursor: 'pointer',
                      fontSize: '13px'
                    }}
                  >
                    Dismiss
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
