'use client';

import { useState } from 'react';
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import '../page.css';

/**
 * A button component that checks for wallet connection before allowing actions
 * If wallet is not connected, shows a warning message
 */
export default function WalletActionButton({ 
  onClick, 
  children, 
  className = "docs-button",
  disabled = false,
  isPending = false
}) {
  const { primaryWallet, setShowAuthFlow } = useDynamicContext();
  const [showWarning, setShowWarning] = useState(false);
  
  const handleClick = (e) => {
    // If wallet is not connected, show warning and open auth flow
    if (!primaryWallet) {
      e.preventDefault();
      setShowWarning(true);
      
      // Auto-hide warning after 3 seconds
      setTimeout(() => {
        setShowWarning(false);
      }, 3000);
      
      // Open the wallet connection modal
      setShowAuthFlow(true);
      return;
    }
    
    // If wallet is connected, proceed with the action
    if (onClick) onClick();
  };
  
  return (
    <div className="wallet-action-container">
      <button 
        className={className}
        onClick={handleClick}
        disabled={disabled || isPending}
      >
        {children}
      </button>
      
      {showWarning && (
        <div className="wallet-warning">
          <p>⚠️ Wallet not connected! Please connect your wallet to continue.</p>
        </div>
      )}
    </div>
  );
}
