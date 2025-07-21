'use client';

import { useState, useEffect } from 'react';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';
import styles from '../styles/wallet.module.css';

// Detect if we're running in the browser and if MetaMask is available
const isBrowser = typeof window !== 'undefined';
const hasMetaMask = isBrowser && typeof window.ethereum !== 'undefined';

/**
 * Custom wallet connection component for Pasifika
 * Focuses solely on wallet connections and handles disconnection with enhanced error handling
 */
export default function PasifikaWalletConnect() {
  const { primaryWallet, handleLogOut, sdkHasLoaded } = useDynamicContext();
  const [connecting, setConnecting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showMetaMaskInfo, setShowMetaMaskInfo] = useState(false);
  
  // Close the connection modal when a connection is established
  useEffect(() => {
    if (primaryWallet && connecting) {
      setConnecting(false);
      setErrorMessage('');
    }
  }, [primaryWallet, connecting]);
  
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
  
  // Handle wallet connection request with error handling
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
      if (handleLogOut) {
        await handleLogOut();
        // Avoid full page reload, which can trigger errors
        setTimeout(() => {
          setConnecting(false);
        }, 500);
      }
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
      
      {primaryWallet ? (
        // Connected wallet view
        <div className={styles['connected-wallet']}>
          <div className={styles['wallet-info']}>
            <p className={styles['wallet-address']}>
              <strong>Connected:</strong> {primaryWallet.address.slice(0, 6)}...{primaryWallet.address.slice(-4)}
            </p>
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
          {connecting ? (
            // Show the Dynamic Labs widget only when actively connecting
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
                Connect Wallet
              </button>
              
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
