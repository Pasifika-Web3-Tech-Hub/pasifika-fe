"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import "../page.css";
import "../shared-pages.css";
import "./whitepaper.css";

export default function Whitepaper() {
  const { isDarkMode } = useDarkMode();

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
          <h1>PASIFIKA WEB3 TECH HUB WHITEPAPER</h1>
        </div>
        
        <div className="content-container">
          <div className="content-section">
            <div className="whitepaper-header">
              <Image
                src="/pasifika.png"
                alt="Pasifika"
                width={300}
                height={300}
                className="whitepaper-logo"
              />
              <h2>Pacific Values in Digital Form: The First Exchange for Pacific Islands</h2>
              <p className="whitepaper-version">Version 3.0 | May 2025</p>
              <div className="whitepaper-divider"></div>
            </div>
            
            <h2>EXECUTIVE SUMMARY</h2>
            <p>
              At the heart of Pasifika Web3 Tech Hub is a philosophical principle that has guided Pacific Island communities for generations: <strong>&quot;If we take care of our own, they will take care of us.&quot;</strong> This powerful concept of reciprocity and community care serves as the architectural blueprint for our entire system.
            </p>
            
            <p>
              The Pasifika Exchange operates across three complementary EVM Compatible chains: <strong>Linea</strong>, <strong>RootStock (RSK)</strong>, and <strong>Arbitrum</strong>. This interoperability approach provides flexibility, resilience, and increased accessibility for Pacific Island communities while leveraging the unique strengths of each blockchain network to create the first dedicated digital asset exchange for Pacific Islands.
            </p>
            
            <p>
              This whitepaper outlines our comprehensive approach to building the first Exchange for Pacific Islands that connects community members, local businesses, traders, artisans, and global markets in an ecosystem that spans both digital and physical infrastructure.
            </p>
            
            <div className="challenges-box">
              <h3>Key Challenges We Address</h3>
              <ul>
                <li>Limited access to global markets for local products and services</li>
                <li>Vulnerability to climate change and economic disruption</li>
                <li>Risk of cultural knowledge loss and exploitation</li>
                <li>Limited technological infrastructure and digital inclusion</li>
                <li>Need for sustainable economic development models</li>
                <li>Network dependency and single-chain vulnerability</li>
              </ul>
            </div>
            
            <div className="membership-box" style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: isDarkMode ? '#2a2a2a' : '#f5f5f5', borderRadius: '8px', border: '1px solid ' + (isDarkMode ? '#444' : '#ddd') }}>
              <h3 style={{ marginTop: 0 }}>Multi-Network Membership Tiers</h3>
              <p>Our platform offers three membership tiers with cross-chain functionality:</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                <div style={{ padding: '1.25rem', backgroundColor: isDarkMode ? '#333' : '#fff', borderRadius: '8px', boxShadow: isDarkMode ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h4 style={{ color: '#FF5722', marginTop: 0, borderBottom: '2px solid #FF5722', paddingBottom: '0.5rem' }}>Guest (Tier 0)</h4>
                  <p style={{ fontWeight: 600 }}>Free Access</p>
                  <ul style={{ paddingLeft: '1.5rem', marginBottom: 0 }}>
                    <li>1% transaction fee</li>
                    <li>Basic platform access</li>
                    <li>No profit-sharing eligibility</li>
                  </ul>
                </div>
                
                <div style={{ padding: '1.25rem', backgroundColor: isDarkMode ? '#333' : '#fff', borderRadius: '8px', boxShadow: isDarkMode ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h4 style={{ color: '#FF5722', marginTop: 0, borderBottom: '2px solid #FF5722', paddingBottom: '0.5rem' }}>Member (Tier 1)</h4>
                  <p style={{ fontWeight: 600 }}>0.005 ETH or 0.0001 RBTC</p>
                  <ul style={{ paddingLeft: '1.5rem', marginBottom: 0 }}>
                    <li>0.5% transaction fee</li>
                    <li>Full Exchange access</li>
                    <li>Profit-sharing eligibility</li>
                    <li>Cross-chain functionality</li>
                  </ul>
                </div>
                
                <div style={{ padding: '1.25rem', backgroundColor: isDarkMode ? '#333' : '#fff', borderRadius: '8px', boxShadow: isDarkMode ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h4 style={{ color: '#FF5722', marginTop: 0, borderBottom: '2px solid #FF5722', paddingBottom: '0.5rem' }}>Node Operator (Tier 2)</h4>
                  <p style={{ fontWeight: 600 }}>ETH or RBTC Staking</p>
                  <ul style={{ paddingLeft: '1.5rem', marginBottom: 0 }}>
                    <li>0.25% transaction fee</li>
                    <li>Priority Exchange access</li>
                    <li>Enhanced profit-sharing</li>
                    <li>Network operation rewards</li>
                  </ul>
                </div>
              </div>
              
              <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', fontStyle: 'italic' }}>Annual profit-sharing requires a minimum transaction volume of 1 ETH (or equivalent 0.02 RBTC on RootStock) during the Pasifika Financial Year (December 27 to December 24).</p>
            </div>
            
            <p>
              Our solution implements a community-powered marketplace with integrated physical infrastructure (node operators, distribution hubs, craft documentation centers) and multi-network digital components (Linea, RootStock, and Arbitrum blockchains, marketplace, metadata systems) that generates real value while preserving cultural integrity.
            </p>
            
            <h2>TABLE OF CONTENTS</h2>
            <div className="toc">
              <ol>
                <li>Introduction & Pacific Values in Digital Form</li>
                <li>Market Analysis & Opportunity</li>
                <li>Multi-Chain Technical Advantages
                  <ul>
                    <li>Linea: Scaling With Zero Knowledge</li>
                    <li>RootStock: Bitcoin Integration with Smart Contracts</li>
                    <li>Arbitrum: Optimistic Rollups for Broader Integration</li>
                  </ul>
                </li>
                <li>Platform Architecture
                  <ul>
                    <li>Physical Infrastructure</li>
                    <li>Digital Infrastructure</li>
                    <li>Multi-Network Integration Model</li>
                  </ul>
                </li>
                <li>Membership System
                  <ul>
                    <li>Tiered Structure</li>
                    <li>Benefits & Rights</li>
                    <li>Annual Profit-Sharing</li>
                  </ul>
                </li>
                <li>Marketplace Design
                  <ul>
                    <li>Categories & Offerings</li>
                    <li>NFT Implementation</li>
                    <li>Quality Control & Validation</li>
                  </ul>
                </li>
                <li>Community Governance
                  <ul>
                    <li>Decision-Making Process</li>
                    <li>Working Groups</li>
                    <li>Transparency Mechanisms</li>
                  </ul>
                </li>
                <li>Cultural Protection Framework</li>
                <li>Localization Framework</li>
                <li>Technical Implementation</li>
                <li>Development Roadmap</li>
                <li>Team & Partners</li>
                <li>Financial Projections</li>
                <li>Conclusion</li>
              </ol>
            </div>
            
            <h2>1. INTRODUCTION & VISION</h2>
            <h3>The Pacific Islands Context</h3>
            <p>
              The Pacific Island region encompasses diverse cultures, languages, and ecosystems spread across vast oceanic distances. Despite rich cultural heritage and natural resources, these communities face significant challenges:
            </p>
            <ul>
              <li>Geographic isolation limiting market access</li>
              <li>Climate change vulnerability threatening livelihoods</li>
              <li>Digital divide restricting participation in global digital economy</li>
              <li>Migration and cultural dilution risks</li>
              <li>Limited economic diversification opportunities</li>
            </ul>
            
            <h3>Vision Statement</h3>
            <p>
              The Pasifika Web3 Tech Hub envisions a decentralized digital economy that empowers Pacific Island communities through blockchain technology, creating sustainable livelihoods while preserving cultural heritage and enabling global market participation on their own terms.
            </p>
            
            <h3>Mission & Values</h3>
            <p><strong>Mission:</strong> To create a decentralized marketplace and infrastructure network that empowers Pacific Islanders to share, monetize, and access data, digital content, traditional artifacts, handicrafts, and local agricultural produce in a fair, transparent, and community-governed environment.</p>
            
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">👨‍👩‍👧‍👦</div>
                <div className="value-title">Community Ownership</div>
              </div>
              <div className="value-item">
                <div className="value-icon">🏝️</div>
                <div className="value-title">Cultural Respect</div>
              </div>
              <div className="value-item">
                <div className="value-icon">🔍</div>
                <div className="value-title">Transparency</div>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <div className="value-title">Inclusivity</div>
              </div>
              <div className="value-item">
                <div className="value-icon">🌱</div>
                <div className="value-title">Environmental Stewardship</div>
              </div>
              <div className="value-item">
                <div className="value-icon">🏛️</div>
                <div className="value-title">Cultural Preservation</div>
              </div>
              <div className="value-item">
                <div className="value-icon">🍎</div>
                <div className="value-title">Food Security</div>
              </div>
              <div className="value-item">
                <div className="value-icon">🏗️</div>
                <div className="value-title">Infrastructure Development</div>
              </div>
            </div>
            
            <h2>3. PLATFORM ARCHITECTURE</h2>
            <p>
              The Pasifika Web3 Tech Hub combines physical and digital infrastructure, creating a comprehensive ecosystem that bridges traditional systems with blockchain technology.
            </p>
            
            <h3>3.1 Physical Infrastructure</h3>
            
            <h4>3.1.1 Node Operators</h4>
            <ul>
              <li>Distributed network of computers operated by community members</li>
              <li>Perform computational tasks for the network</li>
              <li>Monitor environmental conditions</li>
              <li>Collect and process data</li>
              <li>Update NFT states based on real-world conditions</li>
              <li>Create verifiable provenance for agricultural products</li>
            </ul>
            
            <h4>3.1.2 Local Distribution Hubs</h4>
            <ul>
              <li>Physical centers connecting remote communities</li>
              <li>Product aggregation from small producers</li>
              <li>Quality control and verification services</li>
              <li>Digital training and marketplace access points</li>
              <li>Physical escrow and dispute resolution</li>
            </ul>
            
            <h3>3.2 Digital Infrastructure</h3>
            
            <h4>3.2.1 Multi-Chain Blockchain Layer</h4>
            <p>The Pasifika Web3 Tech Hub operates across three complementary EVM-compatible blockchain networks to create a resilient, flexible, and user-focused infrastructure:</p>

            <h5>RootStock (RSK):</h5>
            <ul>
              <li>Bitcoin sidechain with EVM compatibility</li>
              <li>Bitcoin-level security for critical transactions</li>
              <li>Native RBTC currency for Bitcoin ecosystem integration</li>
              <li>Familiar smart contract framework for developers</li>
              <li>Merge-mining with Bitcoin for enhanced security</li>
            </ul>

            <h5>Arbitrum:</h5>
            <ul>
              <li>Optimistic rollup layer-2 scaling solution</li>
              <li>Lower transaction costs with Ethereum security</li>
              <li>Rich ecosystem of existing protocols and applications</li>
              <li>EVM compatibility for marketplace smart contracts</li>
              <li>Enhanced throughput for high-volume periods</li>
            </ul>

            <h5>Linea:</h5>
            <ul>
              <li>Zero-knowledge rollup technology for scaling</li>
              <li>Mathematically provable transaction validation</li>
              <li>Reduced settlement times for trading operations</li>
              <li>EVM compatibility for consistent developer experience</li>
              <li>Integration with Ethereum&apos;s robust security model</li>
            </ul>
            
            <h4>3.2.2 Marketplace Interface</h4>
            <ul>
              <li>Mobile-first, low-bandwidth design</li>
              <li>Progressive Web App with offline functionality</li>
              <li>Island-specific localization support</li>
              <li>Category-specific listing templates</li>
              <li>Integration with distribution hub management</li>
            </ul>
            
            <h3>3.3 Pasifika Exchange</h3>
            <p>
              The Pasifika Exchange represents a cornerstone of our platform infrastructure as the first decentralized exchange designed specifically for Pacific Island communities with full cross-chain interoperability across RootStock, Arbitrum, and Linea networks. This groundbreaking financial component will:
            </p>
            <ul>
              <li>Enable secure trading of digital assets with low fees across all three blockchain networks</li>
              <li>Facilitate cross-chain swaps between RootStock (Bitcoin ecosystem), Arbitrum, and Linea</li>
              <li>Provide seamless liquidity bridging between networks through integrated cross-chain infrastructure</li>
              <li>Support network-specific assets and tokens while maintaining interoperability</li>
              <li>Implement specialized order matching for low-volume but culturally significant assets</li>
              <li>Optimize gas fees by selecting the most cost-effective network for different transaction types</li>
              <li>Support fiat on/off ramps with localized payment methods across all supported chains</li>
              <li>Feature an intuitive interface optimized for island connectivity constraints with network switching capabilities</li>
              <li>Provide resilience through multi-chain redundancy, ensuring platform availability even during network congestion</li>
            </ul>
            
            <h2>5. MARKETPLACE DESIGN</h2>
            <p>The marketplace encompases a wide range of products and services specific to Pacific Island communities.</p>
            
            <h3>5.1 Categories & Offerings</h3>
            
            <h4>Digital Content & IP:</h4>
            <ul>
              <li>Traditional knowledge and practices</li>
              <li>Educational content from elders</li>
              <li>Cultural stories and documentation</li>
              <li>Music and performances</li>
              <li>Digital art and designs</li>
              <li>Photography and videography</li>
            </ul>
            
            <h4>Cultural Artifacts & Handicrafts:</h4>
            <ul>
              <li>Traditional crafts and artifacts</li>
              <li>Contemporary Pacific Islander creations</li>
              <li>Ceremonial items (where culturally appropriate to share)</li>
              <li>Textiles and clothing</li>
              <li>Jewelry and accessories</li>
              <li>Home goods and furnishings</li>
            </ul>
            
            <h4>Local Produce & Food Products:</h4>
            <ul>
              <li>Fresh fruits and vegetables</li>
              <li>Seafood and fish</li>
              <li>Traditional staple crops</li>
              <li>Value-added products (preserves, oils, spices)</li>
              <li>Certified organic products</li>
              <li>Traditional food preparations</li>
            </ul>
            
            <h4>Financial Services & Exchange:</h4>
            <ul>
              <li>Cross-island remittances</li>
              <li>Digital asset trading via Pasifika Exchange</li>
              <li>Microloans and financing</li>
              <li>Savings and investment products</li>
            </ul>
            
            <h2>CONCLUSION</h2>
            <p>
              The Pasifika Web3 Tech Hub represents a breakthrough approach to blockchain-enabled economic development that centers Pacific Island communities, cultures, and context. By integrating physical infrastructure with digital capabilities through our membership-based model across Linea, RootStock, and Arbitrum networks, we create a self-reinforcing ecosystem that generates real value while preserving cultural heritage.
            </p>
            
            <p>
              Our approach is distinguished by several key innovations:
            </p>
            
            <ol>
              <li><strong>Pacific Values in Digital Form:</strong> Built from the ground up to encode the principle &quot;If we take care of our own, they will take care of us&quot; into smart contract architecture</li>
              <li><strong>Blockchain Interoperability:</strong> Strategic deployment across Linea (zkEVM), RootStock (Bitcoin sidechain), and Arbitrum (optimistic rollups) for complementary strengths and cross-chain functionality</li>
              <li><strong>Integrated Physical-Digital Infrastructure:</strong> Seamless connection between computational resources, physical distribution, and digital marketplace</li>
              <li><strong>Exchange Trading:</strong> Seamless token swapping, liquidity provision, and cross-chain trading capabilities specifically designed for Pacific Island users</li>
              <li><strong>Profit-Sharing Model:</strong> Implementation of the principle &quot;If we take care of our own, they will take care of us&quot; through annual distributions</li>
              <li><strong>Island-Specific Localization:</strong> Comprehensive adaptation for each island&apos;s unique cultural context and infrastructure needs</li>
            </ol>
            
            <p>
              Through these innovations, the Pasifika Web3 Tech Hub aims to create a model for blockchain-enabled sustainable development that embodies Pacific cultural values in digital form. Our interoperability approach ensures resilience, accessibility, and flexibility across multiple blockchain ecosystems while specifically serving the unique needs of Pacific Island nations and creating a blueprint that can be adapted for cultural communities worldwide.
            </p>
            
            <div className="whitepaper-footer">
              <p><em>This whitepaper outlines the vision and implementation plan for the Pasifika Web3 Tech Hub as of May 2025. The project is under active development, and some details may evolve as the platform matures.</em></p>
              <p><em>Building a decentralized future rooted in Pacific traditions</em></p>
            </div>
            
            <div className="download-section">
              <p>For the complete technical whitepaper with all sections and detailed implementation plans, visit our GitHub repository:</p>
              <a href="https://github.com/Pasifika-Web3-Tech-Hub/whitepaper" target="_blank" rel="noopener noreferrer" className="github-button">
                <div className="github-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                View Whitepaper on GitHub
              </a>
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
