"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import "../page.css";
import "../shared-pages.css";

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
              <h2>A PASIFIKA Token-Powered DePIN for Pacific Island Communities</h2>
              <p className="whitepaper-version">Currently Under Review</p>
              <div className="whitepaper-divider"></div>
            </div>
            
            <h2>Whitepaper Status</h2>
            <p>The whitepaper is currently under review as we pivot to a streamlined, family-based development approach. Key aspects are being re-evaluated to better align with our new direction of building a decentralized platform that operates independently of any jurisdiction or centralized authority.</p>
            
            <p>Check back for updates on our technical vision and implementation details as we refine our approach to better serve Pacific Island communities through Web3 principles.</p>
            
            <h2>EXECUTIVE SUMMARY</h2>
            <p>The Pasifika Web3 Tech Hub represents a groundbreaking decentralized physical infrastructure network (DePIN) designed specifically for Pacific Island communities. Leveraging the native PASIFIKA token (PSF) and built on Linea&apos;s zkEVM Layer-2 technology, this platform creates a sustainable economic ecosystem that preserves cultural heritage while creating new digital opportunities for islanders.</p>
            
            <p>This whitepaper outlines our comprehensive approach to building a decentralized marketplace that connects PSF token holders, data providers, content creators, artisans, farmers, validators, and global consumers in a tokenized ecosystem that spans both digital and physical infrastructure.</p>
            

            
            <h2>TOKENOMICS FRAMEWORK</h2>
            <p>The PASIFIKA Token (PSF) serves as the core utility and governance token within our ecosystem. Its primary functions include:</p>
            
            <div className="grid-2-cols">
              <div>
                <h4>Economic Functions</h4>
                <ul>
                  <li>Medium of exchange for marketplace transactions</li>
                  <li>Staking for network security and governance rights</li>
                  <li>Collateral for DeFi services and microloans</li>
                  <li>Fee distribution to node operators and validators</li>
                  <li>Treasury funding for community-driven initiatives</li>
                </ul>
              </div>
              <div>
                <h4>Governance Functions</h4>
                <ul>
                  <li>Protocol parameter adjustments</li>
                  <li>Treasury fund allocation</li>
                  <li>Feature prioritization and development</li>
                  <li>Cultural protection policies</li>
                  <li>Node operator incentive structures</li>
                  <li>Marketplace fee determination</li>
                </ul>
              </div>
            </div>
            
            <h2>TECHNICAL ARCHITECTURE</h2>
            <p>Our technical stack combines cutting-edge blockchain technologies with low-bandwidth optimizations designed for the unique connectivity challenges of Pacific Island environments.</p>
            
            <h3>Core Components:</h3>
            <ul>
              <li><strong>Blockchain Layer:</strong> Linea zkEVM Layer-2 for low-cost, high-speed transactions</li>
              <li><strong>Node Infrastructure:</strong> Distributed validator network with solar-powered options</li>
              <li><strong>Smart Contracts:</strong> EVM-compatible contracts governing marketplace, governance, and token mechanics</li>
              <li><strong>Storage Layer:</strong> IPFS-based system with bandwidth-efficient redundancy</li>
              <li><strong>Front-End:</strong> Progressive Web App with offline capabilities</li>
              <li><strong>Oracle Network:</strong> Real-world data feeds for climate monitoring, currency exchange, etc.</li>
              <li><strong>Identity Framework:</strong> Self-sovereign identity with optional KYC for regulatory compliance</li>
              <li><strong>AI Infrastructure:</strong> Machine learning systems to enhance platform functionality</li>
            </ul>
            
            <h3>Dynamic NFT Implementation</h3>
            <p>Our innovative Dynamic NFT system is a cornerstone technology that enables efficient representation of both digital and physical assets. These NFTs can:</p>
            <ul>
              <li>Update metadata based on real-world conditions (e.g., crop harvest status)</li>
              <li>Incorporate royalty distribution for cultural artifacts</li>
              <li>Track provenance and authenticity of physical items</li>
              <li>Automatically adjust availability based on inventory</li>
              <li>Execute state changes based on environmental triggers</li>
            </ul>
            
            <div className="read-more-section">
              <h3>Additional Whitepaper Sections</h3>
              <p>The full whitepaper contains additional detailed sections covering:</p>
              <ul>
                <li>Marketplace Mechanics & Categories</li>
                <li>Consensus Mechanism & Validation</li>
                <li>Economic Model & Sustainability</li>
                <li>Governance Framework & Voting</li>
                <li>Cultural Protection Mechanisms</li>
                <li>Regulatory Compliance Strategies</li>
                <li>Climate Resilience Initiatives</li>
                <li>Development Roadmap & Milestones</li>
              </ul>
              <p>For the complete technical whitepaper and detailed tokenomics information, please visit our <a href="https://github.com/Pasifika-Web3-Tech-Hub/whitepaper" target="_blank" rel="noopener noreferrer" className="repo-link">Whitepaper GitHub Repository</a></p>
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
