"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import "../page.css";
import "../shared-pages.css";

export default function Services() {
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
        </div>
      </div>

      {/* Footer Banner */}
      <div className="footer-banner">
        <p>Copyright &copy; Pasifika 2025</p>
      </div>
    </div>
  );
}
