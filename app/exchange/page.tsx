'use client';

import React, { useState } from 'react';
import './exchange.css';
import SwapForm from './components/SwapForm';
import LiquidityForm from './components/LiquidityForm';
import CreatePairForm from './components/CreatePairForm';
import PairsOverview from './components/PairsOverview';
import { useAccount } from 'wagmi';
import Link from 'next/link';
import Image from 'next/image';
import PasifikaWalletConnect from '../components/PasifikaWalletConnect';
import { useDarkMode } from '@/lib/useDarkMode';

export default function ExchangePage() {
  const [activeTab, setActiveTab] = useState('swap');
  const { address, isConnected } = useAccount();
  const { isDarkMode } = useDarkMode();

  const renderTabContent = () => {
    switch (activeTab) {
      case 'swap':
        return <SwapForm />;
      case 'liquidity':
        return <LiquidityForm />;
      case 'create-pair':
        return <CreatePairForm />;
      case 'pairs':
        return <PairsOverview />;
      default:
        return <SwapForm />;
    }
  };

  return (
    <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Header Section - Pasifika Styled */}
      <div className="header">
        <div className="header-container">
          <div className="logo">
            <Image
              src="/pasifika.png"
              alt="Pasifika"
              width={50}
              height={50}
            />
            <div className="logo-text">
              <span className="logo-accent">Pasifika</span>
            </div>
          </div>
          
          <div className="nav-menu">
            <div className="nav-item">
              <Link href="/services" className="nav-link-button">
                Services
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="page-content exchange-container">
        <div className="page-banner">
          <h1 className="page-title">Pasifika Exchange</h1>
          <p className="page-subtitle">Secure cross-chain trading for Pacific Island communities</p>
        </div>

        <div className="proof-of-concept-banner" style={{
          backgroundColor: isDarkMode ? 'rgba(255, 87, 34, 0.15)' : 'rgba(255, 87, 34, 0.1)',
          border: '1px solid #FF5722',
          borderRadius: '8px',
          padding: '15px',
          margin: '0 0 25px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{
            backgroundColor: '#FF5722',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>!</span>
          </div>
          <div>
            <h3 style={{ margin: '0 0 5px 0', color: isDarkMode ? '#FF7043' : '#D84315' }}>Proof of Concept</h3>
            <p style={{ margin: 0, fontSize: '14px' }}>
              The Pasifika Exchange is currently in proof-of-concept stage with enhanced Chainlink price feed integration and decimal handling. 
              Some features may be limited and transactions are operating on the Arbitrum Sepolia testnet only.
            </p>
          </div>
        </div>

        {isConnected ? (
          <div className="connected-content">
            <div className="feature-banner">
              <div className="network-horizontal-list">
                <div className="network-pill" style={{ backgroundColor: 'rgba(153, 69, 255, 0.1)', borderColor: '#9945ff' }}>
                  <span className="network-dot" style={{ backgroundColor: '#9945ff' }}></span>
                  <span style={{ color: '#9945ff', fontWeight: '600' }}>Arbitrum</span>
                </div>
                <div className="network-pill" style={{ backgroundColor: 'rgba(249, 166, 32, 0.1)', borderColor: '#f9a620' }}>
                  <span className="network-dot" style={{ backgroundColor: '#f9a620' }}></span>
                  <span style={{ color: '#f9a620', fontWeight: '600' }}>RootStock</span>
                </div>
                <div className="network-pill" style={{ backgroundColor: 'rgba(63, 136, 197, 0.1)', borderColor: '#3f88c5' }}>
                  <span className="network-dot" style={{ backgroundColor: '#3f88c5' }}></span>
                  <span style={{ color: '#3f88c5', fontWeight: '600' }}>Linea</span>
                </div>
              </div>
            </div>
            
            <div className="exchange-panel">
              <div className="exchange-tabs">
                <button
                  className={`tab-button ${activeTab === 'swap' ? 'active' : ''}`}
                  onClick={() => setActiveTab('swap')}
                >
                  <span className="tab-icon">↔️</span>
                  Swap
                </button>
                <button
                  className={`tab-button ${activeTab === 'liquidity' ? 'active' : ''}`}
                  onClick={() => setActiveTab('liquidity')}
                >
                  <span className="tab-icon">💧</span>
                  Liquidity
                </button>
                <button
                  className={`tab-button ${activeTab === 'create-pair' ? 'active' : ''}`}
                  onClick={() => setActiveTab('create-pair')}
                >
                  <span className="tab-icon">✨</span>
                  Create Pair
                </button>
                <button
                  className={`tab-button ${activeTab === 'pairs' ? 'active' : ''}`}
                  onClick={() => setActiveTab('pairs')}
                >
                  <span className="tab-icon">📊</span>
                  Trading Pairs
                </button>
              </div>

              <div className="tab-content">
                {renderTabContent()}
              </div>
            </div>
          </div>
      ) : (
          <div className="welcome-panel">
            <div className="welcome-content">
              <div className="welcome-header">
                <h2>Welcome to Pasifika Exchange</h2>
                <p className="welcome-description">The first cross-chain DEX designed specifically for Pacific Island communities</p>
              </div>
              
              <div className="network-feature">
                <h3>Supported Networks</h3>
                <div className="network-horizontal-list">
                  <div className="network-pill" style={{ backgroundColor: 'rgba(153, 69, 255, 0.1)', borderColor: '#9945ff' }}>
                    <span className="network-dot" style={{ backgroundColor: '#9945ff' }}></span>
                    <span style={{ color: '#9945ff', fontWeight: '600' }}>Arbitrum</span>
                  </div>
                  
                  <div className="network-pill" style={{ backgroundColor: 'rgba(249, 166, 32, 0.1)', borderColor: '#f9a620' }}>
                    <span className="network-dot" style={{ backgroundColor: '#f9a620' }}></span>
                    <span style={{ color: '#f9a620', fontWeight: '600' }}>RootStock</span>
                  </div>
                  
                  <div className="network-pill" style={{ backgroundColor: 'rgba(63, 136, 197, 0.1)', borderColor: '#3f88c5' }}>
                    <span className="network-dot" style={{ backgroundColor: '#3f88c5' }}></span>
                    <span style={{ color: '#3f88c5', fontWeight: '600' }}>Linea</span>
                  </div>
                </div>
              </div>
              
              <div className="features-list">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Low fees across all supported networks</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Cross-chain interoperability</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Local token support</span>
                </div>
              </div>
              
              <div className="connect-wallet-section">
                <PasifikaWalletConnect />
              </div>
            </div>
          </div>
      )}
      </div>
      
      {/* Footer Banner */}
      <div className="footer-banner">
        <p>Copyright &copy; Pasifika 2025</p>
      </div>
    </div>
  );
}
