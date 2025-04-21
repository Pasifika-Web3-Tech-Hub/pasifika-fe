"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import "../page.css";
import "../shared-pages.css";

export default function Constitution() {
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
          <h1>The DAO Constitution</h1>
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
              <h2>Pasifika Governance Document</h2>
              <p className="whitepaper-version">Version 1.0 | May 2025</p>
              <div className="whitepaper-divider"></div>
            </div>
            
            <h2>Preamble</h2>
            <p>We, the members of Pasifika Web3 Tech Hub, establish this Decentralized Autonomous Organization (DAO) to create a thriving PASIFIKA token-powered DePIN (Decentralized Physical Infrastructure Network) marketplace for Pacific Island data, digital content, traditional knowledge, handicrafts, and local produce, honoring our cultural heritage while embracing technological innovation. Built on a Blockchain Layer-2 technology and aligned with our vision for AI-native infrastructure, this constitution serves as the foundational document governing our collective.</p>
            
            <h2>Article I: Mission & Values</h2>
            <h3>Mission</h3>
            <p>To create a PASIFIKA token-powered decentralized marketplace and infrastructure network that empowers Pacific Islanders to share, monetize, and access data, digital content, traditional artifacts, handicrafts, and local agricultural produce in a fair, transparent, and community-governed environment.</p>
            
            <h3>Core Values</h3>
            <ul>
              <li><strong>Community Ownership:</strong> The DAO is owned and governed by its members through PASIFIKA token-based consensus.</li>
              <li><strong>Cultural Respect:</strong> We honor and protect Pacific Islander cultural knowledge, artistic expressions, and traditions.</li>
              <li><strong>Transparency:</strong> All operations, governance, and financial activities are transparent through blockchain technology.</li>
              <li><strong>Inclusivity:</strong> We welcome participation from all Pacific Island communities.</li>
              <li><strong>Environmental Stewardship:</strong> We commit to sustainable blockchain practices using renewable energy and support sustainable agriculture.</li>
              <li><strong>Cultural Preservation:</strong> We support the preservation and respectful sharing of traditional crafts, knowledge, navigation, fishing and farming practices.</li>
              <li><strong>Food Security:</strong> We promote sustainable local food systems, fisheries and agricultural self-sufficiency.</li>
              <li><strong>Infrastructure Development:</strong> We build physical and digital infrastructure that benefits Pacific Island communities.</li>
            </ul>
            
            <h2>Article II: Membership</h2>
            <h3>Membership Categories</h3>
            <ul>
              <li><strong>PSF Token Holders:</strong> Individuals or organizations who hold and stake PASIFIKA tokens to participate in governance</li>
              <li><strong>Data & Content Providers:</strong> Individuals or organizations who share data, digital content, or document handicrafts on the marketplace</li>
              <li><strong>Artisans & Craftspeople:</strong> Creators of traditional and contemporary Pacific Islander handicrafts and artifacts</li>
              <li><strong>Farmers, Fishers & Food Producers:</strong> Growers and producers of local Pacific Island agricultural products, seafood, and value-added food items</li>
              <li><strong>Validators:</strong> Members who verify quality, authenticity, and cultural appropriateness</li>
              <li><strong>Governance Participants:</strong> PSF token holders who participate in DAO decision-making</li>
              <li><strong>Consumers:</strong> Entities who purchase or use offerings from the marketplace</li>
            </ul>
            
            <h3>Membership Requirements</h3>
            <ul>
              <li>Membership is open to all who agree to abide by this constitution</li>
              <li>Governance participation requires PSF token holdings above minimum threshold</li>
              <li>Members with Pacific Islander heritage or organizations based in Pacific Island nations receive priority verification status</li>
              <li>Artisans, farmers, and producers have special verification processes to authenticate traditional knowledge, skills, and agricultural practices</li>
            </ul>
            
            <h3>Membership Rights</h3>
            <ul>
              <li>Vote on DAO proposals (weighted by PSF token holdings and staking duration)</li>
              <li>Submit proposals for consideration</li>
              <li>Receive financial returns based on contribution and PSF token holdings</li>
              <li>Access marketplace offerings according to verification status and permissions</li>
            </ul>
            
            <h2>Article III: Governance Structure</h2>
            <h3>Token-Based Governance</h3>
            <ul>
              <li>The DAO is governed through the PASIFIKA token (PSF)</li>
              <li>Voting power is determined by token holdings and staking duration</li>
              <li>All votes are recorded on the blockchain for transparency and security</li>
              <li>Quadratic voting mechanisms ensure fair representation</li>
            </ul>
            
            <h3>Decentralized Governance Structure</h3>
            <ul>
              <li>Direct governance by PSF token holders</li>
              <li>Implementation of passed proposals coordinated by relevant Working Groups</li>
              <li>Transparent on-chain voting and execution</li>
              <li>Representation ensured through weighted voting parameters that prioritize Pacific Island participants</li>
              <li>Cultural authorities consulted for decisions affecting traditional knowledge and practices</li>
            </ul>
            
            <h3>Working Groups</h3>
            <div className="grid-2-cols">
              <div>
                <ul>
                  <li>Technology Development</li>
                  <li>Token Infrastructure</li>
                  <li>Data Quality & Standards</li>
                  <li>Cultural Content & Handicrafts</li>
                  <li>Agricultural & Food Systems</li>
                  <li>Community Engagement</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Financial Management</li>
                  <li>Cultural Protection</li>
                  <li>Artisan Support & Development</li>
                  <li>Sustainable Agriculture Initiatives</li>
                  <li>Physical Infrastructure Development</li>
                </ul>
              </div>
            </div>
            
            <h3>Decision-Making Process</h3>
            <ul>
              <li>Proposals submitted by any member with the minimum required PSF token holdings</li>
              <li>3-day discussion period</li>
              <li>5-day voting period</li>
              <li>Simple majority required for operational decisions</li>
              <li>Two-thirds majority required for constitutional amendments</li>
              <li>Quorum requirement of 20% of total circulating PSF tokens</li>
              <li>Cultural decisions affecting traditional knowledge or practices require consent from relevant cultural authorities</li>
            </ul>
            
            <h2>Article IV: Marketplace & Infrastructure Operations</h2>
            <h3>DePIN Components</h3>
            
            <h4>Physical Infrastructure</h4>
            <ul>
              <li><strong>Node Operators:</strong> Personal computers processing data, monitoring conditions, and supporting the network</li>
              <li><strong>Local Distribution Hubs:</strong> Physical centers connecting remote communities</li>
              <li><strong>Craft Documentation Centers:</strong> Facilities for digitizing traditional crafts</li>
            </ul>
            
            <h4>Digital Infrastructure</h4>
            <ul>
              <li><strong>PASIFIKA Token Governance Layer:</strong> Token-based voting and staking system</li>
              <li><strong>Blockchain Layer-2:</strong> Scalable marketplace and dynamic NFT platform</li>
              <li><strong>Verifiable Metadata System:</strong> Comprehensive data layer for provenance and discovery</li>
              <li><strong>Reputation Protocol:</strong> Trust system for quality assurance</li>
              <li><strong>Chainlink Oracle:</strong> Price feeds and real-world data for the ecosystem</li>
              <li><strong>AI Agent Infrastructure:</strong> AI-aligned autonomous systems for market operations</li>
            </ul>
            
            <h3>Marketplace Categories</h3>
            <div className="grid-2-cols">
              <div>
                <h4>Data Resources</h4>
                <ul>
                  <li>Environmental data (climate, ocean, biodiversity)</li>
                  <li>Economic and market data</li>
                  <li>Tourism and visitor information</li>
                  <li>Agricultural and fishing data</li>
                  <li>Other data types approved by governance vote</li>
                </ul>
                
                <h4>Digital Content</h4>
                <ul>
                  <li>Cultural stories and histories (approved for sharing)</li>
                  <li>Educational materials</li>
                  <li>Music and performances</li>
                  <li>Digital art and designs</li>
                  <li>Photography and videography</li>
                </ul>
              </div>
              <div>
                <h4>Cultural Artifacts & Handicrafts</h4>
                <ul>
                  <li>Traditional crafts and artifacts</li>
                  <li>Contemporary Pacific Islander creations</li>
                  <li>Ceremonial items (where culturally appropriate to share)</li>
                  <li>Textiles and clothing</li>
                  <li>Jewelry and accessories</li>
                  <li>Home goods and furnishings</li>
                </ul>
                
                <h4>Local Produce & Food Products</h4>
                <ul>
                  <li>Fresh fruits and vegetables</li>
                  <li>Seafood and fish</li>
                  <li>Traditional staple crops</li>
                  <li>Value-added products (preserves, oils, spices)</li>
                  <li>Traditional foods and preparations</li>
                  <li>Medicinal plants and preparations</li>
                </ul>
              </div>
            </div>
            
            <h3>Ownership & Rights</h3>
            <ul>
              <li>Providers retain ownership of their data, content, and handicraft designs</li>
              <li>All marketplace items are represented as dynamic NFTs on Blockchain</li>
              <li>Dynamic NFTs update based on real-time conditions, availability, and state changes</li>
              <li>Providers set terms for usage through smart contracts</li>
              <li>Cultural and traditional knowledge has special protections requiring approval from appropriate cultural authorities</li>
              <li>Agricultural heritage and traditional farming practices receive special protection</li>
            </ul>
            
            <div className="read-more-section">
              <h3>Additional Articles in the Constitution</h3>
              <p>The full DAO Constitution contains additional articles covering:</p>
              <ul>
                <li>Article V: Metadata Standards & Governance</li>
                <li>Article VI: Token Infrastructure & Technology</li>
                <li>Article VII: Artisan & Creator Support</li>
                <li>Article VIII: Hybrid Governance & PASIFIKA Proof-of-Work</li>
                <li>Article IX: Treasury Management</li>
                <li>Article X: Amendments & Evolution</li>
                <li>Article XI: Member Incentives & Rewards</li>
              </ul>
              <p>For the complete constitution and detailed governance information, please visit our <a href="https://github.com/Pasifika-Web3-Tech-Hub/constitution" target="_blank" rel="noopener noreferrer" className="repo-link">Constitution GitHub Repository</a></p>
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
