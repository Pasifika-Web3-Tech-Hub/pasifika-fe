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
              <h2>Building the Future of Pacific Islands Web3 Technology</h2>
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
            <p>Pasifika Web3 Tech Hub is now built on a streamlined, family-based team approach. After careful reflection, we&apos;ve pivoted from traditional Web2 methodologies to a more focused, essential development model that aligns with Web3 principles.</p>
            <p>Our core team consists of family members with deep expertise in blockchain development and Pacific Island contexts. This structure allows us to:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '25px', marginBottom: '30px' }}>
              <li style={{ margin: '10px 0' }}>Move faster with a smaller, focused team</li>
              <li style={{ margin: '10px 0' }}>Reduce unnecessary complexities and dependencies</li>
              <li style={{ margin: '10px 0' }}>Leverage deep family connections and shared vision</li>
              <li style={{ margin: '10px 0' }}>Focus exclusively on essential platform components</li>
              <li style={{ margin: '10px 0' }}>Maintain strong Pacific Island cultural ties</li>
            </ul>
            
            <div className="features-grid team-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '30px', 
              justifyContent: 'center',
              maxWidth: '66%',
              margin: '0 auto'
            }}>
              <div className="feature-card team-member">
                <div className="feature-icon team-member-photo">
                  <Image src="/edwin.png" alt="Edwin Liava&apos;a" width={70} height={70} />
                </div>
                <h3 className="feature-title">Edwin Liava&apos;a</h3>
                <p className="feature-text">
                  Founder, Blockchain & Digital Transformation Engineer
                </p>
                <p className="feature-location">Pacific Islands</p>
                <a href="https://www.linkedin.com/in/edwin-liavaa/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="feature-card team-member">
                <div className="feature-icon team-member-photo">
                  <Image src="/john.png" alt="John Liava&apos;a" width={70} height={70} />
                </div>
                <h3 className="feature-title">John Liava&apos;a</h3>
                <p className="feature-text">
                  co-Founder, ICT / Systems Engineer
                </p>
                <p className="feature-location">Pacific Islands</p>
                <a href="https://www.linkedin.com/in/john-liava-a-5b42251a0/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="feature-card team-member">
                <div className="feature-icon team-member-photo">
                  <Image src="/david.png" alt="David Liava&apos;a" width={70} height={70} />
                </div>
                <h3 className="feature-title">David Liava&apos;a</h3>
                <p className="feature-text">
                  co-Founder, Quantity Surveyor
                </p>
                <p className="feature-location">Pacific Islands</p>
                <a href="https://www.linkedin.com/in/david-liava%E2%80%99a-905827260/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="feature-card team-member">
                <div className="feature-icon team-member-photo">
                  <Image src="/selafine.png" alt="Selafine Liava&apos;a" width={70} height={70} />
                </div>
                <h3 className="feature-title">Selafine Liava&apos;a</h3>
                <p className="feature-text">
                  co-Founder, Project Officer
                </p>
                <p className="feature-location">Pacific Islands</p>
                <a href="https://www.linkedin.com/in/selafine-liava%E2%80%99a-643616363/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  LinkedIn Profile
                </a>
              </div>
            </div>
            
            <h3>Our Approach</h3>
            <p>We&apos;ve pivoted to a streamlined, family-based development approach that:</p>
            <ul>
              <li><strong>Self-funded:</strong> Operating independently of external seed funding</li>
              <li><strong>Essential-focused:</strong> Building only the core components needed for our platform</li>
              <li><strong>Decentralized-first:</strong> Creating a platform that operates independently of any jurisdiction or centralized authority</li>
              <li><strong>Family-driven:</strong> Leveraging deep family connections and shared vision</li>
              <li><strong>Web3-native:</strong> Building technology that aligns with fundamental Web3 principles</li>
            </ul>
            
            <h3>Our Partners</h3>
            <p>We&apos;re proud to work with a growing network of regional and international partners including:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '25px', marginBottom: '20px' }}>
              <li style={{ margin: '10px 0', fontSize: '1.05rem' }}><span style={{ color: '#FF5722', fontWeight: '500' }}>Pacific Island regional organizations</span></li>
              <li style={{ margin: '10px 0', fontSize: '1.05rem' }}><span style={{ color: '#FF5722', fontWeight: '500' }}>Local government technology initiatives</span></li>
              <li style={{ margin: '10px 0', fontSize: '1.05rem' }}><span style={{ color: '#FF5722', fontWeight: '500' }}>International blockchain development firms</span></li>
              <li style={{ margin: '10px 0', fontSize: '1.05rem' }}><span style={{ color: '#FF5722', fontWeight: '500' }}>Academic institutions researching decentralized systems</span></li>
              <li style={{ margin: '10px 0', fontSize: '1.05rem' }}><span style={{ color: '#FF5722', fontWeight: '500' }}>Community development organizations</span></li>
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
