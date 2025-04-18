"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import "../page.css";
import "../shared-pages.css";

export default function Tokenomics() {
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
          <h1>Tokenomics</h1>
        </div>
        
        <div className="content-container">
          <div className="content-section">
            <h2>PASIFIKA Token Economic Model</h2>
            <p>Our tokenomics model is designed to create a sustainable ecosystem that provides value to all participants while supporting the long-term growth of the Pasifika Web3 Marketplace.</p>
            
            <h3>Token Utility</h3>
            <p>The PASIFIKA token serves multiple functions within our ecosystem:</p>
            <ul>
              <li><strong>Governance:</strong> Token holders can vote on platform upgrades and policy changes</li>
              <li><strong>Transaction Fee Discounts:</strong> Users can reduce marketplace fees by using PASIFIKA tokens</li>
              <li><strong>Staking Rewards:</strong> Token holders can earn passive income by staking to support platform security</li>
              <li><strong>Community Treasury:</strong> A portion of fees goes to a community fund for regional development initiatives</li>
            </ul>
            
            <h3>Token Distribution</h3>
            <p>The initial token distribution is structured to ensure fair allocation and long-term sustainability:</p>
            <ul>
              <li><strong>Community Allocation (40%):</strong> Reserved for community members, airdrops, and adoption incentives</li>
              <li><strong>Development Fund (25%):</strong> Funding ongoing platform development and technical improvements</li>
              <li><strong>Founding Team (15%):</strong> Allocated to founders with a 3-year vesting schedule</li>
              <li><strong>Partnerships & Ecosystem (10%):</strong> Strategic partnerships and ecosystem growth</li>
              <li><strong>Liquidity Pool (10%):</strong> Ensuring market liquidity and token stability</li>
            </ul>
            
            <h3>Emission Schedule</h3>
            <p>PASIFIKA has a fixed supply of 100 million tokens with a gradual release schedule:</p>
            <ul>
              <li>Initial circulation: 15% of total supply</li>
              <li>Years 1-2: Additional 25% released via staking rewards and ecosystem development</li>
              <li>Years 3-4: Additional 30% released</li>
              <li>Years 5+: Remaining 30% gradually released to maintain ecosystem growth</li>
            </ul>
            
            <h3>Economic Sustainability</h3>
            <p>Our tokenomics model incorporates several mechanisms to ensure long-term economic sustainability:</p>
            <ul>
              <li>Partial token burning from marketplace fees to create deflationary pressure</li>
              <li>Dynamic staking rewards based on network activity</li>
              <li>Anti-whale measures to prevent market manipulation</li>
              <li>Regular economic audits and adjustments via community governance</li>
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
