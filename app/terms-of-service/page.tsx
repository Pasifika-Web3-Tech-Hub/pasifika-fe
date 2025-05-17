"use client";

import { useDarkMode } from "@/lib/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import "../page.css";
import "../shared-pages.css";
import "./terms.css";

export default function TermsOfService() {
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
      <div className="page-content">
        <div className="page-banner">
          <h1>Terms of Service</h1>
        </div>
        
        <div className="terms-container">
          <div className="terms-section">
            <h2>Pasifika Web3 Tech Hub Terms of Service</h2>
            <p className="effective-date">Effective Date: May 6, 2025</p>
            
            <div className="terms-introduction">
              <p>Welcome to the Pasifika Web3 Tech Hub. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our platform, services, and membership program. By accessing or using our services, you agree to be bound by these Terms.</p>
            </div>
            
            <div className="terms-item">
              <h3>1. Membership Program</h3>
              <p>The Pasifika Web3 Tech Hub offers a tiered membership system with the following levels:</p>
              <ul>
                <li><strong>Guest (Tier 0):</strong> Free access with a 1% transaction fee and no profit-sharing eligibility.</li>
                <li><strong>Member (Tier 1):</strong> Requires payment of 0.005 ETH (or 0.0001 RBTC on RootStock) with a 0.5% transaction fee, profit-sharing eligibility, and exchange benefits.</li>
                <li><strong>Node Operator (Tier 2):</strong> Requires ETH staking (or RBTC staking on RootStock) with a 0.25% transaction fee, priority access, and enhanced profit-sharing.</li>
              </ul>
              <p>Membership fees are non-refundable. Your membership tier determines your transaction fees, governance rights, and profit-sharing eligibility.</p>
            </div>
            
            <div className="terms-item">
              <h3>2. Profit Sharing Program</h3>
              <p>Members and Node Operators may be eligible for profit sharing based on the following criteria:</p>
              <ul>
                <li>Must maintain active membership for at least 3 months before distribution</li>
                <li>Minimum of 5 transactions on the platform during the financial year</li>
                <li>Transaction volume of at least 1 ETH (or equivalent 0.02 RBTC on RootStock) during the financial year</li>
                <li>Distributions occur annually on December 24</li>
              </ul>
              <p>The Pasifika Financial Year runs from December 27 to December 24. 50% of treasury profits are distributed to eligible members. The actual share amount varies based on membership tier, activity level, and overall treasury performance.</p>
            </div>
            
            <div className="terms-item">
              <h3>3. User Registration</h3>
              <p>To register as a member, you must:</p>
              <ul>
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your registration information</li>
                <li>Connect an Ethereum wallet that you control</li>
                <li>Be at least 18 years old</li>
              </ul>
              <p>You are responsible for maintaining the confidentiality of your wallet credentials and for all activities that occur under your account.</p>
            </div>
            
            <div className="terms-item">
              <h3>4. Platform Rules</h3>
              <p>When using our platform, you agree not to:</p>
              <ul>
                <li>Violate any applicable laws, regulations, or these Terms</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with the proper operation of the platform</li>
                <li>Attempt to gain unauthorized access to the platform or its systems</li>
                <li>Use the platform to transmit any harmful code or engage in destructive activities</li>
                <li>Engage in fraudulent or deceptive practices</li>
              </ul>
              <p>We reserve the right to terminate or suspend your access to the platform for violation of these rules.</p>
            </div>
            
            <div className="terms-item">
              <h3>5. Pacific Island Focus</h3>
              <p>The Pasifika Web3 Tech Hub is primarily focused on serving Pacific Island communities and businesses. While we welcome users from all regions, our services, content, and community initiatives prioritize Pacific Island development and economic opportunities.</p>
            </div>
            
            <div className="terms-item">
              <h3>6. Smart Contract Interactions</h3>
              <p>Our platform utilizes smart contracts for various functions, including membership registration, transactions, and profit distribution. By using our platform, you acknowledge that:</p>
              <ul>
                <li>Blockchain transactions are irreversible</li>
                <li>You are responsible for verifying all transaction details before submission</li>
                <li>Smart contract functionality may be subject to technical limitations or vulnerabilities</li>
                <li>Gas fees for transactions are your responsibility</li>
              </ul>
              <p>We strive to ensure the security and reliability of our smart contracts but cannot guarantee they are free from bugs or vulnerabilities.</p>
            </div>
            
            <div className="terms-item">
              <h3>7. Intellectual Property</h3>
              <p>The Pasifika Web3 Tech Hub and its original content, features, and functionality are owned by Pasifika and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
            </div>
            
            <div className="terms-item">
              <h3>8. Limitation of Liability</h3>
              <p>To the maximum extent permitted by law, Pasifika shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, arising out of or relating to your use or inability to use the platform.</p>
            </div>
            
            <div className="terms-item">
              <h3>9. Changes to Terms</h3>
              <p>We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the new Terms on the platform and updating the &quot;Effective Date&quot; at the top. Your continued use of the platform after such changes constitutes your acceptance of the new Terms.</p>
            </div>
            
            <div className="terms-item">
              <h3>10. Governing Law</h3>
              <p>These Terms shall be governed by the laws of the Pacific Islands, without regard to its conflict of law provisions.</p>
            </div>
            
            <div className="terms-contact">
              <h3>Contact Us</h3>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p><strong>Email:</strong> info@pasifika.xyz</p>
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
