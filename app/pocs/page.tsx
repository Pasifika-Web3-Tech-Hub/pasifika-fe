"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Image from "next/image";
import Link from "next/link";
import "../page.css";
import "../shared-pages.css";
import "./services.css";
import PhysicalItemNFTInfo from '../components/PhysicalItemNFTInfo.js';
import NodeOperatorInfo from '../components/NodeOperatorInfo.js';
import TreasuryInfo from '../components/TreasuryInfo.js';
import ExchangeInfo from '../components/ExchangeInfo.js';
import CirclePaymentInfo from '../components/CirclePaymentInfo.js';
import StripePaymentInfo from '../components/StripePaymentInfo.js';
import '../components/NodeOperator.css';
import PasifikaWalletConnect from '../components/PasifikaWalletConnect';
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from 'next/navigation';

export default function Services() {
  const { isDarkMode } = useDarkMode();
  const { handleLogOut, primaryWallet, setShowAuthFlow } = useDynamicContext();
  const [walletConnected, setWalletConnected] = useState(false);
  const [activeService, setActiveService] = useState('marketplace');
  const [networkFilter, setNetworkFilter] = useState('all');
  const router = useRouter();

  type NetworkStats = {
    [key: string]: {
      name: string;
      color: string;
      contractsDeployed: number;
      moneyTransferAddress: string;
      nodeContract: string;
      transactionFee: string;
      techType: string;
    }
  };
  
  // Network statistics - real data from our multi-network deployment
  const networkStats: NetworkStats = {
    arbitrum: {
      name: 'Arbitrum',
      color: '#9945FF',
      contractsDeployed: 5,
      moneyTransferAddress: '0x80d3c57b95a2fca3900f3EAC71196Bf133aaa517',
      nodeContract: '0xc79C57a047AD9B45B70D85000e9412C61f8fE336',
      transactionFee: '0.25%',
      techType: 'Optimistic Rollups'
    },
    rootstock: {
      name: 'RootStock',
      color: '#F9A620',
      contractsDeployed: 5,
      moneyTransferAddress: '0x789...',
      nodeContract: '0xabc...',
      transactionFee: '0.25%',
      techType: 'Bitcoin Sidechain'
    },
    linea: {
      name: 'Linea',
      color: '#3F88C5',
      contractsDeployed: 5,
      moneyTransferAddress: '0x123...',
      nodeContract: '0x456...',
      transactionFee: '0.25%',
      techType: 'zkEVM Technology'
    }
  };

  useEffect(() => {
    if (primaryWallet) {
      setWalletConnected(true);
    } else {
      setWalletConnected(false);
    }
  }, [primaryWallet]);

  // Set flag when navigating back to home page
  const handleBackToHome = useCallback(() => {
    sessionStorage.setItem('fromServices', 'true');
  }, []);
  
  // Handle service selection
  const handleServiceChange = useCallback((service: string) => {
    setActiveService(service);
  }, []);
  
  // Handle network filter change
  const handleNetworkChange = useCallback((network: string) => {
    setNetworkFilter(network);
  }, []);
  
  // Navigate to Node Dashboard
  const navigateToNodeDashboard = useCallback(() => {
    router.push('/node-dashboard');
  }, [router]);
  
  return (
    <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Header Section */}
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
              <Link href="/learn-more" className="nav-link-button">
                Back to Resources
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="page-content">
        <div className="page-banner">
          <h1>Our Proofs of Concepts</h1>
          <div className="network-selector">
            <p>View proofs of concepts by network:</p>
            <div className="network-tabs">
              <button 
                className={`network-tab ${networkFilter === 'all' ? 'active' : ''}`}
                onClick={() => handleNetworkChange('all')}
              >
                All Networks
              </button>
              {Object.keys(networkStats).map((network) => (
                <button
                  key={network}
                  className={`network-tab ${networkFilter === network ? 'active' : ''}`}
                  onClick={() => handleNetworkChange(network)}
                  style={{ borderBottom: `3px solid ${networkStats[network].color}` }}
                >
                  {networkStats[network].name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="content-container">
          <div className="services-tabs">
            <button 
              className={`service-tab ${activeService === 'marketplace' ? 'active' : ''}`}
              onClick={() => handleServiceChange('marketplace')}
            >
              Marketplace
            </button>
            <button 
              className={`service-tab ${activeService === 'financial' ? 'active' : ''}`}
              onClick={() => handleServiceChange('financial')}
            >
              Financial Services
            </button>
            <button 
              className={`service-tab ${activeService === 'technical' ? 'active' : ''}`}
              onClick={() => handleServiceChange('technical')}
            >
              Technical Services
            </button>
            <button 
              className={`service-tab ${activeService === 'community' ? 'active' : ''}`}
              onClick={() => handleServiceChange('community')}
            >
              Community Services
            </button>
          </div>

          <div className="content-section">
            {activeService === 'marketplace' && (
              <div className="service-content">
                <h2>Marketplace Services</h2>
                <p>The Pasifika Web3 Marketplace offers a range of services designed specifically for Pacific Island communities, businesses, and creators.</p>
                
                <div className="service-highlight" style={{ borderLeft: `4px solid ${networkFilter !== 'all' ? networkStats[networkFilter].color : '#3f88c5'}` }}>
                  <h3>Digital Marketplace</h3>
                  <p>Our core service is a decentralized marketplace that enables Pacific Islanders to:</p>
                  <ul>
                    <li><strong>Sell traditional crafts and cultural items</strong> to global markets without middlemen</li>
                    <li><strong>Trade digital assets</strong> including NFTs that represent Pacific cultural heritage</li>
                    <li><strong>Offer services</strong> including traditional knowledge, consulting, and creative work</li>
                    <li><strong>Create and manage storefronts</strong> with integrated payment processing</li>
                  </ul>
                  
                  {networkFilter !== 'all' && (
                    <div className="network-specific-info">
                      <p><strong>{networkStats[networkFilter].name} Integration:</strong> Our marketplace is optimized for {networkStats[networkFilter].name}&apos;s {networkStats[networkFilter].techType}, providing low-fee transactions at only {networkStats[networkFilter].transactionFee} for node operators.</p>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {activeService === 'financial' && (
              <div className="service-content">
                <h2>Financial Services</h2>
                <p>We provide specialized financial tools to address the unique challenges facing Pacific communities.</p>
                
                <div className="service-highlight" style={{ borderLeft: `4px solid ${networkFilter !== 'all' ? networkStats[networkFilter].color : '#f9a620'}` }}>
                  <h3>Money Transfer Services</h3>
                  <p>Our flagship financial services include:</p>
                  <ul>
                    <li><strong>Cross-border payments</strong> with low fees, especially for remittances</li>
                    <li><strong>Microfinance opportunities</strong> for small business development</li>
                    <li><strong>Tokenized asset exchange</strong> that respects local regulations</li>
                    <li><strong>Decentralized savings and lending</strong> protocols tailored to Pacific economic patterns</li>
                  </ul>
                  
                  {networkFilter === 'arbitrum' && (
                    <div className="network-specific-info deployment-highlight">
                      <p>✅ <strong>Money Transfer Contract Successfully Deployed to Arbitrum!</strong></p>
                      <p>Contract Address: <code>0x80d3c57b95a2fca3900f3EAC71196Bf133aaa517</code></p>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {activeService === 'community' && (
              <div className="service-content">
                <h2>Community Services</h2>
                <p>Beyond individual transactions, we support broader community needs.</p>
                
                <div className="service-highlight" style={{ borderLeft: `4px solid ${networkFilter !== 'all' ? networkStats[networkFilter].color : '#9945ff'}` }}>
                  <h3>Community Collaboration Tools</h3>
                  <ul>
                    <li><strong>Digital identity solutions</strong> that work with limited infrastructure</li>
                    <li><strong>Community resource pooling</strong> for collaborative projects</li>
                    <li><strong>Climate resilience initiatives</strong> supported through blockchain tracking</li>
                    <li><strong>Cultural heritage preservation</strong> through blockchain verification</li>
                  </ul>
                </div>
                
                <div className="service-highlight" style={{ borderLeft: `4px solid ${networkFilter !== 'all' ? networkStats[networkFilter].color : '#9945ff'}` }}>
                  <h3>Educational Resources</h3>
                  <p>To build capacity and understanding:</p>
                  <ul>
                    <li><strong>Workshops and training</strong> on blockchain fundamentals</li>
                    <li><strong>Developer resources</strong> tailored to Pacific contexts</li>
                    <li><strong>Business integration guides</strong> for traditional enterprises</li>
                    <li><strong>Youth education programs</strong> to build technical capacity</li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeService === 'technical' && (
              <div className="service-content">
                <h2>Technical Services</h2>
                <p>For businesses and developers in the region, we provide technical solutions on multiple networks.</p>
                
                <div className="service-highlight" style={{ borderLeft: `4px solid ${networkFilter !== 'all' ? networkStats[networkFilter].color : '#3f88c5'}` }}>
                  <h3>Blockchain Development</h3>
                  <ul>
                    <li><strong>Smart contract development</strong> and auditing</li>
                    <li><strong>Blockchain integration</strong> for existing businesses</li>
                    <li><strong>Technical training</strong> and capacity building</li>
                    <li><strong>Decentralized application (dApp) hosting</strong> and management</li>
                  </ul>
                  
                  {networkFilter !== 'all' && (
                    <div className="network-specific-info">
                      <p><strong>{networkStats[networkFilter].name} Technical Details:</strong></p>
                      <ul>
                        <li>Technology Type: {networkStats[networkFilter].techType}</li>
                        <li>Node Contract: <code>{networkStats[networkFilter].nodeContract}</code></li>
                        <li>Contracts Deployed: {networkStats[networkFilter].contractsDeployed}</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            <div className="wallet-connection-wrapper">
              <PasifikaWalletConnect />
              {primaryWallet && (
                <div className="additional-wallet-actions" style={{ marginTop: '15px' }}>
                  <button 
                    className="service-action-button" 
                    style={{ 
                      backgroundColor: '#9945FF', 
                      color: 'white',
                      padding: '10px 16px',
                      borderRadius: '4px',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                      width: '100%',
                      marginTop: '10px',
                      transition: 'all 0.2s ease',
                    }}
                    onClick={navigateToNodeDashboard}
                  >
                    Node Dashboard
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* Smart Contract Architecture Components */}
          <div className="content-section smart-contract-section">
            <div className="service-container">
              <div className="banner-container">
                <h1 className="page-title">Services & Smart Contracts</h1>
                <p className="page-subtitle">Pasifika Web3: Connecting the Pacific through blockchain innovation.</p>
                <div className="poc-notice">
                  <div className="poc-badge">PROOF OF CONCEPT</div>
                  <p>This is our Proof of Concept (POC) version with only some smart contracts with limited functionality, but all will be available in our production version.</p>
                </div>
              </div>
            </div>
            
            <div className="section-header">
              <h2>Smart Contract Architecture</h2>
              <div className="section-divider"></div>
            </div>
            <div className="section-content smart-contracts-section">
              <div className="smart-contract-card">
                <div className="card-header">
                  <h3>Marketplace Contracts</h3>
                  <div className="component-icon"><span className="emoji-fix">🏪</span></div>
                </div>
                <p>Decentralized exchange infrastructure for both digital and physical goods with escrow, reputation, and dispute resolution mechanisms.</p>
                <div className="demo-component">
                  <PhysicalItemNFTInfo />
                </div>
              </div>
              
              <div className="smart-contract-card">
                <div className="card-header">
                  <h3>Treasury Management</h3>
                  <div className="component-icon"><span className="emoji-fix">💰</span></div>
                </div>
                <p>Automated treasury for managing community funds, including disaster relief reserves and sustainable development initiatives.</p>
                <div className="demo-component">
                  <TreasuryInfo />
                </div>
              </div>
              
              <div className="smart-contract-card">
                <div className="card-header">
                  <h3>Cross-Chain Node Operations</h3>
                  <div className="component-icon"><span className="emoji-fix">📡</span></div>
                </div>
                <p>Operate interoperable nodes across multiple EVM Compatible networks (Arbitrum, RootStock, Linea) with lower transaction fees (0.25%) and annual profit sharing from the Pasifika Treasury.</p>
                <div className="demo-component">
                  <NodeOperatorInfo />
                </div>
              </div>
              
              <div className="smart-contract-card">
                <div className="card-header">
                  <h3>Pasifika Exchange</h3>
                  <div className="component-icon"><span className="emoji-fix">🌊</span></div>
                </div>
                <p>The first cross-chain decentralized exchange designed specifically for Pacific Island communities, enabling secure trading of digital assets with low fees across multiple blockchain networks and cross-island interoperability.</p>
                <div className="demo-component">
                  <ExchangeInfo />
                </div>
              </div>
              
              <div className="smart-contract-card">
                <div className="card-header">
                  <h3>Circle Payment Processing</h3>
                  <div className="component-icon"><span className="emoji-fix">💳</span></div>
                </div>
                <p>Convert local Pacific Island currencies to USDC using Circle&apos;s secure payment infrastructure with real-time exchange rates and transaction verification.</p>
                <div className="demo-component">
                  <CirclePaymentInfo />
                </div>
              </div>
              
              <div className="smart-contract-card active">
                <div className="card-header">
                  <h3>Stripe Payment Processing</h3>
                  <div className="component-icon"><span className="emoji-fix">💱</span></div>
                </div>
                <p>Process payments across Pacific Island currencies using Stripe&apos;s global payment network with seamless conversion to USDC and integration with our blockchain infrastructure.</p>
                <div className="demo-component">
                  <StripePaymentInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="footer-banner">
        <p>Copyright &copy; Pasifika 2025</p>
      </div>
    </div>
  );
}
