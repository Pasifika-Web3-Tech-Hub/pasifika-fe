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
        <div className="connect-wallet-container">
          {connecting ? (
            // Show the Dynamic Labs widget only when actively connecting
            <DynamicWidget />
          ) : (
            <button 
              className={styles['connect-button']}
              onClick={handleConnectWallet}
            >
              Connect Wallet
            </button>
          )}
        </div>
      )}
    </div>
  );
}
