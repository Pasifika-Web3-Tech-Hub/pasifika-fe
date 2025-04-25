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
                The Pasifika Web3 Tech Hub represents a groundbreaking decentralized physical infrastructure network (DePIN) designed specifically for Pacific Island communities. Leveraging the native PASIFIKA token (PSF) and building our Proof of Concept (POC) on Linea&apos;s solid zkEVM Layer-2 solution, we are also evaluating alternatives like Arbitrum, zkSync Era, StarkNet, Base, and Polygon zkEVM for our production version. This platform creates a sustainable economic ecosystem that preserves cultural heritage while creating new digital opportunities for islanders.
              </p>
            </div>
            
            <h2>Our Journey</h2>
            <p>
              The Pasifika Web3 Tech Hub emerged from a vision to connect the untapped potential of Pacific Island communities with the transformative power of blockchain and Web3 technologies. Born from the recognition that traditional financial systems have historically underserved these regions, our hub aims to create pathways for economic empowerment, innovation, and global integration.
            </p>
            
            <p>
              Our journey began with extensive community consultations across several Pacific Island nations, identifying key challenges: limited digital infrastructure, brain drain of tech talent, and barriers to international financial systems. These insights shaped our mission to build not just a tech hub, but a comprehensive ecosystem that nurtures local talent, attracts investment, and creates sustainable digital economy opportunities.
            </p>

            <h2>Progress to Date</h2>
            <p>
              With the successful launch of our Proof of Concept at <a href="https://pasifika.xyz/" target="_blank" rel="noopener noreferrer" style={{ color: '#FF5722', textDecoration: 'underline' }}>pasifika.xyz</a>, we&apos;ve demonstrated the viability of our model. Our initial platform showcases native blockchain solutions tailored to regional needs, including:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '25px', marginBottom: '20px' }}>
              <li style={{ margin: '10px 0' }}>A decentralized remittance system to reduce the region&apos;s dependence on costly transfer services</li>
              <li style={{ margin: '10px 0' }}>Digital identity solutions for the unbanked</li>
              <li style={{ margin: '10px 0' }}>Climate finance mechanisms leveraging blockchain for transparency</li>
              <li style={{ margin: '10px 0' }}>Cultural asset tokenization frameworks that respect indigenous ownership models</li>
            </ul>

            <h2>Our Team</h2>
            <p>
              Our team composition reflects the diversity of the Pacific Islands context, with members strategically located across different island nations and diasporic communities. This geographical distribution ensures we maintain deep connections to various Pacific cultures and understand the unique challenges faced in each region.
            </p>
            <p>
              Each co-Founder brings substantial credibility and expertise in their respective fields, from telecommunications and digital infrastructure to community leadership and blockchain development. Most importantly, our leadership team has worked together with the Founder on various projects spanning over a decade, creating a foundation of trust, shared vision, and proven collaboration that drives our success.
            </p>
            <p>
              This longstanding professional relationship enables us to work effectively across time zones and cultural contexts, allowing the Pasifika Web3 Tech Hub to operate as a truly distributed yet cohesive organization deeply rooted in Pacific values.
            </p>

            <h2>Our Timeline</h2>
            <div className="timeline-container" style={{ marginBottom: '40px' }}>
              <div className="mermaid-diagram" ref={mermaidRef}>
                {`
                %%{init: {'theme': '${isDarkMode ? 'dark' : 'default'}', 'themeVariables': { 'primaryColor': '#FF5722', 'primaryTextColor': '#fff' }}}%%
                timeline
                    title Pasifika Web3 Tech Hub Development Timeline
                    section Planning Phase
                      January 2025 : Initial concept development
                      February 2025 : Community consultations
                      March 2025 : Research & partnerships
                    section Development
                      April 2025 : Technical architecture design
                      May 2025 : Website development
                      June 2025 : Prototype testing
                    section Launch 
                      July 2025 : Proof of Concept launch
                      August 2025 : Community feedback integration
                      September 2025 : Platform expansion
                    section Future Roadmap
                      Q4 2025 : Production version development
                      Q1 2026 : Full-scale platform launch
                      Q2 2026 : Regional expansion
                `}
              </div>
            </div>

            <h2>Vision and Impact</h2>
            <p>
              Our vision extends beyond technology. We aim to position Pacific Islands as innovative hubs in the global Web3 landscape, creating economic resilience through:
            </p>
            <div className="impact-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '20px',
              margin: '20px 0 30px'
            }}>
              <div className="impact-item" style={{ 
                padding: '20px', 
                backgroundColor: isDarkMode ? '#333333' : '#f8f8f8', 
                borderRadius: '8px',
                borderTop: '3px solid #FF5722' 
              }}>
                <h4 style={{ color: '#FF5722', marginBottom: '10px' }}>Economic Inclusion</h4>
                <p>Creating financial access for traditionally excluded communities through blockchain-based solutions.</p>
              </div>
              <div className="impact-item" style={{ 
                padding: '20px', 
                backgroundColor: isDarkMode ? '#333333' : '#f8f8f8', 
                borderRadius: '8px',
                borderTop: '3px solid #FF9800'
              }}>
                <h4 style={{ color: '#FF9800', marginBottom: '10px' }}>Digital Sovereignty</h4>
                <p>Empowering Pacific communities to own their digital infrastructure and data.</p>
              </div>
              <div className="impact-item" style={{ 
                padding: '20px', 
                backgroundColor: isDarkMode ? '#333333' : '#f8f8f8', 
                borderRadius: '8px',
                borderTop: '3px solid #FF5722' 
              }}>
                <h4 style={{ color: '#FF5722', marginBottom: '10px' }}>Climate Resilience</h4>
                <p>Developing decentralized solutions that can withstand climate-related challenges facing island nations.</p>
              </div>
            </div>

            <h2>Our Commitment</h2>
            <p>
              As we move forward, we remain committed to our founding principles:
            </p>
            <ul>
              <li><strong>Transparency:</strong> Open development processes and clear communication</li>
              <li><strong>Inclusivity:</strong> Ensuring benefits reach all community members</li>
              <li><strong>Innovation with Purpose:</strong> Technology guided by real-world needs</li>
              <li><strong>Long-Term Sustainability:</strong> Building systems that will serve communities for generations</li>
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
