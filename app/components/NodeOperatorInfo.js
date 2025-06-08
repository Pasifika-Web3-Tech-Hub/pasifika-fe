// app/components/NodeOperatorInfo.js
import React from 'react';
import Link from 'next/link';
import '../page.css';

export default function NodeOperatorInfo() {
  return (
    <div className="node-operator-info">
      <h2>Node Operator Information</h2>
      <p className="description">
        The Pasifika Web3 Tech Hub operates cross-chain nodes with EVM compatibility.
      </p>
      
      <div className="node-info-summary" style={{ backgroundColor: 'rgba(0,0,0,0.05)', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px' }}>
          <div className="info-item" style={{ flex: '1', minWidth: '160px' }}>
            <h4>Total Active Nodes</h4>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>20</div>
          </div>
          <div className="info-item" style={{ flex: '1', minWidth: '160px' }}>
            <h4>Minimum Stake</h4>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>0.01 ETH</div>
          </div>
          <div className="info-item" style={{ flex: '1', minWidth: '160px' }}>
            <h4>Node Operator Fee</h4>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>0.25%</div>
          </div>
        </div>
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
