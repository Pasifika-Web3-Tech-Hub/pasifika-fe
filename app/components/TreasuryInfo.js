// app/components/TreasuryInfo.js
import Link from 'next/link';
import '../page.css';

export default function TreasuryInfo() {
  return (
    <div className="component-info">
      <div className="component-details">
        <div className="component-metrics">
          <div className="metric">
            <span className="metric-value">3</span>
            <span className="metric-label">Active Funds</span>
          </div>
          <div className="metric">
            <span className="metric-value">5%</span>
            <span className="metric-label">Growth Rate</span>
          </div>
        </div>
        <div className="component-action">
          <Link href="/treasury-management">
            <button className="view-details-button">Manage Treasury Funds</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
