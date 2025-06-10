'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import * as ethers from 'ethers';
import { getContractABI } from '../../deployed_contracts/contract-loader';
import PasifikaFiatBridgeData from '../../deployed_contracts/PasifikaFiatBridge.json';

export default function StripePaymentInfo() {
  const [isLoading, setIsLoading] = useState(true);
  const [supportedCurrencies, setSupportedCurrencies] = useState([]);
  const [exchangeRates, setExchangeRates] = useState({});
  const [amount, setAmount] = useState('100');
  const [selectedCurrency, setSelectedCurrency] = useState('NZD');
  const [usdcAmount, setUsdcAmount] = useState('0');
  const [recipient, setRecipient] = useState('');
  const [stripePaymentId, setStripePaymentId] = useState('');
  const [processingPayment, setProcessingPayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [error, setError] = useState(null);
  const [walletConnected, setWalletConnected] = useState(false);
  const [contract, setContract] = useState(null);
  const [signer, setSigner] = useState(null);

  // Calculate conversion between fiat and USDC
  const calculateConversion = useCallback((amount, currency, rates) => {
    try {
      if (!rates || !rates[currency]) return;
      
      const fiatAmount = parseFloat(amount);
      const rate = parseFloat(rates[currency]);
      const usdc = (fiatAmount * rate).toFixed(2);
      
      setUsdcAmount(usdc);
    } catch (err) {
      console.error('Error calculating conversion:', err);
    }
  }, []);

  // Function to load mock data when wallet is not connected
  const loadDemoData = useCallback(() => {
    setSupportedCurrencies(['NZD', 'FJD', 'WST', 'TOP', 'PGK']);
    const mockRates = {
      'NZD': '0.61',
      'FJD': '0.46',
      'WST': '0.37',
      'TOP': '0.43',
      'PGK': '0.28'
    };
    setExchangeRates(mockRates);
    calculateConversion(amount, selectedCurrency, mockRates);
  }, [amount, selectedCurrency, calculateConversion]);

  useEffect(() => {
    const initContract = async () => {
      try {
        setIsLoading(true);
        
        // Get contract address from the deployed JSON file
        const contractAddress = PasifikaFiatBridgeData.address;
        const contractABI = await getContractABI('PasifikaFiatBridge', 'arbitrum');
        
        if (!contractAddress || !contractABI) {
          throw new Error('Contract address or ABI not found');
        }
        
        // Only try to connect to wallet if it's available
        if (typeof window !== 'undefined' && window.ethereum) {
          try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signerInstance = await provider.getSigner();
            const contractInstance = new ethers.Contract(contractAddress, contractABI, signerInstance);
            
            setSigner(signerInstance);
            setContract(contractInstance);
            setWalletConnected(true);
            
            // Fetch supported currencies
            const currenciesList = await contractInstance.getSupportedCurrencies();
            setSupportedCurrencies(currenciesList);
            
            // Fetch exchange rates for each currency
            const rates = {};
            for (const currency of currenciesList) {
              const rate = await contractInstance.getExchangeRate(currency);
              rates[currency] = ethers.formatUnits(rate, 8);
            }
            setExchangeRates(rates);
            
            calculateConversion(amount, selectedCurrency, rates);
          } catch (walletError) {
            console.error('Wallet connection error:', walletError);
            setWalletConnected(false);
            loadDemoData();
          }
        } else {
          setWalletConnected(false);
          loadDemoData();
        }
      } catch (err) {
        console.error('Error initializing Stripe payment:', err);
        setError(err.message);
        loadDemoData();
      } finally {
        setIsLoading(false);
      }
    };
    
    initContract();
  }, [amount, selectedCurrency, loadDemoData, calculateConversion]);

  // Update USDC amount when amount or currency changes
  useEffect(() => {
    if (exchangeRates && selectedCurrency && amount) {
      calculateConversion(amount, selectedCurrency, exchangeRates);
    } else if (!walletConnected) {
      loadDemoData();
    }
  }, [amount, selectedCurrency, exchangeRates, calculateConversion, loadDemoData, walletConnected]);


  
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  
  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };
  
  const handleRecipientChange = (e) => {
    setRecipient(e.target.value);
  };
  
  const handleStripePaymentIdChange = (e) => {
    setStripePaymentId(e.target.value);
  };
  
  const initiateStripePayment = async () => {
    if (!contract || !signer || !recipient || !amount || !selectedCurrency) {
      setError('Wallet not connected or missing required fields');
      return;
    }
    
    try {
      setProcessingPayment(true);
      setPaymentStatus('Processing payment...');
      setError(null);
      
      // Generate a unique payment ID if needed
      const paymentId = stripePaymentId || `stripe-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
      setStripePaymentId(paymentId);
      
      const amountInWei = ethers.parseUnits(usdcAmount, 6); // USDC has 6 decimals
      
      const tx = await contract.recordStripePayment(
        paymentId,
        amountInWei,
        selectedCurrency,
        recipient
      );
      
      setPaymentStatus('Payment submitted. Waiting for confirmation...');
      
      const receipt = await tx.wait();
      
      setPaymentStatus(
        `Payment recorded! TX: ${receipt.hash.slice(0, 6)}...${receipt.hash.slice(-4)}`
      );
      
    } catch (err) {
      console.error('Error initiating Stripe payment:', err);
      setError(err.message || 'Payment failed');
      setPaymentStatus('Payment failed');
    } finally {
      setProcessingPayment(false);
    }
  };
  
  const verifyStripePayment = async () => {
    if (!contract || !signer || !stripePaymentId) {
      setError('Wallet not connected, contract not loaded, or missing Payment ID');
      return;
    }
    
    try {
      setProcessingPayment(true);
      setPaymentStatus('Verifying payment...');
      setError(null);
      
      const tx = await contract.verifyStripePayment(stripePaymentId);
      
      setPaymentStatus('Verification request submitted. Waiting for confirmation...');
      
      const receipt = await tx.wait();
      
      setPaymentStatus(
        `Payment verification initiated! TX: ${receipt.hash.slice(0, 6)}...${receipt.hash.slice(-4)}`
      );
      
    } catch (err) {
      console.error('Error verifying Stripe payment:', err);
      setError(err.message || 'Failed to verify payment');
      setPaymentStatus('Verification failed');
    } finally {
      setProcessingPayment(false);
    }
  };

  return (
    <div className="fiat-bridge-container">
      {isLoading ? (
        <p>Loading Stripe payment data...</p>
      ) : (
        <div>
          {error && <div className="error">{error}</div>}
          
          <div className="fiat-bridge-section">
            <h4>Supported Currencies (Stripe)</h4>
            <div className="currency-list">
              {supportedCurrencies.map((currency, index) => (
                <div key={index} className="currency-item">
                  <span>{currency}</span>
                  <span>1 {currency} = {exchangeRates[currency]} USDC</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="fiat-bridge-section">
            <h4>Payment Details</h4>
            <div className="payment-form">
              <div className="form-group">
                <label>Amount ({selectedCurrency}):</label>
                <input 
                  type="number" 
                  value={amount} 
                  onChange={handleAmountChange} 
                  min="1"
                />
              </div>
              <div className="form-group">
                <label>Currency:</label>
                <select 
                  value={selectedCurrency} 
                  onChange={handleCurrencyChange}
                >
                  {supportedCurrencies.map((currency, index) => (
                    <option key={index} value={currency}>{currency}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>USDC Equivalent:</label>
                <input 
                  type="text" 
                  value={usdcAmount} 
                  readOnly 
                />
              </div>
              <div className="form-group">
                <label>Recipient Address:</label>
                <input 
                  type="text" 
                  value={recipient} 
                  onChange={handleRecipientChange} 
                  placeholder="0x..."
                />
              </div>
              <div className="form-group">
                <label>Stripe Payment ID:</label>
                <input 
                  type="text" 
                  value={stripePaymentId} 
                  onChange={handleStripePaymentIdChange} 
                  placeholder="Enter Stripe payment ID for verification"
                />
              </div>
              
              <div className="payment-buttons">
                <button 
                  onClick={initiateStripePayment} 
                  disabled={processingPayment || !walletConnected}
                  className="standard-button"
                >
                  Record Payment
                </button>
              </div>
              
              <div className="component-action">
                <button 
                  onClick={verifyStripePayment}
                  disabled={processingPayment || !stripePaymentId || !walletConnected}
                  className="primary-button command-button"
                >
                  <span className="button-icon">💱</span>
                  <span className="button-text">Verify Stripe Payment</span>
                  <span className="button-arrow">→</span>
                </button>
              </div>
              
              {paymentStatus && <div className="payment-status">{paymentStatus}</div>}
              {!walletConnected && (
                <div className="wallet-note">Connect your wallet to record and verify payments</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
