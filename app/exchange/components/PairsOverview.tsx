'use client';

import React, { useEffect } from 'react';
import { useExchange } from '../../../lib/hooks/useExchange';
import { formatEther } from 'viem';

// Token interface
interface Token {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
}

// Extended pair info interface
interface ExtendedPairInfo {
  tokenAddress: string;
  tokenSymbol: string;
  tokenName: string;
  tokenReserve: bigint;
  ethReserve: bigint;
  exchangeRate: number;
  liquidityTokens: bigint;
}

// Real tokens available on Arbitrum Sepolia
const AVAILABLE_TOKENS: Token[] = [
  { address: '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d', symbol: 'USDC', name: 'USD Coin', decimals: 6 },
  { address: '0xEe01c0CD76354C383B8c7B4e65EA88D00B06f36f', symbol: 'USDT', name: 'Tether USD', decimals: 6 },
  { address: '0x530A7A937Be63591a12D4550B02Daf806E53968d', symbol: 'ARB', name: 'Arbitrum', decimals: 18 },
];

// Mock pairs for initial implementation
// In production, these would come from the blockchain via the useExchange hook
const MOCK_PAIRS: ExtendedPairInfo[] = [
  {
    tokenAddress: AVAILABLE_TOKENS[0].address,
    tokenSymbol: AVAILABLE_TOKENS[0].symbol,
    tokenName: AVAILABLE_TOKENS[0].name,
    tokenReserve: BigInt(5000000), // 5 USDC (6 decimals)
    ethReserve: BigInt(1000000000000000000),   // 1 ETH
    exchangeRate: 1200, // 1 ETH = 1200 USDC
    liquidityTokens: BigInt(2000000000000000000) // 2 LP tokens
  },
  {
    tokenAddress: AVAILABLE_TOKENS[1].address,
    tokenSymbol: AVAILABLE_TOKENS[1].symbol,
    tokenName: AVAILABLE_TOKENS[1].name,
    tokenReserve: BigInt(5000000), // 5 USDT (6 decimals)
    ethReserve: BigInt(1000000000000000000),   // 1 ETH
    exchangeRate: 1195, // 1 ETH = 1195 USDT
    liquidityTokens: BigInt(2000000000000000000) // 2 LP tokens
  }
];

export default function PairsOverview() {
  const { pairs, refreshPairs } = useExchange();
  
  // Fetch pairs when component mounts
  useEffect(() => {
    refreshPairs();
  }, [refreshPairs]);

  // For initial implementation, use mock data
  // In production, use the actual pairs data from the blockchain
  const displayPairs = pairs.length > 0 ? pairs as unknown as ExtendedPairInfo[] : MOCK_PAIRS;

  return (
    <div className="card">
      <h2 className="card-title">Trading Pairs</h2>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <p>View all available trading pairs on the Pasifika Exchange.</p>
        <p>Each pair shows the current exchange rate and liquidity reserves.</p>
      </div>
      
      {displayPairs.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <p>No trading pairs available yet.</p>
          <p>Be the first to create a trading pair!</p>
        </div>
      ) : (
        <div className="pair-list">
          {displayPairs.map((pair, index) => (
            <div key={index} className="pair-card">
              <div className="pair-header">
                <span className="pair-name">{pair.tokenSymbol || 'Token'}/ETH</span>
              </div>
              
              <div style={{ marginBottom: '0.5rem' }}>
                <div>Token: {pair.tokenName || pair.tokenAddress.slice(0, 8)}...</div>
                <div>Address: {pair.tokenAddress.slice(0, 8)}...{pair.tokenAddress.slice(-6)}</div>
              </div>
              
              <div style={{ padding: '0.5rem 0', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div>Token Reserve: {formatEther(pair.tokenReserve)} {pair.tokenSymbol || 'Tokens'}</div>
                <div>ETH Reserve: {formatEther(pair.ethReserve)} ETH</div>
              </div>
              
              <div style={{ 
                marginTop: '0.5rem', 
                padding: '0.5rem', 
                background: 'rgba(0, 0, 0, 0.2)', 
                borderRadius: '4px',
                fontSize: '0.9rem'
              }}>
                <div>Exchange Rate:</div>
                <div>1 ETH = {pair.exchangeRate} {pair.tokenSymbol || 'Tokens'}</div>
                <div>1 {pair.tokenSymbol || 'Token'} = {1/pair.exchangeRate} ETH</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
