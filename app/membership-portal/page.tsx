"use client";

import { useState, useEffect, useCallback } from "react";
import { useDarkMode } from "@/lib/useDarkMode";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useWriteContract, useReadContract } from "wagmi";
import { Address, Abi } from "viem";
import Image from "next/image";
import Link from "next/link";
import "../page.css";
import "../shared-pages.css";
import "./membership.css";

// Get contract info - using Arbitrum deployment
import membershipContractInfo from "../../deployed_contracts/PasifikaMembership_arbitrum.json";
import membershipAbi from "../../deployed_contracts/PasifikaMembership_arbitrum_ABI.json";

export default function MembershipPortal() {
  const { isDarkMode } = useDarkMode();
  const { primaryWallet, setShowAuthFlow } = useDynamicContext();
  const [walletConnected, setWalletConnected] = useState(false);
  const [membershipStatus, setMembershipStatus] = useState("Guest");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [transactionHash, setTransactionHash] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [memberSince, setMemberSince] = useState<Date | null>(null);
  const [nextDistribution, setNextDistribution] = useState<Date | null>(null);
  const [totalMembers, setTotalMembers] = useState(0);
  const [treasuryBalance, setTreasuryBalance] = useState(0);
  const [membershipFee, setMembershipFee] = useState("0.0001");
  const [lastDistribution, setLastDistribution] = useState<Date | null>(null);

  const { writeContract, isPending, isSuccess, isError, error, data } = useWriteContract();

  // Get the contract address from the JSON file and ensure it's typed as an Address
  const CONTRACT_ADDRESS = membershipContractInfo.address as Address;

  // Calculate membership fee in wei
  const membershipFeeEth = parseFloat(membershipFee);
  const membershipFeeWei = BigInt(membershipFeeEth * 10**18);

  // Simulate fetching membership status - using useCallback to avoid dependency issues
  const fetchMembershipStatus = useCallback(async () => {
    if (!primaryWallet) return;
    
    // This would normally call the membership contract
    // For now, we'll simulate with random data
    setIsLoading(true);
    
    setTimeout(() => {
      const statuses = ["Guest", "Member", "Node Operator"];
      const randomStatus = Math.random() > 0.7 ? "Guest" : statuses[Math.floor(Math.random() * 3)];
      setMembershipStatus(randomStatus);
      
      if (randomStatus !== "Guest") {
        // Generate a random date in the past year for member since
        const now = new Date();
        const randomPastDate = new Date(now.getTime() - Math.random() * 365 * 24 * 60 * 60 * 1000);
        setMemberSince(randomPastDate);
      } else {
        setMemberSince(null);
      }
      
      setIsLoading(false);
    }, 1000);
  }, [primaryWallet]);

  // Simulate fetching membership stats - using useCallback
  const fetchMembershipStats = useCallback(async () => {
    // This would normally call the contract for data
    // For now we'll simulate with mock data
    setTimeout(() => {
      setTotalMembers(Math.floor(Math.random() * 1000) + 500);
      setTreasuryBalance(Math.floor(Math.random() * 100) / 10);
      
      // Set next distribution date to Dec 24, 2025
      const distributionDate = new Date('2025-12-24');
      setNextDistribution(distributionDate);
      
      // Set last distribution to Dec 24, 2024
      const lastDistDate = new Date('2024-12-24');
      setLastDistribution(lastDistDate);
    }, 1000);
  }, []);

  // Safe wallet connection handler to prevent SDK errors
  const handleConnectWallet = () => {
    try {
      // Check if we're on a mobile device
      const isMobile = typeof window !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent);
      
      if (isMobile) {
        // For mobile - open directly in MetaMask app if possible
        if (typeof window.ethereum !== 'undefined') {
          setShowAuthFlow(true);
        } else {
          // Redirect to app store or website for installation
          setErrorMessage("Please install MetaMask mobile app to connect your wallet");
        }
      } else {
        // Desktop flow
        setShowAuthFlow(true);
      }
    } catch (err) {
      console.error("Wallet connection error:", err);
      setErrorMessage("Failed to initialize wallet connection. Please try again later.");
    }
  };

  useEffect(() => {
    if (primaryWallet) {
      setWalletConnected(true);
      // Try to fetch membership status
      fetchMembershipStatus();
      // Fetch membership stats
      fetchMembershipStats();
    } else {
      setWalletConnected(false);
    }
  }, [primaryWallet, fetchMembershipStatus, fetchMembershipStats]);

  useEffect(() => {
    if (isSuccess && data) {
      setSuccessMessage("Transaction successful!");
      setTransactionHash(data);
      setIsLoading(false);
      // Update membership status
      setTimeout(() => {
        fetchMembershipStatus();
      }, 2000);
    }
    if (isError && error) {
      setErrorMessage(`Error: ${(error as Error).message}`);
      setIsLoading(false);
    }
  }, [isSuccess, isError, error, data, fetchMembershipStatus]);

  const handleJoinMembership = async () => {
    // Clear previous messages
    setErrorMessage("");
    setSuccessMessage("");
    setTransactionHash("");
    
    if (!primaryWallet) {
      setErrorMessage("Please connect your wallet first.");
      return;
    }
    
    try {
      setIsLoading(true);
      
      writeContract({
        address: CONTRACT_ADDRESS,
        abi: membershipAbi as unknown as Abi,
        functionName: 'joinMembership',
        value: membershipFeeWei,
      });
    } catch (err) {
      setErrorMessage(`Error: ${(err as Error).message}`);
      setIsLoading(false);
    }
  };

  const handleUpgradeMembership = async () => {
    // Clear previous messages
    setErrorMessage("");
    setSuccessMessage("");
    setTransactionHash("");
    
    if (!primaryWallet) {
      setErrorMessage("Please connect your wallet first.");
      return;
    }
    
    try {
      setIsLoading(true);
      
      writeContract({
        address: CONTRACT_ADDRESS,
        abi: membershipAbi as unknown as Abi,
        functionName: 'upgradeMembership',
        value: BigInt(0.001 * 10**18),
      });
    } catch (err) {
      setErrorMessage(`Error: ${(err as Error).message}`);
      setIsLoading(false);
    }
  };

  const handleClaimProfitShare = async () => {
    // Clear previous messages
    setErrorMessage("");
    setSuccessMessage("");
    setTransactionHash("");
    
    if (!primaryWallet) {
      setErrorMessage("Please connect your wallet first.");
      return;
    }
    
    try {
      setIsLoading(true);
      
      writeContract({
        address: CONTRACT_ADDRESS,
        abi: membershipAbi as unknown as Abi,
        functionName: 'claimProfitShare',
      });
    } catch (err) {
      setErrorMessage(`Error: ${(err as Error).message}`);
      setIsLoading(false);
    }
  };

  return (
    <div className={`container ${isDarkMode ? 'dark' : ''}`}>
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
              <Link href="/services" className="nav-link-button">
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="page-content">
        <div className="page-banner">
          <h1>Membership Portal</h1>
          <p className="page-description">
            Join our community of Pacific Island crypto enthusiasts and unlock exclusive benefits.
          </p>
        </div>
        
        <div className="content-container">
            
            {/* Intro Section */}
            <div className="intro-section">
              <h2>Tiered Membership System</h2>
              <p>
                Our membership program is designed to reward community participation and investment 
                in the Pasifika ecosystem. Choose from multiple tiers, each offering increased benefits 
                and lower transaction fees.
              </p>
              
              <div className="key-benefits">
                <div className="benefit-item">
                  <div className="benefit-icon">💰</div>
                  <div className="benefit-text">Lower Fees</div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">📊</div>
                  <div className="benefit-text">Profit Sharing</div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🗳️</div>
                  <div className="benefit-text">Governance</div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">⚡</div>
                  <div className="benefit-text">Priority Access</div>
                </div>
              </div>
            </div>
            
            {/* Member Area */}
            <div className="member-area">
              <div className="member-header">
                <h3>Your Membership</h3>
                <div>
                  {!walletConnected ? (
                    <button 
                      className="connect-wallet-btn" 
                      onClick={handleConnectWallet}
                    >
                      Connect Wallet
                    </button>
                  ) : (
                    <div className={`member-status ${membershipStatus.toLowerCase().replace(' ', '-')}`}>
                      {membershipStatus}
                      {memberSince && (
                        <span className="member-since"> • Member since {memberSince.toLocaleDateString()}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              {errorMessage && (
                <div className="error-message">
                  {errorMessage}
                </div>
              )}
              
              {successMessage && (
                <div className="success-message">
                  {successMessage}
                  {transactionHash && (
                    <div className="transaction-hash">
                      Transaction ID: <a href={`https://sepolia.etherscan.io/tx/${transactionHash}`} target="_blank" rel="noopener noreferrer">{transactionHash.substring(0, 10)}...{transactionHash.substring(transactionHash.length - 8)}</a>
                    </div>
                  )}
                </div>
              )}
              
              {/* Membership Tiers */}
              <div className="membership-tiers">
                <h3>Available Tiers</h3>
                <div className="tiers-container">
                  
                  {/* Guest Tier */}
                  <div className={`tier-card ${membershipStatus === 'Guest' ? 'active' : ''}`}>
                    <div className="tier-header">
                      <h4 className="tier-name">Guest (Tier 0)</h4>
                      <div className="tier-price">Free</div>
                    </div>
                    <div className="tier-benefits">
                      <ul>
                        <li>Access to the marketplace</li>
                        <li>View listings and pricing</li>
                        <li><span className="benefit-highlight">1%</span> transaction fee</li>
                        <li>No profit-sharing eligibility</li>
                        <li>No governance rights</li>
                      </ul>
                    </div>
                    <div className="tier-actions">
                      {walletConnected && membershipStatus === 'Guest' && (
                        <button 
                          className="join-button" 
                          onClick={handleJoinMembership}
                          disabled={isPending || isLoading}
                        >
                          {isPending || isLoading ? "Processing..." : "Join Membership"}
                        </button>
                      )}
                      {walletConnected && membershipStatus !== 'Guest' && (
                        <div className="current-tier-badge">Current</div>
                      )}
                      {!walletConnected && (
                        <button 
                          className="join-button" 
                          onClick={handleConnectWallet}
                        >
                          Connect Wallet
                        </button>
                      )}
                    </div>
                  </div>
                  
                  {/* Member Tier */}
                  <div className={`tier-card ${membershipStatus === 'Member' ? 'active' : ''}`}>
                    <div className="tier-header">
                      <h4 className="tier-name">Member (Tier 1)</h4>
                      <div className="tier-price">0.0001 RBTC</div>
                    </div>
                    <div className="tier-benefits">
                      <ul>
                        <li>All Guest benefits</li>
                        <li><span className="benefit-highlight">0.5%</span> transaction fee</li>
                        <li>Annual profit-sharing eligible</li>
                        <li>Governance participation</li>
                        <li>Access to member-only features</li>
                      </ul>
                    </div>
                    <div className="tier-actions">
                      {walletConnected && membershipStatus === 'Guest' && (
                        <button 
                          className="join-button" 
                          onClick={handleJoinMembership}
                          disabled={isPending || isLoading}
                        >
                          {isPending || isLoading ? "Processing..." : "Join (0.0001 RBTC)"}
                        </button>
                      )}
                      {walletConnected && membershipStatus === 'Member' && (
                        <div className="current-tier-badge">Current</div>
                      )}
                      {walletConnected && membershipStatus === 'Node Operator' && (
                        <div className="current-tier-badge">Upgraded</div>
                      )}
                      {!walletConnected && (
                        <button 
                          className="join-button" 
                          onClick={handleConnectWallet}
                        >
                          Connect Wallet
                        </button>
                      )}
                    </div>
                  </div>
                  
                  {/* Node Operator Tier */}
                  <div className={`tier-card ${membershipStatus === 'Node Operator' ? 'active' : ''}`}>
                    <div className="tier-header">
                      <h4 className="tier-name">Node Operator (Tier 2)</h4>
                      <div className="tier-price">Requires RBTC Staking</div>
                    </div>
                    <div className="tier-benefits">
                      <ul>
                        <li>All Member benefits</li>
                        <li><span className="benefit-highlight">0.25%</span> transaction fee</li>
                        <li>Priority access to new features</li>
                        <li>Enhanced profit-sharing</li>
                        <li>Run a validating node</li>
                      </ul>
                    </div>
                    <div className="tier-actions">
                      {walletConnected && membershipStatus === 'Member' && (
                        <button 
                          className="upgrade-button" 
                          onClick={handleUpgradeMembership}
                          disabled={isPending || isLoading}
                        >
                          {isPending || isLoading ? "Processing..." : "Upgrade Membership"}
                        </button>
                      )}
                      {walletConnected && membershipStatus === 'Node Operator' && (
                        <div className="current-tier-badge">Current</div>
                      )}
                      {walletConnected && membershipStatus === 'Guest' && (
                        <button 
                          className="upgrade-button" 
                          disabled={true}
                        >
                          Join Member Tier First
                        </button>
                      )}
                      {!walletConnected && (
                        <button 
                          className="join-button" 
                          onClick={handleConnectWallet}
                        >
                          Connect Wallet
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Member Stats */}
              <div className="member-stats">
                <div className="stats-header">
                  <h3>Pasifika Membership Stats</h3>
                </div>
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-icon">👥</div>
                    <span className="stat-value">{totalMembers}</span>
                    <span className="stat-label">Total Members</span>
                  </div>
                  
                  <div className="stat-card">
                    <div className="stat-icon">💎</div>
                    <span className="stat-value">{treasuryBalance} RBTC</span>
                    <span className="stat-label">Treasury Balance</span>
                  </div>
                  
                  <div className="stat-card">
                    <div className="stat-icon">📅</div>
                    <span className="stat-value">
                      {nextDistribution ? nextDistribution.toLocaleDateString() : "TBA"}
                    </span>
                    <span className="stat-label">Next Distribution</span>
                  </div>
                  
                  <div className="stat-card">
                    <div className="stat-icon">🔄</div>
                    <span className="stat-value">Dec 27-Dec 24</span>
                    <span className="stat-label">Pasifika Financial Year</span>
                  </div>
                </div>
              </div>
              
              {/* Profit Sharing Details */}
              {walletConnected && membershipStatus !== "Guest" && (
                <div className="profit-sharing">
                  <div className="profit-sharing-header">
                    <h3>Profit Sharing Details</h3>
                    <p>As a Member or Node Operator, you are eligible for annual profit sharing based on treasury performance and your activity.</p>
                  </div>
                  
                  <div className="eligibility-info">
                    <h4>Eligibility Requirements</h4>
                    <ul>
                      <li>Must maintain active membership for at least <span className="eligibility-highlight">3 months</span> before distribution</li>
                      <li>Minimum of <span className="eligibility-highlight">5 transactions</span> on the platform during the financial year</li>
                      <li>Transaction volume of at least <span className="eligibility-highlight">0.02 RBTC</span> during the financial year</li>
                      <li>The Pasifika Financial Year runs from <span className="eligibility-highlight">December 27 to December 24</span></li>
                    </ul>
                    
                    <div>
                      Your current status: 
                      <span className="eligibility-status eligible"> Eligible for next distribution</span>
                    </div>
                  </div>
                  
                  <div className="profit-details">
                    <div className="profit-detail">
                      <div className="profit-detail-value">50%</div>
                      <div className="profit-detail-label">of Treasury Profits Distributed</div>
                    </div>
                    
                    <div className="profit-detail">
                      <div className="profit-detail-value">Annual</div>
                      <div className="profit-detail-label">Distribution Frequency</div>
                    </div>
                    
                    <div className="profit-detail">
                      <div className="profit-detail-value">
                        {lastDistribution ? lastDistribution.toLocaleDateString() : "N/A"}
                      </div>
                      <div className="profit-detail-label">Last Distribution</div>
                    </div>
                  </div>
                  
                  <div className="next-distribution">
                    <div className="distribution-date">
                      Next distribution: {nextDistribution ? nextDistribution.toLocaleDateString() : "To be announced"}
                    </div>
                    
                    <button 
                      className="claim-button"
                      onClick={handleClaimProfitShare}
                      disabled={isPending || isLoading || !nextDistribution || (nextDistribution && new Date() < nextDistribution)}
                    >
                      {isPending || isLoading ? "Processing..." : "Claim Profit Share"}
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Membership Benefits */}
            <div className="membership-benefits">
              <h3>Membership Benefits</h3>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">💰</div>
                  <h4 className="benefit-title">Reduced Fees</h4>
                  <p className="benefit-description">Members enjoy significantly lower transaction fees across all Pasifika services.</p>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">📊</div>
                  <h4 className="benefit-title">Profit Sharing</h4>
                  <p className="benefit-description">Receive a portion of the platform&apos;s profits annually, distributed to all members.</p>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">🗳️</div>
                  <h4 className="benefit-title">Governance</h4>
                  <p className="benefit-description">Vote on important platform decisions and development priorities.</p>
                </div>
                
                <div className="benefit-card">
                  <div className="benefit-icon">🌍</div>
                  <h4 className="benefit-title">Community</h4>
                  <p className="benefit-description">Join a growing network of Pacific Islanders building the future of finance.</p>
                </div>
              </div>
            </div>
            
            {/* Profit Sharing */}
            {walletConnected && membershipStatus !== "Guest" && (
              <div className="profit-sharing">
                <div className="profit-sharing-header">
                  <h3>Profit Sharing Program</h3>
                  <p>As a member, you are entitled to a share of the platform&apos;s annual profits.</p>
                </div>
                
                <div className="profit-details">
                  <div className="profit-detail">
                    <div className="profit-detail-value">50%</div>
                    <div className="profit-detail-label">of Treasury Profits Distributed</div>
                  </div>
                  
                  <div className="profit-detail">
                    <div className="profit-detail-value">Annual</div>
                    <div className="profit-detail-label">Distribution Frequency</div>
                  </div>
                  
                  <div className="profit-detail">
                    <div className="profit-detail-value">
                      {lastDistribution ? lastDistribution.toLocaleDateString() : "N/A"}
                    </div>
                    <div className="profit-detail-label">Last Distribution</div>
                  </div>
                </div>
                
                <div className="next-distribution">
                  <div className="distribution-date">
                    Next distribution: {nextDistribution ? nextDistribution.toLocaleDateString() : "To be announced"}
                  </div>
                  
                  <button 
                    className="claim-button"
                    onClick={handleClaimProfitShare}
                    disabled={isPending || isLoading || !nextDistribution || (nextDistribution && new Date() < nextDistribution)}
                  >
                    {isPending || isLoading ? "Processing..." : "Claim Profit Share"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

      {/* Footer Banner */}
      <div className="footer-banner">
        <p>Copyright &copy; Pasifika 2025</p>
      </div>
    </div>
  );
}
