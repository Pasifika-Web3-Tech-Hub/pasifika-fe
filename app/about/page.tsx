"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import "../page.css";
import "../shared-pages.css";

export default function About() {
  const { isDarkMode } = useDarkMode();

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
          <h1>About Us</h1>
        </div>
        
        <div className="content-container">
          <div className="content-section">
            <h2>Our Story</h2>
            <p>Pasifika Web3 Tech Hub was founded in 2025 by a team of technologists, entrepreneurs, and community leaders from across the Pacific Islands. Recognizing both the challenges and opportunities that blockchain technology presents for island communities, we came together to create a platform specifically designed for the unique context of Pacific Island nations.</p>
            
            <h3>Our Mission</h3>
            <p>We're on a mission to empower Pacific Island communities through accessible Web3 technologies, creating economic opportunities while preserving and celebrating our cultural heritage. We believe in building decentralized systems that work for people regardless of their location, technical background, or economic status.</p>
            
            <h3>Our Vision</h3>
            <p>We envision a future where Pacific Island communities are active participants in the global digital economy, with tools and infrastructure that address our specific needs and challenges. Through the Pasifika Web3 Marketplace, we aim to create resilient economic systems that can withstand geographical isolation, climate challenges, and limited traditional infrastructure.</p>
            
            <h3>Our Team</h3>
            <p>Our founding team brings together expertise from blockchain development, community organizing, traditional Pacific knowledge systems, and international finance:</p>
            <ul>
              <li><strong>Leilani Tonga</strong> - Co-Founder & Blockchain Specialist</li>
              <li><strong>Sione Mataele</strong> - Co-Founder & Technology Lead</li>
              <li><strong>Ana Vanuatu</strong> - Co-Founder & Community Manager</li>
              <li><strong>Tevita Samoa</strong> - Co-Founder & Marketing Director</li>
              <li><strong>Marama Fiji</strong> - Co-Founder & Financial Strategist</li>
              <li><strong>Koa Hawaii</strong> - Co-Founder & Operations Lead</li>
            </ul>
            
            <h3>Our Approach</h3>
            <p>We believe in building technology that is:</p>
            <ul>
              <li><strong>Community-driven:</strong> Developed with and for Pacific communities</li>
              <li><strong>Culturally respectful:</strong> Honoring Pacific values and traditions</li>
              <li><strong>Practically focused:</strong> Addressing real economic and social needs</li>
              <li><strong>Environmentally conscious:</strong> Minimizing ecological impact</li>
              <li><strong>Inclusive by design:</strong> Accessible regardless of technical knowledge</li>
            </ul>
            
            <h3>Our Partners</h3>
            <p>We're proud to work with a growing network of regional and international partners including:</p>
            <ul>
              <li>Pacific Island regional organizations</li>
              <li>Local government technology initiatives</li>
              <li>International blockchain development firms</li>
              <li>Academic institutions researching decentralized systems</li>
              <li>Community development organizations</li>
            </ul>
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
