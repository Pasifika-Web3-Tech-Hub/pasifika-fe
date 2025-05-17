'use client';

import React, { useState } from 'react';
import './exchange.css';
import SwapForm from './components/SwapForm';
import LiquidityForm from './components/LiquidityForm';
import CreatePairForm from './components/CreatePairForm';
import PairsOverview from './components/PairsOverview';
import { useAccount } from 'wagmi';
import Link from 'next/link';

export default function ExchangePage() {
  const [activeTab, setActiveTab] = useState('swap');
  const { address, isConnected } = useAccount();

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
    <div className="exchange-container">
      <h1 className="page-title">Pasifika Exchange</h1>

      {isConnected ? (
        <>
          <div className="exchange-tabs">
            <button
              className={`tab-button ${activeTab === 'swap' ? 'active' : ''}`}
              onClick={() => setActiveTab('swap')}
            >
              Swap
            </button>
            <button
              className={`tab-button ${activeTab === 'liquidity' ? 'active' : ''}`}
              onClick={() => setActiveTab('liquidity')}
            >
              Liquidity
            </button>
            <button
              className={`tab-button ${activeTab === 'create-pair' ? 'active' : ''}`}
              onClick={() => setActiveTab('create-pair')}
            >
              Create Pair
            </button>
            <button
              className={`tab-button ${activeTab === 'pairs' ? 'active' : ''}`}
              onClick={() => setActiveTab('pairs')}
            >
              Trading Pairs
            </button>
          </div>

          {renderTabContent()}
        </>
      ) : (
        <div className="card">
          <div className="card-title">Connect your wallet</div>
          <p>Please connect your wallet to access the Pasifika Exchange.</p>
          <Link href="/">
            <button className="action-button">Return to Home</button>
          </Link>
        </div>
      )}
    </div>
  );
}
