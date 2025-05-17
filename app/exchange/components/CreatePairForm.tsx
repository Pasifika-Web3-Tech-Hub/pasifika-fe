'use client';

import React, { useState } from 'react';
import { useExchange } from '../../../lib/hooks/useExchange';
import { formatEther, parseEther } from 'viem';
import { useAccount, useBalance } from 'wagmi';

export default function CreatePairForm() {
  const [tokenAddress, setTokenAddress] = useState('');
  const [ethAmount, setEthAmount] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');
  
  const { address } = useAccount();
  const { data: ethBalance } = useBalance({ address });
  const {
    createPair,
    isPending,
    isSuccess,
    isError,
    error
  } = useExchange();

  // Handle max ETH button
  const handleMaxEth = () => {
    if (ethBalance) {
      // Leave a little ETH for gas
      const maxEth = Number(formatEther(ethBalance.value)) > 0.01 
        ? Number(formatEther(ethBalance.value)) - 0.01 
        : 0;
      setEthAmount(maxEth.toString());
    }
  };

  // Handle creating a new pair
  const handleCreatePair = async () => {
    try {
      if (!tokenAddress || !ethAmount || !tokenAmount) return;
      
      await createPair(
        tokenAddress,
        parseEther(tokenAmount),
        parseEther(ethAmount)
      );
    } catch (err) {
      console.error('Failed to create pair:', err);
    }
  };

  return (
    <div className="card">
      <h2 className="card-title">Create New Trading Pair</h2>
      <div className="exchange-form">
        <div className="form-group">
          <label>Token Address</label>
          <input
            type="text"
            className="input-field"
            placeholder="0x..."
            value={tokenAddress}
            onChange={(e) => setTokenAddress(e.target.value)}
          />
          <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--foreground-dim)' }}>
            Enter the contract address of an ERC20 token
          </div>
        </div>
        
        <div className="form-group">
          <label>Initial ETH Amount</label>
          <div className="input-container">
            <input
              type="number"
              className="input-field"
              placeholder="0.0"
              value={ethAmount}
              onChange={(e) => setEthAmount(e.target.value)}
            />
            <button className="max-button" onClick={handleMaxEth}>
              MAX
            </button>
          </div>
          <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--foreground-dim)' }}>
            Balance: {ethBalance ? formatEther(ethBalance.value) : '0'} ETH
          </div>
        </div>
        
        <div className="form-group">
          <label>Initial Token Amount</label>
          <input
            type="number"
            className="input-field"
            placeholder="0.0"
            value={tokenAmount}
            onChange={(e) => setTokenAmount(e.target.value)}
          />
          <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--foreground-dim)' }}>
            Make sure you have approved the exchange contract to spend your tokens
          </div>
        </div>
        
        <div className="price-info">
          <p>Creating a new pair requires providing initial liquidity in both ETH and tokens. 
             This establishes the initial exchange rate.</p>
          <p>You will receive liquidity provider (LP) tokens in return, representing your share of the pool.</p>
        </div>
        
        <button 
          className="action-button" 
          onClick={handleCreatePair}
          disabled={
            isPending || 
            !tokenAddress || 
            !ethAmount || 
            !tokenAmount || 
            !tokenAddress.startsWith('0x') || 
            tokenAddress.length !== 42 ||
            Number(ethAmount) <= 0 || 
            Number(tokenAmount) <= 0
          }
        >
          {isPending ? 'Creating Pair...' : 'Create Trading Pair'}
        </button>
        
        {isSuccess && (
          <div style={{ color: 'green', marginTop: '0.5rem' }}>
            Trading pair created successfully!
          </div>
        )}

        {isError && (
          <div style={{ color: 'red', marginTop: '0.5rem' }}>
            Error: {error?.message || 'Unknown error'}
          </div>
        )}
      </div>
    </div>
  );
}
