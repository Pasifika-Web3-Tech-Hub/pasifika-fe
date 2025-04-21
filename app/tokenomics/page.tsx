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
          <h1>PASIFIKA Token (PSF) Tokenomics</h1>
        </div>
        
        <div className="content-container">
          <div className="content-section">
            <div className="whitepaper-header">
              <Image
                src="/pasifika.png"
                alt="Pasifika Web3 Tech Hub"
                width={300}
                height={300}
                className="whitepaper-logo"
              />
              <h2>A Sustainable Economic Model for Pacific Island Communities</h2>
              <p className="whitepaper-version">Version 1.0 | May 2025</p>
              <div className="whitepaper-divider"></div>
            </div>
            
            <h2>Overview</h2>
            <p>The PASIFIKA token (PSF) serves as the native utility and governance token for the Pasifika Web3 Tech Hub ecosystem. Built on the Linea zkEVM Layer-2 platform and aligned with TachyonX's vision for AI-native infrastructure, PSF enables a comprehensive economic model that incentivizes participation, ensures fair governance, and creates sustainable value for Pacific Island communities.</p>
            
            <h2>Token Utility</h2>
            <p>The PASIFIKA token has multiple use cases within our ecosystem:</p>
            
            <div className="grid-2-cols">
              <div>
                <h4>Marketplace Currency</h4>
                <ul>
                  <li>Primary medium of exchange for all goods and services</li>
                  <li>Payment for data, digital content, handicrafts, and agricultural products</li>
                  <li>Transaction fees (0.25% commission) collected in PSF</li>
                </ul>
                
                <h4>Governance</h4>
                <ul>
                  <li>Voting rights for DAO proposals proportional to tokens staked</li>
                  <li>Quadratic voting mechanism to prevent large token holder dominance</li>
                  <li>Proposal submission requires minimum token stake</li>
                </ul>
                
                <h4>Staking Rewards</h4>
                <ul>
                  <li>Staking PSF provides governance rights and rewards</li>
                  <li>Longer staking periods yield higher governance weight</li>
                  <li>Staking rewards sourced from marketplace fees</li>
                </ul>
                
                <h4>Provider Incentives</h4>
                <ul>
                  <li>Token rewards for high-quality data and content providers</li>
                  <li>Bonuses for verified cultural artifacts and traditional knowledge</li>
                  <li>Agricultural sensor network participation rewards</li>
                </ul>
              </div>
              <div>
                <h4>Consumer Benefits</h4>
                <ul>
                  <li>Discounts on marketplace purchases for token holders</li>
                  <li>Access to premium features and exclusive offerings</li>
                  <li>Loyalty rewards for platform engagement</li>
                </ul>
                
                <h4>Validator Compensation</h4>
                <ul>
                  <li>Payment for quality and cultural validation services</li>
                  <li>Rewards for accurate data verification</li>
                  <li>Compensation for dispute resolution</li>
                </ul>
                
                <h4>AI Agent Economy</h4>
                <ul>
                  <li>Powering AI agent operations in the marketplace</li>
                  <li>Training data marketplace access</li>
                  <li>Rewards for contributing to autonomous systems</li>
                </ul>
              </div>
            </div>
            
            <h2>Token Distribution</h2>
            <p>Total Supply: 1,000,000,000 PSF</p>
            
            <ul className="token-distribution">
              <li><strong>Community Allocation (40%)</strong>: 400,000,000 PSF
                <ul>
                  <li>Pacific Island participants: 200,000,000 PSF</li>
                  <li>Ecosystem growth and adoption: 150,000,000 PSF</li>
                  <li>Community grants and initiatives: 50,000,000 PSF</li>
                </ul>
              </li>
              
              <li><strong>DAO Treasury (25%)</strong>: 250,000,000 PSF
                <ul>
                  <li>Infrastructure development: 100,000,000 PSF</li>
                  <li>Staking rewards: 100,000,000 PSF</li>
                  <li>Emergency/contingency fund: 50,000,000 PSF</li>
                </ul>
              </li>
              
              <li><strong>Team & Development (15%)</strong>: 150,000,000 PSF
                <ul>
                  <li>4-year vesting schedule with 1-year cliff</li>
                  <li>Allocated to founders, developers, and early contributors</li>
                </ul>
              </li>
              
              <li><strong>TachyonX Allocation (10%)</strong>: 100,000,000 PSF
                <ul>
                  <li>Strategic partnerships and technical development</li>
                  <li>AI infrastructure integration</li>
                  <li>Ecosystem alignment with Consensys</li>
                </ul>
              </li>
              
              <li><strong>Investors (10%)</strong>: 100,000,000 PSF
                <ul>
                  <li>Private sale to strategic investors</li>
                  <li>Public token sale</li>
                  <li>Liquidity provision</li>
                </ul>
              </li>
            </ul>
            
            <h2>Tokenomics Mechanisms</h2>
            
            <div className="grid-2-cols">
              <div>
                <h4>Token Burning</h4>
                <ul>
                  <li>10% of all marketplace fees permanently burned</li>
                  <li>Deflationary mechanism to increase scarcity over time</li>
                </ul>
                
                <h4>Staking Tiers</h4>
                <ul>
                  <li>Bronze: 1,000+ PSF staked (1x governance weight)</li>
                  <li>Silver: 10,000+ PSF staked (1.5x governance weight)</li>
                  <li>Gold: 100,000+ PSF staked (2x governance weight)</li>
                  <li>Platinum: 1,000,000+ PSF staked (3x governance weight)</li>
                </ul>
              </div>
              <div>
                <h4>Dynamic Rewards</h4>
                <ul>
                  <li>Higher rewards during early adoption phase</li>
                  <li>Adjusts based on marketplace growth and participation metrics</li>
                  <li>Special reward multipliers for underrepresented island communities</li>
                </ul>
                
                <h4>Cultural Heritage Fund</h4>
                <ul>
                  <li>2% of all token transactions allocated to cultural preservation</li>
                  <li>Managed by dedicated cultural authorities from Pacific Islands</li>
                  <li>Funds traditional knowledge documentation and preservation</li>
                </ul>
              </div>
            </div>
            
            <h2>Tokenization Roadmap</h2>
            
            <div className="roadmap">
              <div className="roadmap-phase">
                <h4>Phase 1: Foundation (Q2-Q3 2025)</h4>
                <ul>
                  <li>Complete token smart contract development and security audits</li>
                  <li>Establish initial DAO governance framework</li>
                  <li>Onboard strategic investors and partners</li>
                  <li>Allocate initial tokens to core team and developers</li>
                  <li>Join TachyonX accelerator program</li>
                </ul>
              </div>
              
              <div className="roadmap-phase">
                <h4>Phase 2: Private Distribution (Q3-Q4 2025)</h4>
                <ul>
                  <li>Private token sale to strategic investors</li>
                  <li>Community token allocation to initial Pacific Island participants</li>
                  <li>Deploy staking contracts on Linea</li>
                  <li>Implement initial governance functionality</li>
                  <li>Launch testnet marketplace with token integration</li>
                </ul>
              </div>
              
              <div className="roadmap-phase">
                <h4>Phase 3: Mainnet Launch (Q1 2026)</h4>
                <ul>
                  <li>Token Generation Event (TGE)</li>
                  <li>Public token sale (if applicable)</li>
                  <li>Launch mainnet marketplace with PSF as native currency</li>
                  <li>Activate quadratic voting governance system</li>
                  <li>Establish initial liquidity pools</li>
                  <li>Begin staking rewards program</li>
                </ul>
              </div>
              
              <div className="roadmap-phase">
                <h4>Phase 4: Ecosystem Expansion (Q2-Q3 2026)</h4>
                <ul>
                  <li>Integrate AI agent economy using PSF</li>
                  <li>Launch cross-marketplace partnerships</li>
                  <li>Implement advanced staking mechanics</li>
                  <li>Roll out validator reward system</li>
                  <li>Deploy sensor network incentives</li>
                </ul>
              </div>
              
              <div className="roadmap-phase">
                <h4>Phase 5: Advanced Utility (Q4 2026 onwards)</h4>
                <ul>
                  <li>Implement dynamic NFT marketplace with PSF integration</li>
                  <li>Launch cultural heritage preservation mechanism</li>
                  <li>Deploy decentralized exchange for PSF pairs</li>
                  <li>Integrate with broader DeFi ecosystem</li>
                  <li>Establish cross-chain bridges for expanded accessibility</li>
                </ul>
              </div>
            </div>
            
            <div className="read-more-section">
              <h3>Additional Tokenomics Details</h3>
              <p>The full tokenomics documentation contains additional detailed sections covering:</p>
              <ul>
                <li>Token Governance & Hybrid Voting System</li>
                <li>Vesting Schedules & Token Release Strategy</li>
                <li>Economic Sustainability & Value Accrual Mechanisms</li>
                <li>TachyonX Integration & Strategic Partnerships</li>
                <li>Regulatory Compliance Framework</li>
                <li>Risk Mitigation Strategies</li>
                <li>Growth Incentives & Development Funding</li>
              </ul>
              <p>For the complete tokenomics documentation and technical details, please visit our <a href="https://github.com/Pasifika-Web3-Tech-Hub/tokenomics" target="_blank" rel="noopener noreferrer" className="repo-link">Tokenomics GitHub Repository</a></p>
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
