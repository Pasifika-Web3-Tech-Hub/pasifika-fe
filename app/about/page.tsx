"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import "../page.css";
import "../shared-pages.css";

export default function About() {
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
          <h1>About Us</h1>
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
              <h2>Building the Future of Pacific Island Web3 Technology</h2>
              <p className="whitepaper-version">Established 2025</p>
              <div className="whitepaper-divider"></div>
            </div>
            
            <h2>Our Story</h2>
            <p>We&apos;re on a mission to empower Pacific Island communities through accessible Web3 technologies, creating economic opportunities while preserving and celebrating our cultural heritage. We believe in building decentralized systems that work for people regardless of their location, technical background, or economic status.</p>
            
            <h3>Our Mission</h3>
            <p>We&apos;re on a mission to empower Pacific Island communities through accessible Web3 technologies, creating economic opportunities while preserving and celebrating our cultural heritage. We believe in building decentralized systems that work for people regardless of their location, technical background, or economic status.</p>
            
            <h3>Our Vision</h3>
            <p>We envision a future where Pacific Island communities are active participants in the global digital economy, with tools and infrastructure that address our specific needs and challenges. Through the Pasifika Web3 Marketplace, we aim to create resilient economic systems that can withstand geographical isolation, climate challenges, and limited traditional infrastructure.</p>
            
            <h2>Our Team</h2>
            <p>Our founding team brings together expertise from blockchain development, community organizing, traditional Pacific knowledge systems, and international finance:</p>
            
            <div className="features-grid team-grid">
              <div className="feature-card team-member">
                <div className="feature-icon team-member-photo">
                  <Image src="/edwin.png" alt="Edwin Liava&apos;a" width={70} height={70} />
                </div>
                <h3 className="feature-title">Edwin Liava&apos;a</h3>
                <p className="feature-text">
                  Founder, Blockchain & Digital Transformation Engineer
                </p>
                <p className="feature-location">Fiji</p>
                <a href="https://www.linkedin.com/in/edwin-liavaa/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="feature-card team-member">
                <div className="feature-icon team-member-photo">
                  <Image src="/tenanoia.png" alt="Tenanoia Veronica Simona" width={70} height={70} />
                </div>
                <h3 className="feature-title">Tenanoia Veronica Simona</h3>
                <p className="feature-text">
                  co-Founder, CEO at Tuvalu Telecommunications Corporation
                </p>
                <p className="feature-location">Tuvalu</p>
                <a href="https://www.linkedin.com/in/ACoAAARD0xAB9-x51CLKG-LC1dP5afg_3Kwqjjg" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="feature-card team-member">
                <div className="feature-icon team-member-photo">
                  <Image src="/suzanne.png" alt="Suzanne Moli Orudiana" width={70} height={70} />
                </div>
                <h3 className="feature-title">Suzanne Moli Orudiana</h3>
                <p className="feature-text">
                  co-Founder, Managing Director of Intellectual Solutions
                </p>
                <p className="feature-location">Solomon Islands</p>
                <a href="https://www.linkedin.com/in/ACoAAAzXV9ABswa8sUOrI0bjhdxKk2VdF7ZB1-M" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="feature-card team-member">
                <div className="feature-icon team-member-photo">
                  <Image src="/seluvaia.png" alt="Seluvaia Kauvaka" width={70} height={70} />
                </div>
                <h3 className="feature-title">Seluvaia Kauvaka</h3>
                <p className="feature-text">
                  co-Founder, Project Coordinator (PMU - SCA & MET)
                </p>
                <p className="feature-location">Tonga</p>
                <a href="https://www.linkedin.com/in/ACoAABPDT9wB1j9f2wn7lUZ9YJiP8vR6hgvgMco" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="feature-card team-member">
                <div className="feature-icon team-member-photo">
                  <Image src="/lusia.png" alt="Lusia Jones" width={70} height={70} />
                </div>
                <h3 className="feature-title">Lusia Jones</h3>
                <p className="feature-text">
                  co-Founder, Visionary Leader & Heart-led Changemaker
                </p>
                <p className="feature-location">New Zealand</p>
                <a href="https://www.linkedin.com/in/ACoAAALsKcoBcTnEqFKPjl5y6Br5i9fgfRUEVLw" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="feature-card team-member">
                <div className="feature-icon team-member-photo">
                  <Image src="/semisi.png" alt="Semisi Siupeli Taufa" width={70} height={70} />
                </div>
                <h3 className="feature-title">Semisi Siupeli Taufa</h3>
                <p className="feature-text">
                  co-Founder, Chief System Analyst, Prime Minister&apos;s Office
                </p>
                <p className="feature-location">Tonga</p>
                <a href="https://www.linkedin.com/in/semisi-siupeli-taufa-8945aa78/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  LinkedIn Profile
                </a>
              </div>
            </div>
            
            <h3>Our Approach</h3>
            <p>We believe in building technology that is:</p>
            <ul>
              <li><strong>Community-driven:</strong> Developed with and for Pacific communities</li>
              <li><strong>Culturally respectful:</strong> Honoring Pacific values and traditions</li>
              <li><strong>Practically focused:</strong> Addressing real economic and social needs</li>
              <li><strong>Environmentally conscious:</strong> Minimizing ecological impact</li>
              <li><strong>Inclusive by design:</strong> Accessible regardless of technical knowledge</li>
            </ul>
            
            <h3>Our Partners</h3>
            <p>We&apos;re proud to work with a growing network of regional and international partners including:</p>
            <ul>
              <li>Pacific Island regional organizations</li>
              <li>Local government technology initiatives</li>
              <li>International blockchain development firms</li>
              <li>TachyonX accelerator program</li>
              <li>Linea zkEVM Layer-2 ecosystem</li>
              <li>Academic institutions researching decentralized systems</li>
              <li>Community development organizations</li>
            </ul>
            
            <div className="team-values">
              <h3>Our Values</h3>
              <div className="values-grid">
                <div className="value-item">
                  <div className="value-icon">🤝</div>
                  <h4>Community</h4>
                  <p>Building technology that strengthens Pacific communities and traditions</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">🌊</div>
                  <h4>Resilience</h4>
                  <p>Creating systems that adapt to the unique challenges of island environments</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">🌱</div>
                  <h4>Sustainability</h4>
                  <p>Designing eco-friendly solutions that respect our natural environment</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">🔗</div>
                  <h4>Connection</h4>
                  <p>Bridging traditional knowledge with emerging technologies</p>
                </div>
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
