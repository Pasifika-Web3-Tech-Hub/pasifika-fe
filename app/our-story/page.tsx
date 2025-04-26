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
                The Pasifika Web3 Tech Hub represents a groundbreaking decentralized physical infrastructure network (DePIN) designed specifically for Pacific Island communities. Leveraging the native PASIFIKA token (PSF) and building our Proof of Concept (POC) on Linea&apos;s solid zkEVM Layer-2 solution, we are also evaluating alternatives for our production version. On the EVM stack Arbitrum, zkSync Era, StarkNet, Base, and Polygon zkEVM. On the Bitcoin-Native stack RootStock which is also EVM compatible and Internet Computer (ICP). This platform creates a sustainable economic ecosystem that preserves cultural heritage while creating new digital opportunities for islanders.
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
            <div className="timeline-container" style={{ marginBottom: '40px', textAlign: 'center' }}>
              <Image 
                src="/timeline.png" 
                alt="Pasifika Web3 Tech Hub Timeline" 
                width={900} 
                height={500}
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: isDarkMode ? '0 4px 20px rgba(0, 0, 0, 0.4)' : '0 4px 20px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>

            <h2>Key Milestones</h2>
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
                  <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: isDarkMode ? '#333333' : '#f8f8f8' }}>
                    <td style={{ padding: '12px 15px' }}>May 30, 2025</td>
                    <td style={{ padding: '12px 15px', fontWeight: '500' }}>Chainlink Hackathon Start</td>
                    <td style={{ padding: '12px 15px' }}>Begin intensive development of competition submissions</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '12px 15px' }}>June 29, 2025</td>
                    <td style={{ padding: '12px 15px', fontWeight: '500' }}>Hackathon Submission</td>
                    <td style={{ padding: '12px 15px' }}>Complete and submit projects for all three Chainlink prize tracks</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: isDarkMode ? '#333333' : '#f8f8f8' }}>
                    <td style={{ padding: '12px 15px' }}>July 18, 2025</td>
                    <td style={{ padding: '12px 15px', fontWeight: '500' }}>Hackathon Results</td>
                    <td style={{ padding: '12px 15px' }}>Potential funding source if projects place in prize categories</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '12px 15px' }}>August 1, 2025</td>
                    <td style={{ padding: '12px 15px', fontWeight: '500' }}>Hub71 Application</td>
                    <td style={{ padding: '12px 15px' }}>Submission of comprehensive application for Cohort 18</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: isDarkMode ? '#333333' : '#f8f8f8' }}>
                    <td style={{ padding: '12px 15px' }}>December 15, 2025</td>
                    <td style={{ padding: '12px 15px', fontWeight: '500' }}>Seed Funding Close</td>
                    <td style={{ padding: '12px 15px' }}>Target date for completing initial seed funding round</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '12px 15px' }}>February 1, 2026</td>
                    <td style={{ padding: '12px 15px', fontWeight: '500' }}>First Hub Launch</td>
                    <td style={{ padding: '12px 15px' }}>Opening of first physical location with full technical infrastructure</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: isDarkMode ? '#333333' : '#f8f8f8' }}>
                    <td style={{ padding: '12px 15px' }}>April 1, 2026</td>
                    <td style={{ padding: '12px 15px', fontWeight: '500' }}>Training Program Launch</td>
                    <td style={{ padding: '12px 15px' }}>Begin comprehensive developer training curriculum for local talent</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '12px 15px' }}>July 1, 2026</td>
                    <td style={{ padding: '12px 15px', fontWeight: '500' }}>Production dApps Launch</td>
                    <td style={{ padding: '12px 15px' }}>First full-scale applications deployed to mainnet</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #ddd', backgroundColor: isDarkMode ? '#333333' : '#f8f8f8' }}>
                    <td style={{ padding: '12px 15px' }}>December 1, 2026</td>
                    <td style={{ padding: '12px 15px', fontWeight: '500' }}>Regional Expansion Complete</td>
                    <td style={{ padding: '12px 15px' }}>All three hub locations operational across Pacific region</td>
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

            <p style={{ marginBottom: '30px', fontWeight: '500' }}>
              Our metrics for success include training 500+ developers in the first year, incubating 20+ regional startups, and reducing remittance costs by 70% for participating communities.
            </p>

            <h2>Funding Strategy and Roadmap</h2>
            <p style={{ marginBottom: '20px' }}>
              We are pursuing a multi-faceted funding approach combining:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '25px', marginBottom: '30px' }}>
              <li style={{ margin: '10px 0' }}>Strategic grants from tech foundations and development agencies</li>
              <li style={{ margin: '10px 0' }}>Web3 hackathon prizes and challenge funds</li>
              <li style={{ margin: '10px 0' }}>Private investment from impact-focused venture capital</li>
              <li style={{ margin: '10px 0' }}>Strategic partnerships with established blockchain protocols</li>
              <li style={{ margin: '10px 0' }}>Web3 accelerator programs supporting early-stage blockchain startups</li>
            </ul>

            <p style={{ marginBottom: '30px' }}>
              The upcoming Chainlink Chromion Hackathon (May 30 - June 29, 2025) presents an ideal opportunity to showcase our solutions, build valuable connections, and potentially secure initial funding through their prize tracks, which include Grand Prize ($35,000), Onchain Finance tracks (up to $8,000), Cross-Chain projects (up to $10,000), and AI integration (up to $5,000).
            </p>

            <h2>Hackathon Strategy</h2>
            <p>
              For the Chainlink Chromion Hackathon (May 30 - June 29, 2025), we will focus on:
            </p>
            <div className="hackathon-tracks" style={{ marginBottom: '30px' }}>
              <div className="track-item" style={{
                padding: '20px',
                backgroundColor: isDarkMode ? '#333333' : '#f8f8f8',
                borderRadius: '8px',
                marginBottom: '15px',
                borderLeft: '4px solid #FF5722'
              }}>
                <h4 style={{ marginBottom: '10px' }}>Cross-Chain Track ($10,000 first prize)</h4>
                <p>Developing a cross-chain remittance solution that connects Pacific islands to global financial systems with minimal fees</p>
              </div>
              
              <div className="track-item" style={{
                padding: '20px',
                backgroundColor: isDarkMode ? '#333333' : '#f8f8f8',
                borderRadius: '8px',
                marginBottom: '15px',
                borderLeft: '4px solid #FF9800'
              }}>
                <h4 style={{ marginBottom: '10px' }}>Onchain Finance Track ($8,000 first prize)</h4>
                <p>Building a tokenization platform for Pacific-based real-world assets (RWA) with a focus on sustainable resources and cultural assets</p>
              </div>
              
              <div className="track-item" style={{
                padding: '20px',
                backgroundColor: isDarkMode ? '#333333' : '#f8f8f8',
                borderRadius: '8px',
                marginBottom: '15px',
                borderLeft: '4px solid #FF5722'
              }}>
                <h4 style={{ marginBottom: '10px' }}>AI Track ($5,000 first prize)</h4>
                <p>Creating an AI-powered financial literacy and Web3 education platform tailored to Pacific Island contexts and languages</p>
              </div>
            </div>
            
            <p style={{ marginBottom: '20px' }}>
              Our project submissions will emphasize:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '25px', marginBottom: '30px' }}>
              <li style={{ margin: '8px 0' }}>Regional impact and problem-solving</li>
              <li style={{ margin: '8px 0' }}>Technical innovation and implementation quality</li>
              <li style={{ margin: '8px 0' }}>Scalability across the diverse Pacific region</li>
              <li style={{ margin: '8px 0' }}>Integration with Chainlink&apos;s oracle services</li>
              <li style={{ margin: '8px 0' }}>Clear path to post-hackathon development</li>
            </ul>

            <h2>Implementation Schedule</h2>
            <div style={{ marginBottom: '30px' }}>
              <p style={{ marginBottom: '15px' }}>Our development roadmap includes these key phases:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '25px' }}>
                <li style={{ margin: '10px 0' }}><strong>Foundation</strong>: Proof of Concept Launch and Team Expansion (April-May 2025)</li>
                <li style={{ margin: '10px 0' }}><strong>Funding Activities</strong>: Hackathon participation and seed funding (May-December 2025)</li>
                <li style={{ margin: '10px 0' }}><strong>Technical Development</strong>: MVP development of core platforms (July 2025 onwards)</li>
                <li style={{ margin: '10px 0' }}><strong>Hub Launch</strong>: Physical locations and training programs (February 2026-December 2026)</li>
              </ul>
            </div>

            <h2>Alternative Funding Avenues</h2>
            <p style={{ marginBottom: '20px' }}>
              While we prepare for the Chainlink Hackathon and continue to explore accelerator options, we&apos;re also pursuing:
            </p>
            
            <div className="funding-avenues" style={{ marginBottom: '40px' }}>
              <div className="avenue-item" style={{
                padding: '20px',
                backgroundColor: isDarkMode ? '#333333' : '#f8f8f8',
                borderRadius: '8px',
                marginBottom: '15px',
                borderLeft: '4px solid #FF5722'
              }}>
                <h4 style={{ marginBottom: '10px' }}>ADB Startup Matchmaking</h4>
                <p>The Asian Development Bank&apos;s startup program has no set deadline - applications can be submitted year-round. ADB administrators review submissions to ensure alignment with their Operational Priority Areas and connect startups with relevant subject-matter experts. This continuous application process allows us flexibility in our funding timeline.</p>
              </div>
              
              <div className="avenue-item" style={{
                padding: '20px',
                backgroundColor: isDarkMode ? '#333333' : '#f8f8f8',
                borderRadius: '8px',
                marginBottom: '15px',
                borderLeft: '4px solid #FF9800'
              }}>
                <h4 style={{ marginBottom: '10px' }}>ADB Key Indicators Cover Design Contest</h4>
                <p>This competition has a May 30, 2025 deadline, providing an opportunity to showcase our design capabilities and gain visibility with ADB stakeholders. The Asian Development Bank&apos;s flagship statistical publication features an annual cover design contest with monetary prizes.</p>
              </div>
              
              <div className="avenue-item" style={{
                padding: '20px',
                backgroundColor: isDarkMode ? '#333333' : '#f8f8f8',
                borderRadius: '8px',
                marginBottom: '15px',
                borderLeft: '4px solid #FF5722'
              }}>
                <h4 style={{ marginBottom: '10px' }}>Hub71</h4>
                <p>Abu Dhabi&apos;s global tech ecosystem that provides incentives, support, and networking for startups with high growth potential. The current deadline for Cohort 18 is August 1, 2025, with the programme starting in February 2026.</p>
              </div>
              
              <div className="avenue-item" style={{
                padding: '20px',
                backgroundColor: isDarkMode ? '#333333' : '#f8f8f8',
                borderRadius: '8px',
                marginBottom: '15px',
                borderLeft: '4px solid #FF9800'
              }}>
                <h4 style={{ marginBottom: '10px' }}>Regional Grants</h4>
                <p>Pacific-focused development grants from organizations committed to digital transformation in the region.</p>
              </div>
              
              <div className="avenue-item" style={{
                padding: '20px',
                backgroundColor: isDarkMode ? '#333333' : '#f8f8f8',
                borderRadius: '8px',
                marginBottom: '15px',
                borderLeft: '4px solid #FF5722'
              }}>
                <h4 style={{ marginBottom: '10px' }}>Strategic Partnerships</h4>
                <p>Collaborations with established blockchain protocols looking to expand their reach into new markets.</p>
              </div>
              
              <div className="avenue-item" style={{
                padding: '20px',
                backgroundColor: isDarkMode ? '#333333' : '#f8f8f8',
                borderRadius: '8px',
                marginBottom: '15px',
                borderLeft: '4px solid #FF9800'
              }}>
                <h4 style={{ marginBottom: '10px' }}>Alternative Web3 Accelerators</h4>
                <p>We are researching other Web3 accelerator programs with upcoming application deadlines, including Techstars Web3 2025 program which could provide both funding and valuable connections in the blockchain ecosystem.</p>
              </div>
            </div>

            <h2>Next Steps</h2>
            <p>With seed funding, we will:</p>
            <ol style={{ paddingLeft: '25px', marginBottom: '20px' }}>
              <li style={{ margin: '10px 0' }}>Expand our technical team focused on Pacific-specific Web3 solutions</li>
              <li style={{ margin: '10px 0' }}>Establish physical hubs in 3 strategic Pacific locations</li>
              <li style={{ margin: '10px 0' }}>Launch our comprehensive developer training program</li>
              <li style={{ margin: '10px 0' }}>Deploy our first full-scale decentralized applications addressing regional needs</li>
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
