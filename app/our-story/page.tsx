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
                The Pasifika Web3 Tech Hub represents a groundbreaking decentralized physical infrastructure network (DePIN) designed specifically for Pacific Island communities. Leveraging the native PASIFIKA token (PSF) and building our Proof of Concept (POC) on Linea&apos;s solid zkEVM Layer-2 solution, we are also evaluating alternatives for our production version. On the EVM stack Arbitrum, zkSync Era, StarkNet, Base, and Polygon zkEVM. On the Bitcoin-Native stack RootStock which is also EVM compatible and Internet Computer (ICP). Our platform creates a sustainable economic ecosystem that preserves cultural heritage while creating new digital opportunities for islanders.
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

            <h2>Milestones</h2>
            <div style={{ overflowX: 'auto', marginBottom: '30px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
                <thead>
                  <tr style={{ backgroundColor: isDarkMode ? '#333333' : '#f2f2f2', borderBottom: '2px solid #FF5722' }}>
                    <th style={{ padding: '12px 15px', textAlign: 'left' }}>Date</th>
                    <th style={{ padding: '12px 15px', textAlign: 'left' }}>Milestone</th>
                    <th style={{ padding: '12px 15px', textAlign: 'left' }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '12px 15px' }}>April 15, 2025</td>
                    <td style={{ padding: '12px 15px', fontWeight: '500' }}>Proof of Concept Launch</td>
                    <td style={{ padding: '12px 15px' }}>Initial platform demonstrating core concepts at pasifika.xyz</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '12px 15px' }}>May 3, 2025</td>
                    <td style={{ padding: '12px 15px', fontWeight: '500' }}>New Direction Announced</td>
                    <td style={{ padding: '12px 15px' }}>Founder announces pivot to self-funding and simplified approach</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: isDarkMode ? '#333333' : '#f8f8f8' }}>
                    <td style={{ padding: '12px 15px' }}>May 5, 2025</td>
                    <td style={{ padding: '12px 15px', fontWeight: '500' }}>Team Restructuring</td>
                    <td style={{ padding: '12px 15px' }}>Team reorganized with clear roles and responsibilities</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '12px 15px' }}>May 15, 2025</td>
                    <td style={{ padding: '12px 15px', fontWeight: '500' }}>Development Acceleration</td>
                    <td style={{ padding: '12px 15px' }}>Full-stack development begins with streamlined approach</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: isDarkMode ? '#333333' : '#f8f8f8' }}>
                    <td style={{ padding: '12px 15px' }}>June 1, 2025</td>
                    <td style={{ padding: '12px 15px', fontWeight: '500' }}>Core Platform MVP</td>
                    <td style={{ padding: '12px 15px' }}>First version of core platform deployed</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '12px 15px' }}>July 1, 2025</td>
                    <td style={{ padding: '12px 15px', fontWeight: '500' }}>Community Engagement</td>
                    <td style={{ padding: '12px 15px' }}>Begin community outreach and education programs</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: isDarkMode ? '#333333' : '#f8f8f8' }}>
                    <td style={{ padding: '12px 15px' }}>September 1, 2025</td>
                    <td style={{ padding: '12px 15px', fontWeight: '500' }}>Technical Infrastructure</td>
                    <td style={{ padding: '12px 15px' }}>Complete deployment of core technical infrastructure</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '12px 15px' }}>December 1, 2025</td>
                    <td style={{ padding: '12px 15px', fontWeight: '500' }}>Regional Expansion</td>
                    <td style={{ padding: '12px 15px' }}>Begin expansion to additional Pacific Island communities</td>
                  </tr>
                </tbody>
              </table>
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

            <p style={{ marginBottom: '20px' }}>
              The Pasifika Web3 Tech Hub will serve as:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '25px', marginBottom: '30px' }}>
              <li style={{ margin: '10px 0' }}>An innovation incubator for local entrepreneurs</li>
              <li style={{ margin: '10px 0' }}>A training center developing regional Web3 talent</li>
              <li style={{ margin: '10px 0' }}>A bridge connecting Pacific projects to global funding</li>
              <li style={{ margin: '10px 0' }}>A catalyst for sustainable economic development</li>
            </ul>

            <p style={{ marginBottom: '30px' }}>
              This new direction allows us to move faster, stay focused on our core mission, and build a truly decentralized platform that serves the Pacific Islands community effectively.
            </p>

            <h2>Next Steps</h2>
            <p>With our streamlined approach, we are now:</p>
            <ol style={{ paddingLeft: '25px', marginBottom: '20px' }}>
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
