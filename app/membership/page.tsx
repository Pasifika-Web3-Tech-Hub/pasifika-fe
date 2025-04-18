"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "../page.css";
import "../shared-pages.css";

export default function Membership() {
  const { isDarkMode } = useDarkMode();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Header Section */}
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
              <span className="logo-accent">Pasifika Web3 Tech Hub</span>
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
          <h1>Membership Registration</h1>
        </div>
        
        <div className="content-container">
          <div className="content-section">
            <h2>Join the Pasifika Web3 Community</h2>
            <p>Become a member of the Pasifika Web3 Tech Hub and gain access to exclusive benefits, resources, and opportunities within our growing ecosystem.</p>
            
            <h3>Membership Benefits</h3>
            <ul>
              <li><strong>Early access</strong> to new platform features and services</li>
              <li><strong>Reduced fees</strong> on marketplace transactions</li>
              <li><strong>Voting rights</strong> in platform governance decisions</li>
              <li><strong>Educational resources</strong> on Web3 technologies</li>
              <li><strong>Networking opportunities</strong> with other Pacific Web3 enthusiasts</li>
              <li><strong>Participation</strong> in community-funded initiatives</li>
            </ul>
            
            {!formSubmitted ? (
              <form onSubmit={handleSubmit}>
                <div className="grid-2-cols">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" id="firstName" className="form-input" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" id="lastName" className="form-input" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" id="email" className="form-input" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="country" className="form-label">Country/Island</label>
                  <select id="country" className="form-select" required>
                    <option value="">Select your country</option>
                    <option value="fiji">Fiji</option>
                    <option value="samoa">Samoa</option>
                    <option value="tonga">Tonga</option>
                    <option value="vanuatu">Vanuatu</option>
                    <option value="solomonIslands">Solomon Islands</option>
                    <option value="cookIslands">Cook Islands</option>
                    <option value="kiribati">Kiribati</option>
                    <option value="marshallIslands">Marshall Islands</option>
                    <option value="micronesia">Micronesia</option>
                    <option value="nauru">Nauru</option>
                    <option value="niue">Niue</option>
                    <option value="palau">Palau</option>
                    <option value="papuaNewGuinea">Papua New Guinea</option>
                    <option value="tuvaluIslands">Tuvalu</option>
                    <option value="other">Other (specify below)</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="interests" className="form-label">Areas of Interest</label>
                  <select id="interests" className="form-select" required>
                    <option value="">Select primary interest</option>
                    <option value="digitalMarketplace">Digital Marketplace</option>
                    <option value="financialServices">Financial Services</option>
                    <option value="digitalCreation">Digital Creation/NFTs</option>
                    <option value="development">Web3 Development</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="education">Education & Resources</option>
                    <option value="communityInitiatives">Community Initiatives</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Why are you interested in joining? (Optional)</label>
                  <textarea id="message" className="form-textarea"></textarea>
                </div>
                
                <div className="form-group">
                  <button type="submit" className="form-button">Register for Membership</button>
                </div>
              </form>
            ) : (
              <div className="success-message">
                <h3>Thank You for Registering!</h3>
                <p>Your membership application has been received. We'll review your information and send you a confirmation email with next steps within 24-48 hours.</p>
                <p>In the meantime, feel free to explore more about our platform and community.</p>
              </div>
            )}
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
