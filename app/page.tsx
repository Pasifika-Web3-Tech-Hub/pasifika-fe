"use client";

import { DynamicWidget } from "@/lib/dynamic";
import { useState, useEffect } from "react";
import { useDarkMode } from "@/lib/useDarkMode";
import "./page.css";
import Image from "next/image";
import Counter from './components/Counter.js';
import Increment from './components/Increment.js';

export default function Main() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Header Section - Pasifika Styled */}
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
              <button
                className="btn btn-primary"
                onClick={() => {
                  const tokenBanner = document.querySelector('.token-banner');
                  if (tokenBanner) {
                    // Use scrollIntoView with an offset to ensure the banner is visible
                    const headerHeight = 80; // Height of the fixed header
                    const yOffset = -headerHeight; // Offset to account for the fixed header
                    const y = tokenBanner.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    
                    window.scrollTo({
                      top: y,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Login or Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Pasifika Styled */}
      <div className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Building The Future of Pacific Web3 Marketplace</h1>
            <p className="hero-subtitle">
              Join us in creating a decentralized ecosystem that empowers Pacific communities
              through blockchain technology and digital innovation.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => {
                  const tokenBanner = document.querySelector('.token-banner');
                  if (tokenBanner) {
                    // Use scrollIntoView with an offset to ensure the banner is visible
                    const headerHeight = 80; // Height of the fixed header
                    const yOffset = -headerHeight; // Offset to account for the fixed header
                    const y = tokenBanner.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    
                    window.scrollTo({
                      top: y,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Get Started
              </button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/pasifika.png"
              alt="Pasifika"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>

      {/* Our Team Section - Pasifika Styled */}
      <div className="features">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            Meet the co-Founders of Pasifika Web3 Tech Hub
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon team-member-photo">
                <Image src="/icons/team1.png" alt="Team Member" width={70} height={70} />
              </div>
              <h3 className="feature-title">Leilani Tonga</h3>
              <p className="feature-text">
                Co-Founder & Blockchain Specialist
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon team-member-photo">
                <Image src="/icons/team2.png" alt="Team Member" width={70} height={70} />
              </div>
              <h3 className="feature-title">Sione Mataele</h3>
              <p className="feature-text">
                Co-Founder & Technology Lead
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon team-member-photo">
                <Image src="/icons/team3.png" alt="Team Member" width={70} height={70} />
              </div>
              <h3 className="feature-title">Ana Vanuatu</h3>
              <p className="feature-text">
                Co-Founder & Community Manager
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon team-member-photo">
                <Image src="/icons/team4.png" alt="Team Member" width={70} height={70} />
              </div>
              <h3 className="feature-title">Tevita Samoa</h3>
              <p className="feature-text">
                Co-Founder & Marketing Director
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon team-member-photo">
                <Image src="/icons/team5.png" alt="Team Member" width={70} height={70} />
              </div>
              <h3 className="feature-title">Marama Fiji</h3>
              <p className="feature-text">
                Co-Founder & Financial Strategist
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon team-member-photo">
                <Image src="/icons/team6.png" alt="Team Member" width={70} height={70} />
              </div>
              <h3 className="feature-title">Koa Hawaii</h3>
              <p className="feature-text">
                Co-Founder & Operations Lead
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Login and Footer Combined Section */}
      <div className="token">
        <div className="token-banner">
          <h2 className="token-banner-title">Login or Sign-Up</h2>
        </div>
        <div className="container">
          <div className="token-container">
            <div className="token-content">
              <p className="token-subtitle">
                Sign in or create an account to access all features of the Pasifika Web3 Tech Hub.
              </p>
              <div className="token-features">
                <div className="token-feature">
                  <div className="token-feature-icon">✓</div>
                  <div>Secure connection with multiple wallet providers</div>
                </div>
                <div className="token-feature">
                  <div className="token-feature-icon">✓</div>
                  <div>Access to blockchain features and services</div>
                </div>
                <div className="token-feature">
                  <div className="token-feature-icon">✓</div>
                  <div>Manage your digital assets easily</div>
                </div>
              </div>
            </div>
            <div className="token-chart">
              {/* Wallet Connection Widget */}
              <DynamicWidget />
              
              {/* Counter and Increment Components */}
              <div className="token-components">
                <div className="token-component-item">
                  <h3 className="token-component-title">Transaction Counter</h3>
                  <div className="token-component-content">
                    <Counter />
                  </div>
                </div>
                
                <div className="token-component-item">
                  <h3 className="token-component-title">Value Incrementer</h3>
                  <div className="token-component-content">
                    <Increment />
                  </div>
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
