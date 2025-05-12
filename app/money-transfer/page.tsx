"use client";

import { useState, useEffect, useCallback } from "react";
import { useDarkMode } from "@/lib/useDarkMode";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useWriteContract, useReadContract } from "wagmi";
import { Abi } from "viem";
import Image from "next/image";
import Link from "next/link";
import "../page.css";
import "../shared-pages.css";
import "./money-transfer.css";

// Get contract info - using Arbitrum deployment
import moneyTransferContractInfo from "../../deployed_contracts/PasifikaMoneyTransfer_arbitrum.json";
import moneyTransferAbi from "../../deployed_contracts/PasifikaMoneyTransfer_arbitrum_ABI.json";

export default function MoneyTransfer() {
  const { isDarkMode } = useDarkMode();
  const { primaryWallet, setShowAuthFlow } = useDynamicContext();
  const [walletConnected, setWalletConnected] = useState(false);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [memo, setMemo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [transactionHash, setTransactionHash] = useState("");
  const [feeEstimate, setFeeEstimate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [membershipLevel, setMembershipLevel] = useState("Guest");
  
  // Define the transfer history type
  type TransferRecord = {
    recipient: string;
    amount: string;
    date: string;
    status: string;
  };
  
  // Define the recipient info type
  type RecipientInfo = {
    address: string;
    name: string;
    previousTransfers: number;
  };
  
  const [transferHistory, setTransferHistory] = useState<TransferRecord[]>([]);
  const [recipientInfo, setRecipientInfo] = useState<RecipientInfo | null>(null);
  const { writeContract, isPending, isSuccess, isError, error, data } = useWriteContract();

  // Get the contract address from the JSON file
  const CONTRACT_ADDRESS = moneyTransferContractInfo.address as `0x${string}`;

  useEffect(() => {
    if (primaryWallet) {
      setWalletConnected(true);
      // Try to fetch user's membership level
      fetchMembershipLevel();
      // Fetch transfer history when wallet connects
      fetchTransferHistory();
    } else {
      setWalletConnected(false);
    }
  }, [primaryWallet]);

  useEffect(() => {
    if (isSuccess && data) {
      setSuccessMessage("Transfer successful!");
      setTransactionHash(data);
      setIsLoading(false);
      // Clear form
      setRecipient("");
      setAmount("");
      setMemo("");
      // Refresh transfer history
      fetchTransferHistory();
    }
    if (isError && error) {
      setErrorMessage(`Error: ${error.message}`);
      setIsLoading(false);
    }
  }, [isSuccess, isError, error, data]);

  // Simulate fetching membership level
  const fetchMembershipLevel = async () => {
    // This would normally call the membership contract
    // For now, we'll simulate with a random level
    const levels = ["Guest", "Member", "Node Operator"];
    const randomLevel = levels[Math.floor(Math.random() * levels.length)];
    setMembershipLevel(randomLevel);
  };

  // Simulate fetching transfer history
  const fetchTransferHistory = async () => {
    // This would normally call the contract for events
    // For now we'll simulate with mock data
    const mockHistory = [
      { 
        recipient: "0x1234...5678", 
        amount: "0.01 ETH", 
        date: new Date(Date.now() - 86400000).toLocaleString(),
        status: "Completed"
      },
      { 
        recipient: "0x8765...4321", 
        amount: "0.05 ETH", 
        date: new Date(Date.now() - 172800000).toLocaleString(),
        status: "Completed"
      }
    ];
    setTransferHistory(mockHistory);
  };

  // Calculate estimated fee based on membership level
  const calculateFee = useCallback((amountValue: string) => {
    if (!amountValue) return "0";
    
    const parsedAmount = parseFloat(amountValue);
    let feePercentage = 0.01; // 1% for guests
    
    if (membershipLevel === "Member") {
      feePercentage = 0.005; // 0.5% for members
    } else if (membershipLevel === "Node Operator") {
      feePercentage = 0.0025; // 0.25% for node operators
    }
    
    return (parsedAmount * feePercentage).toFixed(4);
  }, [membershipLevel]);

  // Update fee estimate when amount or membership level changes
  useEffect(() => {
    setFeeEstimate(calculateFee(amount));
  }, [amount, membershipLevel, calculateFee]);

  // Look up recipient info
  const lookupRecipient = () => {
    if (!recipient || recipient.length < 42) {
      setErrorMessage("Please enter a valid address");
      setRecipientInfo(null);
      return;
    }
    
    // This would normally query the blockchain or a database
    // For now, simulate a lookup with random data
    setIsLoading(true);
    setTimeout(() => {
      setRecipientInfo({
        address: recipient,
        name: "Unknown Recipient",
        previousTransfers: Math.floor(Math.random() * 5)
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleTransfer = async () => {
    // Clear previous messages
    setErrorMessage("");
    setSuccessMessage("");
    setTransactionHash("");
    
    // Validate input
    if (!recipient) {
      setErrorMessage("Please enter a recipient address");
      return;
    }
    
    if (!amount || parseFloat(amount) <= 0) {
      setErrorMessage("Please enter a valid amount");
      return;
    }
    
    // Convert amount to wei (assuming ETH)
    const amountInWei = BigInt(parseFloat(amount) * 10**18);
    
    try {
      setIsLoading(true);
      
      // Call the smart contract
      writeContract({
        address: CONTRACT_ADDRESS,
        abi: moneyTransferAbi as unknown as Abi,
        functionName: "transferMoney",
        args: [recipient, amountInWei, memo || ""]
      });
      
    } catch (err) {
      setIsLoading(false);
      setErrorMessage(`Error: ${(err as Error).message}`);
    }
  };

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

      {/* Page Content */}
      <div className="page-content">
        <div className="page-banner">
          <h1>Money Transfer Service</h1>
        </div>
        
        <div className="content-container">
          <div className="content-section">
            <h2>Send Money Across Borders</h2>
            <p>Our decentralized money transfer service, built on Arbitrum, allows you to send funds to anyone in the Pacific Islands with lower fees than traditional remittance services.</p>
            
            {/* Wallet Connection Section */}
            <div className="wallet-section">
              <h3>Your Wallet</h3>
              {walletConnected ? (
                <div className="wallet-info">
                  <div className="wallet-status connected">
                    <span className="wallet-icon">💼</span>
                    <span>Wallet Connected</span>
                  </div>
                  <div className="wallet-address">
                    {primaryWallet?.address.substring(0, 6)}...{primaryWallet?.address.substring(primaryWallet?.address.length - 4)}
                  </div>
                  <div className="membership-badge">
                    <span>Membership Level: <strong>{membershipLevel}</strong></span>
                  </div>
                  <button className="wallet-button disconnect" onClick={() => setShowAuthFlow(true)}>
                    Disconnect Wallet
                  </button>
                </div>
              ) : (
                <div className="wallet-connection">
                  <div className="wallet-status">
                    <span className="wallet-icon">💼</span>
                    <span>Wallet Not Connected</span>
                  </div>
                  <button className="wallet-button connect" onClick={() => setShowAuthFlow(true)}>
                    Connect Wallet
                  </button>
                  <p className="wallet-note">Please connect your wallet to use the money transfer service</p>
                </div>
              )}
            </div>
            
            {/* Money Transfer Form */}
            {walletConnected && (
              <div className="transfer-form-container">
                <h3>Send Money</h3>
                <div className="transfer-form">
                  <div className="form-group">
                    <label htmlFor="recipient">Recipient Address</label>
                    <div className="input-with-button">
                      <input 
                        type="text" 
                        id="recipient" 
                        placeholder="0x..." 
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                      />
                      <button 
                        className="lookup-button"
                        onClick={lookupRecipient}
                        disabled={isLoading}
                      >
                        Lookup
                      </button>
                    </div>
                  </div>
                  
                  {recipientInfo && (
                    <div className="recipient-info">
                      <h4>Recipient Information</h4>
                      <p>Name: {recipientInfo.name}</p>
                      <p>Previous transfers: {recipientInfo.previousTransfers}</p>
                    </div>
                  )}
                  
                  <div className="form-group">
                    <label htmlFor="amount">Amount (ETH)</label>
                    <input 
                      type="number" 
                      id="amount" 
                      placeholder="0.00" 
                      min="0"
                      step="0.001"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="memo">Memo (Optional)</label>
                    <input 
                      type="text" 
                      id="memo" 
                      placeholder="What's this for?" 
                      value={memo}
                      onChange={(e) => setMemo(e.target.value)}
                    />
                  </div>
                  
                  <div className="fee-info">
                    <p>Network Fee: <span className="fee-amount">0.001 ETH</span></p>
                    <p>Service Fee ({membershipLevel === "Member" ? "0.5%" : membershipLevel === "Node Operator" ? "0.25%" : "1%"}): <span className="fee-amount">{feeEstimate} ETH</span></p>
                    <p>Total: <span className="total-amount">{amount ? (parseFloat(amount) + parseFloat(feeEstimate) + 0.001).toFixed(6) : "0.001"} ETH</span></p>
                  </div>
                  
                  <button 
                    className="transfer-button"
                    onClick={handleTransfer}
                    disabled={isPending || isLoading}
                  >
                    {isPending || isLoading ? "Processing..." : "Send Money"}
                  </button>
                  
                  {errorMessage && <div className="error-message">{errorMessage}</div>}
                  {successMessage && (
                    <div className="success-message">
                      <p>{successMessage}</p>
                      {transactionHash && (
                        <p className="transaction-hash">
                          Transaction Hash: <a href={`https://sepolia.arbiscan.io/tx/${transactionHash}`} target="_blank" rel="noopener noreferrer">{transactionHash.substring(0, 10)}...{transactionHash.substring(transactionHash.length - 8)}</a>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Transfer History */}
            {walletConnected && transferHistory.length > 0 && (
              <div className="transfer-history">
                <h3>Recent Transfers</h3>
                <table className="history-table">
                  <thead>
                    <tr>
                      <th>Recipient</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transferHistory.map((transfer, index) => (
                      <tr key={index}>
                        <td>{transfer.recipient}</td>
                        <td>{transfer.amount}</td>
                        <td>{transfer.date}</td>
                        <td>{transfer.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
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
