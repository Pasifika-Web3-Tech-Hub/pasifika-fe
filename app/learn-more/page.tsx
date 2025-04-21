"use client";

import { useState } from "react";
import { useDarkMode } from "@/lib/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import "../page.css";
import "./learn-more.css";

export default function LearnMore() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Header Section - Pasifika Styled */}
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
              <Link href="/" className="nav-link-button">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Learn More Content */}
      <div className="learn-more-content">
        <div className="learn-more-banner">
          <h1>Resources & Information</h1>
        </div>
        
        <div className="navigation-grid">
          <Link href="/" className="nav-card">
            <div className="nav-card-inner">
              <h2>Home</h2>
              <p>Return to Landing Page</p>
            </div>
          </Link>
          
          <Link href="/constitution" className="nav-card">
            <div className="nav-card-inner">
              <h2>Constitution</h2>
              <p>Our governing principles and values</p>
            </div>
          </Link>
          
          <Link href="/whitepaper" className="nav-card">
            <div className="nav-card-inner">
              <h2>Whitepaper</h2>
              <p>Technical vision and implementation details</p>
            </div>
          </Link>
          
          <Link href="/tokenomics" className="nav-card">
            <div className="nav-card-inner">
              <h2>Tokenomics</h2>
              <p>Token distribution and economic model</p>
            </div>
          </Link>
          
          <Link href="/services" className="nav-card">
            <div className="nav-card-inner">
              <h2>Services</h2>
              <p>Explore our platform offerings</p>
            </div>
          </Link>
          
          <Link href="/membership" className="nav-card">
            <div className="nav-card-inner">
              <h2>Membership Registration</h2>
              <p>Sign up to become a member</p>
            </div>
          </Link>
          
          <Link href="/about" className="nav-card">
            <div className="nav-card-inner">
              <h2>About Us</h2>
              <p>Our mission and journey</p>
            </div>
          </Link>
          
          <Link href="/contact" className="nav-card">
            <div className="nav-card-inner">
              <h2>Contact Us</h2>
              <p>Get in touch with our team</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="footer-banner">
        <p>Copyright &copy; Pasifika 2025</p>
      </div>
    </div>
  );
}
