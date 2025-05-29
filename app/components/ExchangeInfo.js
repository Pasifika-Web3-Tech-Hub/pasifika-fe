'use client';

import React from 'react';
import Link from 'next/link';
import '../page.css';

export default function ExchangeInfo() {
  // Static display information about the exchange across networks
  const networks = [
    {
      id: 'arbitrum',
      name: 'Arbitrum',
      tradingPairs: '14',
      liquidityPools: '8',
      fee: '0.25%',
      contractAddress: '0x9aBc57a047AD9B45B70D85000e9412C61f8fE123',
      isDeployed: true,
      color: '#9945ff',
      techType: 'Optimistic Rollups'
    },
    {
      id: 'rootstock',
      name: 'RootStock (RSK)',
      tradingPairs: '12',
      liquidityPools: '6',
      fee: '0.25%',
      contractAddress: '0xf9A620...',
      isDeployed: true,
      color: '#f9a620',
      techType: 'Bitcoin Sidechain'
    },
    {
      id: 'linea',
      name: 'Linea',
      tradingPairs: '10',
      liquidityPools: '5',
      fee: '0.25%',
      contractAddress: '0x3f88c5...',
      isDeployed: true,
      color: '#3f88c5',
      techType: 'zkEVM Technology'
    }
  ];

  return (
    <div className="exchange-info">
      <h2>Multi-Network Exchange Information</h2>
      <p className="description">
        The Pasifika Exchange operates across three networks: Arbitrum, RootStock and Linea.
      </p>

      <div className="networks-grid">
        {networks.map(network => (
          <div key={network.id} className={`network-card ${network.id}`} style={{ borderTop: `4px solid ${network.color}` }}>
            <h3 style={{ color: network.color }}>{network.name}</h3>
            <p className="network-tech-type" style={{ backgroundColor: network.color, color: '#fff', padding: '3px 8px', borderRadius: '4px', display: 'inline-block', fontSize: '0.85rem', marginBottom: '15px' }}>
              {network.techType}
            </p>
            <ul>
              <li><span>Trading Pairs:</span> {network.tradingPairs}</li>
              <li><span>Liquidity Pools:</span> {network.liquidityPools}</li>
              <li><span>Trading Fee:</span> {network.fee}</li>
              <li>
                <span>Contract:</span> 
                {network.isDeployed ? 
                  <a 
                    href={network.id === 'arbitrum' ? `https://sepolia.arbiscan.io/address/${network.contractAddress}` : '#'} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contract-address"
                    style={{ color: network.color, fontWeight: 'bold' }}
                  >
                    {network.contractAddress.substring(0, 6)}...{network.contractAddress.substring(network.contractAddress.length - 4)}
                  </a> : 
                  "Coming Soon"}
              </li>
            </ul>
          </div>
        ))}
      </div>
      
      <div className="component-action">
        <Link href="/exchange">
          <button className="primary-button command-button">
            <span className="button-icon">🌊</span>
            <span className="button-text">Launch Pasifika Exchange</span>
            <span className="button-arrow">→</span>
          </button>
        </Link>
      </div>
        
      <div className="fee-tier-info">
        <h4>3-Tier Fee Structure</h4>
        <ul>
          <li><strong>Guest:</strong> 1.00% fee</li>
          <li><strong>Member:</strong> 0.50% fee</li>
          <li><strong>Node Operator:</strong> 0.25% fee</li>
        </ul>
        <p>
          Exchange Contracts Successfully Deployed to All Networks!<br/>
          <strong>Features:</strong> Swap, Liquidity Provision, Trading Pair Creation
        </p>
      </div>
    </div>
  );
}
