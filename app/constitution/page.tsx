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
          <h1>Constitution</h1>
        </div>
        
        <div className="content-container">
          <div className="content-section">
            <h2>Founding Principles</h2>
            <p>The Pasifika Web3 Tech Hub Constitution outlines our commitment to creating a decentralized digital ecosystem that empowers Pacific Island communities through blockchain technology and innovation.</p>
            
            <h3>Core Values</h3>
            <ul>
              <li><strong>Community First:</strong> Prioritizing the needs and interests of Pacific communities in all decisions</li>
              <li><strong>Transparency:</strong> Maintaining open governance and clear communication</li>
              <li><strong>Innovation:</strong> Embracing new technologies to solve regional challenges</li>
              <li><strong>Sustainability:</strong> Ensuring long-term environmental and economic viability</li>
              <li><strong>Inclusivity:</strong> Creating opportunities accessible to all Pacific Islanders</li>
            </ul>
            
            <h3>Governance Structure</h3>
            <p>Our governance model is based on distributed decision-making, with representation from diverse Pacific Island nations. The structure includes:</p>
            <ul>
              <li>Community Council with elected representatives</li>
              <li>Technical Advisory Board for technological decisions</li>
              <li>Regional Ambassadors representing specific island nations</li>
            </ul>
            
            <h3>Decision Making Process</h3>
            <p>Major decisions affecting the platform require consensus through our transparent voting system, with votes weighted based on platform participation and contribution.</p>
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
