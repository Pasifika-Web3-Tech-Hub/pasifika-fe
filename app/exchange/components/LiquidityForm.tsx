'use client';

import React, { useState, useEffect } from 'react';
import { useExchange } from '../../../lib/hooks/useExchange';
import { formatEther, parseEther } from 'viem';
import { useAccount, useBalance } from 'wagmi';

// Token interface
interface Token {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
}

// Real tokens available on Arbitrum Sepolia
const AVAILABLE_TOKENS: Token[] = [
  { address: '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d', symbol: 'USDC', name: 'USD Coin', decimals: 6 },
  { address: '0xEe01c0CD76354C383B8c7B4e65EA88D00B06f36f', symbol: 'USDT', name: 'Tether USD', decimals: 6 },
  { address: '0x530A7A937Be63591a12D4550B02Daf806E53968d', symbol: 'ARB', name: 'Arbitrum', decimals: 18 },
  // Add your deployed MockToken address here if you want to use it
  // { address: '0xYourMockTokenAddress', symbol: 'MOCK', name: 'Mock Token', decimals: 18 },
];

export default function LiquidityForm() {
  const [mode, setMode] = useState('add'); // 'add' or 'remove'
  const [ethAmount, setEthAmount] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');
  const [liquidityAmount, setLiquidityAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState(AVAILABLE_TOKENS[0]);
  
  const { address } = useAccount();
  const { data: ethBalance } = useBalance({ address });
  const {
    addLiquidity,
    removeLiquidity,
    pairs,
    refreshPairs,
    isPending,
    isSuccess,
    isError,
    error
  } = useExchange();

  // Fetch pairs on component mount
  useEffect(() => {
    refreshPairs();
  }, [refreshPairs]);

  // Handle adding liquidity
  const handleAddLiquidity = async () => {
    try {
      if (!ethAmount || !tokenAmount) return;
      
      await addLiquidity(
        selectedToken.address,
        parseEther(tokenAmount),
        parseEther(ethAmount)
      );
    } catch (err) {
      console.error('Failed to add liquidity:', err);
    }
  };

  // Handle removing liquidity
  const handleRemoveLiquidity = async () => {
    try {
      if (!liquidityAmount) return;
      
      await removeLiquidity(
        selectedToken.address,
        parseEther(liquidityAmount)
      );
    } catch (err) {
      console.error('Failed to remove liquidity:', err);
    }
  };

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

  return (
    <div className="card">
      <h2 className="card-title">Liquidity</h2>
      
      <div className="exchange-tabs" style={{ marginBottom: '1.5rem' }}>
        <button
          className={`tab-button ${mode === 'add' ? 'active' : ''}`}
          onClick={() => setMode('add')}
        >
          Add Liquidity
        </button>
        <button
          className={`tab-button ${mode === 'remove' ? 'active' : ''}`}
          onClick={() => setMode('remove')}
        >
          Remove Liquidity
        </button>
      </div>
      
      <div className="exchange-form">
        {mode === 'add' ? (
          <>
            <div className="form-group">
              <label>Token</label>
              <select
                className="token-select"
                value={selectedToken.address}
                onChange={(e) => {
                  const token = AVAILABLE_TOKENS.find(t => t.address === e.target.value);
                  if (token) setSelectedToken(token);
                }}
              >
                {AVAILABLE_TOKENS.map(token => (
                  <option key={token.address} value={token.address}>
                    {token.symbol} - {token.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label>ETH Amount</label>
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
              <label>Token Amount</label>
              <div className="input-container">
                <input
                  type="number"
                  className="input-field"
                  placeholder="0.0"
                  value={tokenAmount}
                  onChange={(e) => setTokenAmount(e.target.value)}
                />
              </div>
            </div>
            
            <button 
              className="action-button" 
              onClick={handleAddLiquidity}
              disabled={
                isPending || 
                !ethAmount || 
                !tokenAmount || 
                Number(ethAmount) <= 0 || 
                Number(tokenAmount) <= 0
              }
            >
              {isPending ? 'Adding Liquidity...' : 'Add Liquidity'}
            </button>
          </>
        ) : (
          <>
            <div className="form-group">
              <label>Token Pair</label>
              <select
                className="token-select"
                value={selectedToken.address}
                onChange={(e) => {
                  const token = AVAILABLE_TOKENS.find(t => t.address === e.target.value);
                  if (token) setSelectedToken(token);
                }}
              >
                {AVAILABLE_TOKENS.map(token => (
                  <option key={token.address} value={token.address}>
                    {token.symbol}/ETH
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label>Liquidity to Remove (LP tokens)</label>
              <div className="input-container">
                <input
                  type="number"
                  className="input-field"
                  placeholder="0.0"
                  value={liquidityAmount}
                  onChange={(e) => setLiquidityAmount(e.target.value)}
                />
              </div>
            </div>
            
            <div className="price-info">
              <p>Removing liquidity will give you ETH and tokens based on your share of the pool.</p>
            </div>
            
            <button 
              className="action-button" 
              onClick={handleRemoveLiquidity}
              disabled={
                isPending || 
                !liquidityAmount || 
                Number(liquidityAmount) <= 0
              }
            >
              {isPending ? 'Removing Liquidity...' : 'Remove Liquidity'}
            </button>
          </>
        )}
        
        {isSuccess && (
          <div style={{ color: 'green', marginTop: '0.5rem' }}>
            {mode === 'add' ? 'Liquidity successfully added!' : 'Liquidity successfully removed!'}
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
