"use client";

import PasifikaWalletConnect from "./components/PasifikaWalletConnect";
import React, { useState, useEffect } from 'react';
import { useDarkMode } from "@/lib/useDarkMode";
import Link from 'next/link';
import Image from "next/image";
import "./page.css";
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
            {/* Login button removed */}
          </div>
        </div>
      </div>

      {/* Hero Section - Pasifika Styled */}
      <div className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Building The Future with Web3</h1>
            <p className="hero-subtitle">
              Join us in creating a decentralized ecosystem for a marketplace that empowers Pacific communities through blockchain technology and digital innovation.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => window.location.href = "/learn-more"}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '500',
                  borderRadius: '30px',
                  boxShadow: '0 4px 8px rgba(255, 87, 34, 0.3)'
                }}
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
          <p className="philosophy-text" style={{ fontSize: '1.4rem', color: isDarkMode ? '#FF9800' : '#333333', fontStyle: 'italic', marginTop: '5px' }}>&ldquo;If we take care of our own, they will take care of us.&rdquo;</p>
        </div>
      </div>

      {/* Our Story Link Section */}
      <div style={{ 
        padding: '20px 0', 
        backgroundColor: isDarkMode ? 'rgba(255, 87, 34, 0.1)' : 'rgba(255, 152, 0, 0.05)', 
        margin: '0 auto 40px',
        borderTop: '1px solid #FF5722',
        borderBottom: '1px solid #FF5722',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '20px'
          }}>
            <h2 style={{ 
              fontSize: '1.8rem', 
              marginBottom: '15px',
              background: 'linear-gradient(to right, #FF5722, #FF9800)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Discover Our Journey
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px', maxWidth: '700px' }}>
              Learn about the vision, progress, and future of Pasifika Web3 Tech Hub as we build a decentralized ecosystem for Pacific Island communities.
            </p>
            <a 
              href="/our-story" 
              style={{
                display: 'inline-block',
                padding: '12px 30px',
                background: 'linear-gradient(to right, #FF5722, #FF9800)',
                color: 'white',
                borderRadius: '30px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 8px rgba(255, 87, 34, 0.3)',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(255, 87, 34, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(255, 87, 34, 0.3)';
              }}
            >
              Read Our Story
            </a>
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
              {/* Custom Wallet Connection Widget */}
              <PasifikaWalletConnect />
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
      
      {/* Our Services Section */}
      <div className="dep-in-section" style={{ background: isDarkMode ? '#222' : '#fff', padding: '1.5rem', margin: '1.5rem auto', maxWidth: 900, borderRadius: 12, boxShadow: isDarkMode ? '0 2px 16px #111' : '0 2px 16px #eee' }}>
        <h2 style={{ textAlign: 'center', color: isDarkMode ? '#FF9800' : '#FF5722', marginBottom: '1.5rem', fontSize: '2rem', fontWeight: '600' }}>Our Services</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div style={{ padding: '1.8rem', background: isDarkMode ? '#333' : '#f8f8f8', borderRadius: '12px', borderTop: '5px solid #FF5722', boxShadow: isDarkMode ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ backgroundColor: '#FF5722', borderRadius: '50%', width: '42px', height: '42px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '12px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M21,18V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18H21M12,16H22V8H12V16M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z" /></svg>
              </div>
              <h3 style={{ color: isDarkMode ? '#FF9800' : '#FF5722', margin: '0', fontSize: '1.4rem', fontWeight: '600' }}>Digital Asset Management</h3>
            </div>
            <p style={{ margin: '0', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Secure storage, transfer, and management of Bitcoin assets with user-friendly Lightning Network-compatible wallet solutions tailored for Pacific users.
            </p>
          </div>
          
          <div style={{ padding: '1.8rem', background: isDarkMode ? '#333' : '#f8f8f8', borderRadius: '12px', borderTop: '5px solid #FF5722', boxShadow: isDarkMode ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ backgroundColor: '#FF5722', borderRadius: '50%', width: '42px', height: '42px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '12px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,5A3.5,3.5 0 0,0 9,8.5A3.5,3.5 0 0,0 12.5,12A3.5,3.5 0 0,0 16,8.5A3.5,3.5 0 0,0 12.5,5M5.5,8A2.5,2.5 0 0,0 3,10.5A2.5,2.5 0 0,0 5.5,13A2.5,2.5 0 0,0 8,10.5A2.5,2.5 0 0,0 5.5,8M18.5,8A2.5,2.5 0 0,0 16,10.5A2.5,2.5 0 0,0 18.5,13A2.5,2.5 0 0,0 21,10.5A2.5,2.5 0 0,0 18.5,8M12,14C9.66,14 7.14,15.33 5.63,17.63C6.83,19.17 8.9,20 12,20C15.1,20 17.17,19.17 18.37,17.63C16.86,15.33 14.34,14 12,14Z" /></svg>
              </div>
              <h3 style={{ color: isDarkMode ? '#FF9800' : '#FF5722', margin: '0', fontSize: '1.4rem', fontWeight: '600' }}>Community Governance</h3>
            </div>
            <p style={{ margin: '0', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Participate in Bitcoin-powered community decision-making through our inclusive governance system, ensuring all Pacific Island community members have a voice in our development.
            </p>
          </div>
          
          <div style={{ padding: '1.8rem', background: isDarkMode ? '#333' : '#f8f8f8', borderRadius: '12px', borderTop: '5px solid #FF5722', boxShadow: isDarkMode ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ backgroundColor: '#FF5722', borderRadius: '50%', width: '42px', height: '42px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '12px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" /></svg>
              </div>
              <h3 style={{ color: isDarkMode ? '#FF9800' : '#FF5722', margin: '0', fontSize: '1.4rem', fontWeight: '600' }}>Education & Resources</h3>
            </div>
            <p style={{ margin: '0', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Comprehensive learning materials about Bitcoin, Lightning Network, and Web3 technologies, designed specifically for practical application in Pacific Island contexts.
            </p>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link 
            href="/our-services" 
            style={{
              display: 'inline-block',
              padding: '12px 30px',
              background: 'linear-gradient(to right, #FF5722, #FF9800)',
              color: 'white',
              borderRadius: '30px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              boxShadow: '0 4px 8px rgba(255, 87, 34, 0.3)'
            }}
            onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(255, 87, 34, 0.4)';
            }}
            onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(255, 87, 34, 0.3)';
            }}
          >
            Explore All Services
          </Link>
        </div>
      </div>


      {/* Cultural Values Section */}
      <div className="dep-in-section" style={{ background: isDarkMode ? '#222' : '#fff', padding: '1.5rem', margin: '1.5rem auto', maxWidth: 900, textAlign: 'center', borderRadius: 12, boxShadow: isDarkMode ? '0 2px 16px #111' : '0 2px 16px #eee' }}>
        <h2 style={{ color: isDarkMode ? '#FF9800' : '#FF5722', marginBottom: '1rem' }}>Beyond Technology: Cultural Significance</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          What truly sets our approach apart is how Bitcoin and Lightning Network technology allows us to encode Pacific Island cultural values into digital infrastructure while providing security and accessibility essential for Pacific communities:
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          <div>
            <h3 style={{ color: isDarkMode ? '#FF9800' : '#FF5722', margin: '0' }}>🤝 Reciprocity</h3>
            <p>Just as traditional Pacific economies function on gift giving and mutual support, our profit sharing mechanism ensures value flows back to community members.</p>
          </div>
          
          <div>
            <h3 style={{ color: isDarkMode ? '#FF9800' : '#FF5722', margin: '0' }}>🌴 Shared Stewardship</h3>
            <p>The graduated fee structure mirrors traditional systems where those with greater responsibility to the community receive greater benefits.</p>
          </div>
          
          <div>
            <h3 style={{ color: isDarkMode ? '#FF9800' : '#FF5722', margin: '0' }}>🏝️ Accessibility</h3>
            <p>By leveraging Lightning Network's payment channels, we enable instant, low-cost Bitcoin transactions and ensure that participation remains accessible to all community members, regardless of economic status or technical expertise.</p>
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
