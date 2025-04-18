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
              alt="Pasifika Web3 Tech Hub"
              width={50}
              height={50}
            />
            <div className="logo-text">
              <span className="logo-accent">Pasifika Web3 Tech Hub</span>
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
          <h1>Whitepaper</h1>
        </div>
        
        <div className="content-container">
          <div className="content-section">
            <h2>Pasifika Web3 Marketplace Technical Vision</h2>
            <p>This whitepaper outlines the technical foundations and strategic vision for the Pasifika Web3 Marketplace, a blockchain-based ecosystem designed specifically for Pacific Island communities.</p>
            
            <h3>Executive Summary</h3>
            <p>The Pasifika Web3 Marketplace represents a paradigm shift in how Pacific Island communities engage with digital economies. By leveraging blockchain technology, we aim to create a decentralized marketplace that addresses the unique challenges faced by island nations while unlocking new economic opportunities.</p>
            
            <h3>Technology Stack</h3>
            <p>Our platform is built on a robust technology stack that includes:</p>
            <ul>
              <li><strong>Blockchain Layer:</strong> Ethereum-compatible smart contracts with layer-2 scaling solutions</li>
              <li><strong>Front-end:</strong> Next.js React framework for responsive, accessible interfaces</li>
              <li><strong>Backend Services:</strong> Distributed node architecture for resilience against connectivity challenges</li>
              <li><strong>Data Storage:</strong> IPFS for decentralized content storage</li>
              <li><strong>Identity Management:</strong> Self-sovereign identity protocols with optional KYC</li>
            </ul>
            
            <h3>Key Features</h3>
            <p>The platform includes several innovative features designed for our specific use cases:</p>
            <ul>
              <li>Cross-border payment solutions with minimal fees</li>
              <li>Digital marketplace for cultural and physical goods</li>
              <li>Tokenized asset exchange compatible with regional regulations</li>
              <li>Community governance mechanisms for platform evolution</li>
              <li>Low-bandwidth operation modes for areas with limited connectivity</li>
            </ul>
            
            <h3>Implementation Roadmap</h3>
            <p>Our development follows a phased approach, with clear milestones and deliverables:</p>
            <ul>
              <li><strong>Phase 1 (Q3 2025):</strong> Core marketplace functionality and wallet integration</li>
              <li><strong>Phase 2 (Q4 2025):</strong> Regional payment gateways and identity framework</li>
              <li><strong>Phase 3 (Q1 2026):</strong> Governance mechanics and expanded marketplace categories</li>
              <li><strong>Phase 4 (Q2 2026):</strong> Mobile-first features and offline transaction support</li>
            </ul>
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
