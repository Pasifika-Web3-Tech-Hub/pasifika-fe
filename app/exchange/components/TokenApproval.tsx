'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useTokenApproval } from '../../../lib/hooks/useTokenApproval';
import { useTokenBalance } from '../../../lib/hooks/useTokenBalance';
import { PasifikaExchange } from '../../../lib/contracts';
import { Address, parseUnits } from 'viem';

interface TokenApprovalProps {
  tokenAddress: Address;
  tokenSymbol: string;
  tokenDecimals: number;
  onApprovalComplete?: () => void;
}

export default function TokenApproval({
  tokenAddress,
  tokenSymbol,
  tokenDecimals,
  onApprovalComplete
}: TokenApprovalProps) {
  const [currentAllowance, setCurrentAllowance] = useState<bigint>(BigInt(0));
  const [isAllowanceLoaded, setIsAllowanceLoaded] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
  const [showCustomAmount, setShowCustomAmount] = useState(false);
  
  const {
    checkAllowance,
    approveToken,
    isPending,
    isSuccess,
    isError,
    error,
    isCheckingAllowance
  } = useTokenApproval();
  
  const { formattedBalance } = useTokenBalance(tokenAddress, tokenDecimals);

  // Load current allowance - wrapped in useCallback to avoid dependency issues
  const loadAllowance = useCallback(async () => {
    try {
      const allowance = await checkAllowance(
        tokenAddress,
        PasifikaExchange.address
      );
      setCurrentAllowance(allowance);
      setIsAllowanceLoaded(true);
    } catch (err) {
      console.error('Failed to load allowance:', err);
    }
  }, [tokenAddress, checkAllowance]);

  // Load allowance when component mounts or token changes
  useEffect(() => {
    if (tokenAddress) {
      loadAllowance();
    }
  }, [tokenAddress, isSuccess, loadAllowance]);

  // Approve with unlimited amount
  const handleUnlimitedApprove = async () => {
    try {
      await approveToken(
        tokenAddress,
        PasifikaExchange.address
      );
      if (onApprovalComplete) {
        onApprovalComplete();
      }
    } catch (err) {
      console.error('Approval failed:', err);
    }
  };

  // Approve with custom amount
  const handleCustomApprove = async () => {
    if (!customAmount || parseFloat(customAmount) <= 0) return;
    
    try {
      const amountBigInt = parseUnits(
        customAmount,
        tokenDecimals
      );
      
      await approveToken(
        tokenAddress,
        PasifikaExchange.address,
        amountBigInt
      );
      
      if (onApprovalComplete) {
        onApprovalComplete();
      }
    } catch (err) {
      console.error('Approval failed:', err);
    }
  };

  // Determine if token is already approved with sufficient allowance
  const hasApproval = currentAllowance > BigInt(0);

  return (
    <div className="card" style={{ marginBottom: '1rem' }}>
      <h3 className="card-title">Token Approval Required</h3>
      
      <div style={{ marginBottom: '1rem' }}>
        <p>Before you can trade or provide liquidity with {tokenSymbol}, you need to approve the Pasifika Exchange to use your tokens.</p>
        <p>Your {tokenSymbol} Balance: {formattedBalance}</p>
        
        {isAllowanceLoaded && (
          <p>
            Current Allowance: {
              hasApproval 
                ? `${Number(currentAllowance) / Math.pow(10, tokenDecimals)} ${tokenSymbol}`
                : 'None'
            }
          </p>
        )}
      </div>
      
      {!showCustomAmount ? (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            className="action-button"
            onClick={handleUnlimitedApprove}
            disabled={isPending}
            style={{ flex: '1' }}
          >
            {isPending ? 'Approving...' : `Approve ${tokenSymbol} (Unlimited)`}
          </button>
          
          <button
            onClick={() => setShowCustomAmount(true)}
            className="action-button"
            style={{ 
              flex: '1',
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'var(--foreground)'
            }}
          >
            Approve Custom Amount
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="form-group">
            <label>Amount to Approve</label>
            <input
              type="number"
              className="input-field"
              placeholder={`Enter ${tokenSymbol} amount`}
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
            />
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              className="action-button"
              onClick={handleCustomApprove}
              disabled={isPending || !customAmount || parseFloat(customAmount) <= 0}
              style={{ flex: '1' }}
            >
              {isPending ? 'Approving...' : `Approve ${customAmount} ${tokenSymbol}`}
            </button>
            
            <button
              onClick={() => setShowCustomAmount(false)}
              className="action-button"
              style={{ 
                flex: '1',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'var(--foreground)'
              }}
            >
              Back
            </button>
          </div>
        </div>
      )}
      
      {isSuccess && (
        <div style={{ color: 'green', marginTop: '0.5rem' }}>
          Approval successful! You can now trade {tokenSymbol}.
        </div>
      )}
      
      {isError && (
        <div style={{ color: 'red', marginTop: '0.5rem' }}>
          Error: {error?.message || 'Unknown error'}
        </div>
      )}
    </div>
  );
}
