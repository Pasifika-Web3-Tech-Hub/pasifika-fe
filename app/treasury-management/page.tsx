"use client";

import { useState, useEffect, useCallback } from "react";
import { useDarkMode } from "@/lib/useDarkMode";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { formatEther, parseEther } from "viem";
import Image from "next/image";
import Link from "next/link";
import "../page.css";
import "../shared-pages.css";
import "./treasury.css";

// Import our custom hooks
import { useTreasuryRead, useTreasuryWrite } from "@/lib/hooks";

// Define types for our component
interface Transaction {
  from: string;
  amount: string;
  type: string;
  date: string;
  fund: string;
}

export default function TreasuryManagement() {
  const { isDarkMode } = useDarkMode();
  const { primaryWallet, setShowAuthFlow } = useDynamicContext();
  const [walletConnected, setWalletConnected] = useState(false);
  const [fundName, setFundName] = useState("");
  const [fundAllocation, setFundAllocation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [transactionHash, setTransactionHash] = useState("");
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mockDataGenerated, setMockDataGenerated] = useState(false);

  // Use our custom treasury hooks
  const { 
    treasuryFunds, 
    feeCollectors, 
    isAdmin, 
    isTreasurer, 
    isLoading: isLoadingTreasury,
    refetch: refetchTreasury 
  } = useTreasuryRead();
  
  const {
    createFund,
    registerFeeCollector,
    withdrawFromFund,
    isPending,
    isSuccess,
    isError,
    error
  } = useTreasuryWrite();

  // Derived state - calculate only once when treasuryFunds changes
  const treasuryBalance = treasuryFunds ? treasuryFunds.reduce(
    (total: bigint, fund) => total + BigInt(fund.balance), BigInt(0)
  ) : BigInt(0);
  
  const totalFunds = treasuryFunds ? treasuryFunds.length : 0;
  const totalFeeCollectors = feeCollectors ? feeCollectors.length : 0;

  // Handle wallet connection
  useEffect(() => {
    if (primaryWallet) {
      setWalletConnected(true);
    } else {
      setWalletConnected(false);
    }
  }, [primaryWallet]);

  // Handle transaction state changes
  useEffect(() => {
    if (isSuccess) {
      setSuccessMessage("Transaction successful!");
      setIsLoading(false);
      // Refresh data
      setTimeout(() => {
        refetchTreasury();
      }, 2000);
      // Clear form
      setFundName("");
      setFundAllocation("");
    }
    if (isError && error) {
      setErrorMessage(`Error: ${error.message}`);
      setIsLoading(false);
    }
  }, [isSuccess, isError, error, refetchTreasury]);

  // Generate mock transactions ONLY ONCE when the wallet is connected and treasuryFunds are loaded
  useEffect(() => {
    if (walletConnected && treasuryFunds && !mockDataGenerated) {
      // Generate 5 random transactions
      const mockTransactions: Transaction[] = [];
      
      for (let i = 0; i < 5; i++) {
        const types = ["deposit", "withdrawal", "transfer"];
        const type = types[Math.floor(Math.random() * types.length)];
        const amount = (Math.random() * 2).toFixed(4);
        const date = new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString();
        const from = `0x${Math.random().toString(16).substring(2, 12)}`;
        const fund = treasuryFunds.length > 0 
          ? treasuryFunds[Math.floor(Math.random() * treasuryFunds.length)].name 
          : "General Fund";
        
        mockTransactions.push({
          from,
          amount,
          type,
          date,
          fund
        });
      }
      
      setTransactions(mockTransactions);
      setMockDataGenerated(true);
    }
  }, [walletConnected, treasuryFunds, mockDataGenerated]);

  // Memoized handler for creating a fund
  const handleCreateFund = useCallback(async () => {
    if (!fundName || !fundAllocation) {
      setErrorMessage("Please fill in all fields");
      return;
    }
    
    try {
      setIsLoading(true);
      setErrorMessage("");
      setSuccessMessage("");
      
      // Call our createFund function from the hook
      // For the MVP, we'll use 0 as the initial amount
      const result = await createFund(fundName, BigInt(0));
      
      if (result) {
        // For Ethereum transactions, the result is the transaction hash
        setTransactionHash(result as string);
      }
      
    } catch (err: any) {
      console.error("Error creating fund:", err);
      setErrorMessage(`Error: ${err.message}`);
      setIsLoading(false);
    }
  }, [fundName, fundAllocation, createFund]);
  
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
              <Link href="/services" className="nav-link-button">
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main content with extra spacing */}
      <div style={{ height: "100px" }}></div>

      {/* Page Title Banner */}
      <div className="page-banner">
        <h1>Treasury Management</h1>
        <p>Manage treasury funds, monitor transactions, and oversee fee collections</p>
      </div>

      {/* Content Section */}
      <div className="content-container">
        {!walletConnected ? (
          <div className="wallet-connection-prompt">
            <h3>Connect Your Wallet</h3>
            <p>Please connect your wallet to access Treasury Management features.</p>
            <button className="connect-wallet-button" onClick={() => setShowAuthFlow(true)}>
              Connect Wallet
            </button>
          </div>
        ) : isLoadingTreasury ? (
          <div className="loading-container">
            <p>Loading treasury data...</p>
          </div>
        ) : (
          <div className="treasury-container">
            <h3>Treasury Overview</h3>
            <div className="treasury-stats">
              <div className="stat-card">
                <div className="stat-icon">💰</div>
                <div className="stat-value">{formatEther(treasuryBalance || BigInt(0)).substring(0, 6)} ETH</div>
                <div className="stat-label">Total Balance</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">📊</div>
                <div className="stat-value">{totalFunds}</div>
                <div className="stat-label">Active Funds</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-value">{totalFeeCollectors}</div>
                <div className="stat-label">Fee Collectors</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">⚖️</div>
                <div className="stat-value">{isAdmin ? "Admin" : (isTreasurer ? "Treasurer" : "Member")}</div>
                <div className="stat-label">Your Role</div>
              </div>
            </div>
          </div>
        )}
        
        {/* Funds Section */}
        {walletConnected && treasuryFunds && treasuryFunds.length > 0 && (
          <div className="funds-container">
            <h3>Treasury Funds</h3>
            <div className="funds-list">
              {treasuryFunds.map((fund, index) => (
                <div className="fund-card" key={index}>
                  <div className="fund-header">
                    <div className="fund-title">{fund.name}</div>
                    <div className="fund-allocation">
                      {/* This would come from the contract in production */}
                      {Math.floor(Math.random() * 30 + 10)}% Allocation
                    </div>
                  </div>
                  <div className="fund-progress">
                    <div 
                      className="fund-progress-bar" 
                      style={{ 
                        width: `${Number(fund.balance) / Number(treasuryBalance) * 100}%` 
                      }}
                    ></div>
                  </div>
                  <div className="fund-details">
                    <div className="fund-balance">
                      Balance: {formatEther(fund.balance || BigInt(0))} ETH
                    </div>
                    <div className="fund-status">
                      Status: Active
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Fee Collectors */}
        {walletConnected && feeCollectors && feeCollectors.length > 0 && (
          <div className="fee-collectors-container">
            <h3>Fee Collectors</h3>
            <div className="fee-collectors-list">
              {feeCollectors.map((collector, index) => (
                <div className="collector-card" key={index}>
                  <div className="collector-info">
                    <div className="collector-name">{collector.name}</div>
                    <div className="collector-address">
                      {collector.collectorAddress.substring(0, 6)}...
                      {collector.collectorAddress.substring(collector.collectorAddress.length - 4)}
                    </div>
                  </div>
                  <div className="collector-fee">Fee Rate: {collector.feePercentage ? `${collector.feePercentage}%` : "Varies"}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Recent Transactions */}
        {walletConnected && transactions && transactions.length > 0 && (
          <div className="transactions-container">
            <h3>Recent Transactions</h3>
            <table className="transactions-table">
              <thead>
                <tr>
                  <th>Address</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Fund</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, index) => (
                  <tr key={index}>
                    <td className="transaction-address">{tx.from.substring(0, 6)}...{tx.from.substring(tx.from.length - 4)}</td>
                    <td className="transaction-amount">{tx.amount} ETH</td>
                    <td>
                      <span className={`transaction-type ${tx.type}`}>
                        {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
                      </span>
                    </td>
                    <td>{tx.date}</td>
                    <td>{tx.fund || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {/* Create Fund Form (Admin Only) */}
        {walletConnected && isAdmin && (
          <div className="create-fund-container">
            <h3>Create New Fund</h3>
            <div className="create-fund-form">
              <div className="fund-form-group">
                <label htmlFor="fund-name">Fund Name</label>
                <input 
                  type="text"
                  id="fund-name"
                  placeholder="e.g., Disaster Relief"
                  value={fundName}
                  onChange={(e) => setFundName(e.target.value)}
                />
              </div>
              <div className="fund-form-group">
                <label htmlFor="fund-allocation">Allocation (%)</label>
                <input 
                  type="number"
                  id="fund-allocation"
                  placeholder="e.g., 20"
                  min="1"
                  max="100"
                  value={fundAllocation}
                  onChange={(e) => setFundAllocation(e.target.value)}
                />
              </div>
              <button 
                className="create-fund-button"
                onClick={handleCreateFund}
                disabled={isPending || isLoading}
              >
                {isPending || isLoading ? "Processing..." : "Create Fund"}
              </button>
            </div>
            
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {successMessage && (
              <div className="success-message">
                <p>{successMessage}</p>
                {transactionHash && (
                  <p className="transaction-hash">
                    Transaction Hash: <a href={`https://sepolia-explorer.arbitrum.io/tx/${transactionHash}`} target="_blank" rel="noopener noreferrer">{transactionHash.substring(0, 10)}...{transactionHash.substring(transactionHash.length - 8)}</a>
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer Banner */}
      <div className="footer-banner">
        <p>Copyright &copy; Pasifika 2025</p>
      </div>
    </div>
  );
}
