"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useAccount, useChainId } from "wagmi";
import { formatEther } from "viem";
import "../page.css";
import "../shared-pages.css";
import "../components/NodeOperator.css";

export default function NodeDashboard() {
  const { isDarkMode } = useDarkMode();
  const { primaryWallet, setShowAuthFlow } = useDynamicContext();
  const { address } = useAccount();
  const chainId = useChainId();
  const [walletConnected, setWalletConnected] = useState(false);
  const [network, setNetwork] = useState('');
  const [nodeData, setNodeData] = useState({
    isOperator: false,
    stake: '0',
    rewards: '0',
    nodeStatus: 'Inactive',
    loading: false
  });

  // Check if wallet is connected
  useEffect(() => {
    if (primaryWallet) {
      setWalletConnected(true);
      
      // Simulate node data for demo purposes
      setTimeout(() => {
        setNodeData({
          isOperator: true,
          stake: '1.25',
          rewards: '0.05',
          nodeStatus: 'Active',
          loading: false
        });
      }, 1500);
    } else {
      setWalletConnected(false);
    }
  }, [primaryWallet]);

  // Detect current network based on chainId
  useEffect(() => {
    if (chainId) {
      // Simple network detection based on chainId using number comparison
      const chainIdNum = Number(chainId);
      if (chainIdNum === 42161 || chainIdNum === 421614) {
        setNetwork('arbitrum');
      } else if (chainIdNum === 59144) {
        setNetwork('linea');
      } else if (chainIdNum === 30 || chainIdNum === 31) {
        setNetwork('rootstock');
      } else {
        setNetwork('');
      }
    }
  }, [chainId]);

  // Helper function to get network display name
  const getNetworkDisplayName = (networkId: string): string => {
    const names: Record<string, string> = {
      'linea': 'Linea',
      'rootstock': 'RootStock',
      'arbitrum': 'Arbitrum'
    };
    return names[networkId] || 'Unknown Network';
  };
  
  // Format currency based on network
  const getCurrencySymbol = (networkId: string): string => {
    return networkId === 'rootstock' ? 'RBTC' : 'ETH';
  };

  return (
    <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Header */}
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
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="page-content">
        <div className="page-banner">
          <h1>Node Operator Dashboard</h1>
        </div>
        
        <div className="content-container">
          {!walletConnected ? (
            <div className="content-section">
              <div className="wallet-connection">
                <div className="wallet-status">
                  <span className="wallet-icon">💼</span>
                  <span>Wallet Not Connected</span>
                </div>
                <button className="wallet-button connect" onClick={() => setShowAuthFlow(true)}>
                  Connect Wallet
                </button>
                <p className="wallet-note">Connect your wallet to view your node operator dashboard</p>
              </div>
            </div>
          ) : !network ? (
            <div className="content-section">
              <div className="network-alert">
                <h3>Unsupported Network</h3>
                <p>Please switch to one of the following supported networks:</p>
                <div className="network-buttons-large">
                  <button className="network-button-large">Linea</button>
                  <button className="network-button-large">Arbitrum</button>
                  <button className="network-button-large">RootStock</button>
                </div>
              </div>
            </div>
          ) : nodeData.loading ? (
            <div className="content-section">
              <div className="loading-indicator">
                <div className="spinner"></div>
                <p>Loading node data...</p>
              </div>
            </div>
          ) : !nodeData.isOperator ? (
            <div className="content-section">
              <div className="not-operator-message">
                <h3>Not a Node Operator</h3>
                <p>You are not registered as a node operator on {getNetworkDisplayName(network)}.</p>
                <Link href="/services">
                  <button className="primary-button">Return to Services</button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="content-section">
              <div className="dashboard-header">
                <div className="dashboard-network">
                  <span className="network-label">Network:</span>
                  <span className="network-value">{getNetworkDisplayName(network)}</span>
                </div>
                <div className="node-status">
                  <span className="status-indicator active"></span>
                  <span className="status-text">Node Active</span>
                </div>
              </div>
              
              <div className="node-stats-grid">
                <div className="stat-card">
                  <div className="stat-title">Current Stake</div>
                  <div className="stat-value">{nodeData.stake} {getCurrencySymbol(network)}</div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-title">Fee Rate</div>
                  <div className="stat-value">0.25%</div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-title">Pending Rewards</div>
                  <div className="stat-value">{nodeData.rewards} {getCurrencySymbol(network)}</div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-title">Node Status</div>
                  <div className="stat-value">{nodeData.nodeStatus}</div>
                </div>
              </div>
              
              <div className="node-actions">
                <button className="action-button stake">Add Stake</button>
                <button className="action-button withdraw" disabled>Withdraw Rewards</button>
              </div>
              
              {network === 'rootstock' && (
                <div className="profit-sharing-info">
                  <h3>Annual Profit Sharing</h3>
                  <p>As a RootStock node operator, you are eligible for the annual profit sharing event (December 27 to December 24).</p>
                  <div className="profit-sharing-stats">
                    <div className="ps-stat">
                      <span className="ps-label">Profit Share:</span>
                      <span className="ps-value">50%</span>
                    </div>
                    <div className="ps-stat">
                      <span className="ps-label">Next Distribution:</span>
                      <span className="ps-value">December 24, 2025</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="footer-banner">
        <p>Copyright &copy; Pasifika 2025</p>
      </div>
    </div>
  );
}
