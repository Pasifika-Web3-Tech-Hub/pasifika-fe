"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import "../page.css";
import "../shared-pages.css";
import "./whitepaper.css";

export default function Whitepaper() {
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
              <Link href="/learn-more" className="nav-link-button">
                Back to Resources
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="page-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div className="certificate-container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '2rem' }}>Official Business Certificate</h2>
          
          <div style={{ boxShadow: isDarkMode ? '0 4px 20px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', backgroundColor: isDarkMode ? '#222' : '#fff', marginBottom: '2rem' }}>
            <Image
              src="/certificate.png"
              alt="Pasifika Business Certificate"
              width={700}
              height={500}
              style={{ width: '100%', height: 'auto', objectFit: 'contain', maxHeight: '700px' }}
              priority
            />
          </div>
          
          <div className="footer-banner" style={{ marginTop: '3rem' }}>
            <p>Copyright © Pasifika 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
