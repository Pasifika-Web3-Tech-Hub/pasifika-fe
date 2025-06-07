'use client';

import React, { useState, useEffect } from 'react';
import { useExchange } from '../../../lib/hooks/useExchange';
import { formatEther, parseEther, Address, parseUnits } from 'viem';
import { useAccount, useBalance } from 'wagmi';
import TokenApproval from './TokenApproval';
import TokenBalance from './TokenBalance';
import PriceChart from './PriceChart';

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

export default function SwapForm() {
  const [ethAmount, setEthAmount] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState(AVAILABLE_TOKENS[0]);
  const [swapDirection, setSwapDirection] = useState('ethToToken'); // or 'tokenToEth'
  const [slippage, setSlippage] = useState(0.5); // 0.5% slippage by default
  const [showApproval, setShowApproval] = useState(false);
  const [showChart, setShowChart] = useState(false);
  
  const { address } = useAccount();
  const { data: ethBalance } = useBalance({ address });
  const {
    swapETHForTokens,
    swapTokensForETH,
    useTokensOutEstimate,
    useETHOutEstimate,
    isPending,
    isSuccess,
    isError,
    error
  } = useExchange();

  // Get price estimates
  const { data: estimatedTokens } = useTokensOutEstimate(
    swapDirection === 'ethToToken' ? selectedToken.address : undefined,
    ethAmount ? parseEther(ethAmount) : BigInt(0)
  );

  const { data: estimatedEth } = useETHOutEstimate(
    swapDirection === 'tokenToEth' ? selectedToken.address : undefined, 
    tokenAmount ? parseEther(tokenAmount) : BigInt(0)
  );

  // Update the opposite field when one changes
  useEffect(() => {
    if (swapDirection === 'ethToToken' && ethAmount && estimatedTokens) {
      setTokenAmount(formatEther(estimatedTokens as bigint));
    } else if (swapDirection === 'tokenToEth' && tokenAmount && estimatedEth) {
      setEthAmount(formatEther(estimatedEth as bigint));
    }
  }, [ethAmount, tokenAmount, swapDirection, estimatedTokens, estimatedEth]);

  // Handle swap direction toggle
  const toggleSwapDirection = () => {
    setSwapDirection(swapDirection === 'ethToToken' ? 'tokenToEth' : 'ethToToken');
    setEthAmount('');
    setTokenAmount('');
  };

  // Handle max button click
  const handleMaxEth = () => {
    if (ethBalance) {
      // Leave a little ETH for gas
      const maxEth = Number(formatEther(ethBalance.value)) > 0.01 
        ? Number(formatEther(ethBalance.value)) - 0.01 
        : 0;
      setEthAmount(maxEth.toString());
    }
  };

  // Calculate minimum tokens based on slippage (for ETH -> Token)
  const getMinTokens = () => {
    if (!estimatedTokens) return BigInt(0);
    const minTokens = (estimatedTokens as bigint) * BigInt(Math.floor(10000 - slippage * 100)) / BigInt(10000);
    return minTokens;
  };

  // Calculate minimum ETH based on slippage (for Token -> ETH)
  const getMinEth = () => {
    if (!estimatedEth) return BigInt(0);
    const minEth = (estimatedEth as bigint) * BigInt(Math.floor(10000 - slippage * 100)) / BigInt(10000);
    return minEth;
  };

  // Handle the swap
  const handleSwap = async () => {
    try {
      if (swapDirection === 'ethToToken') {
        await swapETHForTokens(
          selectedToken.address,
          getMinTokens(),
          parseEther(ethAmount)
        );
      } else {
        await swapTokensForETH(
          selectedToken.address,
          parseEther(tokenAmount),
          getMinEth()
        );
      }
    } catch (err) {
      console.error('Swap failed:', err);
    }
  };

  return (
    <>
      {showApproval && swapDirection === 'tokenToEth' && (
        <TokenApproval
          tokenAddress={selectedToken.address as Address}
          tokenSymbol={selectedToken.symbol}
          tokenDecimals={selectedToken.decimals}
          onApprovalComplete={() => setShowApproval(false)}
        />
      )}
      
      {showChart && (
        <PriceChart
          tokenAddress={selectedToken.address as Address}
          tokenSymbol={selectedToken.symbol}
          tokenDecimals={selectedToken.decimals}
        />
      )}
      
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 className="card-title" style={{ margin: 0 }}>Swap</h2>
          <button 
            onClick={() => setShowChart(!showChart)} 
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--foreground-dim)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              fontSize: '0.9rem'
            }}>
            {showChart ? 'Hide Chart' : 'Show Chart'} 📊
          </button>
        </div>
        
        <div style={{ 
          padding: '10px 15px', 
          backgroundColor: 'rgba(41, 182, 246, 0.1)', 
          borderLeft: '3px solid #29B6F6',
          borderRadius: '4px',
          marginBottom: '1rem',
          fontSize: '0.9rem'
        }}>
          <p style={{ margin: '0 0 8px 0', fontWeight: 500 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#29B6F6">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"></path>
              </svg>
              Proof-of-Concept: Chainlink Integration
            </span>
          </p>
          <p style={{ margin: '0', color: 'var(--foreground-dim)' }}>
            This exchange is using Chainlink price feed oracles with secure decimal handling to prevent overflow/underflow issues. 
            Currently operating on <strong>Arbitrum Sepolia testnet</strong> with limited token selection.
          </p>
        </div>
      <div className="exchange-form">
        {swapDirection === 'ethToToken' ? (
          <>
            <div className="form-group">
              <label>You pay</label>
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
              <TokenBalance 
                tokenSymbol="ETH" 
                className="token-balance-display" 
              />
            </div>

            <div className="swap-arrow" onClick={toggleSwapDirection}>
              ↓
            </div>

            <div className="form-group">
              <label>You receive</label>
              <div className="input-container">
                <input
                  type="number"
                  className="input-field"
                  placeholder="0.0"
                  value={tokenAmount}
                  onChange={(e) => setTokenAmount(e.target.value)}
                  readOnly
                />
              </div>
              <TokenBalance 
                tokenAddress={selectedToken.address as Address}
                tokenSymbol={selectedToken.symbol}
                tokenDecimals={selectedToken.decimals}
                className="token-balance-display" 
              />
              <select
                className="token-select"
                value={selectedToken.address}
                onChange={(e) => {
                  const token = AVAILABLE_TOKENS.find(t => t.address === e.target.value);
                  if (token) {
                    setSelectedToken(token);
                    setShowApproval(false); // Reset approval state when token changes
                  }
                }}
              >
                {AVAILABLE_TOKENS.map(token => (
                  <option key={token.address} value={token.address}>
                    {token.symbol} - {token.name}
                  </option>
                ))}
              </select>
            </div>
          </>
        ) : (
          <>
            <div className="form-group">
              <label>You pay</label>
              <div className="input-container">
                <input
                  type="number"
                  className="input-field"
                  placeholder="0.0"
                  value={tokenAmount}
                  onChange={(e) => setTokenAmount(e.target.value)}
                />
              </div>
              <TokenBalance 
                tokenAddress={selectedToken.address as Address}
                tokenSymbol={selectedToken.symbol}
                tokenDecimals={selectedToken.decimals}
                className="token-balance-display" 
              />
              <select
                className="token-select"
                value={selectedToken.address}
                onChange={(e) => {
                  const token = AVAILABLE_TOKENS.find(t => t.address === e.target.value);
                  if (token) {
                    setSelectedToken(token);
                    setShowApproval(false); // Reset approval state when token changes
                  }
                }}
              >
                {AVAILABLE_TOKENS.map(token => (
                  <option key={token.address} value={token.address}>
                    {token.symbol} - {token.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="swap-arrow" onClick={toggleSwapDirection}>
              ↓
            </div>

            <div className="form-group">
              <label>You receive</label>
              <div className="input-container">
                <input
                  type="number"
                  className="input-field"
                  placeholder="0.0"
                  value={ethAmount}
                  onChange={(e) => setEthAmount(e.target.value)}
                  readOnly
                />
              </div>
              <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--foreground-dim)' }}>
                ETH
              </div>
            </div>
          </>
        )}

        <div className="price-info">
          <div>Slippage Tolerance: {slippage}%</div>
          <div>
            Rate: 1 {swapDirection === 'ethToToken' ? 'ETH' : selectedToken.symbol} = 
            {swapDirection === 'ethToToken' 
              ? ethAmount && tokenAmount 
                ? ` ${(Number(tokenAmount) / Number(ethAmount)).toFixed(6)} ${selectedToken.symbol}`
                : ` 0 ${selectedToken.symbol}`
              : tokenAmount && ethAmount
                ? ` ${(Number(ethAmount) / Number(tokenAmount)).toFixed(6)} ETH`
                : ` 0 ETH`
            }
          </div>
        </div>

        <button 
          className="action-button" 
          onClick={handleSwap}
          disabled={
            isPending || 
            !ethAmount || 
            !tokenAmount || 
            Number(ethAmount) <= 0 || 
            Number(tokenAmount) <= 0
          }
        >
          {isPending ? 'Swapping...' : 'Swap'}
        </button>

        {isSuccess && (
          <div style={{ color: 'green', marginTop: '0.5rem' }}>
            Swap successful!
          </div>
        )}

        {isError && (
          <div style={{ color: 'red', marginTop: '0.5rem' }}>
            Error: {error?.message || 'Unknown error'}
          </div>
        )}
        
        {swapDirection === 'tokenToEth' && (
          <button 
            className="action-button" 
            onClick={() => setShowApproval(true)}  
            style={{ 
              marginTop: '1rem', 
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'var(--foreground)'
            }}>
            Manage Token Approvals
          </button>
        )}
      </div>
    </div>
    </>
  );
}
