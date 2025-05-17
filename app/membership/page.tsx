"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import "../page.css";
import "../shared-pages.css";
import "./membership.css";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

export default function Membership() {
  const { isDarkMode } = useDarkMode();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { primaryWallet, setShowAuthFlow } = useDynamicContext();
  const [walletConnected, setWalletConnected] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    organization: '',
    position: '',
    country: '',
    interests: '',
    message: '',
    walletAddress: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (primaryWallet) {
      setWalletConnected(true);
      setFormData(prev => ({
        ...prev,
        walletAddress: primaryWallet.address
      }));
    } else {
      setWalletConnected(false);
      setFormData(prev => ({
        ...prev,
        walletAddress: ''
      }));
    }
  }, [primaryWallet]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare form data for FormSubmit.co submission
      const formsubmitData = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        linkedin: formData.linkedin,
        organization: formData.organization,
        position: formData.position,
        country: formData.country,
        interests: formData.interests,
        message: formData.message,
        walletAddress: formData.walletAddress,
        _subject: "New Pasifika Web3 Tech Hub Membership Registration"
      };
      
      // Send data to FormSubmit.co API
      const response = await fetch("https://formsubmit.co/4c9c6823d1dbcdacea84e6851c5cea15", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formsubmitData)
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit form. Please try again.");
      }
      
      // Show success message
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error sending registration:", error);
      alert("There was an error submitting your registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
          <h1>Membership Registration</h1>
        </div>
        
        <div className="content-container">
          <div className="content-section">
            <h2>Membership Program</h2>
            <p>Join our growing community of Pacific Island crypto enthusiasts and unlock exclusive benefits through our tiered membership system.</p>
            
            <div className="membership-tiers-overview">
              <h3>Membership Tiers</h3>
              <div className="tiers-grid">
                <div className="tier-overview-card">
                  <h4>Guest (Tier 0)</h4>
                  <p className="tier-price">Free</p>
                  <ul className="tier-features">
                    <li>Access to the marketplace</li>
                    <li>View listings and pricing</li>
                    <li><strong>1%</strong> transaction fee</li>
                    <li>No profit-sharing eligibility</li>
                    <li>No governance rights</li>
                  </ul>
                </div>
                
                <div className="tier-overview-card">
                  <h4>Member (Tier 1)</h4>
                  <p className="tier-price">0.005 ETH or 0.0001 RBTC</p>
                  <ul className="tier-features">
                    <li>All Guest benefits</li>
                    <li><strong>0.5%</strong> transaction fee</li>
                    <li>Annual profit-sharing eligible</li>
                    <li>Governance participation</li>
                    <li>Access to member-only features</li>
                  </ul>
                </div>
                
                <div className="tier-overview-card">
                  <h4>Node Operator (Tier 2)</h4>
                  <p className="tier-price">Requires ETH or RBTC Staking</p>
                  <ul className="tier-features">
                    <li>All Member benefits</li>
                    <li><strong>0.25%</strong> transaction fee</li>
                    <li>Priority access to new features</li>
                    <li>Enhanced profit-sharing</li>
                    <li>Run a validating node</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="profit-sharing-overview">
              <h3>Profit Sharing Program</h3>
              <p>As a Member or Node Operator, you are eligible for annual profit sharing based on treasury performance and your activity.</p>
              
              <h4>Eligibility Requirements:</h4>
              <ul>
                <li>Must maintain active membership for at least <strong>3 months</strong> before distribution</li>
                <li>Minimum of <strong>5 transactions</strong> on the platform during the financial year</li>
                <li>Transaction volume of at least <strong>1 ETH</strong> (or equivalent <strong>0.02 RBTC</strong> on RootStock) during the financial year</li>
                <li>The Pasifika Financial Year runs from <strong>December 27 to December 24</strong></li>
              </ul>
              
              <div className="profit-sharing-details">
                <div className="profit-detail-item">
                  <p className="detail-value">50%</p>
                  <p className="detail-label">of Treasury Profits Distributed</p>
                </div>
                
                <div className="profit-detail-item">
                  <p className="detail-value">Annual</p>
                  <p className="detail-label">Distribution Frequency</p>
                </div>
                
                <div className="profit-detail-item">
                  <p className="detail-value">December 24</p>
                  <p className="detail-label">Distribution Date</p>
                </div>
              </div>
            </div>
            
            <div className="wallet-connection-section">
              <h3>Connect Your Wallet</h3>
              <p>Connect your Ethereum wallet to register for membership and select your tier.</p>
              
              {!walletConnected ? (
                <button 
                  className="connect-wallet-btn" 
                  onClick={() => setShowAuthFlow(true)}
                >
                  Connect Wallet
                </button>
              ) : (
                <div className="wallet-connected">
                  <p>Wallet Connected: {primaryWallet?.address.substring(0, 6)}...{primaryWallet?.address.substring(primaryWallet?.address.length - 4)}</p>
                </div>
              )}
            </div>
            
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="registration-form">
                <div className="form-header">
                  <h3>Membership Registration Form</h3>
                  <p>Please fill out the form below to register for your Pasifika membership.</p>
                </div>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">Full Name <span style={{ color: '#FF5722' }}>*</span></label>
                    <input 
                      type="text" 
                      id="fullName" 
                      className="form-input" 
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address <span style={{ color: '#FF5722' }}>*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      className="form-input" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number <span style={{ color: '#FF5722' }}>*</span></label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="form-input" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="linkedin" className="form-label">LinkedIn Profile URL <span style={{ color: '#FF5722' }}>*</span> (required for member verification)</label>
                    <input 
                      type="url" 
                      id="linkedin" 
                      className="form-input" 
                      placeholder="https://www.linkedin.com/in/yourprofile" 
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="organization" className="form-label">Organization/Company <span style={{ color: '#FF5722' }}>*</span></label>
                    <input 
                      type="text" 
                      id="organization" 
                      className="form-input" 
                      value={formData.organization}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="position" className="form-label">Role/Position <span style={{ color: '#FF5722' }}>*</span></label>
                    <input 
                      type="text" 
                      id="position" 
                      className="form-input" 
                      value={formData.position}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="country" className="form-label">Country/Island <span style={{ color: '#FF5722' }}>*</span></label>
                    <select 
                      id="country" 
                      className="form-select" 
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                    >
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
                    <label htmlFor="interests" className="form-label">Areas of Interest <span style={{ color: '#FF5722' }}>*</span></label>
                    <select 
                      id="interests" 
                      className="form-select" 
                      value={formData.interests}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select primary interest</option>
                      <option value="digitalMarketplace">Digital Marketplace</option>
                      <option value="financialServices">Financial Services</option>
                      <option value="digitalCreation">Digital Creation/NFTs</option>
                      <option value="development">Web3 Development</option>
                      <option value="investment">Investment Opportunities</option>
                      <option value="education">Education & Resources</option>
                      <option value="communityInitiatives">Community Initiatives</option>
                      <option value="nodeOperation">Node Operation</option>
                      <option value="exchange">Exchange Trading</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Why are you interested in joining?</label>
                    <textarea 
                      id="message" 
                      className="form-textarea"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share your interest in our membership tiers and how you plan to participate in the Pasifika ecosystem..."
                    ></textarea>
                  </div>
                  
                  <div className="form-group checkbox-group">
                    <input type="checkbox" id="terms" required />
                    <label htmlFor="terms" className="checkbox-label">
                      I agree to the <Link href="/terms-of-service" className="text-link">Pasifika Terms of Service</Link>
                    </label>
                  </div>
                  
                  <div className="form-group">
                    <button 
                      type="submit" 
                      className="form-button" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Register"}
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="success-message">
                <h3>Thank You for Registering!</h3>
                <p>Your membership application has been successfully submitted. We&apos;ll review your information and get back to you with a confirmation soon.</p>
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
