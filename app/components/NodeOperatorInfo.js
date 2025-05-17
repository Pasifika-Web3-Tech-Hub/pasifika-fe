// app/components/NodeOperatorInfo.js
import React from 'react';
import Link from 'next/link';
import '../page.css';

export default function NodeOperatorInfo() {
  // Static display information about node operation across networks
  const networks = [
    {
      id: 'arbitrum',
      name: 'Arbitrum',
      totalNodes: '8',
      minStake: '0.01 ETH',
      fee: '0.25%',
      contractAddress: '0xc79C57a047AD9B45B70D85000e9412C61f8fE336',
      isDeployed: true,
      color: '#9945ff',
      techType: 'Optimistic Rollups'
    },
    {
      id: 'rootstock',
      name: 'RootStock (RSK)',
      totalNodes: '7',
      minStake: '0.001 RBTC',
      fee: '0.25%',
      contractAddress: '0x456...',
      isDeployed: true,
      color: '#f9a620',
      techType: 'Bitcoin Sidechain'
    },
    {
      id: 'linea',
      name: 'Linea',
      totalNodes: '5',
      minStake: '0.01 ETH',
      fee: '0.25%',
      contractAddress: '0x123...',
      isDeployed: true,
      color: '#3f88c5',
      techType: 'zkEVM Technology'
    }
  ];

  return (
    <div className="node-operator-info">
      <h2>Multi-Network Node Operator Information</h2>
      <p className="description">
        The Pasifika Web3 Tech Hub operates across three networks: Arbitrum, RootStock and Linea.
      </p>

      <div className="networks-grid">
        {networks.map(network => (
          <div key={network.id} className={`network-card ${network.id}`} style={{ borderTop: `4px solid ${network.color}` }}>
            <h3 style={{ color: network.color }}>{network.name}</h3>
            <p className="network-tech-type" style={{ backgroundColor: network.color, color: '#fff', padding: '3px 8px', borderRadius: '4px', display: 'inline-block', fontSize: '0.85rem', marginBottom: '15px' }}>
              {network.techType}
            </p>
            <ul>
              <li><span>Active Nodes:</span> {network.totalNodes}</li>
              <li><span>Minimum Stake:</span> {network.minStake}</li>
              <li><span>Node Operator Fee:</span> {network.fee}</li>
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
        <Link href="/node-dashboard">
          <button className="primary-button command-button">
            <span className="button-icon">🖥️</span>
            <span className="button-text">Node Operator Dashboard</span>
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
          Money Transfer Contract Successfully Deployed to Arbitrum!<br/>
          <strong>Address:</strong> 0x80d3c57b95a2fca3900f3EAC71196Bf133aaa517
        </p>
      </div>
    </div>
  );
}
