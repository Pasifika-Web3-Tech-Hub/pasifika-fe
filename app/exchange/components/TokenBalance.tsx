'use client';

import React from 'react';
import { useTokenBalance } from '../../../lib/hooks/useTokenBalance';
import { useBalance, useAccount } from 'wagmi';
import { Address } from 'viem';

interface TokenBalanceProps {
  tokenAddress?: Address;
  tokenSymbol: string;
  tokenDecimals?: number;
  className?: string;
}

export default function TokenBalance({
  tokenAddress,
  tokenSymbol,
  tokenDecimals = 18,
  className = ''
}: TokenBalanceProps) {
  const { address } = useAccount();
  const isETH = !tokenAddress || tokenSymbol.toUpperCase() === 'ETH';
  
  // Get ETH balance
  const { data: ethBalanceData, isLoading: isLoadingEth } = useBalance({
    address: isETH ? address : undefined,
  });
  
  // Get token balance
  const { 
    formattedBalance: tokenFormattedBalance, 
    isLoading: isLoadingToken 
  } = useTokenBalance(
    isETH ? undefined : tokenAddress, 
    tokenDecimals
  );
  
  const balance = isETH 
    ? ethBalanceData?.formatted || '0'
    : tokenFormattedBalance;
  
  const isLoading = isETH ? isLoadingEth : isLoadingToken;

  return (
    <div className={`token-balance ${className}`}>
      <div className="balance-label">Your {tokenSymbol} Balance:</div>
      <div className="balance-value">
        {isLoading ? (
          <span className="loading">Loading...</span>
        ) : (
          <span>{parseFloat(balance).toFixed(6)} {tokenSymbol}</span>
        )}
      </div>
    </div>
  );
}
