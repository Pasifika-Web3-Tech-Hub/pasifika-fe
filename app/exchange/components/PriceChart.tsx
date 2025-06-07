'use client';

import React, { useEffect, useState } from 'react';
import { PasifikaPriceFeed } from '../../../lib/contracts';
import { useReadContract } from 'wagmi';
import { Address, formatUnits } from 'viem';

interface PricePoint {
  timestamp: number;
  price: number;
}

interface PriceChartProps {
  tokenAddress: Address;
  tokenSymbol: string;
  tokenDecimals: number;
}

export default function PriceChart({
  tokenAddress,
  tokenSymbol,
  tokenDecimals
}: PriceChartProps) {
  const [priceHistory, setPriceHistory] = useState<PricePoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Get latest price from the Oracle
  const { data: latestPrice, isLoading: isPriceLoading, error: priceError } = useReadContract({
    address: PasifikaPriceFeed.address,
    abi: PasifikaPriceFeed.abi,
    functionName: 'getLatestPrice',
    args: [tokenAddress]
  });
  
  // Handle errors with useEffect instead of onError
  useEffect(() => {
    if (priceError) {
      // If there's an error getting price data, we'll fallback to mock data
      console.error('Error fetching price data:', priceError);
      setIsLoading(false);
    }
  }, [priceError]);

  // Generate price history based on current price or fallback to mock data
  useEffect(() => {
    setIsLoading(true);
    
    // Default price based on token symbol (if Chainlink data isn't available)
    let basePrice = 1.0;
    if (tokenSymbol === 'USDC' || tokenSymbol === 'USDT') {
      basePrice = 1.0; // Stablecoins
    } else if (tokenSymbol === 'ARB') {
      basePrice = 1.85; // Example price for Arbitrum token
    }
    
    // Use Chainlink price if available, otherwise fallback to default
    const currentPrice = latestPrice ? 
      Number(formatUnits(BigInt(latestPrice as any), 8)) : 
      basePrice;
    
    // Generate mock history for demonstration
    const mockHistory: PricePoint[] = [];
    const now = Date.now();
    const dayInMs = 24 * 60 * 60 * 1000;
    
    // Generate 30 days of price history with some random variation
    for (let i = 30; i >= 0; i--) {
      const randomVariation = 0.95 + (Math.random() * 0.1); // 5% variation
      mockHistory.push({
        timestamp: now - (i * dayInMs),
        price: currentPrice * randomVariation
      });
    }
    
    setPriceHistory(mockHistory);
    setIsLoading(false);
  }, [latestPrice, isPriceLoading, tokenSymbol]);

  // Calculate chart dimensions and scaling
  const chartWidth = 600;
  const chartHeight = 200;
  const padding = 40;
  
  const innerWidth = chartWidth - (padding * 2);
  const innerHeight = chartHeight - (padding * 2);
  
  // Find min and max values for scaling
  const minPrice = priceHistory.length > 0 
    ? Math.min(...priceHistory.map(p => p.price)) * 0.99
    : 0;
    
  const maxPrice = priceHistory.length > 0 
    ? Math.max(...priceHistory.map(p => p.price)) * 1.01
    : 0;
    
  const range = maxPrice - minPrice;

  // Create SVG path for the price line
  const createPath = () => {
    if (priceHistory.length === 0) return '';
    
    // Calculate x and y coordinates for each point
    const points = priceHistory.map((point, index) => {
      const x = padding + (index * (innerWidth / (priceHistory.length - 1)));
      const y = padding + innerHeight - ((point.price - minPrice) / range * innerHeight);
      return `${x},${y}`;
    });
    
    return `M ${points.join(' L ')}`;
  };

  if (isLoading) {
    return (
      <div className="card">
        <h3 className="card-title">{tokenSymbol} Price Chart</h3>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <svg width="40" height="40" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="20" fill="none" stroke="var(--foreground-dim)" strokeWidth="4" strokeLinecap="round" strokeDasharray="94.2477796076938 31.41592653589793" transform="rotate(0 25 25)">
              <animateTransform attributeName="transform" type="rotate" values="0 25 25;360 25 25" dur="1s" repeatCount="indefinite" />
            </circle>
          </svg>
          <p style={{ marginTop: '1rem' }}>Loading price data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <h3 className="card-title">{tokenSymbol} Price Chart</h3>
      
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--foreground-dim)' }}>
          Current Price:
        </div>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          ${priceHistory.length > 0 ? priceHistory[priceHistory.length - 1].price.toFixed(2) : '0'}
        </div>
      </div>
      
      <div style={{ overflowX: 'auto' }}>
        <svg width={chartWidth} height={chartHeight} viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
          {/* Chart background */}
          <rect 
            x={padding} 
            y={padding} 
            width={innerWidth} 
            height={innerHeight} 
            fill="rgba(0, 0, 0, 0.1)" 
            stroke="rgba(255, 255, 255, 0.1)" 
          />
          
          {/* Horizontal guide lines */}
          {[0.25, 0.5, 0.75].map((ratio, i) => (
            <g key={i}>
              <line
                x1={padding}
                y1={padding + innerHeight * (1 - ratio)}
                x2={padding + innerWidth}
                y2={padding + innerHeight * (1 - ratio)}
                stroke="rgba(255, 255, 255, 0.1)"
                strokeDasharray="5,5"
              />
              <text
                x={padding - 5}
                y={padding + innerHeight * (1 - ratio) + 5}
                textAnchor="end"
                fill="var(--foreground-dim)"
                fontSize="10"
              >
                ${(minPrice + range * ratio).toFixed(2)}
              </text>
            </g>
          ))}
          
          {/* Price line */}
          <path
            d={createPath()}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
          />
          
          {/* Time labels */}
          {priceHistory.filter((_, i) => i % 6 === 0).map((point, i) => (
            <text
              key={i}
              x={padding + i * 6 * (innerWidth / (priceHistory.length - 1))}
              y={padding + innerHeight + 15}
              textAnchor="middle"
              fill="var(--foreground-dim)"
              fontSize="10"
            >
              {new Date(point.timestamp).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
            </text>
          ))}
        </svg>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem', color: 'var(--foreground-dim)' }}>
        Data source: Chainlink Price Feed (Proof-of-Concept)
        <div style={{ marginTop: '0.5rem', color: 'var(--primary)' }}>
          {tokenSymbol} historical price trends shown for demonstration purposes
        </div>
      </div>
    </div>
  );
}
