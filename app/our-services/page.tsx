"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import "../page.css";
import "../shared-pages.css";
import "./services.css";

export default function Services() {
  const { isDarkMode } = useDarkMode();
  const [activeCategory, setActiveCategory] = useState('technical');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [bitcoinDropdownVisible, setBitcoinDropdownVisible] = useState(false);
  
  // We'll use Next.js Link component with direct HTML path links

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const targetElement = event.target as Element;
      if (!targetElement.closest('.bitcoin-dropdown-container')) {
        setBitcoinDropdownVisible(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

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
          <h1>Our Services</h1>
        </div>
        
        <div className="content-container services-container">
          {/* Category Selection Tabs */}
          <div className="services-tabs">
            <button 
              className={`service-tab ${activeCategory === 'technical' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('technical')}
            >
              Technical Services
            </button>
            <button 
              className={`service-tab ${activeCategory === 'community' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('community')}
            >
              Community Services
            </button>
          </div>

          {/* Technical Services Category */}
          <div className={`service-category ${activeCategory === 'technical' ? 'active' : ''}`}>
            <div className="service-category-intro">
              <h2 className="service-title">Technical Services</h2>
              <p>We provide Bitcoin, Lightning Network, and private blockchain infrastructure and technical support for Pacific Island governments, utilities, and businesses looking to leverage blockchain technology.</p>
              <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(255, 87, 34, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/lightning.svg" alt="Lightning Network" width={28} height={28} style={{ marginRight: '10px' }} />
                <span><strong>Bitcoin & Permissioned Solutions:</strong> Our technical solutions combine Bitcoin's security with custom blockchain systems for government and utility applications.</span>
              </div>
            </div>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-card-header">
                  <div className="service-icon">💼</div>
                  <h3>e-Gov Blockchains</h3>
                </div>
                <p>Custom private permissioned blockchain solutions for Pacific Island governments, enabling secure digital services, transparent governance, and efficient record-keeping.</p>
                <ul className="service-feature-list">
                  <li>Digital identity management systems</li>
                  <li>Land registry and property records</li>
                  <li>Transparent public procurement</li>
                  <li>Secure voting and public consultation</li>
                </ul>
                <div className="service-card-action">
                  <Link href="/portfolio/government/depin-pitch-deck.html" className="service-button" target="_blank">
                    Learn More
                  </Link>
                </div>
              </div>
              
              <div className="service-card">
                <div className="service-card-header">
                  <div className="service-icon">⚡</div>
                  <h3>Utilities DSS Support</h3>
                </div>
                <p>Blockchain-based decision support systems for Pacific utilities, enabling better resource management, payment tracking, and infrastructure maintenance for water, power, and telecommunications.</p>
                <ul className="service-feature-list">
                  <li>Smart meter integration and payments</li>
                  <li>Distributed renewable energy management</li>
                  <li>Water resource allocation systems</li>
                  <li>Predictive maintenance tracking</li>
                </ul>
                <div className="service-card-action">
                  <Link href="/portfolio/technical/utilities-gis-blockchain.html" className="service-button" target="_blank">
                    Learn More
                  </Link>
                </div>
              </div>
              
              <div className="service-card">
                <div className="service-card-header">
                  <div className="service-icon">⛏️</div>
                  <h3>Bitcoin Node & Mining</h3>
                </div>
                <p>Professional Bitcoin node operation and mining services tailored for Pacific Island environments, with a focus on sustainable energy sources and profitable mining operations.</p>
                <ul className="service-feature-list">
                  <li>Bitcoin Core full node setup and maintenance</li>
                  <li>ASIC mining hardware procurement and hosting</li>
                  <li>Renewable energy-powered mining operations</li>
                  <li>Mining pool setup and management</li>
                </ul>
                <div className="service-card-action">
                  <Link href="/portfolio/technical/bitcoin-mining.html" className="service-button" target="_blank">
                    Learn More
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Community Services Category */}
          <div className={`service-category ${activeCategory === 'community' ? 'active' : ''}`}>
            <div className="service-category-intro">
              <h2 className="service-title">Community Services</h2>
              <p>Supporting the growth of Bitcoin and Lightning Network adoption throughout Pacific Island communities with focused education, resources, and local support networks.</p>
              <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(255, 87, 34, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/bitcoin.svg" alt="Bitcoin" width={28} height={28} style={{ marginRight: '10px' }} />
                <span><strong>Bitcoin Education Focus:</strong> Our community programs emphasize Bitcoin as a tool for financial sovereignty and economic resilience in Pacific contexts.</span>
              </div>
            </div>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-card-header">
                  <div className="service-icon">₿</div>
                  <h3>Bitcoin Education & Training</h3>
                </div>
                <p>Localized Bitcoin education programs tailored to Pacific contexts, with workshops, online courses, and hands-on training in local languages for all skill levels.</p>
                <ul className="service-feature-list">
                  <li>Bitcoin fundamentals in local languages</li>
                  <li>Lightning Network developer bootcamps</li>
                  <li>Business Bitcoin integration workshops</li>
                  <li>Self-custody security best practices</li>
                </ul>
                <div className="service-card-action">
                  {/* Using Next.js Link component like other service cards */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
                    <div style={{ fontWeight: 'bold' }}>Educational Resources:</div>
                    <Link 
                      href="/portfolio/bitcoin/bitcoin-primer.html" 
                      className="service-button"
                      target="_blank"
                      style={{ display: 'block', width: '200px', textAlign: 'center' }}
                    >
                      Bitcoin Primer
                    </Link>
                    <Link 
                      href="/portfolio/bitcoin/bitcoin-node-guide.html" 
                      className="service-button"
                      target="_blank"
                      style={{ display: 'block', width: '200px', textAlign: 'center', marginTop: '10px' }}
                    >
                      Bitcoin Node Guide
                    </Link>
                    <Link 
                      href="/portfolio/bitcoin/linux-firewall-guide.html" 
                      className="service-button"
                      target="_blank"
                      style={{ display: 'block', width: '200px', textAlign: 'center', marginTop: '10px' }}
                    >
                      Linux Firewall Guide
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="service-card">
                <div className="service-card-header">
                  <div className="service-icon">⚡</div>
                  <h3>Lightning Education & Training</h3>
                </div>
                <p>Support for establishing and growing local Bitcoin communities across Pacific islands, including meetups, workshops, and connections to the global Bitcoin ecosystem.</p>
                <ul className="service-feature-list">
                  <li>Local Bitcoin meetup organization</li>
                  <li>Lightning Network hackathons</li>
                  <li>Bitcoin Beach-inspired initiatives</li>
                  <li>Bitcoin developer grants and support</li>
                </ul>
                <div className="service-card-action">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
                    <Link href="/bitcoin-cultural-services" className="service-button" target="_blank" style={{ display: 'block', width: '200px', textAlign: 'center' }}>
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="service-card">
                <div className="service-card-header">
                  <div className="service-icon">🌐</div>
                  <h3>Bitcoin & Lightning Community Building</h3>
                </div>
                <p>Digital tools for preserving Pacific cultural heritage using Bitcoin-based technologies, including Ordinals and the RGB protocol for secure, permanent cultural asset preservation.</p>
                <ul className="service-feature-list">
                  <li>Bitcoin Ordinals for cultural artifacts</li>
                  <li>RGB protocol for cultural asset issuance</li>
                  <li>Immutable Bitcoin-based archiving</li>
                  <li>Sustainable revenue models for creators</li>
                </ul>
                <div className="service-card-action">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
                    <Link href="/bitcoin-cultural-services" className="service-button" style={{ display: 'block', width: '200px', textAlign: 'center' }}>
                      Learn More
                    </Link>
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
