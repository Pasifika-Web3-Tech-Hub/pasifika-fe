import { useState, useEffect } from 'react';
import { 
  getContractAddress, 
  getContractABI, 
  getNetworkFromChainId,
  switchNetwork
} from '../../deployed_contracts/contract-loader';

/**
 * Hook for working with contracts across multiple networks
 * 
 * @param {Object} web3 Web3 instance
 * @param {string} contractName Name of the contract
 * @param {string} preferredNetwork Optional preferred network to use
 * @returns {Object} Contract state and utility functions
 */
export default function useMultiNetworkContracts(web3, contractName, preferredNetwork = null) {
  const [contract, setContract] = useState(null);
  const [network, setNetwork] = useState(null);
  const [availableNetworks, setAvailableNetworks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize contract
  useEffect(() => {
    if (!web3 || !contractName) {
      setIsLoading(false);
      return;
    }

    const initContract = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Get current network from provider
        const chainId = await web3.eth.getChainId();
        const detectedNetwork = getNetworkFromChainId(chainId);
        
        // Try preferred network first, fallback to current network
        const targetNetwork = preferredNetwork || detectedNetwork;
        
        if (!targetNetwork) {
          throw new Error('Unsupported network detected');
        }
        
        // Check available networks for this contract
        const networks = ['linea', 'rootstock', 'arbitrum'];
        const availableNets = [];
        
        for (const net of networks) {
          const address = await getContractAddress(contractName, net);
          if (address) {
            availableNets.push(net);
          }
        }
        
        setAvailableNetworks(availableNets);
        
        // If contract not available on target network but is on others
        if (!availableNets.includes(targetNetwork) && availableNets.length > 0) {
          throw new Error(`${contractName} not available on ${targetNetwork}. Available on: ${availableNets.join(', ')}`);
        }
        
        // Create contract instance
        const address = await getContractAddress(contractName, targetNetwork);
        const abi = await getContractABI(contractName, targetNetwork);
        
        if (!address || !abi) {
          throw new Error(`Contract ${contractName} not found on ${targetNetwork}`);
        }
        
        const contractInstance = new web3.eth.Contract(abi, address);
        setContract(contractInstance);
        setNetwork(targetNetwork);
      } catch (err) {
        console.error('Contract initialization error:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    initContract();
  }, [web3, contractName, preferredNetwork]);

  // Function to switch networks
  const changeNetwork = async (newNetwork) => {
    if (!web3 || !web3.currentProvider) return false;
    
    try {
      const success = await switchNetwork(web3.currentProvider, newNetwork);
      if (success) {
        // Re-initialize contract after network switch
        const address = await getContractAddress(contractName, newNetwork);
        const abi = await getContractABI(contractName, newNetwork);
        
        if (!address || !abi) {
          throw new Error(`Contract ${contractName} not found on ${newNetwork}`);
        }
        
        const contractInstance = new web3.eth.Contract(abi, address);
        setContract(contractInstance);
        setNetwork(newNetwork);
        return true;
      }
      return false;
    } catch (err) {
      console.error('Network switch error:', err);
      setError(err.message);
      return false;
    }
  };

  return {
    contract,
    network,
    availableNetworks,
    isLoading,
    error,
    changeNetwork
  };
}
