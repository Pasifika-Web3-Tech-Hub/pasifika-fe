import Link from "next/link";
import Image from "next/image";

interface MembershipCardProps {
  isDarkMode: boolean;
}

export default function MembershipCard({ isDarkMode }: MembershipCardProps) {
  return (
    <div className={`membership-card ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="membership-card-inner">
        <div className="membership-card-header">
          <h2>Become a Member</h2>
          <p>Join our community and unlock exclusive benefits</p>
        </div>
        
        <div className="membership-tiers">
          <div className="tier-card">
            <div className="tier-header">
              <h3 className="tier-name">Member</h3>
              <div className="tier-price">0.0001 RBTC</div>
            </div>
            <div className="tier-benefits">
              <ul>
                <li>✓ Reduced transaction fees</li>
                <li>✓ Access to community</li>
                <li>✓ Profit sharing</li>
                <li>✓ Voting rights</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="membership-cta">
          <Link href="/membership-portal" className="join-button">
            Join Now
          </Link>
          <Link href="/membership-portal" className="learn-more">
            Learn more about membership
          </Link>
        </div>
      </div>
      
      <style jsx>{`
        .membership-card {
          background: ${isDarkMode ? '#2a2a2a' : '#ffffff'};
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          border: 1px solid ${isDarkMode ? '#444' : '#e0e0e0'};
          margin: 20px 0;
        }
        
        .membership-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }
        
        .membership-card-inner {
          padding: 24px;
        }
        
        .membership-card-header {
          text-align: center;
          margin-bottom: 20px;
        }
        
        .membership-card-header h2 {
          color: ${isDarkMode ? '#fff' : '#333'};
          margin: 0 0 8px 0;
          font-size: 1.5rem;
        }
        
        .membership-card-header p {
          color: ${isDarkMode ? '#aaa' : '#666'};
          margin: 0;
          font-size: 1rem;
        }
        
        .tier-card {
          background: ${isDarkMode ? '#333' : '#f9f9f9'};
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 20px;
          border: 1px solid ${isDarkMode ? '#444' : '#e0e0e0'};
        }
        
        .tier-header {
          background: linear-gradient(135deg, #FF5722 0%, #FF9800 100%);
          color: white;
          padding: 16px;
          text-align: center;
        }
        
        .tier-name {
          margin: 0 0 4px 0;
          font-size: 1.2rem;
          font-weight: 600;
        }
        
        .tier-price {
          font-size: 1.1rem;
          opacity: 0.9;
        }
        
        .tier-benefits {
          padding: 16px;
        }
        
        .tier-benefits ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .tier-benefits li {
          padding: 8px 0;
          color: ${isDarkMode ? '#ddd' : '#555'};
          display: flex;
          align-items: center;
        }
        
        .tier-benefits li:before {
          content: '✓';
          color: #4CAF50;
          margin-right: 8px;
          font-weight: bold;
        }
        
        .membership-cta {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
        }
        
        .join-button {
          display: inline-block;
          background: linear-gradient(135deg, #FF5722 0%, #FF9800 100%);
          color: white;
          padding: 12px 32px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          text-align: center;
          transition: all 0.3s ease;
          margin-bottom: 12px;
          width: 100%;
          max-width: 200px;
          border: none;
          cursor: pointer;
        }
        
        .join-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 87, 34, 0.3);
        }
        
        .learn-more {
          color: ${isDarkMode ? '#aaa' : '#666'};
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.2s;
        }
        
        .learn-more:hover {
          color: ${isDarkMode ? '#fff' : '#333'};
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
