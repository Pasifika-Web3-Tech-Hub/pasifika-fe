import React, { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { toast } from 'react-toastify';
import { useNetworkManager } from '../../../lib/hooks/useNetworkManager';
import { networkConfig, tokenMappings } from '../../../lib/contracts';
import TokenBalance from './TokenBalance';
import '../exchange.css';
import { Address } from 'viem';

// Define token symbol type for type safety
type TokenSymbol = 'USDC' | 'USDT' | 'ARB' | 'LINK' | 'DOC';
type ChainId = 421614 | 59141 | 31 | 42161 | 59144 | 30;

// Types
type TokenOption = {
  symbol: TokenSymbol;
  name: string;
  address: string;
};

const CrossChainBridge: React.FC = () => {
  const { address, chainId } = useAccount();
  const { 
    activeNetwork, 
    switchNetwork, 
    isNetworkSwitching, 
    bridgeTokens, 
    isBridging, 
    errorMessage 
  } = useNetworkManager();
  
  const [amount, setAmount] = useState('');
  const [sourceChainId, setSourceChainId] = useState<ChainId | null>(null);
  const [targetChainId, setTargetChainId] = useState<ChainId | null>(null);
  const [selectedToken, setSelectedToken] = useState<TokenSymbol | ''>('');
  const [availableTokens, setAvailableTokens] = useState<TokenOption[]>([]);

  // Initialize chains and tokens
  useEffect(() => {
    if (chainId) {
      setSourceChainId(chainId as ChainId);
      
      // Set a default target chain different from source
      const chainIds = Object.values(networkConfig).map(network => network.chainId as ChainId);
      const otherChains = chainIds.filter(id => id !== chainId);
      if (otherChains.length > 0) {
        setTargetChainId(otherChains[0]);
      }
      
      // Load available tokens for current chain
      if (chainId in tokenMappings) {
        const tokens = Object.entries(tokenMappings[chainId as keyof typeof tokenMappings])
          .map(([symbol, address]) => ({
            symbol: symbol as TokenSymbol,
            name: symbol, // In a real app, you'd fetch the actual token name
            address: address as string
          }));
        setAvailableTokens(tokens);
        
        if (tokens.length > 0) {
          setSelectedToken(tokens[0].symbol);
        }
      }
    }
  }, [chainId]);

  // Handler for source chain change
  const handleSourceChainChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newChainId = parseInt(e.target.value) as ChainId;
    setSourceChainId(newChainId);
    
    // If the user selected the same chain as target, switch target to something else
    if (newChainId === targetChainId) {
      const chainIds = Object.values(networkConfig).map(network => network.chainId as ChainId);
      const otherChains = chainIds.filter(id => id !== newChainId);
      if (otherChains.length > 0) {
        setTargetChainId(otherChains[0]);
      }
    }
    
    // If the selected chain isn't the current chain, switch networks
    if (newChainId !== chainId) {
      const networkId = Object.entries(networkConfig).find(
        ([_, config]) => config.chainId === newChainId
      )?.[0];
      
      if (networkId) {
        await switchNetwork(networkId as keyof typeof networkConfig);
      }
    }
    
    // Update available tokens
    if (newChainId in tokenMappings) {
      const tokens = Object.entries(tokenMappings[newChainId as keyof typeof tokenMappings])
        .map(([symbol, address]) => ({
          symbol: symbol as TokenSymbol,
          name: symbol,
          address: address as string
        }));
      setAvailableTokens(tokens);
      
      if (tokens.length > 0) {
        setSelectedToken(tokens[0].symbol);
      } else {
        setSelectedToken('');
      }
    } else {
      setAvailableTokens([]);
      setSelectedToken('');
    }
  };

  // Handler for initiating the bridge
  const handleBridge = async () => {
    if (!address) {
      toast.error('Please connect your wallet');
      return;
    }
    
    if (!sourceChainId || !targetChainId) {
      toast.error('Please select source and target chains');
      return;
    }
    
    if (!selectedToken) {
      toast.error('Please select a token');
      return;
    }
    
    if (!amount || parseFloat(amount) <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }
    
    // Initiate the bridge
    await bridgeTokens(
      selectedToken as TokenSymbol,
      amount,
      sourceChainId,
      targetChainId
    );
  };

  // Get the network name from chain ID
  const getNetworkName = (chainId: number | null) => {
    if (!chainId) return 'Unknown';
    
    const network = Object.values(networkConfig).find(net => net.chainId === chainId);
    return network?.name || 'Unknown';
  };
  
  // Helper function to safely get token address
  const getTokenAddress = (chainId: ChainId, tokenSymbol: TokenSymbol): Address => {
    try {
      const tokens = tokenMappings[chainId as keyof typeof tokenMappings];
      if (!tokens) return '0x0000000000000000000000000000000000000000' as Address;
      
      // Use type assertion to avoid TypeScript errors
      const tokenMap = tokens as Record<string, string>;
      const address = tokenMap[tokenSymbol];
      
      // Ensure the address starts with 0x and is properly formatted
      if (address && address.startsWith('0x')) {
        return address as Address;
      }
      
      return '0x0000000000000000000000000000000000000000' as Address;
    } catch (error) {
      console.error('Error getting token address:', error);
      return '0x0000000000000000000000000000000000000000' as Address;
    }
  };

  // Helper to get common tokens across chains
  const getCommonTokens = (sourceChainId: number | null, targetChainId: number | null) => {
    if (!sourceChainId || !targetChainId) return [];
    
    const sourceTokens = tokenMappings[sourceChainId as keyof typeof tokenMappings] || {};
    const targetTokens = tokenMappings[targetChainId as keyof typeof tokenMappings] || {};
    
    const sourceSymbols = Object.keys(sourceTokens);
    const targetSymbols = Object.keys(targetTokens);
    
    // Find tokens available on both chains
    return sourceSymbols.filter(symbol => targetSymbols.includes(symbol));
  };

  // UI States
  const isConnected = !!address;
  const commonTokens = getCommonTokens(sourceChainId, targetChainId);
  const canBridge = isConnected && 
                    sourceChainId !== null && 
                    targetChainId !== null && 
                    selectedToken !== '' && 
                    parseFloat(amount || '0') > 0 &&
                    commonTokens.includes(selectedToken);

  return (
    <div className="exchange-container">
      <div className="exchange-header">
        <h2>Cross-Chain Bridge</h2>
        <p>Move your tokens between different blockchains</p>
      </div>
      
      <div className="exchange-form">
        <div className="form-group">
          <label>From Chain</label>
          <select 
            value={sourceChainId || ''}
            onChange={handleSourceChainChange}
            disabled={isBridging || isNetworkSwitching}
          >
            <option value="">Select source chain</option>
            {Object.entries(networkConfig).map(([key, config]) => (
              <option key={`source-${key}`} value={config.chainId}>
                {config.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label>To Chain</label>
          <select 
            value={targetChainId || ''}
            onChange={(e) => setTargetChainId(parseInt(e.target.value) as ChainId)}
            disabled={isBridging || isNetworkSwitching}
          >
            <option value="">Select target chain</option>
            {Object.entries(networkConfig).map(([key, config]) => (
              config.chainId !== sourceChainId && (
                <option key={`target-${key}`} value={config.chainId}>
                  {config.name}
                </option>
              )
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label>Token</label>
          <select 
            value={selectedToken}
            onChange={(e) => setSelectedToken(e.target.value as TokenSymbol)}
            disabled={isBridging || availableTokens.length === 0}
          >
            <option value="">Select token</option>
            {availableTokens
              .filter(token => commonTokens.includes(token.symbol))
              .map(token => (
                <option key={token.symbol} value={token.symbol}>
                  {token.symbol}
                </option>
              ))}
          </select>
          
          {selectedToken && sourceChainId && sourceChainId in tokenMappings && (
            <div className="token-balance-display">
              {/* Get token address using safer access pattern */}
              <TokenBalance 
                tokenAddress={getTokenAddress(sourceChainId, selectedToken)}
                tokenSymbol={selectedToken} 
              />
            </div>
          )}
        </div>
        
        <div className="form-group">
          <label>Amount</label>
          <input 
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.0"
            disabled={isBridging || !selectedToken}
          />
        </div>
        
        {sourceChainId && targetChainId && (
          <div className="bridge-path">
            <p>Bridge Path: {getNetworkName(sourceChainId)} → {getNetworkName(targetChainId)}</p>
          </div>
        )}
        
        <button 
          className="action-button"
          onClick={handleBridge}
          disabled={!canBridge || isBridging || isNetworkSwitching}
        >
          {isBridging ? 'Bridging...' : isNetworkSwitching ? 'Switching Network...' : 'Bridge Tokens'}
        </button>
        
        {errorMessage && (
          <div style={{ color: 'red', marginTop: '0.5rem' }}>
            Error: {errorMessage}
          </div>
        )}
        
        <div className="bridge-info">
          <h4>About Cross-Chain Bridging</h4>
          <p>
            Bridging allows you to move your tokens between different blockchains. 
            This process typically takes 10-30 minutes depending on network conditions.
          </p>
          <p>
            <strong>Note:</strong> Only tokens that exist on both chains can be bridged.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CrossChainBridge;
