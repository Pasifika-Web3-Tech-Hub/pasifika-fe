'use client';

import { useDarkMode } from "@/lib/useDarkMode";
import Link from 'next/link';
import Image from 'next/image';
import './page.css';
import './shared-pages.css';

export default function NotFound() {
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
              <Link href="/" className="nav-link-button">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="page-content">
        <div className="page-banner">
          <h1>Still Under Construction</h1>
        </div>
        
        <div className="content-container" style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div style={{ 
            maxWidth: '600px', 
            margin: '0 auto', 
            padding: '30px', 
            borderRadius: '10px',
            backgroundColor: isDarkMode ? '#2a2a2a' : '#f5f5f5',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <div style={{ marginBottom: '30px' }}>
              <Image 
                src="/construction.svg" 
                width={200} 
                height={200} 
                alt="Under Construction" 
                style={{ marginBottom: '20px' }}
              />
              
              <h2 style={{ color: '#FF5722', marginBottom: '20px' }}>
                This Page Is Still Being Built
              </h2>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '20px' }}>
                We're working hard to bring you more information about our services and solutions for Pacific Island communities.
              </p>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '30px' }}>
                Please check back soon for updates or contact us directly for more information.
              </p>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <Link href="/" className="primary-button">
                Return Home
              </Link>
              
              <Link href="/learn-more" className="secondary-button">
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="footer-banner">
        <p>Copyright &copy; Pasifika 2025</p>
      </div>
      
      <style jsx>{`
        .primary-button, .secondary-button {
          display: inline-block;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 600;
          text-align: center;
          transition: all 0.2s ease;
        }
        
        .primary-button {
          background-color: #FF5722;
          color: white;
          border: 2px solid #FF5722;
        }
        
        .secondary-button {
          background-color: transparent;
          color: ${isDarkMode ? '#FF5722' : '#FF5722'};
          border: 2px solid #FF5722;
        }
        
        .primary-button:hover {
          background-color: #e64a19;
          border-color: #e64a19;
        }
        
        .secondary-button:hover {
          background-color: rgba(255, 87, 34, 0.1);
        }
      `}</style>
    </div>
  );
}
