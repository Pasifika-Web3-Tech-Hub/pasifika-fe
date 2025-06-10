'use client';

import React, { useState, useEffect } from 'react';
import { useAccount, useChainId } from 'wagmi';
import { formatUnits, parseUnits } from 'viem';
import Image from 'next/image';
import { useDarkMode } from '@/lib/useDarkMode';

// Payment method icons
const PAYMENT_ICONS = {
  crypto: '/images/payment/crypto.png',
  card: '/images/payment/card.png',
  bank: '/images/payment/bank.png',
};

// Pacific currencies supported
const PACIFIC_CURRENCIES = [
  { code: 'NZD', name: 'New Zealand Dollar', symbol: '$' },
  { code: 'FJD', name: 'Fijian Dollar', symbol: '$' },
  { code: 'WST', name: 'Samoa Tala', symbol: 'T' },
  { code: 'TOP', name: 'Tongan Paʻanga', symbol: 'T$' },
  { code: 'PGK', name: 'Papua New Guinea Kina', symbol: 'K' },
];

// Crypto tokens supported
const SUPPORTED_TOKENS = [
  { symbol: 'USDC', name: 'USD Coin', decimals: 6, image: '/images/tokens/usdc.png' },
  { symbol: 'WETH', name: 'Wrapped ETH', decimals: 18, image: '/images/tokens/eth.png' },
  { symbol: 'WRBTC', name: 'Wrapped RBTC', decimals: 18, image: '/images/tokens/rbtc.png' },
  { symbol: 'PASI', name: 'Pasifika Token', decimals: 18, image: '/images/tokens/pasi.png' },
];

// Payment method types
type PaymentMethodType = 'crypto' | 'card' | 'bank';

// Payment details type
interface PaymentDetails {
  amount: string;
  currency: string;
  recipient: string;
  description: string;
  paymentMethod: PaymentMethodType;
  selectedToken?: string;
}

// Transaction status type
type TransactionStatus = 'idle' | 'processing' | 'completed' | 'failed';

