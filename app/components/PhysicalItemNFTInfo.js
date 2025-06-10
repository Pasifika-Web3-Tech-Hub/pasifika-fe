// app/components/PhysicalItemNFTInfo.js
import Link from 'next/link';
import '../page.css';

export default function PhysicalItemNFTInfo() {
  return (
    <div className="component-info">
      <div className="component-details">
        <div className="component-metrics">
          <div className="metric">
            <span className="metric-value">200+</span>
            <span className="metric-label">Transactions</span>
          </div>
          <div className="metric">
            <span className="metric-value">1.5%</span>
            <span className="metric-label">Fee Rate</span>
          </div>
        </div>
        <div className="component-action">
          <Link href="/money-transfer">
            <button className="primary-button command-button">
              <span className="button-icon">💸</span>
              <span className="button-text">Money Transfer Service</span>
              <span className="button-arrow">→</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
