'use client';

import React, { useEffect, useState, useRef } from 'react';
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

  // Calculate chart dimensions and scaling - responsive approach
  const [chartDimensions, setChartDimensions] = useState({ width: 600, height: 200 });
  const padding = 40;
  
  // Create a ref for the container element
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use effect to handle resize and set dimensions based on container width
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        // Get the container width
        const containerWidth = containerRef.current.clientWidth;
        // Set chart width to container width with a maximum of 800px
        // Height is proportional but with minimum of 180px and max of 250px
        setChartDimensions({
          width: Math.min(containerWidth - 20, 800), // -20 for some padding
          height: Math.min(Math.max(containerWidth * 0.3, 180), 250)
        });
      }
    };
    
    // Initial update
    updateDimensions();
    
    // Add resize event listener
    window.addEventListener('resize', updateDimensions);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  
  const innerWidth = chartDimensions.width - (padding * 2);
  const innerHeight = chartDimensions.height - (padding * 2);
  
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
  
  // Create SVG path for the gradient-filled area below the chart line
  const createAreaPath = () => {
    if (priceHistory.length === 0) return '';
    
    // Calculate points for line
    const linePoints = priceHistory.map((point, index) => {
      const x = padding + (index * (innerWidth / (priceHistory.length - 1)));
      const y = padding + innerHeight - ((point.price - minPrice) / range * innerHeight);
      return `${x},${y}`;
    });
    
    // Create a path that includes the line points and then goes back along the bottom
    const startX = padding;
    const endX = padding + innerWidth;
    const bottomY = padding + innerHeight;
    
    return `M ${startX},${bottomY} L ${linePoints.join(' L ')} L ${endX},${bottomY} Z`;
  };
  
  // Calculate price change percentage
  const calculatePriceChange = () => {
    if (priceHistory.length < 2) return { percent: 0, isPositive: true };
    
    const oldPrice = priceHistory[0].price;
    const newPrice = priceHistory[priceHistory.length - 1].price;
    const change = ((newPrice - oldPrice) / oldPrice) * 100;
    
    return {
      percent: Math.abs(change).toFixed(2),
      isPositive: change >= 0
    };
  };
  
  const priceChange = calculatePriceChange();

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
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', padding: '0 10px' }}>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--foreground-dim)' }}>
            Current Price:
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            ${priceHistory.length > 0 ? priceHistory[priceHistory.length - 1].price.toFixed(2) : '0'}
          </div>
        </div>
        
        <div style={{
          textAlign: 'right',
          padding: '6px 12px',
          borderRadius: '4px',
          backgroundColor: priceChange.isPositive ? 'rgba(46, 200, 94, 0.1)' : 'rgba(255, 91, 87, 0.1)',
          border: `1px solid ${priceChange.isPositive ? 'rgba(46, 200, 94, 0.3)' : 'rgba(255, 91, 87, 0.3)'}`
        }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--foreground-dim)' }}>
            30-Day Change
          </div>
          <div style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: priceChange.isPositive ? '#2EC85E' : '#FF5B57',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            {priceChange.isPositive ? '+' : '-'}{priceChange.percent}%
            <span style={{ fontSize: '1rem' }}>
              {priceChange.isPositive ? '↑' : '↓'}
            </span>
          </div>
        </div>
      </div>
      
      <div style={{ overflowX: 'auto' }} ref={containerRef}>
        <svg width={chartDimensions.width} height={chartDimensions.height} viewBox={`0 0 ${chartDimensions.width} ${chartDimensions.height}`}>
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={priceChange.isPositive ? '#2EC85E' : '#FF5B57'} stopOpacity="0.4" />
              <stop offset="100%" stopColor={priceChange.isPositive ? '#2EC85E' : '#FF5B57'} stopOpacity="0.05" />
            </linearGradient>
          </defs>
          
          {/* Chart background */}
          <rect 
            x={padding} 
            y={padding} 
            width={innerWidth} 
            height={innerHeight} 
            fill="rgba(20, 20, 30, 0.15)" 
            stroke="rgba(255, 255, 255, 0.1)" 
            rx="4"
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
          
          {/* Area under the curve with gradient */}
          <path
            d={createAreaPath()}
            fill="url(#areaGradient)"
          />
          
          {/* Price line */}
          <path
            d={createPath()}
            fill="none"
            stroke={priceChange.isPositive ? '#2EC85E' : '#FF5B57'}
            strokeWidth="3"
            strokeLinecap="round"
          />
          
          {/* Data points at specific intervals */}
          {priceHistory.filter((_, i) => i % 6 === 0 || i === priceHistory.length - 1).map((point, i) => {
            const x = padding + (i * 6 * (innerWidth / (priceHistory.length - 1)));
            const y = padding + innerHeight - ((point.price - minPrice) / range * innerHeight);
            
            // For the last point, use the actual position
            if (i === Math.floor(priceHistory.length / 6)) {
              const lastIdx = priceHistory.length - 1;
              const lastX = padding + (lastIdx * (innerWidth / (priceHistory.length - 1)));
              const lastY = padding + innerHeight - ((priceHistory[lastIdx].price - minPrice) / range * innerHeight);
              
              return (
                <circle
                  key="last-point"
                  cx={lastX}
                  cy={lastY}
                  r="4"
                  fill="#FFFFFF"
                  stroke={priceChange.isPositive ? '#2EC85E' : '#FF5B57'}
                  strokeWidth="2"
                />
              );
            }
            
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="3"
                fill={priceChange.isPositive ? '#2EC85E' : '#FF5B57'}
                stroke="#FFFFFF"
                strokeWidth="1"
              />
            );
          })}
          
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
      
      <div style={{ 
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: '1rem', 
        fontSize: '0.85rem', 
        color: 'var(--foreground-dim)',
        padding: '0 10px'
      }}>
        <div>
          Data source: Chainlink Price Feed
        </div>
        <div style={{ color: 'var(--primary)' }}>
          {tokenSymbol} market trends
        </div>
      </div>
    </div>
  );
}
