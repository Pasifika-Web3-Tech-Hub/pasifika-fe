import { useState, useEffect } from 'react';
import { useAccount, usePublicClient, useReadContract, useWriteContract, useSwitchChain, type Config } from 'wagmi';
import { toast } from 'react-toastify';
import { networkConfig, contractDeployments, tokenMappings } from '../contracts';
import { formatUnits, parseUnits } from 'viem';
import { ERC20_ABI } from '../contracts';

// Type definitions
type NetworkId = keyof typeof networkConfig;
// Define two chain ID types - one for our app and one for wagmi compatibility
type ChainId = 421614 | 59141 | 31 | 42161 | 59144 | 30;
// Wagmi expects specific chain IDs in its type definition
type WagmiChainId = number;
type TokenSymbol = 'USDC' | 'USDT' | 'ARB' | 'LINK' | 'DOC';

// Helper type for dynamic lookups
type ChainMapping<T> = {
  [key in ChainId]: T;
};

// Define token mappings type for better type safety
type TokenMap = {
  [key in TokenSymbol]?: string;
};

// Mapping from network names to chain IDs
const networkToChainId: Record<NetworkId, ChainId> = {
  arbitrumSepolia: 421614,
  rootstockTestnet: 31,
  lineaTestnet: 59141,
  arbitrum: 42161,
  rootstock: 30,
  linea: 59144
};

// Reverse mapping from chain IDs to network names
const chainIdToNetwork: Record<ChainId, NetworkId> = {
  421614: 'arbitrumSepolia',
  31: 'rootstockTestnet',
  59141: 'lineaTestnet',
  42161: 'arbitrum',
  30: 'rootstock',
  59144: 'linea'
};

/**
 * Hook to manage network switching and cross-chain operations
 */
export const useNetworkManager = () => {
  const { address, chainId } = useAccount();
  const [activeNetwork, setActiveNetwork] = useState<NetworkId>('arbitrumSepolia');
  const [isNetworkSwitching, setIsNetworkSwitching] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isBridging, setIsBridging] = useState(false);
  const publicClient = usePublicClient();
  const { writeContractAsync } = useWriteContract();

  // Use the switchChain hook from wagmi
  const { switchChain, isPending } = useSwitchChain();

  // Update active network when chain changes
  useEffect(() => {
    if (chainId) {
      const network = chainIdToNetwork[chainId as ChainId];
      if (network) {
        setActiveNetwork(network as NetworkId);
      }
    }
  }, [chainId]);

  // Update network switching status based on the hook's isPending state
  useEffect(() => {
    setIsNetworkSwitching(isPending);
  }, [isPending]);

  /**
   * Switch to a different network
   */
  const switchNetwork = async (networkId: NetworkId) => {
    if (!networkConfig[networkId]) {
      setErrorMessage(`Invalid network: ${networkId}`);
      return false;
    }

    setIsNetworkSwitching(true);
    setErrorMessage('');

    try {
      // Use the switchChain function from the hook with type assertion
      // This bypasses TypeScript's strict type checking for the chain ID
      await switchChain({
        chainId: networkConfig[networkId].chainId as any
      });
      setActiveNetwork(networkId);
      return true;
    } catch (error) {
      console.error('Error switching network:', error);
      setErrorMessage(`Failed to switch network: ${(error as Error).message}`);
      return false;
    } finally {
      setIsNetworkSwitching(false);
    }
  };

  /**
   * Get the token addresses for the current chain
   */
  const getTokensForCurrentChain = () => {
    if (!chainId) return {};
    return tokenMappings[chainId as ChainId] || {};
  };

  /**
   * Get the contract addresses for the current chain
   */
  const getContractsForCurrentChain = () => {
    if (!chainId) return {};
    return contractDeployments[chainId as ChainId] || {};
  };

  /**
   * Check if a token exists on the current chain
   */
  const isTokenOnCurrentChain = (tokenSymbol: string) => {
    const tokensOnChain = getTokensForCurrentChain();
    return !!tokensOnChain[tokenSymbol as keyof typeof tokensOnChain];
  };

  /**
   * Bridge tokens between chains (simulated)
   * Note: In a real-world scenario, you would use a proper bridge provider
   */
  const bridgeTokens = async (
    tokenSymbol: TokenSymbol,
    amount: string,
    fromChainId: ChainId, 
    toChainId: ChainId
  ) => {
    setIsBridging(true);
    setErrorMessage('');

    try {
      // 1. Check if the token exists on both chains
      const fromTokens = tokenMappings[fromChainId];
      const toTokens = tokenMappings[toChainId];
      
      if (!fromTokens || !toTokens) {
        throw new Error('Invalid source or destination chain');
      }
      
          // We need to check if the token symbol exists in both token mappings
      const hasFromToken = fromTokens.hasOwnProperty(tokenSymbol);
      const hasToToken = toTokens.hasOwnProperty(tokenSymbol);
      
      if (!hasFromToken || !hasToToken) {
        throw new Error(`${tokenSymbol} not available on both chains`);
      }
      
      const fromTokenAddress = fromTokens[tokenSymbol as keyof typeof fromTokens] as string;
      const toTokenAddress = toTokens[tokenSymbol as keyof typeof toTokens] as string;

      // 2. Simulate bridging process (this would be replaced by actual bridge integration)
      // In a real implementation, this would call a bridge contract or API
      
      // For demo purposes, we'll just approve the token spending
      if (fromChainId === chainId && address) {
        const parsedAmount = parseUnits(amount, 18); // Assuming 18 decimals
        
        await writeContractAsync({
          address: fromTokenAddress as `0x${string}`,
          abi: ERC20_ABI,
          functionName: 'approve',
          args: ['0x0000000000000000000000000000000000000000', parsedAmount], // Bridge contract address
        });
        
        // In a real implementation, you would then call the bridge contract
        
        // Get network names using the chainIdToNetwork mapping
        const fromNetworkName = chainIdToNetwork[fromChainId];
        const toNetworkName = chainIdToNetwork[toChainId];
        
        toast.success(`Started bridging ${amount} ${tokenSymbol} from ${networkConfig[fromNetworkName as NetworkId].name} to ${networkConfig[toNetworkName as NetworkId].name}`);
        
        // Simulate a delay for the bridge process
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        toast.info(`Tokens are being bridged. This can take several minutes.`);
        return true;
      } else {
        throw new Error('Please switch to the source network first');
      }
    } catch (error) {
      console.error('Bridging error:', error);
      setErrorMessage(`Failed to bridge tokens: ${(error as Error).message}`);
      toast.error(`Failed to bridge tokens: ${(error as Error).message}`);
      return false;
    } finally {
      setIsBridging(false);
    }
  };

  return {
    activeNetwork,
    chainId,
    switchNetwork,
    isNetworkSwitching,
    errorMessage,
    getTokensForCurrentChain,
    getContractsForCurrentChain,
    isTokenOnCurrentChain,
    bridgeTokens,
    isBridging
  };
};
