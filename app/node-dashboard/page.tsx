"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useAccount, useChainId, useBalance, useReadContract, useWriteContract } from "wagmi";
import { formatEther, parseEther } from "viem";
import PasifikaWalletConnect from "../components/PasifikaWalletConnect";
import "../page.css";
import "../shared-pages.css";
import "../components/NodeOperator.css";
import "./dashboard.css";

export default function NodeDashboard() {
  const { isDarkMode } = useDarkMode();
  const { primaryWallet } = useDynamicContext();
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const [walletConnected, setWalletConnected] = useState(false);
  const [network, setNetwork] = useState('');
  const [showStakeModal, setShowStakeModal] = useState(false);
  const [stakeAmount, setStakeAmount] = useState('');
  const [showNetworkSelector, setShowNetworkSelector] = useState(false);
  const [nodeData, setNodeData] = useState({
    isOperator: false,
    stake: '0',
    rewards: '0',
    nodeStatus: 'Inactive',
    loading: true
  });
  
  // Get wallet balance using wagmi hook
  const { data: balanceData } = useBalance({
    address: address
  });

  // Check if wallet is connected
  useEffect(() => {
    setWalletConnected(isConnected);
    
    if (isConnected) {
      // Check node operator status and fetch data
      // For now, we'll simulate this data
      setNodeData(prev => ({ ...prev, loading: true }));
      
      // Simulate loading real blockchain data
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
      // Reset data when wallet disconnects
      setNodeData({
        isOperator: false,
        stake: '0',
        rewards: '0',
        nodeStatus: 'Inactive',
        loading: false
      });
    }
  }, [isConnected]);

  // Detect current network based on chainId
  useEffect(() => {
    if (chainId) {
      // Simple network detection based on chainId using number comparison
      const chainIdNum = Number(chainId);
      if (chainIdNum === 42161 || chainIdNum === 421614 || chainIdNum === 421613) {
        // Arbitrum One (42161) or Arbitrum Nova (421614) or Arbitrum Goerli (421613)
        setNetwork('arbitrum');
      } else if (chainIdNum === 59144) {
        // Linea Mainnet
        setNetwork('linea');
      } else if (chainIdNum === 30 || chainIdNum === 31) {
        // RSK Mainnet (30) or RSK Testnet (31)
        setNetwork('rootstock');
      } else {
        // Default to arbitrum for development purposes
        setNetwork('arbitrum');
      }
    } else if (isConnected) {
      // If connected but no chainId, default to Arbitrum
      setNetwork('arbitrum');
    }
  }, [chainId, isConnected]);

  // Helper function to get network display name
  const getNetworkDisplayName = (networkId: string): string => {
    const names: Record<string, string> = {
      'linea': 'Linea',
      'rootstock': 'RootStock',
      'arbitrum': 'Arbitrum'
    };
    return names[networkId] || 'Unknown Network';
  };
  
  // Get network color
  const getNetworkColor = (networkId: string): string => {
    const colors: Record<string, string> = {
      'linea': '#3F88C5',
      'rootstock': '#F9A620',
      'arbitrum': '#9945FF'
    };
    return colors[networkId] || '#FF5722';
  };
  
  // Format currency based on network
  const getCurrencySymbol = (networkId: string): string => {
    return networkId === 'rootstock' ? 'RBTC' : 'ETH';
  };
  
  // Handle manual network switching
  const handleNetworkSwitch = (networkId: string) => {
    setNetwork(networkId);
    setShowNetworkSelector(false);
    
    // In a real implementation, you would also switch the network in the wallet
    // and fetch appropriate data for that network
    
    // Simulate loading new blockchain data
    setNodeData(prev => ({ ...prev, loading: true }));
    
    setTimeout(() => {
      // Sample data, would be fetched from blockchain in real implementation
      const networkData = {
        arbitrum: {
          isOperator: true,
          stake: '1.25',
          rewards: '0.05',
          nodeStatus: 'Active'
        },
        rootstock: {
          isOperator: true,
          stake: '0.0075',
          rewards: '0.00025',
          nodeStatus: 'Active'
        },
        linea: {
          isOperator: true,
          stake: '2.75',
          rewards: '0.12',
          nodeStatus: 'Active'
        }
      };
      
      setNodeData({
        ...networkData[networkId as keyof typeof networkData],
        loading: false
      });
    }, 1500);
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
              <Link href="/our-services" className="nav-link-button">
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
          {/* Network selector */}
          <div className="network-selector-container">
            <button 
              className="network-display-button"
              onClick={() => setShowNetworkSelector(!showNetworkSelector)}
              style={{ borderColor: getNetworkColor(network) }}
            >
              <div className="network-indicator" style={{ backgroundColor: getNetworkColor(network) }}></div>
              {getNetworkDisplayName(network)}
              <span className="dropdown-arrow">▼</span>
            </button>
            
            {showNetworkSelector && (
              <div className="network-dropdown">
                <div 
                  className={`network-option ${network === 'arbitrum' ? 'active' : ''}`}
                  onClick={() => handleNetworkSwitch('arbitrum')}
                >
                  <div className="network-indicator" style={{ backgroundColor: '#9945FF' }}></div>
                  Arbitrum
                </div>
                <div 
                  className={`network-option ${network === 'rootstock' ? 'active' : ''}`}
                  onClick={() => handleNetworkSwitch('rootstock')}
                >
                  <div className="network-indicator" style={{ backgroundColor: '#F9A620' }}></div>
                  RootStock
                </div>
                <div 
                  className={`network-option ${network === 'linea' ? 'active' : ''}`}
                  onClick={() => handleNetworkSwitch('linea')}
                >
                  <div className="network-indicator" style={{ backgroundColor: '#3F88C5' }}></div>
                  Linea
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="content-container">
          {!walletConnected ? (
            <div className="content-section">
              <div className="wallet-connection">
                <h3>Node Operator Dashboard</h3>
                <p>Connect your wallet to access your Node Operator Dashboard</p>
                <div className="wallet-connect-wrapper" style={{ maxWidth: '400px', margin: '20px auto' }}>
                  <PasifikaWalletConnect />
                </div>
              </div>
            </div>
          ) : (
            <div className="content-section">
              <div className="dashboard-header">
                <div className="dashboard-network-info" style={{ borderColor: getNetworkColor(network) }}>
                <div className="network-header" style={{ backgroundColor: getNetworkColor(network) }}>
                  <h2>Network: {getNetworkDisplayName(network)}</h2>
                </div>
                <div className="network-content">
                  <p>You are operating a node on the {getNetworkDisplayName(network)} network.</p>
                  
                  {/* Network-specific information */}
                  {network === 'arbitrum' && (
                    <div className="network-details">
                      <p>Arbitrum uses optimistic rollups to provide high throughput and low fees while maintaining security.</p>
                      <div className="network-stats">
                        <div className="stat-item">
                          <span className="stat-label">Transaction Speed</span>
                          <span className="stat-value">~0.5-2 seconds</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">Average Fee</span>
                          <span className="stat-value">~0.0001 ETH</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {network === 'rootstock' && (
                    <div className="network-details">
                      <p>RootStock is a Bitcoin sidechain with EVM compatibility, allowing for smart contracts secured by Bitcoin.</p>
                      <div className="network-stats">
                        <div className="stat-item">
                          <span className="stat-label">Transaction Speed</span>
                          <span className="stat-value">~30 seconds</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">Average Fee</span>
                          <span className="stat-value">~0.00001 RBTC</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {network === 'linea' && (
                    <div className="network-details">
                      <p>Linea&apos;s zkEVM technology drastically reduces transaction costs while maintaining robust EVM compatibility.</p>
                      <div className="network-stats">
                        <div className="stat-item">
                          <span className="stat-label">Transaction Speed</span>
                          <span className="stat-value">~1-3 seconds</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">Average Fee</span>
                          <span className="stat-value">~0.00015 ETH</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
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
                <button 
                  onClick={() => setShowStakeModal(true)}
                  style={{
                    padding: '12px 24px',
                    backgroundColor: network === 'arbitrum' ? '#9945FF' : network === 'linea' ? '#3F88C5' : '#F9A620',
                    color: '#FFFFFF',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    marginRight: '15px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Add Stake
                </button>
                <button 
                  disabled={parseFloat(nodeData.rewards) <= 0}
                  onClick={() => {
                    alert('Withdrawing rewards: ' + nodeData.rewards + ' ' + getCurrencySymbol(network));
                    // In a real implementation, we would call the smart contract to withdraw rewards
                    setNodeData(prev => ({ ...prev, rewards: '0' }));
                  }}
                  style={{
                    padding: '12px 24px',
                    backgroundColor: parseFloat(nodeData.rewards) <= 0 ? '#aaa' : network === 'arbitrum' ? '#9945FF' : network === 'linea' ? '#3F88C5' : '#F9A620',
                    color: '#FFFFFF',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: parseFloat(nodeData.rewards) <= 0 ? 'not-allowed' : 'pointer',
                    fontWeight: 'bold',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.2s ease',
                    opacity: parseFloat(nodeData.rewards) <= 0 ? 0.6 : 1,
                  }}
                >
                  Withdraw Rewards
                </button>
              </div>
              
              {/* Staking Modal */}
              {showStakeModal && (
                <div className="modal-overlay" style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 100
                }}>
                  <div className="modal-content" style={{
                    backgroundColor: isDarkMode ? '#333' : '#fff',
                    padding: '20px',
                    borderRadius: '8px',
                    maxWidth: '400px',
                    width: '100%',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                  }}>
                    <h3 style={{ marginBottom: '15px', color: isDarkMode ? '#fff' : '#333' }}>Add Stake</h3>
                    <p style={{ marginBottom: '20px', color: isDarkMode ? '#ccc' : '#666' }}>Current balance: {balanceData ? parseFloat(formatEther(balanceData.value)).toFixed(4) : '0'} {balanceData?.symbol}</p>
                    
                    <div style={{ marginBottom: '20px' }}>
                      <label htmlFor="stakeAmount" style={{ display: 'block', marginBottom: '5px', color: isDarkMode ? '#ccc' : '#555' }}>Stake Amount:</label>
                      <input
                        type="number"
                        id="stakeAmount"
                        value={stakeAmount}
                        onChange={(e) => setStakeAmount(e.target.value)}
                        placeholder="Enter amount to stake"
                        style={{
                          width: '100%',
                          padding: '10px',
                          borderRadius: '4px',
                          border: `1px solid ${isDarkMode ? '#555' : '#ddd'}`,
                          backgroundColor: isDarkMode ? '#444' : '#fff',
                          color: isDarkMode ? '#fff' : '#333'
                        }}
                      />
                    </div>
                    
                    <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
                      <button 
                        onClick={() => setShowStakeModal(false)}
                        style={{
                          padding: '12px 24px',
                          border: 'none',
                          borderRadius: '8px',
                          backgroundColor: isDarkMode ? '#555' : '#e0e0e0',
                          color: isDarkMode ? '#fff' : '#333',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={() => {
                          if (stakeAmount && parseFloat(stakeAmount) > 0) {
                            // In a real implementation, we would call the smart contract to add stake
                            alert(`Adding stake: ${stakeAmount} ${getCurrencySymbol(network)}`);
                            setNodeData(prev => ({
                              ...prev,
                              stake: (parseFloat(prev.stake) + parseFloat(stakeAmount)).toString()
                            }));
                            setStakeAmount('');
                            setShowStakeModal(false);
                          }
                        }}
                        style={{
                          padding: '12px 24px',
                          border: 'none',
                          borderRadius: '8px',
                          backgroundColor: (!stakeAmount || parseFloat(stakeAmount) <= 0) ? '#aaa' : (network === 'arbitrum' ? '#9945FF' : network === 'linea' ? '#3F88C5' : '#F9A620'),
                          color: '#fff',
                          cursor: (!stakeAmount || parseFloat(stakeAmount) <= 0) ? 'not-allowed' : 'pointer',
                          fontWeight: 'bold',
                          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                          transition: 'all 0.2s ease',
                          opacity: (!stakeAmount || parseFloat(stakeAmount) <= 0) ? 0.6 : 1
                        }}
                        disabled={!stakeAmount || parseFloat(stakeAmount) <= 0}
                      >
                        Stake
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Annual Profit Sharing - shown for all networks */}
              <div className="profit-sharing-info" style={{ borderColor: getNetworkColor(network) }}>
                <h3>Annual Profit Sharing</h3>
                <p>As a {getNetworkDisplayName(network)} node operator, you are eligible for the annual profit sharing event (December 27 to December 24).</p>
                <div className="profit-sharing-stats">
                  <div className="ps-stat">
                    <span className="ps-label">Profit Share:</span>
                    <span className="ps-value">50%</span>
                  </div>
                  <div className="ps-stat">
                    <span className="ps-label">Next Distribution:</span>
                    <span className="ps-value">December 24, 2025</span>
                  </div>
                  
                  {/* Network specific profit sharing info */}
                  {network === 'arbitrum' && (
                    <div className="ps-stat">
                      <span className="ps-label">2024 Est. Distribution:</span>
                      <span className="ps-value">0.25 ETH</span>
                    </div>
                  )}
                  
                  {network === 'rootstock' && (
                    <div className="ps-stat">
                      <span className="ps-label">2024 Est. Distribution:</span>
                      <span className="ps-value">0.005 RBTC</span>
                    </div>
                  )}
                  
                  {network === 'linea' && (
                    <div className="ps-stat">
                      <span className="ps-label">2024 Est. Distribution:</span>
                      <span className="ps-value">0.35 ETH</span>
                    </div>
                  )}
                </div>
              </div>
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
