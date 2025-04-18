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
          <h1>Contact Us</h1>
        </div>
        
        <div className="content-container">
          <div className="content-section">
            <h2>Get in Touch</h2>
            <p>We're excited to hear from you! Whether you have questions about our platform, want to explore partnership opportunities, or need support with your account, our team is here to help.</p>
            
            <div className="grid-2-cols">
              <div>
                <h3>Contact Information</h3>
                <p><strong>Email:</strong> info@pasifika.xyz</p>
                <p><strong>Phone:</strong> +1 808-987-6543</p>
                <p><strong>Location:</strong> Honolulu, Hawaii (Headquarters)</p>
                <p><strong>Hours:</strong> Monday - Friday, 9am - 5pm (Hawaii Time)</p>
                
                <h3>Regional Representatives</h3>
                <p>We have regional representatives in Tonga, Tuvalu, Samoa, Niue, Cook Islands,Fiji, Vanuatu, Solomon Islands, Papua New Guinea, New Zealand and Australia. Please contact our main office for details.</p>
                
                <h3>Social Media</h3>
                <p>Follow us on social media for the latest updates:</p>
                <ul>
                  <li>Twitter: @PasifikaXYZ</li>
                  <li>Telegram: PasifikaXYZCommunity</li>
                  <li>Discord: Pasifika XYZ Hub</li>
                </ul>
              </div>
              
              <div>
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Your Name</label>
                      <input type="text" id="name" className="form-input" required />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input type="email" id="email" className="form-input" required />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <select id="subject" className="form-select" required>
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
                      <label htmlFor="message" className="form-label">Your Message</label>
                      <textarea id="message" className="form-textarea" required></textarea>
                    </div>
                    
                    <div className="form-group">
                      <button type="submit" className="form-button">Send Message</button>
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
