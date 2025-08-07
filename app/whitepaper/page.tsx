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
          <h1>PASIFIKA BITCOIN TECH HUB WHITEPAPER</h1>
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
              <h2>Pacific Values in Digital Form: The First Bitcoin & Lightning Network Exchange for Pacific Islands</h2>
              <p className="whitepaper-version">Version 3.0 | August 2025</p>
              <div className="whitepaper-divider"></div>
            </div>
                        <h2>EXECUTIVE SUMMARY</h2>
            <p>
              At the heart of Pasifika Bitcoin Tech Hub is a philosophical principle that has guided Pacific Island communities for generations: <strong>&quot;If we take care of our own, they will take care of us.&quot;</strong> This powerful concept drives our groundbreaking Pasifika Exchange designed specifically for Pacific Island communities. Built on Bitcoin and the Lightning Network, with RSK for smart contract functionality and Stacks with Clarity for enhanced security, this platform creates a sustainable economic ecosystem that preserves cultural heritage while creating new digital opportunities for islanders through fast, low-cost transactions.
            </p>
            
            <div className="update-notice" style={{ 
              backgroundColor: isDarkMode ? '#2a2a2a' : '#f5f5f5',
              borderLeft: '4px solid #FF6B35',
              padding: '1rem',
              margin: '1.5rem 0',
              borderRadius: '4px'
            }}>
              <h3 style={{ marginTop: 0, color: '#FF6B35' }}>Update: August 1, 2025</h3>
              <p>We are excited to announce our strategic shift to prioritize Bitcoin and the Lightning Network as our primary infrastructure. This decision reflects our commitment to financial sovereignty, security, and accessibility for Pacific Island communities.</p>
            </div>
            
            <p>
              This whitepaper outlines our comprehensive approach to building the first Bitcoin and Lightning Network Exchange for Pacific Islands that connects local businesses, traders, community members, and global markets. By embracing Bitcoin as our foundational layer and leveraging the Lightning Network for instant transactions, we create a resilient system that embodies the Pacific principle of reciprocity while providing financial sovereignty and accessibility to our communities.
            </p>
            
            <div className="challenges-box">
              <h3>Key Challenges We Address</h3>
              <ul>
                <li>Limited access to global markets for local products and services</li>
                <li>Vulnerability to climate change and economic disruption</li>
                <li>Risk of cultural knowledge loss and exploitation</li>
                <li>Limited technological infrastructure and digital inclusion</li>
                <li>Need for sustainable economic development models</li>
              </ul>
            </div>
            
            <div className="membership-box" style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: isDarkMode ? '#2a2a2a' : '#f5f5f5', borderRadius: '8px', border: '1px solid ' + (isDarkMode ? '#444' : '#ddd') }}>
              <h3 style={{ marginTop: 0 }}>Bitcoin & Lightning Network Membership</h3>
              <p>Our platform offers three membership tiers with Bitcoin and Lightning Network integration, providing financial sovereignty and low-cost transactions for Pacific Island communities:</p>
              
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
                  <p style={{ fontWeight: 600 }}>0.0005 BTC or 100,000 sats</p>
                  <ul style={{ paddingLeft: '1.5rem', marginBottom: 0 }}>
                    <li>0.5% transaction fee</li>
                    <li>Full Exchange access</li>
                    <li>Profit-sharing eligibility</li>
                    <li>Bitcoin-secured smart contract functionality</li>
                  </ul>
                </div>
                
                <div style={{ padding: '1.25rem', backgroundColor: isDarkMode ? '#333' : '#fff', borderRadius: '8px', boxShadow: isDarkMode ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h4 style={{ color: '#FF5722', marginTop: 0, borderBottom: '2px solid #FF5722', paddingBottom: '0.5rem' }}>Node Operator (Tier 2)</h4>
                  <p style={{ fontWeight: 600 }}>0.001 BTC or 100,000 sats</p>
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
              Our solution implements the Pasifika Exchange with integrated physical infrastructure (node operators, local trading centers) and digital components (Bitcoin, Lightning Network, and RootStock blockchain, exchange infrastructure, trading systems) that generates real value while preserving cultural integrity. This approach ensures we can operate efficiently while maintaining our core values of reciprocity, community care, and shared prosperity.
            </p>
            
            <h2>TABLE OF CONTENTS</h2>
            <div className="toc">
              <ol>
                <li>Introduction & Pacific Values in Digital Form</li>
                <li>Market Analysis & Opportunity
                  <ul>
                    <li>Current Market Landscape</li>
                    <li>Market Size & Growth</li>
                    <li>Competitive Advantage</li>
                  </ul>
                </li>
                <li>Technical Advantages
                  <ul>
                    <li>Bitcoin: Secure and Decentralized Foundation</li>
                    <li>Lightning Network: Instant, Low-Cost Transactions</li>
                    <li>RootStock: Bitcoin Smart Contracts</li>
                  </ul>
                </li>
                <li>Platform Architecture
                  <ul>
                    <li>Physical Infrastructure</li>
                    <li>Digital Infrastructure</li>
                    <li>Pasifika Exchange</li>
                    <li>Secure Price Feed Integration</li>
                    <li>Fiat Payment Bridge</li>
                    <li>Bitcoin-Secured Integration Model</li>
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
              The Pasifika Web3 Tech Hub envisions a decentralized digital economy that embodies Pacific values of reciprocity and community care through a multi-network blockchain approach, empowering Pacific Island communities to create sustainable livelihoods while preserving cultural heritage and enabling global market participation on their own terms.
            </p>
            
            <h3>Mission & Values</h3>
            <p><strong>Mission:</strong> To create a decentralized marketplace and infrastructure network that empowers Pacific Islanders to share, monetize, and access data, digital content, traditional artifacts, handicrafts, and local agricultural produce in a fair, transparent, and community-governed environment.</p>
            
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">🔄</div>
                <div className="value-title">Reciprocity</div>
                <div className="value-description">(&quot;If we take care of our own, they will take care of us&quot;)</div>
              </div>
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
            
            <h2>2. MARKET ANALYSIS & OPPORTUNITY</h2>
            <h3>2.1 Current Market Landscape</h3>
            <p>
              The intersection of DePIN (Decentralized Physical Infrastructure Networks) and cultural marketplaces represents an emerging opportunity with limited established competitors. Current solutions targeting Pacific Island communities include:
            </p>
            <ul>
              <li>Traditional e-commerce platforms (limited catalog, high fees, cultural disconnect)</li>
              <li>Cultural marketplaces (centralized, limited product range, high commissions)</li>
              <li>Web3 marketplaces (not designed for Pacific contexts, limited physical infrastructure)</li>
              <li>Data markets (exclude cultural components, not community-owned)</li>
            </ul>
            
            <h3>2.2 Market Size & Growth</h3>
            <div className="market-analysis-box" style={{ backgroundColor: isDarkMode ? '#2a2a2a' : '#f5f5f5', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem', border: '1px solid ' + (isDarkMode ? '#444' : '#ddd') }}>
              <h4 style={{ marginTop: 0 }}>Total Addressable Market: $17.8-23.2B</h4>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <div style={{ backgroundColor: isDarkMode ? '#333' : '#fff', padding: '1rem', borderRadius: '8px', boxShadow: isDarkMode ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h5 style={{ color: '#FF5722', marginTop: 0 }}>Pacific Island handicraft market</h5>
                  <p style={{ fontSize: '1.2rem', fontWeight: '600', margin: '0.5rem 0' }}>$1.9-2.7B annually</p>
                  <p style={{ fontSize: '0.9rem', margin: 0 }}>Part of $210B Asia Pacific handicrafts market (2024)</p>
                </div>
                
                <div style={{ backgroundColor: isDarkMode ? '#333' : '#fff', padding: '1rem', borderRadius: '8px', boxShadow: isDarkMode ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h5 style={{ color: '#FF5722', marginTop: 0 }}>Agricultural export market</h5>
                  <p style={{ fontSize: '1.2rem', fontWeight: '600', margin: '0.5rem 0' }}>$2.8-3.1B annually</p>
                  <p style={{ fontSize: '0.9rem', margin: 0 }}>Pacific exports grew 169% over 20 years</p>
                </div>
                
                <div style={{ backgroundColor: isDarkMode ? '#333' : '#fff', padding: '1rem', borderRadius: '8px', boxShadow: isDarkMode ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h5 style={{ color: '#FF5722', marginTop: 0 }}>Diaspora remittances</h5>
                  <p style={{ fontSize: '1.2rem', fontWeight: '600', margin: '0.5rem 0' }}>$7.5-9.7B annually</p>
                  <p style={{ fontSize: '0.9rem', margin: 0 }}>Critical economic lifeline for Pacific families</p>
                </div>
                
                <div style={{ backgroundColor: isDarkMode ? '#333' : '#fff', padding: '1rem', borderRadius: '8px', boxShadow: isDarkMode ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h5 style={{ color: '#FF5722', marginTop: 0 }}>Sustainable tourism</h5>
                  <p style={{ fontSize: '1.2rem', fontWeight: '600', margin: '0.5rem 0' }}>$4.5-6.3B annually</p>
                  <p style={{ fontSize: '0.9rem', margin: 0 }}>20% of regional GDP before pandemic</p>
                </div>
              </div>
              
              <p style={{ marginTop: '1.5rem', fontSize: '0.95rem' }}>The Pasifika Web3 Tech Hub targets 5% market penetration within five years through its integrated approach.</p>
            </div>
            
            <h3>2.3 Competitive Advantage</h3>
            <ul>
              <li><strong>Authentic Pacific Focus:</strong> Built by and for Pacific Islanders</li>
              <li><strong>Integrated Physical-Digital Infrastructure:</strong> Both on-chain functionality and physical distribution</li>
              <li><strong>Community Profit-Sharing:</strong> Ensures economic benefits stay within communities</li>
              <li><strong>Comprehensive Cultural Protection:</strong> Safeguards traditional knowledge and practices</li>
              <li><strong>Island-Specific Localization:</strong> Adapts to diverse Pacific contexts</li>
              <li><strong>Low Fees & High Transparency:</strong> Transaction fees as low as 0.25%</li>
              <li><strong>Technical Employment:</strong> Creates opportunities for Pacific Islanders in technical roles</li>
            </ul>
            
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
            
            <h4>3.2.1 Bitcoin-Secured Blockchain Layer</h4>
            <p>The Pasifika Web3 Tech Hub operates on Bitcoin-secured blockchain networks to create a resilient, secure, and user-focused infrastructure:</p>

            <h5>RootStock (RSK):</h5>
            <ul>
              <li>Bitcoin sidechain with smart contract compatibility</li>
              <li>Inherits Bitcoin's security through merge mining</li>
              <li>Smart contract functionality for complex financial operations</li>
              <li>Native RIF token integration for platform operations</li>
              <li>Low transaction fees ideal for Pacific Island economies</li>
            </ul>

            <h5>Stacks:</h5>
            <ul>
              <li>Smart contracts secured by Bitcoin's proof-of-work</li>
              <li>Clarity programming language for predictable execution</li>
              <li>Enhanced security with built-in safety features</li>
              <li>STX token for platform operations and staking</li>
              <li>Transparent, auditable smart contract execution</li>
            </ul>

            <h5>Lightning Network:</h5>
            <ul>
              <li>Bitcoin layer-2 payment channel network</li>
              <li>Near-instant, low-cost Bitcoin transactions</li>
              <li>Ideal for microtransactions and everyday commerce</li>
              <li>Perfect for Pacific Island economies with limited banking infrastructure</li>
              <li>Enhanced scalability for high-volume trading periods</li>
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
              The Pasifika Exchange represents a cornerstone of our platform infrastructure as the first decentralized exchange designed specifically for Pacific Island communities with a focus on Bitcoin and Lightning Network. This groundbreaking financial component will:
            </p>
            <ul>
              <li>Enable secure trading of digital assets with low fees across all three blockchain networks</li>
              <li>Facilitate transactions using Bitcoin and Lightning Network for fast, low-cost settlements</li>
              <li>Provide seamless liquidity bridging between Bitcoin-secured networks through integrated infrastructure</li>
              <li>Support network-specific assets and tokens while maintaining Bitcoin-secured compatibility</li>
              <li>Implement specialized order matching for low-volume but culturally significant assets</li>
              <li>Optimize gas fees by selecting the most cost-effective network for different transaction types</li>
              <li>Support fiat on/off ramps with localized payment methods across all supported chains</li>
              <li>Feature an intuitive interface optimized for island connectivity constraints with network switching capabilities</li>
              <li>Provide resilience through Bitcoin-secured network redundancy, ensuring platform availability even during network congestion</li>
            </ul>
            
            <h3>3.4 Secure Price Feed Integration</h3>
            <p>
              Our platform has been enhanced with secure decentralized oracle networks to provide reliable and tamper-proof price data for all token valuations. This critical infrastructure improvement ensures:
            </p>
            <ul>
              <li>Accurate and manipulation-resistant price data from secure decentralized oracle networks</li>
              <li>Safe decimal handling that prevents arithmetic overflow and underflow in financial calculations</li>
              <li>Optimized token conversion mechanics that properly scale between 18-decimal tokens and 8-decimal price feeds</li>
              <li>Validation mechanisms to prevent negative price attacks and other oracle exploits</li>
              <li>Enhanced Bitcoin-secured financial safety with consistent price data across all supported networks</li>
              <li>Reduced technical risk through proper scaling of asset values</li>
            </ul>
            
            <h3>3.5 Fiat Payment Bridge</h3>
            <p>
              Our platform features a comprehensive multi-processor payment system that integrates Circle and Stripe payment gateways to enable seamless fiat-to-crypto conversions:
            </p>
            <ul>
              <li>Multi-processor payment system supporting Circle and Stripe integrations</li>
              <li>Oracle-based payment verification for off-chain fiat transactions</li>
              <li>Secure on-chain USDC settlement through PasifikaPaymentGateway</li>
              <li>Support for multiple Pacific currencies (FJD, USD, NZD) with automatic conversion</li>
              <li>Transparent fee structure with treasury collection</li>
              <li>Event-driven architecture for payment status tracking</li>
            </ul>
            
            <div className="technical-callout" style={{ margin: '2rem 0', padding: '1.5rem', backgroundColor: isDarkMode ? '#27333D' : '#E8F4FC', borderRadius: '8px', border: '1px solid ' + (isDarkMode ? '#37475A' : '#C9E3F3') }}>
              <h4 style={{ marginTop: 0, color: '#3498DB' }}>Technical Implementation Highlight</h4>
              <p>
                The PasifikaPaymentGateway smart contract implements a secure multi-processor payment verification system that connects off-chain fiat transactions with on-chain settlement:
              </p>
              <ol style={{ marginBottom: 0 }}>
                <li>Payment is initiated through Circle or Stripe with a unique payment ID</li>
                <li>Off-chain payment confirmation is verified by trusted oracles and admin validation</li>
                <li>Smart contract processes verification using dual-signature security model</li>
                <li>USDC tokens are transferred from treasury to user wallet upon confirmation</li>
                <li>Transaction fees are automatically calculated and collected</li>
                <li>Payment events are emitted for robust front-end status tracking</li>
              </ol>
            </div>
            
            <div className="technical-callout" style={{ margin: '2rem 0', padding: '1.5rem', backgroundColor: isDarkMode ? '#27333D' : '#E8F4FC', borderRadius: '8px', border: '1px solid ' + (isDarkMode ? '#37475A' : '#C9E3F3') }}>
              <h4 style={{ marginTop: 0, color: '#3498DB' }}>Technical Implementation Highlight</h4>
              <p>
                The Pasifika Exchange implements advanced decimal handling to ensure secure financial calculations between various token systems. When converting token amounts (with 18 decimals) to USD values (using 8-decimal price feeds), we employ a specialized scaling approach:
              </p>
              <ol style={{ marginBottom: 0 }}>
                <li>Token amounts are first scaled down by dividing by 10^10</li>
                <li>The scaled amount is then multiplied by the oracle price feed value</li>
                <li>The result is adjusted according to price feed decimals for precision</li>
                <li>All conversions include input validation to prevent negative prices</li>
                <li>Arithmetic safety checks prevent overflow/underflow conditions</li>
              </ol>
            </div>
            
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
              The Pasifika Web3 Tech Hub represents a breakthrough approach to blockchain-enabled economic development that centers Pacific Island communities, cultures, and context. By integrating physical infrastructure with digital capabilities through our membership-based model on Bitcoin and Lightning Network, we create a self-reinforcing ecosystem that generates real value while preserving cultural heritage.
            </p>
            
            <p>
              Our approach is distinguished by several key innovations:
            </p>
            
            <ol>
              <li><strong>Pacific Values in Digital Form:</strong> Built from the ground up to encode the principle &quot;If we take care of our own, they will take care of us&quot; into smart contract architecture</li>
              <li><strong>Bitcoin-Centric Design:</strong> Leveraging the security and decentralization of Bitcoin with Lightning Network for fast, low-cost transactions</li>
              <li><strong>Integrated Physical-Digital Infrastructure:</strong> Seamless connection between computational resources, physical distribution, and digital marketplace</li>
              <li><strong>Exchange Trading:</strong> Seamless token swapping, liquidity provision, and Bitcoin-secured trading capabilities specifically designed for Pacific Island users</li>
              <li><strong>Profit-Sharing Model:</strong> Implementation of the principle &quot;If we take care of our own, they will take care of us&quot; through annual distributions</li>
              <li><strong>Island-Specific Localization:</strong> Comprehensive adaptation for each island&apos;s unique cultural context and infrastructure needs</li>
            </ol>
            
            <p>
              Through these innovations, the Pasifika Web3 Tech Hub aims to create a model for blockchain-enabled sustainable development that embodies Pacific cultural values in digital form. Our Bitcoin-secured infrastructure approach ensures resilience, accessibility, and flexibility across Bitcoin-secured blockchain ecosystems while specifically serving the unique needs of Pacific Island nations and creating a blueprint that can be adapted for cultural communities worldwide.
            </p>
            
            <h2>10. DEVELOPMENT ROADMAP</h2>
            <p>The Pasifika Web3 Tech Hub project follows a phased development approach aligned with community needs and technological maturity:</p>
            
            <div className="roadmap-timeline" style={{ margin: '2rem 0' }}>
              <div className="timeline-item" style={{ marginBottom: '2rem', padding: '0 0 0 2rem', borderLeft: '2px solid #3498DB', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-10px', backgroundColor: isDarkMode ? '#333' : '#fff', width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #3498DB' }}></div>
                <h3 style={{ marginTop: 0 }}>Phase 1: Foundation (Q2 2025 - Q3 2025)</h3>
                <ul>
                  <li><strong>Core Smart Contract Development:</strong> Development and auditing of core marketplace and exchange contracts</li>
                  <li><strong>Bitcoin Integration:</strong> Implementation of Bitcoin and Lightning Network for secure and efficient transactions</li>
                  <li><strong>Frontend Interface:</strong> Development of responsive, mobile-first platform interfaces</li>
                  <li><strong>Whitepaper & Documentation:</strong> Comprehensive documentation of technical specifications and governance</li>
                </ul>
              </div>
              

              
              <div className="timeline-item" style={{ marginBottom: '2rem', padding: '0 0 0 2rem', borderLeft: '2px solid #3498DB', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-10px', backgroundColor: isDarkMode ? '#333' : '#fff', width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #3498DB' }}></div>
                <h3 style={{ marginTop: 0 }}>Phase 2: Community Expansion (Q3 2025 - Q4 2025)</h3>
                <ul>
                  <li><strong>Local Node Operator Network:</strong> Deployment of physical infrastructure across Pacific Islands</li>
                  <li><strong>Cultural Asset Framework:</strong> Specialized NFT standards for cultural preservation</li>
                  <li><strong>Governance Structure:</strong> Implementation of community governance mechanisms</li>
                  <li><strong>Island-Specific Customization:</strong> Localized platform adaptations</li>
                </ul>
              </div>
              
              <div className="timeline-item" style={{ padding: '0 0 0 2rem', borderLeft: '2px solid #3498DB', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-10px', backgroundColor: isDarkMode ? '#333' : '#fff', width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #3498DB' }}></div>
                <h3 style={{ marginTop: 0 }}>Phase 3: Full Implementation (2026)</h3>
                <ul>
                  <li><strong>Mainnet Launch:</strong> Full production deployment across all networks</li>
                  <li><strong>Distribution Hub Network:</strong> Physical hub establishment across islands</li>
                  <li><strong>Bitcoin-Secured Liquidity:</strong> Comprehensive liquidity provision across all Bitcoin-secured networks</li>
                  <li><strong>Full Fiat Integration:</strong> Localized payment options for all supported regions</li>
                </ul>
              </div>
            </div>
            
            <div className="whitepaper-footer">
              <p><em>This whitepaper outlines the vision and implementation plan for the Pasifika Web3 Tech Hub as of June 2025. The project is under active development, and some details may evolve as the platform matures.</em></p>
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
            
            <div className="footer-banner">
              <p>Copyright &copy; Pasifika 2025 | Version 2.2 - June 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
