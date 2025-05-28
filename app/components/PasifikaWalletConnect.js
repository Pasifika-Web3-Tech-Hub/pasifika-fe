'use client';

import { useState, useEffect } from 'react';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';
import styles from '../styles/wallet.module.css';

/**
 * Custom wallet connection component for Pasifika
 * Focuses solely on wallet connections and handles disconnection
 */
export default function PasifikaWalletConnect() {
  const { primaryWallet, handleLogOut, sdkHasLoaded } = useDynamicContext();
  const [connecting, setConnecting] = useState(false);
  
  // Close the connection modal when a connection is established
  useEffect(() => {
    if (primaryWallet && connecting) {
      setConnecting(false);
    }
  }, [primaryWallet, connecting]);
  
  // Handle wallet connection request
  const handleConnectWallet = () => {
    setConnecting(true);
  };
  
  // Handle wallet disconnect
  const handleDisconnectWallet = async () => {
    if (handleLogOut) {
      await handleLogOut();
      window.location.reload();
    }
  };
  
  if (!sdkHasLoaded) {
    return <div className="loading-wallet">Loading wallet connection...</div>;
  }
  
  return (
    <div className={styles['pasifika-wallet-connect']}>
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
        <div className="connect-wallet-container" style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '20px 0' }}>
          {connecting ? (
            // Show the Dynamic Labs widget only when actively connecting
            <DynamicWidget />
          ) : (
            <button 
              onClick={handleConnectWallet}
              style={{
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
              }}
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
          )}
        </div>
      )}
    </div>
  );
}
