"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import "../page.css";
import "../shared-pages.css";
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
      // Prepare form data for Formspree submission
      const formspreeData = {
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
      
      // Send data to Formspree API
      const response = await fetch("https://formspree.io/f/mwplaeor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formspreeData)
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
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">Full Name *</label>
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
                  <label htmlFor="email" className="form-label">Email Address *</label>
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
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
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
                  <label htmlFor="linkedin" className="form-label">LinkedIn Profile URL * (required for member verification)</label>
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
                  <label htmlFor="organization" className="form-label">Organization/Company *</label>
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
                  <label htmlFor="position" className="form-label">Role/Position *</label>
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
                  <label htmlFor="country" className="form-label">Country/Island *</label>
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
                  <label htmlFor="interests" className="form-label">Areas of Interest *</label>
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
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Why are you interested in joining? (Optional)</label>
                  <textarea 
                    id="message" 
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                
                <div className="form-group checkbox-group">
                  <input type="checkbox" id="terms" required />
                  <label htmlFor="terms" className="checkbox-label">
                    I agree to the <Link href="/constitution" className="text-link">Pasifika Constitution</Link> and Terms of Service
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