const PaymentGateway: React.FC = () => {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { isDarkMode } = useDarkMode();
  
  // State for payment details
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    amount: '',
    currency: 'NZD',
    recipient: '',
    description: '',
    paymentMethod: 'crypto',
    selectedToken: 'USDC',
  });
  
  // Transaction state
  const [transactionStatus, setTransactionStatus] = useState<TransactionStatus>('idle');
  const [transactionHash, setTransactionHash] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  
  // Exchange rates (simplified mock - would use Chainlink in production)
  const [exchangeRates, setExchangeRates] = useState({
    NZD: 0.61,
    FJD: 0.45,
    WST: 0.37,
    TOP: 0.42,
    PGK: 0.27,
  });
  
  // Fee tiers based on user membership (would get from smart contract)
  const [userFeeRate, setUserFeeRate] = useState(0.01); // Default to guest (1%)
  
  // Form validation
  const [isFormValid, setIsFormValid] = useState(false);
  
  // Validate form on input change
  useEffect(() => {
    const isValid = 
      paymentDetails.amount.trim() !== '' && 
      parseFloat(paymentDetails.amount) > 0 &&
      paymentDetails.recipient.trim() !== '' &&
      paymentDetails.description.trim() !== '';
    
    setIsFormValid(isValid);
  }, [paymentDetails]);
  
  // Mock function to get user tier from contract
  useEffect(() => {
    if (isConnected && address) {
      // This would call the contract in production
      // For now, randomly assign a tier for demonstration
      const mockTier = Math.floor(Math.random() * 3);
      const feeRates = [0.01, 0.005, 0.0025]; // 1%, 0.5%, 0.25%
      setUserFeeRate(feeRates[mockTier]);
    }
  }, [isConnected, address]);
  
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  // Handle payment method selection
  const handlePaymentMethodSelect = (method: PaymentMethodType) => {
    setPaymentDetails(prev => ({
      ...prev,
      paymentMethod: method,
    }));
  };
  
  // Calculate USD equivalent
  const calculateUsdAmount = (): number => {
    const amount = parseFloat(paymentDetails.amount) || 0;
    return amount * (exchangeRates[paymentDetails.currency as keyof typeof exchangeRates] || 1);
  };
  
  // Calculate fee amount
  const calculateFee = (): number => {
    const usdAmount = calculateUsdAmount();
    return usdAmount * userFeeRate;
  };
  
  // Calculate total including fee
  const calculateTotal = (): number => {
    const usdAmount = calculateUsdAmount();
    return usdAmount + calculateFee();
  };
  
  // Process the payment
  const processPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid) return;
    
    setTransactionStatus('processing');
    setErrorMessage('');
    
    try {
      // This would interact with the smart contracts in production
      // For now, simulate a transaction with a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock success (95%) or failure (5%)
      const isSuccess = Math.random() > 0.05;
      
      if (isSuccess) {
        setTransactionStatus('completed');
        setTransactionHash('0x' + Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2));
      } else {
        setTransactionStatus('failed');
        setErrorMessage('Transaction failed. Please try again.');
      }
    } catch (error) {
      setTransactionStatus('failed');
      setErrorMessage('An error occurred while processing your payment.');
      console.error('Payment error:', error);
    }
  };
  
  // Reset the form
  const resetForm = () => {
    setPaymentDetails({
      amount: '',
      currency: 'NZD',
      recipient: '',
      description: '',
      paymentMethod: 'crypto',
      selectedToken: 'USDC',
    });
    setTransactionStatus('idle');
    setTransactionHash('');
    setErrorMessage('');
  };
  
  // Render the payment form
  return (
    <div className="payment-gateway-container">
      <div className="payment-header">
        <h2>Pasifika Payment Gateway</h2>
        <p className="description">
          Send payments across Pasifika communities using crypto or traditional payment methods.
        </p>
      </div>
      
      {transactionStatus === 'idle' ? (
        <form onSubmit={processPayment} className="payment-form">
          <div className="payment-section">
            <h3>Payment Method</h3>
            <div className="payment-methods">
              {(['crypto', 'card', 'bank'] as PaymentMethodType[]).map(method => (
                <div 
                  key={method}
                  className={`payment-method-card ${paymentDetails.paymentMethod === method ? 'selected' : ''}`}
                  onClick={() => handlePaymentMethodSelect(method)}
                >
                  <div className="payment-method-icon">
                    {/* Placeholder for actual icons */}
                    <div className="icon-placeholder">{method.charAt(0).toUpperCase()}</div>
                  </div>
                  <div className="payment-method-name">
                    {method === 'crypto' ? 'Cryptocurrency' : 
                     method === 'card' ? 'Credit/Debit Card' : 'Bank Transfer'}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="payment-section">
            <h3>Payment Details</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <div className="amount-input-container">
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={paymentDetails.amount}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    required
                  />
                  <select
                    name="currency"
                    value={paymentDetails.currency}
                    onChange={handleInputChange}
                    className="currency-select"
                  >
                    {PACIFIC_CURRENCIES.map(currency => (
                      <option key={currency.code} value={currency.code}>
                        {currency.code} ({currency.symbol})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="usd-equivalent">
                  ≈ ${calculateUsdAmount().toFixed(2)} USD
                </div>
              </div>
            </div>
            
            {paymentDetails.paymentMethod === 'crypto' && (
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="selectedToken">Pay with</label>
                  <select
                    id="selectedToken"
                    name="selectedToken"
                    value={paymentDetails.selectedToken}
                    onChange={handleInputChange}
                    className="token-select"
                  >
                    {SUPPORTED_TOKENS.map(token => (
                      <option key={token.symbol} value={token.symbol}>
                        {token.symbol} - {token.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="recipient">Recipient Address</label>
                <input
                  type="text"
                  id="recipient"
                  name="recipient"
                  value={paymentDetails.recipient}
                  onChange={handleInputChange}
                  placeholder="0x..."
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="description">Payment Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={paymentDetails.description}
                  onChange={handleInputChange}
                  placeholder="What's this payment for?"
                  required
                />
              </div>
            </div>
          </div>
          
          <div className="payment-summary">
            <div className="summary-row">
              <span>Amount:</span>
              <span>{paymentDetails.amount} {paymentDetails.currency}</span>
            </div>
            <div className="summary-row">
              <span>USD Equivalent:</span>
              <span>${calculateUsdAmount().toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Fee ({(userFeeRate * 100).toFixed(2)}%):</span>
              <span>${calculateFee().toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="payment-submit-button"
            disabled={!isFormValid || !isConnected}
          >
            {isConnected ? 'Process Payment' : 'Connect Wallet to Pay'}
          </button>
        </form>
      ) : (
        <div className="transaction-status-container">
          {transactionStatus === 'processing' && (
            <div className="processing-status">
              <div className="spinner"></div>
              <h3>Processing Your Payment</h3>
              <p>Please wait while your transaction is being processed...</p>
            </div>
          )}
          
          {transactionStatus === 'completed' && (
            <div className="completed-status">
              <div className="success-icon">✓</div>
              <h3>Payment Successful!</h3>
              <p>Your payment has been processed successfully.</p>
              
              <div className="transaction-details">
                <div className="detail-row">
                  <span>Amount:</span>
                  <span>{paymentDetails.amount} {paymentDetails.currency}</span>
                </div>
                <div className="detail-row">
                  <span>USD Equivalent:</span>
                  <span>${calculateUsdAmount().toFixed(2)}</span>
                </div>
                <div className="detail-row">
                  <span>Transaction Hash:</span>
                  <span className="hash">{transactionHash}</span>
                </div>
              </div>
              
              <button onClick={resetForm} className="new-payment-button">
                Make Another Payment
              </button>
            </div>
          )}
          
          {transactionStatus === 'failed' && (
            <div className="failed-status">
              <div className="error-icon">✕</div>
              <h3>Payment Failed</h3>
              <p>{errorMessage}</p>
              
              <button onClick={() => setTransactionStatus('idle')} className="try-again-button">
                Try Again
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PaymentGateway;
