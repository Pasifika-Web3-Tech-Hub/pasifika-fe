"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import "../page.css";
import "../shared-pages.css";
import { useEffect, useRef } from "react";

export default function OurStory() {
  const { isDarkMode } = useDarkMode();
  const mermaidRef = useRef(null);

  useEffect(() => {
    // Load and initialize Mermaid when component mounts
    if (typeof window !== 'undefined' && mermaidRef.current) {
      import('mermaid').then((mermaid) => {
        mermaid.default.initialize({
          startOnLoad: true,
          theme: isDarkMode ? 'dark' : 'default',
          securityLevel: 'loose',
        });
        mermaid.default.contentLoaded();
      });
    }
  }, [isDarkMode, mermaidRef]);

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
          <h1>Our Story</h1>
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
              <h2>Bridging Pacific Islands to the Digital Economy</h2>
              <p className="whitepaper-version">Established 2025</p>
              <div className="whitepaper-divider"></div>
            </div>
            
            <div className="summary-box" style={{ 
              padding: '20px', 
              backgroundColor: isDarkMode ? '#333333' : '#f8f8f8', 
              borderRadius: '8px', 
              marginBottom: '30px',
              borderLeft: '4px solid #FF5722'
            }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                The Pasifika Web3 Tech Hub represents a groundbreaking decentralized physical infrastructure network (DePIN) designed specifically for Pacific Island communities. Building our Proof of Concept (POC) on Linea&apos;s solid zkEVM Layer-2 solution, we are also evaluating alternatives for our production version. On the EVM stack Arbitrum, zkSync Era, StarkNet, Base, and Polygon zkEVM. On the Bitcoin-Native stack RootStock which is also EVM compatible and Internet Computer (ICP). Our platform creates a sustainable economic ecosystem that preserves cultural heritage while creating new digital opportunities for islanders.
              </p>
            </div>

            <h2>Our Vision</h2>
            <p>We envision a future where Pacific Island communities are active participants in the global digital economy, with tools and infrastructure that address our specific needs and challenges. Through the Pasifika Web3 Marketplace, we aim to create resilient economic systems that can withstand geographical isolation, climate challenges, and limited traditional infrastructure.</p>



            <h2>Our Mission</h2>
            <p>We&apos;re on a mission to empower Pacific Island communities through accessible Web3 technologies, creating economic opportunities while preserving and celebrating our cultural heritage. We believe in building decentralized systems that work for people regardless of their location, technical background, or economic status.</p>

            <h2>Our Journey</h2>
            <p>
              The Pasifika Web3 Tech Hub emerged from a vision to connect the untapped potential of Pacific Island communities with the transformative power of blockchain and Web3 technologies. Born from the recognition that traditional financial systems have historically underserved these regions, our hub aims to create pathways for economic empowerment, innovation, and global integration.
            </p>
            <p>
              Our journey began with extensive community consultations across several Pacific Island nations, identifying key challenges: limited digital infrastructure, brain drain of tech talent, and barriers to international financial systems. These insights shaped our mission to build not just a tech hub, but a comprehensive ecosystem that nurtures local talent, attracts investment, and creates sustainable digital economy opportunities.
            </p>

            <div className="team-values">
              <h2>Our Values</h2>
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

            <h2>Our Commitment</h2>
            <p style={{ marginBottom: '20px' }}>
              We are committed to:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '25px', marginBottom: '30px' }}>
              <li style={{ margin: '10px 0' }}>Building technology that empowers Pacific Island communities</li>
              <li style={{ margin: '10px 0' }}>Preserving and respecting indigenous knowledge and practices</li>
              <li style={{ margin: '10px 0' }}>Creating economic opportunities that benefit all stakeholders</li>
              <li style={{ margin: '10px 0' }}>Developing sustainable solutions for our unique environment</li>
              <li style={{ margin: '10px 0' }}>Fostering innovation while maintaining cultural integrity</li>
            </ul>

            <h2>Our Approach</h2>
            <p>We&apos;ve pivoted to a streamlined, family-based development approach that:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '25px', marginBottom: '30px' }}>
              <li style={{ margin: '10px 0' }}><strong>Self-funded:</strong> Operating independently of external seed funding</li>
              <li style={{ margin: '10px 0' }}><strong>Essential-focused:</strong> Building only the core components needed for our platform</li>
              <li style={{ margin: '10px 0' }}><strong>Decentralized-first:</strong> Creating a platform that operates independently of any jurisdiction or centralized authority</li>
              <li style={{ margin: '10px 0' }}><strong>Family-driven:</strong> Leveraging deep family connections and shared vision</li>
              <li style={{ margin: '10px 0' }}><strong>Web3-native:</strong> Building technology that aligns with fundamental Web3 principles</li>
            </ul>

            <h2>Milestones</h2>
            <div className="milestones-grid">
              <div className="milestone-item">
                <div className="milestone-icon">🚀</div>
                <h4>2025 Q1</h4>
                <p>Launch of Proof of Concept platform</p>
              </div>
              <div className="milestone-item">
                <div className="milestone-icon">💻</div>
                <h4>2025 Q2</h4>
                <p>Development of Production Version</p>
              </div>
              <div className="milestone-item">
                <div className="milestone-icon">🛠️</div>
                <h4>2025 Q3</h4>
                <p>Implementation of Production Version</p>
              </div>
              <div className="milestone-item">
                <div className="milestone-icon">🚀</div>
                <h4>2025 Q4</h4>
                <p>Deployment of Production Version</p>
              </div>
              <div className="milestone-item">
                <div className="milestone-icon">🎉</div>
                <h4>2026 Q1</h4>
                <p>Official Launch of Pasifika Production Version 1.0</p>
              </div>
            </div>






            <h2>Our Team</h2>
            <p style={{ marginBottom: '20px' }}>
              Meet the Founder and co-Founders of Pasifika Web3 Tech Hub
            </p>
            
            <div className="team-grid" style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              justifyContent: 'center',
              maxWidth: '90%',
              margin: '0 auto',
              padding: '0 15px'
            }}>
              <div className="team-member" style={{
                textAlign: 'center',
                padding: '20px',
                background: isDarkMode ? '#333' : '#fff',
                borderRadius: '15px',
                boxShadow: isDarkMode ? '0 2px 10px rgba(0,0,0,0.2)' : '0 2px 10px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}>
                <div className="member-photo-container" style={{
                  marginBottom: '15px'
                }}>
                  <Image 
                    src="/edwin.png" 
                    alt="Edwin Liava&apos;a" 
                    width={120} 
                    height={120} 
                    style={{ 
                      borderRadius: '50%',
                      boxShadow: '0 0 15px rgba(0,0,0,0.1)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </div>
                <h3 className="member-name" style={{
                  fontSize: '1.2rem',
                  margin: '10px 0',
                  color: isDarkMode ? '#fff' : '#333'
                }}>Edwin Liava&apos;a</h3>
                <p className="member-role" style={{
                  fontSize: '0.95rem',
                  color: isDarkMode ? '#ccc' : '#666'
                }}>
                  Founder, Blockchain & Digital Transformation Engineer
                </p>
                <p className="member-location" style={{
                  fontSize: '0.9rem',
                  color: isDarkMode ? '#999' : '#999'
                }}>Pacific Islands</p>
                <a href="https://www.linkedin.com/in/edwin-liavaa/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="team-member">
                <div className="member-photo-container">
                  <Image 
                    src="/john.png" 
                    alt="John Liava&apos;a" 
                    width={150} 
                    height={150} 
                    style={{ borderRadius: '50%' }}
                  />
                </div>
                <h3 className="member-name">John Liava&apos;a</h3>
                <p className="member-role">
                  co-Founder, ICT / Systems Engineer
                </p>
                <p className="member-location">Pacific Islands</p>
                <a href="https://www.linkedin.com/in/john-liava&apos;a-5b42251a0/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="team-member">
                <div className="member-photo-container">
                  <Image 
                    src="/david.png" 
                    alt="David Liava&apos;a" 
                    width={150} 
                    height={150} 
                    style={{ borderRadius: '50%' }}
                  />
                </div>
                <h3 className="member-name">David Liava&apos;a</h3>
                <p className="member-role">
                  co-Founder, Quantity Surveyor
                </p>
                <p className="member-location">Pacific Islands</p>
                <a href="https://www.linkedin.com/in/david-liava&apos;a-905827260/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="team-member">
                <div className="member-photo-container">
                  <Image 
                    src="/selafine.png" 
                    alt="Selafine Liava&apos;a" 
                    width={150} 
                    height={150} 
                    style={{ borderRadius: '50%' }}
                  />
                </div>
                <h3 className="member-name">Selafine Liava&apos;a</h3>
                <p className="member-role">
                  co-Founder, Project Officer
                </p>
                <p className="member-location">Pacific Islands</p>
                <a href="https://www.linkedin.com/in/selafine-liava&apos;a-643616363/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <p style={{ marginTop: '30px' }}>
              Pasifika Web3 Tech Hub is now built on a streamlined, family-based team approach. After careful reflection, we&apos;ve pivoted from traditional Web2 methodologies to a more focused, essential development model that aligns with Web3 principles.
            </p>
            <p>
              Our core team consists of family members with deep expertise in blockchain development and Pacific Island contexts. This structure allows us to:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '25px', marginBottom: '30px' }}>
              <li style={{ margin: '10px 0' }}>Move faster with a smaller, focused team</li>
              <li style={{ margin: '10px 0' }}>Reduce unnecessary complexities and dependencies</li>
              <li style={{ margin: '10px 0' }}>Leverage deep family connections and shared vision</li>
              <li style={{ margin: '10px 0' }}>Focus exclusively on essential platform components</li>
              <li style={{ margin: '10px 0' }}>Maintain strong Pacific Island cultural ties</li>
            </ul>
            <p>The whitepaper is currently under review as we pivot to a streamlined, family-based development approach. Key aspects are being re-evaluated to better align with our new direction of building a decentralized platform that operates independently of any jurisdiction or centralized authority.</p>



            <h2>Our Partners</h2>
            <p>We&apos;re proud to work with a growing network of regional and international partners including:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '25px', marginBottom: '30px' }}>
              <li style={{ margin: '10px 0', fontSize: '1.05rem' }}><span style={{ color: '#FF5722', fontWeight: '500' }}>Pacific Island regional organizations</span></li>
              <li style={{ margin: '10px 0', fontSize: '1.05rem' }}><span style={{ color: '#FF5722', fontWeight: '500' }}>Local government technology initiatives</span></li>
              <li style={{ margin: '10px 0', fontSize: '1.05rem' }}><span style={{ color: '#FF5722', fontWeight: '500' }}>International blockchain development teams</span></li>
              <li style={{ margin: '10px 0', fontSize: '1.05rem' }}><span style={{ color: '#FF5722', fontWeight: '500' }}>Sustainable technology organizations</span></li>
            </ul>

            <p>With the successful launch of our Proof of Concept at <a href="https://pasifika.xyz/" target="_blank" rel="noopener noreferrer" style={{ color: '#FF5722', textDecoration: 'underline' }}>pasifika.xyz</a>, we&apos;ve demonstrated the viability of our model. Our initial platform showcases native blockchain solutions tailored to regional needs, including:</p>

            <h2>Next Steps</h2>
            <p>With our streamlined approach, we are now:</p>
            <ol style={{ listStyleType: 'decimal', paddingLeft: '25px', marginBottom: '30px' }}>
              <li style={{ margin: '10px 0' }}>Accelerate core platform development</li>
              <li style={{ margin: '10px 0' }}>Engage with Pacific Island communities</li>
              <li style={{ margin: '10px 0' }}>Implement decentralized solutions</li>
              <li style={{ margin: '10px 0' }}>Build community trust and adoption</li>
              <li style={{ margin: '10px 0' }}>Expand to additional Pacific Islands</li>
            </ol>

            <h2>Our Commitment</h2>
            <p>
              As we move forward, we remain committed to our founding principles:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '25px', marginBottom: '30px' }}>
              <li style={{ margin: '10px 0' }}><strong>Transparency:</strong> Open development processes and clear communication</li>
              <li style={{ margin: '10px 0' }}><strong>Inclusivity:</strong> Ensuring benefits reach all community members</li>
              <li style={{ margin: '10px 0' }}><strong>Innovation with Purpose:</strong> Technology guided by real-world needs</li>
              <li style={{ margin: '10px 0' }}><strong>Long-Term Sustainability:</strong> Building systems that will serve communities for generations</li>
            </ul>
            
            <div className="join-us-section" style={{ 
              margin: '40px 0',
              padding: '30px',
              backgroundColor: isDarkMode ? 'rgba(255, 87, 34, 0.1)' : 'rgba(255, 87, 34, 0.05)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h3 style={{ marginBottom: '15px' }}>Join Our Journey</h3>
              <p style={{ marginBottom: '20px' }}>
              The Pasifika Web3 Tech Hub will serve as:
            </p>
              <p style={{ marginBottom: '20px' }}>
                The Pasifika Web3 Tech Hub is more than a platform—it&apos;s a movement to bring digital economic empowerment to Pacific Island communities. Whether you&apos;re a developer, investor, community leader, or simply passionate about the intersection of technology and social impact, we invite you to join us.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ display: 'inline-block' }}>
                Contact Us to Get Involved
              </Link>
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
