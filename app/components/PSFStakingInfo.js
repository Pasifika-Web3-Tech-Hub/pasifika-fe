// app/components/PSFStakingInfo.js
import Link from 'next/link';
import '../page.css';

export default function PSFStakingInfo() {
  return (
    <div className="component-info">
      <div className="component-details">
        <div className="component-metrics">
          <div className="metric">
            <span className="metric-value">20+</span>
            <span className="metric-label">Network Nodes</span>
          </div>
          <div className="metric">
            <span className="metric-value">15%</span>
            <span className="metric-label">Annual Rewards</span>
          </div>
        </div>
        <div className="component-action">
          <Link href="/membership-portal">
            <button className="view-details-button">View Membership Portal</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
