"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Image from "next/image";
import "../page.css";
import "../shared-pages.css";
import TokenContractInfo from '../components/TokenContractInfo.js';
import DynamicNFTInfo from '../components/DynamicNFTInfo.js';
import PhysicalItemNFTInfo from '../components/PhysicalItemNFTInfo.js';
import GovernanceInfo from '../components/GovernanceInfo.js';
import PSFStakingInfo from '../components/PSFStakingInfo.js';
import TreasuryInfo from '../components/TreasuryInfo.js';
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useEffect, useState } from "react";

export default function Services() {
  const { isDarkMode } = useDarkMode();
  const { handleLogOut, primaryWallet, setShowAuthFlow } = useDynamicContext();
  const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    if (primaryWallet) {
      setWalletConnected(true);
    } else {
      setWalletConnected(false);
    }
  }, [primaryWallet]);

  // Set flag when navigating back to home page
  const handleBackToHome = () => {
    sessionStorage.setItem('fromServices', 'true');
  };
  
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
              <a href="/" className="nav-link-button" onClick={handleBackToHome}>
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="page-content">
        <div className="page-banner">
          <h1>Our Services</h1>
        </div>
        
        <div className="content-container">
          <div className="content-section">
            <h2>Marketplace Services</h2>
            <p>The Pasifika Web3 Marketplace offers a range of services designed specifically for Pacific Island communities, businesses, and creators.</p>
            
            <h3>Digital Marketplace</h3>
            <p>Our core service is a decentralized marketplace that enables Pacific Islanders to:</p>
            <ul>
              <li><strong>Sell traditional crafts and cultural items</strong> to global markets without middlemen</li>
              <li><strong>Trade digital assets</strong> including NFTs that represent Pacific cultural heritage</li>
              <li><strong>Offer services</strong> including traditional knowledge, consulting, and creative work</li>
              <li><strong>Create and manage storefronts</strong> with integrated payment processing</li>
            </ul>
            
            <h3>Financial Services</h3>
            <p>We provide specialized financial tools to address the unique challenges facing Pacific communities:</p>
            <ul>
              <li><strong>Cross-border payments</strong> with low fees, especially for remittances</li>
              <li><strong>Microfinance opportunities</strong> for small business development</li>
              <li><strong>Tokenized asset exchange</strong> that respects local regulations</li>
              <li><strong>Decentralized savings and lending</strong> protocols tailored to Pacific economic patterns</li>
            </ul>
            
            <h3>Community Services</h3>
            <p>Beyond individual transactions, we support broader community needs:</p>
            <ul>
              <li><strong>Digital identity solutions</strong> that work with limited infrastructure</li>
              <li><strong>Community resource pooling</strong> for collaborative projects</li>
              <li><strong>Climate resilience initiatives</strong> supported through blockchain tracking</li>
              <li><strong>Educational resources</strong> on Web3 technologies and digital literacy</li>
            </ul>
            
            <h3>Technical Services</h3>
            <p>For developers and businesses looking to build on our platform:</p>
            <ul>
              <li><strong>API access</strong> for integration with existing systems</li>
              <li><strong>Development toolkits</strong> specific to Pacific use cases</li>
              <li><strong>Custom smart contract development</strong> for specialized needs</li>
              <li><strong>Technical consulting</strong> on blockchain implementation</li>
            </ul>
          </div>
          
          {/* Connect Your Wallet Section */}
          <div className="wallet-section">
            <h3>Connect Your Wallet</h3>
            <p>To access smart contract services and platform features, please connect your Web3 wallet. This will be used for authentication and DAO participation.</p>
            {walletConnected ? (
              <div className="wallet-info">
                <div className="wallet-status connected">
                  <span className="wallet-icon">💼</span>
                  <span>Wallet Connected</span>
                </div>
                <div className="wallet-address">
                  {primaryWallet?.address.substring(0, 6)}...{primaryWallet?.address.substring(primaryWallet?.address.length - 4)}
                </div>
                <button className="wallet-button disconnect" onClick={() => setShowAuthFlow(true)}>
                  Disconnect Wallet
                </button>
              </div>
            ) : (
              <div className="wallet-connection">
                <div className="wallet-status">
                  <span className="wallet-icon">💼</span>
                  <span>Wallet Not Connected</span>
                </div>
                <button className="wallet-button connect" onClick={() => setShowAuthFlow(true)}>
                  Connect Wallet
                </button>
                <p className="wallet-note">Supported wallets: MetaMask, WalletConnect, and more</p>
              </div>
            )}
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
                  <h3>Token Contracts</h3>
                  <div className="component-icon"><span className="emoji-fix">📚</span></div>
                </div>
                <p>Implementation of the PASIFIKA (PSF) token, including minting, distribution, and staking mechanisms tailored for the Pacific economy.</p>
                <div className="demo-component token-demo">
                  <div className="token-visual">
                    <Image
                      src="/pasifika.png"
                      alt="PSF Token"
                      width={80}
                      height={80}
                      className="token-image-preview"
                    />
                    <div className="token-preview-info">
                      <p className="token-preview-title">PSF Token</p>
                      <p className="token-preview-address">0x2e57c2f37283941C7804DA0b97BFf3f8dc821eA2</p>
                    </div>
                  </div>
                  <TokenContractInfo />
                </div>
              </div>
              
              <div className="smart-contract-card">
                <div className="card-header">
                  <h3>Node Operator Rewards</h3>
                  <div className="component-icon"><span className="emoji-fix">📡</span></div>
                </div>
                <p>Incentive distribution system for network participants who maintain infrastructure nodes across the Pacific island nations.</p>
                <div className="demo-component">
                  <PSFStakingInfo />
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
                  <h3>Dynamic NFT System</h3>
                  <div className="component-icon"><span className="emoji-fix">🖼️</span></div>
                </div>
                <p>Evolving NFTs representing Pacific cultural assets with embedded royalty systems that ensure creators receive ongoing compensation.</p>
                <div className="demo-component">
                  <DynamicNFTInfo />
                </div>
              </div>
              
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
                  <h3>Governance System</h3>
                  <div className="component-icon"><span className="emoji-fix">⚖️</span></div>
                </div>
                <p>DAO-based governance allowing community members to propose, vote on, and implement changes to the platform and resource allocation.</p>
                <div className="demo-component">
                  <GovernanceInfo />
                </div>
              </div>
              
              <div className="smart-contract-card inactive">
                <div className="card-header">
                  <h3>Validator Framework</h3>
                  <div className="component-icon"><span className="emoji-fix">✅</span></div>
                </div>
                <p>Consensus mechanism for validating network transactions with specific adaptation for low-bandwidth environments in Pacific regions.</p>
                <div className="production-notice">Will be available in the production version</div>
              </div>
              
              <div className="smart-contract-card inactive">
                <div className="card-header">
                  <h3>Oracle Integration</h3>
                  <div className="component-icon"><span className="emoji-fix">🔮</span></div>
                </div>
                <p>Real-world data feeds for climate monitoring, currency exchange rates, and other inputs critical to Pacific communities and economies.</p>
                <div className="production-notice">Will be available in the production version</div>
              </div>
              
              <div className="smart-contract-card inactive">
                <div className="card-header">
                  <h3>Cultural Protection System</h3>
                  <div className="component-icon"><span className="emoji-fix">🛡️</span></div>
                </div>
                <p>Smart contracts that enforce traditional ownership concepts and prevent misappropriation of cultural knowledge and symbols.</p>
                <div className="production-notice">Will be available in the production version</div>
              </div>
              
              <div className="smart-contract-card inactive">
                <div className="card-header">
                  <h3>AI Agent Coordination</h3>
                  <div className="component-icon"><span className="emoji-fix">🤖</span></div>
                </div>
                <p>Smart contract interfaces for AI agents that support platform operations, data analysis, and personalized services for users.</p>
                <div className="production-notice">Will be available in the production version</div>
              </div>
              
              <div className="smart-contract-card inactive">
                <div className="card-header">
                  <h3>Security Audits</h3>
                  <div className="component-icon"><span className="emoji-fix">🔒</span></div>
                </div>
                <p>Regular security audits and penetration testing to ensure the integrity of our smart contracts and user data.</p>
                <div className="production-notice">Will be available in the production version</div>
              </div>
              
              <div className="smart-contract-card inactive">
                <div className="card-header">
                  <h3>Infrastructure Contracts</h3>
                  <div className="component-icon"><span className="emoji-fix">🌐</span></div>
                </div>
                <p>Smart contracts managing the infrastructure layer, including node deployment, network topology, and resource allocation.</p>
                <div className="production-notice">Will be available in the production version</div>
              </div>
              
              <div className="smart-contract-card inactive">
                <div className="card-header">
                  <h3>Disaster Relief Fund</h3>
                  <div className="component-icon"><span className="emoji-fix">🌊</span></div>
                </div>
                <p>Community-managed fund for disaster relief and recovery efforts, utilizing blockchain for transparent and efficient allocation of resources.</p>
                <div className="production-notice">Will be available in the production version</div>
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
