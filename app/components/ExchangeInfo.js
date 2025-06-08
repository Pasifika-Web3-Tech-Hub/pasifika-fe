'use client';

import React from 'react';
import Link from 'next/link';
import '../page.css';

export default function ExchangeInfo() {
  return (
    <div className="exchange-info">
      <h2>Pasifika Exchange Information</h2>
      <p className="description">
        The Pasifika Exchange provides cross-chain trading functionality with EVM compatibility.
      </p>
      
      <div className="exchange-info-summary" style={{ backgroundColor: 'rgba(0,0,0,0.05)', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px' }}>
          <div className="info-item" style={{ flex: '1', minWidth: '160px' }}>
            <h4>Trading Pairs</h4>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>36</div>
          </div>
          <div className="info-item" style={{ flex: '1', minWidth: '160px' }}>
            <h4>Liquidity Pools</h4>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>19</div>
          </div>
          <div className="info-item" style={{ flex: '1', minWidth: '160px' }}>
            <h4>Trading Fee</h4>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>0.25%</div>
          </div>
        </div>
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
