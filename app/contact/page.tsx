"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "../page.css";
import "../shared-pages.css";

export default function Contact() {
  const { isDarkMode } = useDarkMode();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        _subject: `Pasifika Contact: ${formData.subject}`
      };
      
      // Send data to Formspree API
      const response = await fetch("https://formspree.io/f/movdqdoo", {
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
      console.error("Error sending message:", error);
      alert("There was an error submitting your message. Please try again.");
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
          <h1>Contact Us</h1>
        </div>
        
        <div className="content-container">
          <div className="content-section">
            <h2>Get in Touch</h2>
            <p>We&apos;re excited to hear from you! Whether you have questions about our platform, want to explore partnership opportunities, or need support with your account, our team is here to help.</p>
            
            <div className="grid-2-cols">
              <div>
                <h3>Contact Information</h3>
                <p><strong>Email:</strong> info@pasifika.xyz</p>
                <p><strong>Whatsapp:</strong> +676 7760129</p>
                <p><strong>Location:</strong> To be confirmed (Headquarters)</p>
              
                <h3>Regional Representatives</h3>
                <p>We have regional representatives in Fiji, Tonga, Samoa, Tuvalu, Niue, Cook Islands, Honolulu (Hawaii), Vanuatu, Solomon Islands, Papua New Guinea, New Zealand and Australia.</p>
                
                <h3>Social Media</h3>
                <p>Follow us on social media for the latest updates:</p>
                <ul>
                  <li>
                    <Link 
                      href="https://www.linkedin.com/company/pasifika-web3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      LinkedIn: Pasifika Web3
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="https://facebook.com/61575068162411" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      Facebook: Pasifika Web3
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Your Name <span style={{ color: '#FF5722' }}>*</span></label>
                      <input 
                        type="text" 
                        id="name" 
                        className="form-input" 
                        value={formData.name}
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
                      <label htmlFor="subject" className="form-label">Subject <span style={{ color: '#FF5722' }}>*</span></label>
                      <select 
                        id="subject" 
                        className="form-select" 
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="feedback">Feedback</option>
                        <option value="membership">Membership Question</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Your Message <span style={{ color: '#FF5722' }}>*</span></label>
                      <textarea 
                        id="message" 
                        className="form-textarea"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    
                    <div className="form-group">
                      <button 
                        type="submit" 
                        className="form-button"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="success-message">
                    <h3>Message Sent Successfully!</h3>
                    <p>Thank you for reaching out to us. One of our team members will respond to your message within 24-48 hours.</p>
                    <p>In the meantime, you might find answers to common questions in our resources section.</p>
                  </div>
                )}
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
