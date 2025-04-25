"use client";

import { DynamicWidget } from "@/lib/dynamic";
import { useState, useEffect } from "react";
import { useDarkMode } from "@/lib/useDarkMode";
import "./page.css";
import Image from "next/image";
import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { useRouter } from 'next/navigation';

export default function Main() {
  const { isDarkMode } = useDarkMode();
  const { sdkHasLoaded, primaryWallet, handleLogOut } = useDynamicContext();
  const isLoggedIn = useIsLoggedIn();
  const router = useRouter();
  const [showRedirectPrompt, setShowRedirectPrompt] = useState(false);
  const [returningFromServices, setReturningFromServices] = useState(false);
  
  // Check if the user is returning from services page
  useEffect(() => {
    // Use sessionStorage to detect if user has just returned from services
    const fromServices = sessionStorage.getItem('fromServices');
    if (fromServices === 'true') {
      setReturningFromServices(true);
      sessionStorage.removeItem('fromServices');
    }
  }, []);
  
  // Effect to show redirect prompt when authenticated
  useEffect(() => {
    if (sdkHasLoaded && isLoggedIn && primaryWallet && !returningFromServices) {
      setShowRedirectPrompt(true);
    }
  }, [sdkHasLoaded, isLoggedIn, primaryWallet, returningFromServices]);
  
  // Handle redirect to services
  const handleRedirectToServices = () => {
    router.push('/services');
  };
  
  // Handle cancel redirect
  const handleCancelRedirect = () => {
    setShowRedirectPrompt(false);
  };
  
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
              <span className="logo-accent">Pasifika</span>
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
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Pasifika Styled */}
      <div className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Building The Future with Web3</h1>
            <p className="hero-subtitle">
              Join us in creating a decentralized ecosystem for a marketplace that empowers Pacific communities
              through blockchain technology and digital innovation.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => window.location.href = "/learn-more"}
              >
                Learn More and Get Started
              </button>
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

      {/* Service Motto Section */}
      <div className="service-motto" style={{ padding: '20px 0', backgroundColor: 'transparent' }}>
        <div className="container" style={{ textAlign: 'center', margin: '2rem auto' }}>
          <h2 className="motto-title" style={{ fontSize: '1.8rem', color: '#FF5722', marginBottom: '10px' }}>- Always At Your Service -</h2>
        </div>
      </div>

      {/* Our Team Section - Pasifika Styled */}
      <div className="features" style={{ paddingTop: '20px' }}>
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            Meet the Founder and co-Founders of Pasifika Web3 Tech Hub
          </p>
          
          <div className="features-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '30px', 
            justifyContent: 'center',
            marginBottom: '30px'
          }}>
            <div className="feature-card">
              <div className="feature-icon team-member-photo">
                <Image src="/edwin.png" alt="Edwin Liava&apos;a" width={70} height={70} />
              </div>
              <h3 className="feature-title">Edwin Liava&apos;a</h3>
              <p className="feature-text">
                Founder, Blockchain & Digital Transformation Engineer
              </p>
              <p className="feature-location">Tonga, Fiji, Samoa</p>
              <a href="https://www.linkedin.com/in/edwin-liavaa/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                LinkedIn Profile
              </a>
            </div>
            
            <div className="feature-card">
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
            
            <div className="feature-card">
              <div className="feature-icon team-member-photo">
                <Image src="/shaun.png" alt="Shaun Suliol" width={70} height={70} />
              </div>
              <h3 className="feature-title">Shaun Suliol</h3>
              <p className="feature-text">
                co-Founder, Digital Innovations Specialist
              </p>
              <p className="feature-location">Federated States of Micronesia</p>
              <a href="https://www.linkedin.com/in/shaun-suliol-58a748122" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                LinkedIn Profile
              </a>
            </div>
          </div>
          
          <div className="features-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '30px', 
            justifyContent: 'center',
            maxWidth: '66%',
            margin: '0 auto'
          }}>
            <div className="feature-card">
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
            
            <div className="feature-card">
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
              {/* Logout button when connected */}
              {isLoggedIn && primaryWallet && (
                <div className="logout-container">
                  <button 
                    className="btn logout-button"
                    onClick={() => {
                      if (handleLogOut) {
                        handleLogOut();
                        window.location.reload();
                      }
                    }}
                  >
                    Logout from Wallet
                  </button>
                </div>
              )}
              {/* Redirect prompt that appears when logged in */}
              {showRedirectPrompt && (
                <div className="redirect-prompt">
                  <p>You are now connected to your wallet!</p>
                  <div className="prompt-buttons">
                    <button 
                      className="btn btn-primary" 
                      onClick={handleRedirectToServices}
                    >
                      Continue to Services
                    </button>
                    <button 
                      className="btn btn-secondary" 
                      onClick={handleCancelRedirect}
                    >
                      Stay on Home Page
                    </button>
                  </div>
                </div>
              )}
              {/* Notice about functionality */}
              <div className="redirection-notice">
                <p>Connect your wallet to access our smart contract services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Spacer div with a fixed height of 1cm */}
      <div style={{ height: '1cm' }} />
      {/* Pasifika DePIN Description Section */}
      <div className="dep-in-section" style={{ background: isDarkMode ? '#222' : '#fff', color: isDarkMode ? '#FF9800' : '#FF5722', padding: '1rem 0', margin: '0 auto', maxWidth: 900, textAlign: 'center', borderRadius: 12, boxShadow: isDarkMode ? '0 2px 16px #111' : '0 2px 16px #eee' }}>
        <p style={{ fontSize: '1.25rem', fontWeight: 500, margin: 0 }}>
          The Pasifika Web3 Tech Hub represents a groundbreaking decentralized physical infrastructure network (DePIN) designed specifically for Pacific Island communities. Leveraging the native PASIFIKA token (PSF) and built on Linea&apos;s zkEVM Layer-2 technology, this platform creates a sustainable economic ecosystem that preserves cultural heritage while creating new digital opportunities for islanders.
        </p>
      </div>

      {/* Footer Banner */}
      <div className="footer-banner">
        <p>Copyright &copy; Pasifika 2025</p>
      </div>
    </div>
  );
}
