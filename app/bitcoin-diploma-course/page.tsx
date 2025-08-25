"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import "../page.css";
import "../shared-pages.css";

export default function BitcoinDiplomaCourse() {
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
              <Link href="/our-services" className="nav-link-button">
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="page-content">
        <div className="page-banner">
          <h1>Bitcoin Diploma Course</h1>
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
              <h2>PW3 Bitcoin Education Program</h2>
              <p className="whitepaper-version">10-Week Comprehensive Course</p>
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
                <strong>"Education is the foundation of financial sovereignty"</strong> — Our Bitcoin Diploma Course is a Pasifika Web3 Tech Hub implementation of the <strong>My First Bitcoin</strong> program, designed to equip Pacific communities with essential Bitcoin knowledge and financial literacy from a culturally-aware perspective.
              </p>
            </div>

            <div style={{ 
              backgroundColor: 'rgba(220, 38, 127, 0.1)',
              borderLeft: '4px solid #DC267F',
              padding: '20px 25px',
              margin: '30px 0',
              borderRadius: '0 8px 8px 0',
              position: 'relative',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{ 
                position: 'absolute',
                top: '-12px',
                right: '20px',
                backgroundColor: '#DC267F',
                color: '#fff',
                fontWeight: 700,
                fontSize: '12px',
                padding: '5px 10px',
                borderRadius: '20px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Applications Close Tonight!
              </div>
              <h3 style={{ color: '#DC267F', marginBottom: '10px' }}>⏰ Application Deadline: 11:59 PM Tonight (Aug 25, 2025)</h3>
              <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                <strong>Applications close at 11:59 PM tonight (August 25, 2025, GMT+13).</strong> Don't miss your chance to join our Bitcoin education program!
              </p>
              <p style={{ lineHeight: '1.6' }}>
                <strong>First Class:</strong> Tuesday, August 26, 2025 at 8:00 PM - 9:00 PM HST (Hawaii-Aleutian Standard Time, UTC-10:00). See course calendar for full schedule.
              </p>
            </div>

            <div style={{ 
              backgroundColor: 'rgba(249, 166, 32, 0.1)',
              borderLeft: '4px solid #F9A620',
              padding: '20px 25px',
              margin: '30px 0',
              borderRadius: '0 8px 8px 0',
              position: 'relative',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{ 
                position: 'absolute',
                top: '-12px',
                right: '20px',
                backgroundColor: '#F9A620',
                color: '#000',
                fontWeight: 700,
                fontSize: '12px',
                padding: '5px 10px',
                borderRadius: '20px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Free Course
              </div>
              <h3 style={{ color: '#F9A620', marginBottom: '10px' }}>PW3 Bitcoin Diploma</h3>
              <p style={{ lineHeight: '1.6' }}>
                Our Bitcoin Diploma Course is built on the proven curriculum from <strong>My First Bitcoin</strong>, a global grassroots movement focused on open-source Bitcoin education. This partnership ensures our Pacific communities receive world-class Bitcoin education while maintaining cultural relevance and accessibility.
              </p>
            </div>

            <h2>Course Overview</h2>
            <p>The PW3 Bitcoin Diploma is a comprehensive 10-week program that transforms complex Bitcoin concepts into accessible knowledge for Pacific Island communities. Through <strong>20 live interactive sessions</strong>, participants journey from basic monetary concepts to advanced Bitcoin usage, all delivered with cultural sensitivity and practical Pacific context.</p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '20px',
              margin: '30px 0',
              padding: '20px',
              backgroundColor: isDarkMode ? '#2a2a2a' : '#f9f9f9',
              borderRadius: '8px',
              border: '1px solid ' + (isDarkMode ? '#444' : '#e0e0e0')
            }}>
              <div style={{ textAlign: 'center', padding: '15px' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FF5722', marginBottom: '5px' }}>10</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Weeks</div>
              </div>
              <div style={{ textAlign: 'center', padding: '15px' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FF5722', marginBottom: '5px' }}>20</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Live Classes</div>
              </div>
              <div style={{ textAlign: 'center', padding: '15px' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FF5722', marginBottom: '5px' }}>2</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Classes/Week</div>
              </div>
              <div style={{ textAlign: 'center', padding: '15px' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FF5722', marginBottom: '5px' }}>FREE</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Cost</div>
              </div>
            </div>

            <h2>Course Requirements & Assessment</h2>
            <p>Our assessment system is designed to ensure comprehensive understanding while maintaining accessibility for Pacific learners. The course combines interactive participation, knowledge testing, and practical application.</p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              margin: '30px 0'
            }}>
              <div style={{
                padding: '20px',
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f8f8',
                borderRadius: '8px',
                borderLeft: '4px solid #FF5722'
              }}>
                <h4 style={{ color: '#FF5722', marginBottom: '10px' }}>📹 Live Webinar Classes</h4>
                <p style={{ margin: 0 }}>100 points - Attend interactive online sessions</p>
              </div>
              <div style={{
                padding: '20px',
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f8f8',
                borderRadius: '8px',
                borderLeft: '4px solid #FF5722'
              }}>
                <h4 style={{ color: '#FF5722', marginBottom: '10px' }}>📝 Weekly Quizzes</h4>
                <p style={{ margin: 0 }}>100 points - Test your knowledge each week</p>
              </div>
              <div style={{
                padding: '20px',
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f8f8',
                borderRadius: '8px',
                borderLeft: '4px solid #FF5722'
              }}>
                <h4 style={{ color: '#FF5722', marginBottom: '10px' }}>🎯 Final Quiz + Practical</h4>
                <p style={{ margin: 0 }}>50 points - Demonstrate your Bitcoin skills</p>
              </div>
              <div style={{
                padding: '20px',
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f8f8',
                borderRadius: '8px',
                borderLeft: '4px solid #FF5722'
              }}>
                <h4 style={{ color: '#FF5722', marginBottom: '10px' }}>🏆 Passing Minimum</h4>
                <p style={{ margin: 0 }}>150 points - Earn your digital certificate</p>
              </div>
            </div>

            <h2>Bitcoin Diploma Curriculum 2025</h2>
            <p>Our curriculum follows the proven <strong>My First Bitcoin</strong> framework, adapted for Pacific Island contexts. Each week builds upon previous knowledge, creating a comprehensive understanding of Bitcoin's role in financial sovereignty.</p>
            
            <div style={{
              backgroundColor: isDarkMode ? '#2a2a2a' : '#f9f9f9',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              margin: '30px 0'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr 1fr',
                backgroundColor: '#FF5722',
                color: 'white',
                fontWeight: 'bold',
                padding: '0'
              }}>
                <div style={{ padding: '15px', borderRight: '1px solid rgba(255,255,255,0.2)' }}>Week</div>
                <div style={{ padding: '15px', borderRight: '1px solid rgba(255,255,255,0.2)' }}>Chapter</div>
                <div style={{ padding: '15px' }}>Activities</div>
              </div>
              
              {[
                { week: 1, chapter: "Why Do We Need Money?", activity: "Five Questions on Money" },
                { week: 2, chapter: "What Is Money?", activity: "Time Preference Activity" },
                { week: 3, chapter: "The History of Money", activity: "Barter Game" },
                { week: 4, chapter: "What Is Fiat Money and Who Controls It?", activity: "Fractional Reserve Banking" },
                { week: 5, chapter: "How Problems Lead To Solutions", activity: "The Effects of Inflation - Auction Activity" },
                { week: 6, chapter: "An Introduction To Bitcoin", activity: "Consensus Building in P2P Network" },
                { week: 7, chapter: "How To Use Bitcoin", activity: "Bitcoin Wallet Setup & Transactions" },
                { week: 8, chapter: "Lightning Network: Daily Bitcoin Use", activity: "Lightning Wallet Relay Race" },
                { week: 9, chapter: "Technical Side of Bitcoin", activity: "SHA 256 Hash & Mempool" },
                { week: 10, chapter: "Why Bitcoin?", activity: "Bitcoin Future & Financial Rights" }
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr 1fr',
                  borderBottom: index < 9 ? '1px solid ' + (isDarkMode ? '#444' : '#e0e0e0') : 'none',
                  backgroundColor: index % 2 === 1 ? (isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)') : 'transparent'
                }}>
                  <div style={{ padding: '15px', borderRight: '1px solid ' + (isDarkMode ? '#444' : '#e0e0e0'), fontWeight: 'bold', color: '#FF5722' }}>{item.week}</div>
                  <div style={{ padding: '15px', borderRight: '1px solid ' + (isDarkMode ? '#444' : '#e0e0e0') }}>{item.chapter}</div>
                  <div style={{ padding: '15px' }}>{item.activity}</div>
                </div>
              ))}
            </div>

            <h2>Community & Prerequisites</h2>
            <p>Our Bitcoin Diploma Course welcomes learners from all backgrounds across the Pacific. We believe that financial education should be accessible to everyone, regardless of their technical experience or career stage.</p>
            
            {/* Pacific Islands Map */}
            <div style={{
              textAlign: 'center',
              margin: '40px 0',
              padding: '20px',
              backgroundColor: isDarkMode ? '#2a2a2a' : '#f9f9f9',
              borderRadius: '12px',
              border: '2px solid #FF5722'
            }}>
              <h3 style={{ color: '#FF5722', marginBottom: '20px' }}>🌊 Serving Pacific Island Communities</h3>
              <Image
                src="/map.png"
                alt="Pacific Islands Region Map"
                width={600}
                height={400}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              />
              <p style={{ 
                marginTop: '15px', 
                fontStyle: 'italic', 
                color: isDarkMode ? '#ccc' : '#666',
                fontSize: '0.9rem'
              }}>
                Our Bitcoin education program is designed specifically for Pacific Island communities, 
                with timezone-friendly scheduling and culturally-relevant content.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
              margin: '30px 0'
            }}>
              <div style={{
                padding: '25px',
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f8f8',
                borderRadius: '8px',
                borderLeft: '4px solid #FF5722'
              }}>
                <h3 style={{ color: '#FF5722', marginBottom: '15px' }}>👥 Who Can Join</h3>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  <li>Young professionals</li>
                  <li>Career transitioners</li>
                  <li>Curious learners</li>
                  <li>Retiring individuals</li>
                </ul>
              </div>
              
              <div style={{
                padding: '25px',
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f8f8',
                borderRadius: '8px',
                borderLeft: '4px solid #FF5722'
              }}>
                <h3 style={{ color: '#FF5722', marginBottom: '15px' }}>📋 Prerequisites</h3>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  <li>Comfortable using PC and mobile devices</li>
                  <li>Basic troubleshooting skills</li>
                  <li>English proficiency (spoken & written)</li>
                  <li>Reliable internet connection</li>
                </ul>
              </div>
            </div>

            <h2>Instructors & Team</h2>
            <p>Our course is led by experienced educators and blockchain professionals who bring both technical expertise and cultural understanding to Bitcoin education in the Pacific context.</p>
            
            <h3 style={{ color: '#FF5722', marginTop: '30px', marginBottom: '20px' }}>🎓 Lead Instructors</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px',
              margin: '20px 0'
            }}>
              <div style={{
                textAlign: 'center',
                padding: '30px',
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f8f8',
                borderRadius: '12px',
                border: '2px solid #FF5722',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{
                  marginBottom: '20px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Image
                    src="/britney.png"
                    alt="Britney Taamu-Miyashiro"
                    width={120}
                    height={120}
                    style={{
                      borderRadius: '50%',
                      border: '3px solid #FF5722',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <h4 style={{ margin: '0 0 10px 0', color: '#FF5722', fontSize: '1.2rem' }}>Britney Taamu-Miyashiro</h4>
                <p style={{ margin: 0, fontStyle: 'italic', color: isDarkMode ? '#ccc' : '#666' }}>Educational Resources Manager</p>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '30px',
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f8f8',
                borderRadius: '12px',
                border: '2px solid #FF5722',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{
                  marginBottom: '20px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Image
                    src="/edwin.png"
                    alt="Edwin Liava'a"
                    width={120}
                    height={120}
                    style={{
                      borderRadius: '50%',
                      border: '3px solid #FF5722',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <h4 style={{ margin: '0 0 10px 0', color: '#FF5722', fontSize: '1.2rem' }}>Edwin Liava'a</h4>
                <p style={{ margin: 0, fontStyle: 'italic', color: isDarkMode ? '#ccc' : '#666' }}>Full Stack Developer/Blockchain Engineer</p>
              </div>
            </div>
            
            <h3 style={{ color: '#FF5722', marginTop: '30px', marginBottom: '15px' }}>🎤 Guest Speakers</h3>
            <p>Industry experts and Bitcoin advocates who will share their knowledge on specific topics throughout the course, bringing diverse perspectives from the global Bitcoin community.</p>

            <h2>Schedule & Logistics</h2>
            <p>Our course is designed to accommodate Pacific Island time zones and learning preferences, with flexible scheduling and multiple communication channels to ensure accessibility for all participants.</p>
            
            <h3 style={{ color: '#FF5722', marginTop: '30px', marginBottom: '15px' }}>📅 Course Schedule</h3>
            <ul style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
              <li><strong>Duration:</strong> 10 weeks (Aug. 26 - Nov. 8, 2025)</li>
              <li><strong>First Class:</strong> Tuesday, August 26, 2025 at 8:00 PM - 9:00 PM</li>
              <li><strong>Format:</strong> 2 live classes per week (1 hour each)</li>
              <li><strong>Timezone:</strong> Hawaii-Aleutian Standard Time (HST, UTC-10:00)</li>
              <li><strong>Platform:</strong> Google Meets</li>
              <li><strong>Communication:</strong> WhatsApp/Telegram groups</li>
            </ul>
            
            <h3 style={{ color: '#FF5722', marginTop: '30px', marginBottom: '15px' }}>🎯 Learning Approach</h3>
            <p>
              The pace follows My First Bitcoin recommendations - one chapter per week allows time for 
              questions, discussions, and additional activities to reinforce learning. Two live classes 
              per week help mitigate the limitations of remote learning while building strong community connections.
            </p>

            <h2>About the Organizations</h2>
            <p>This course represents a collaboration between Pasifika Web3 Tech Hub and My First Bitcoin, combining local cultural knowledge with proven global Bitcoin education methods.</p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '30px',
              margin: '30px 0'
            }}>
              <div style={{
                padding: '25px',
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f8f8',
                borderRadius: '8px',
                borderLeft: '4px solid #FF5722'
              }}>
                <h3 style={{ color: '#FF5722', marginBottom: '15px' }}>🏝️ Pasifika Web3 Tech Hub</h3>
                <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                  Our mission is to create a decentralized marketplace and infrastructure network that 
                  empowers Pacific Islanders through Bitcoin and Lightning Network technology. We prioritize 
                  financial sovereignty, security, and accessibility for Pacific Island communities.
                </p>
                <a href="https://pasifika.xyz" target="_blank" rel="noopener noreferrer" 
                   style={{ color: '#FF5722', textDecoration: 'underline', fontWeight: 'bold' }}>
                  Visit pasifika.xyz →
                </a>
              </div>
              
              <div style={{
                padding: '25px',
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f8f8',
                borderRadius: '8px',
                borderLeft: '4px solid #FF5722'
              }}>
                <h3 style={{ color: '#FF5722', marginBottom: '15px' }}>₿ My First Bitcoin</h3>
                <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                  A global grassroots movement focused on open-source Bitcoin education. Their mission 
                  is to empower individuals through financial education with accessible, transparent, 
                  and practical Bitcoin knowledge.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="https://myfirstbitcoin.io/" target="_blank" rel="noopener noreferrer" 
                     style={{ color: '#FF5722', textDecoration: 'underline', fontWeight: 'bold' }}>
                    Visit myfirstbitcoin.io →
                  </a>
                  <a href="https://github.com/Pasifika-Web3-Tech-Hub/pasifika-bitcoin-diploma" target="_blank" rel="noopener noreferrer" 
                     style={{ color: '#FF5722', textDecoration: 'underline', fontWeight: 'bold' }}>
                    📚 Course GitHub Repository →
                  </a>
                </div>
              </div>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '40px',
              background: 'linear-gradient(135deg, #FF9800, #FF5722)',
              color: 'white',
              borderRadius: '12px',
              margin: '40px 0'
            }}>
              <h2 style={{ color: 'white', marginBottom: '20px' }}>Ready to Start Your Bitcoin Journey?</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: 0.9 }}>
                Join our community-focused Bitcoin education program designed specifically for Pacific communities. 
                Learn about Bitcoin, financial sovereignty, and the future of money in a supportive, culturally-aware environment.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{
                  padding: '12px 24px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  background: 'white',
                  color: '#FF5722',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
                }}>
                  Contact Us to Enroll
                </Link>
                <Link href="/our-services" style={{
                  padding: '12px 24px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
                }}>
                  ← Back to Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
