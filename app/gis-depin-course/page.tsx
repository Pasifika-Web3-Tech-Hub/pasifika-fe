"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import "../page.css";
import "../shared-pages.css";

export default function GisDePinCourse() {
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
          <h1>GIS DePIN Course</h1>
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
              <h2>Empowering Pacific Island Communities with Cutting-Edge Technology</h2>
              <p className="whitepaper-version">GIS-Blockchain Integration for Transformative Utility Management</p>
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
                <strong>"Technology is the bridge to Pacific Island resilience"</strong> — Our 4-day intensive GIS DePIN Course combines Geographic Information Systems, Blockchain technology, and AI to transform utility management across Pasifika through innovative spatial data separation and Dynamic NFT asset representation.
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
                Intensive Course
              </div>
              <h3 style={{ color: '#F9A620', marginBottom: '10px' }}>Transformative Data Architecture</h3>
              <p style={{ lineHeight: '1.6' }}>
                Learn how <strong>spatial data separation from attribute data</strong> creates more efficient, secure, and scalable infrastructure management systems. Our innovative approach stores location data in GIS while asset attributes live as <strong>Dynamic NFTs on blockchain</strong>, with AI agents automating attribute capture from visual data.
              </p>
            </div>

            <h2>Course Overview</h2>
            <p>This intensive 4-day program empowers Pacific Island communities with innovative technological solutions that combine Geographic Information Systems (GIS), Blockchain technology, and Artificial Intelligence to transform utility management across Pasifika. Participants will master the revolutionary separation of spatial data from attribute data, creating more efficient and secure infrastructure systems.</p>
            
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
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FF5722', marginBottom: '5px' }}>4</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Days</div>
              </div>
              <div style={{ textAlign: 'center', padding: '15px' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FF5722', marginBottom: '5px' }}>32</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Contact Hours</div>
              </div>
              <div style={{ textAlign: 'center', padding: '15px' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FF5722', marginBottom: '5px' }}>25</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Max Participants</div>
              </div>
              <div style={{ textAlign: 'center', padding: '15px' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FF5722', marginBottom: '5px' }}>3</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Month Support</div>
              </div>
            </div>

            <h2>Target Audience & Prerequisites</h2>
            <p>This course is designed for Pacific Island professionals who want to leverage cutting-edge technology for infrastructure transformation in their communities.</p>
            
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
                <h3 style={{ color: '#FF5722', marginBottom: '15px' }}>👥 Who Should Attend</h3>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  <li>Pacific Island community leaders</li>
                  <li>Utility managers and engineers</li>
                  <li>Government officials</li>
                  <li>Technology enthusiasts</li>
                  <li>Infrastructure development professionals</li>
                </ul>
              </div>
              
              <div style={{
                padding: '25px',
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f8f8',
                borderRadius: '8px',
                borderLeft: '4px solid #FF5722'
              }}>
                <h3 style={{ color: '#FF5722', marginBottom: '15px' }}>📋 Technology Requirements</h3>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  <li>Smartphones with GPS and camera</li>
                  <li>Laptops/tablets for sessions</li>
                  <li>Reliable internet connectivity</li>
                  <li>All specialized software provided</li>
                </ul>
              </div>
            </div>

            <h2>Course Objectives</h2>
            <p>By the end of this course, participants will have comprehensive understanding and practical skills in implementing revolutionary utility management solutions.</p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              margin: '30px 0'
            }}>
              {[
                { icon: '🏝️', title: 'Pacific Island Context', desc: 'Understand unique infrastructure challenges facing Pacific communities' },
                { icon: '🗺️', title: 'GIS-Blockchain Integration', desc: 'Master the integration of mapping with blockchain technology' },
                { icon: '🔄', title: 'Data Separation', desc: 'Comprehend revolutionary separation of spatial and attribute data' },
                { icon: '🤖', title: 'AI Automation', desc: 'Learn how AI agents automate asset attribute capture from visual data' },
                { icon: '🛠️', title: 'Practical Skills', desc: 'Develop hands-on skills in cutting-edge utility management solutions' },
                { icon: '📋', title: 'Implementation Plans', desc: 'Create actionable deployment plans for your communities' }
              ].map((item, index) => (
                <div key={index} style={{
                  padding: '20px',
                  backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f8f8',
                  borderRadius: '8px',
                  borderLeft: '4px solid #FF5722',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{item.icon}</div>
                  <h4 style={{ color: '#FF5722', marginBottom: '10px' }}>{item.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <h2>4-Day Curriculum</h2>
            <p>Our comprehensive curriculum progresses from foundational concepts to advanced implementation strategies, with hands-on workshops and practical exercises throughout.</p>
            
            <div style={{
              backgroundColor: isDarkMode ? '#2a2a2a' : '#f9f9f9',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              margin: '30px 0'
            }}>
              {[
                {
                  day: 1,
                  title: "Foundation & Pacific Island Context",
                  subtitle: "Understanding Our Unique Challenges and Opportunities",
                  topics: [
                    "Pacific Island Infrastructure Challenges",
                    "Technology as the Solution",
                    "GIS Technology Fundamentals", 
                    "Introduction to Blockchain",
                    "Introduction to DePIN"
                  ]
                },
                {
                  day: 2,
                  title: "Deep Dive into Innovative Architecture",
                  subtitle: "Understanding the Transformative Data Separation Model",
                  topics: [
                    "Innovative Data Separation Concept",
                    "DePIN and Community-Driven Infrastructure",
                    "Picture-Based Data Capture",
                    "AI Agent Integration",
                    "System Integration Architecture"
                  ]
                },
                {
                  day: 3,
                  title: "Practical Implementation & Hands-On Training",
                  subtitle: "Building Real Solutions for Pacific Communities",
                  topics: [
                    "Asset Capture Workshop",
                    "AI Agent Training Session",
                    "Dynamic NFT and Blockchain Data Management",
                    "GIS Analysis and Visualization",
                    "Hands-on Labs and Exercises"
                  ]
                },
                {
                  day: 4,
                  title: "Implementation Strategy & Future Vision",
                  subtitle: "Bringing Innovation to Your Community",
                  topics: [
                    "Deployment Planning",
                    "Cost-Benefit Analysis",
                    "Case Studies and Success Stories",
                    "Action Planning Workshop",
                    "Certification and Next Steps"
                  ]
                }
              ].map((dayContent, index) => (
                <div key={index} style={{
                  borderBottom: index < 3 ? '2px solid ' + (isDarkMode ? '#444' : '#e0e0e0') : 'none'
                }}>
                  <div style={{
                    backgroundColor: '#FF5722',
                    color: 'white',
                    padding: '20px',
                    fontWeight: 'bold'
                  }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Day {dayContent.day}: {dayContent.title}</div>
                    <div style={{ fontSize: '1rem', opacity: 0.9, fontStyle: 'italic' }}>{dayContent.subtitle}</div>
                  </div>
                  <div style={{ padding: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                      {dayContent.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} style={{
                          padding: '10px',
                          backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                          borderRadius: '4px',
                          fontSize: '0.9rem'
                        }}>
                          • {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2>Innovative Technology Integration</h2>
            <p>Our course showcases the cutting-edge integration of three revolutionary technologies that transform traditional utility management approaches.</p>
            
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
                <h3 style={{ color: '#FF5722', marginBottom: '15px' }}>🗺️ GIS Technology</h3>
                <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                  <strong>Spatial Data Layer:</strong> Stores only X, Y coordinates and geometry data. 
                  Handles location accuracy, mapping visualization, and geographic relationship analysis 
                  without the burden of attribute data.
                </p>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.9rem' }}>
                  <li>Asset location tracking</li>
                  <li>Network topology mapping</li>
                  <li>Service area analysis</li>
                  <li>Emergency response planning</li>
                </ul>
              </div>
              
              <div style={{
                padding: '25px',
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f8f8',
                borderRadius: '8px',
                borderLeft: '4px solid #FF5722'
              }}>
                <h3 style={{ color: '#FF5722', marginBottom: '15px' }}>⛓️ Blockchain & Dynamic NFTs</h3>
                <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                  <strong>Attribute Data Layer:</strong> Each asset represented as a unique Dynamic NFT 
                  with updatable metadata, integrated images, maintenance history, and performance data 
                  secured by blockchain immutability.
                </p>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.9rem' }}>
                  <li>Dynamic NFT asset representation</li>
                  <li>Immutable maintenance records</li>
                  <li>Smart contracts for automation</li>
                  <li>Transparent asset tracking</li>
                </ul>
              </div>

              <div style={{
                padding: '25px',
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f8f8',
                borderRadius: '8px',
                borderLeft: '4px solid #FF5722'
              }}>
                <h3 style={{ color: '#FF5722', marginBottom: '15px' }}>🤖 AI & Computer Vision</h3>
                <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                  <strong>Automated Processing:</strong> AI agents with Large Language Models and 
                  computer vision analyze asset photos to automatically extract attributes, assess 
                  conditions, and generate documentation for NFT metadata.
                </p>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.9rem' }}>
                  <li>Asset type identification</li>
                  <li>Condition assessment</li>
                  <li>Technical specification extraction</li>
                  <li>Predictive maintenance indicators</li>
                </ul>
              </div>
            </div>

            <h2>DePIN: Decentralized Physical Infrastructure</h2>
            <p>Learn how Decentralized Physical Infrastructure Networks (DePIN) can revolutionize utility management in Pacific Island communities through community ownership and token-based incentives.</p>
            
            <div style={{
              backgroundColor: 'rgba(255, 87, 34, 0.1)',
              borderLeft: '4px solid #FF5722',
              padding: '25px',
              margin: '30px 0',
              borderRadius: '0 8px 8px 0'
            }}>
              <h3 style={{ color: '#FF5722', marginBottom: '15px' }}>🌐 DePIN Benefits for Pacific Islands</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                <div>• Reduced dependency on centralized authorities</div>
                <div>• Community-driven infrastructure development</div>
                <div>• Economic incentives for participation</div>
                <div>• Resilience against natural disasters</div>
                <div>• Token-based reward systems</div>
                <div>• Distributed governance models</div>
              </div>
            </div>

            <h2>Learning Resources & Materials</h2>
            <p>Comprehensive learning materials and ongoing resources to support your technology implementation journey.</p>
            
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
                <h4 style={{ color: '#FF5722', marginBottom: '10px' }}>📚 Pre-Course Materials</h4>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.9rem' }}>
                  <li>QGIS Documentation & Tutorials</li>
                  <li>Chainlink Education Hub</li>
                  <li>DePIN Introduction Resources</li>
                  <li>Pacific Island case studies</li>
                </ul>
              </div>
              <div style={{
                padding: '20px',
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f8f8',
                borderRadius: '8px',
                borderLeft: '4px solid #FF5722'
              }}>
                <h4 style={{ color: '#FF5722', marginBottom: '10px' }}>🛠️ Course Materials</h4>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.9rem' }}>
                  <li>Comprehensive course handbook</li>
                  <li>Technical specification documents</li>
                  <li>Hands-on exercise guides</li>
                  <li>Mobile apps for practical sessions</li>
                </ul>
              </div>
              <div style={{
                padding: '20px',
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f8f8',
                borderRadius: '8px',
                borderLeft: '4px solid #FF5722'
              }}>
                <h4 style={{ color: '#FF5722', marginBottom: '10px' }}>🎯 Post-Course Support</h4>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.9rem' }}>
                  <li>Implementation toolkit</li>
                  <li>3-month post-course mentoring</li>
                  <li>Technical support hotline</li>
                  <li>Community of practice access</li>
                </ul>
              </div>
            </div>

            <h2>Assessment & Certification</h2>
            <p>Our comprehensive assessment ensures participants gain practical skills and knowledge needed for successful implementation in their communities.</p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              margin: '30px 0'
            }}>
              <div style={{
                padding: '20px',
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f8f8',
                borderRadius: '8px',
                borderLeft: '4px solid #FF5722',
                textAlign: 'center'
              }}>
                <h4 style={{ color: '#FF5722', marginBottom: '10px' }}>📝 Daily Exercises</h4>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FF5722', marginBottom: '5px' }}>40%</div>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>Practical hands-on work</p>
              </div>
              <div style={{
                padding: '20px',
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f8f8',
                borderRadius: '8px',
                borderLeft: '4px solid #FF5722',
                textAlign: 'center'
              }}>
                <h4 style={{ color: '#FF5722', marginBottom: '10px' }}>👥 Group Projects</h4>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FF5722', marginBottom: '5px' }}>30%</div>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>Collaborative participation</p>
              </div>
              <div style={{
                padding: '20px',
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f8f8',
                borderRadius: '8px',
                borderLeft: '4px solid #FF5722',
                textAlign: 'center'
              }}>
                <h4 style={{ color: '#FF5722', marginBottom: '10px' }}>🎯 Implementation Plan</h4>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FF5722', marginBottom: '5px' }}>30%</div>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>Final community plan</p>
              </div>
              <div style={{
                padding: '20px',
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f8f8',
                borderRadius: '8px',
                borderLeft: '4px solid #FF5722',
                textAlign: 'center'
              }}>
                <h4 style={{ color: '#FF5722', marginBottom: '10px' }}>🏆 Pass Rate</h4>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FF5722', marginBottom: '5px' }}>70%</div>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>Overall score required</p>
              </div>
            </div>

            <h2>Expected Outcomes</h2>
            <p>Upon successful completion, participants will be equipped with comprehensive knowledge and practical skills to champion technology adoption in Pacific Island utility management.</p>
            
            <div style={{
              backgroundColor: isDarkMode ? '#2a2a2a' : '#f9f9f9',
              padding: '25px',
              borderRadius: '8px',
              margin: '30px 0'
            }}>
              <h3 style={{ color: '#FF5722', marginBottom: '20px', textAlign: 'center' }}>🎓 What You'll Achieve</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                <div>
                  <strong>1. Understand</strong> the transformative potential of integrated GIS-Blockchain-AI solutions with Dynamic NFT asset representation
                </div>
                <div>
                  <strong>2. Demonstrate</strong> practical skills in asset capture, map object creation, and Dynamic NFT management
                </div>
                <div>
                  <strong>3. Develop</strong> realistic implementation plans for their communities
                </div>
                <div>
                  <strong>4. Build</strong> networks for ongoing collaboration and support
                </div>
                <div>
                  <strong>5. Champion</strong> technology adoption in Pacific Island utility management
                </div>
                <div>
                  <strong>6. Master</strong> the separation of spatial geometry from blockchain-based asset attributes
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
              <h2 style={{ color: 'white', marginBottom: '20px' }}>Ready to Transform Pacific Infrastructure?</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: 0.9 }}>
                Join our intensive 4-day program and learn how cutting-edge GIS-Blockchain-AI integration can revolutionize utility management in your Pacific Island community. Master the future of infrastructure technology with hands-on training and expert guidance.
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
