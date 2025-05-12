/**
 * Pasifika Multi-Network Contract Loader Utility
 * 
 * This utility provides functions to load contract addresses and ABIs
 * for various contracts in the Pasifika ecosystem across multiple networks
 * (Linea, Arbitrum, and RootStock).
 */

// Dynamic imports for all network contract files
const getContractData = async (contractName, network) => {
  try {
    const contractModule = await import(`./${contractName}_${network}.json`);
    return contractModule.default || contractModule;
  } catch (error) {
    console.error(`Contract ${contractName} not found on network ${network}:`, error);
    return null;
  }
};

/**
 * Get contract address for a specific contract on a specific network
 * @param {string} contractName - Name of the contract (e.g., 'PasifikaTreasury')
 * @param {string} network - Network name (e.g., 'linea', 'rootstock', 'arbitrum')
 * @returns {string|null} Contract address or null if not deployed
 */
export const getContractAddress = async (contractName, network) => {
  const contractData = await getContractData(contractName, network);
  return contractData?.address || null;
};

/**
 * Get contract ABI for a specific contract on a specific network
 * @param {string} contractName - Name of the contract
 * @param {string} network - Network name 
 * @returns {Array|null} Contract ABI or null if not available
 */
export const getContractABI = async (contractName, network) => {
  try {
    // First try to load network-specific ABI file
    const networkABI = await import(`./${contractName}_${network}_ABI.json`);
    return networkABI.default || networkABI.abi || null;
  } catch (error) {
    try {
      // Fall back to generic ABI file
      const genericABI = await import(`./${contractName}_ABI.json`);
      return genericABI.default || genericABI.abi || null;
    } catch (error) {
      console.error(`No ABI found for ${contractName} on ${network}:`, error);
      return null;
    }
  }
};

/**
 * Get all network addresses for a specific contract
 * @param {string} contractName - Name of the contract
 * @returns {Object} Object with network names as keys and addresses as values
 */
export const getAllNetworkAddresses = async (contractName) => {
  const networks = ['linea', 'rootstock', 'arbitrum'];
  const addresses = {};
  
  await Promise.all(
    networks.map(async (network) => {
      const address = await getContractAddress(contractName, network);
      if (address) {
        addresses[network] = address;
      }
    })
  );
  
  return addresses;
};

/**
 * Get all contracts deployed on a specific network
 * @param {string} network - Network name
 * @returns {Object} Object with contract names as keys and addresses as values
 */
export const getNetworkContracts = async (network) => {
  const contractNames = [
    'PasifikaTreasury',
    'PasifikaMembership',
    'PasifikaMoneyTransfer',
    'PasifikaMarketplace',
    'PasifikaNFT'
  ];
  
  const contracts = {};
  
  await Promise.all(
    contractNames.map(async (contractName) => {
      const address = await getContractAddress(contractName, network);
      if (address) {
        contracts[contractName] = address;
      }
    })
  );
  
  return contracts;
};

/**
 * Create a web3 contract instance
 * @param {Object} web3 - Web3 instance
 * @param {string} contractName - Name of the contract
 * @param {string} network - Network name
 * @returns {Object|null} Web3 contract instance or null
 */
export const createContractInstance = async (web3, contractName, network) => {
  const address = await getContractAddress(contractName, network);
  const abi = await getContractABI(contractName, network);
  
  if (!address || !abi) {
    console.error(`Missing address or ABI for ${contractName} on ${network}`);
    return null;
  }
  
  try {
    return new web3.eth.Contract(abi, address);
  } catch (error) {
    console.error(`Error creating contract instance:`, error);
    return null;
  }
};

/**
 * Get the current network from chain ID
 * @param {number} chainId - Chain ID from web3 provider
 * @returns {string|null} Network name or null if unknown
 */
export const getNetworkFromChainId = (chainId) => {
  const networkMap = {
    59144: 'linea',        // Linea Mainnet
    59140: 'linea',        // Linea Testnet (if using testnet)
    30: 'rootstock',       // RSK Mainnet
    31: 'rootstock',       // RSK Testnet
    42161: 'arbitrum',     // Arbitrum One
    421613: 'arbitrum'     // Arbitrum Goerli (if using testnet)
  };
  
  return networkMap[chainId] || null;
};

/**
 * Switch to a different network
 * @param {Object} provider - Web3 provider (e.g., window.ethereum)
 * @param {string} network - Network to switch to
 * @returns {Promise<boolean>} Success or failure
 */
/**
 * Get all contracts deployed across all networks
 * @returns {Object} Object with networks as keys, each containing an object with contract names as keys and addresses as values
 */
export const getAllNetworkContracts = async () => {
  const networks = ['linea', 'rootstock', 'arbitrum'];
  const result = {};
  
  await Promise.all(
    networks.map(async (network) => {
      const contracts = await getNetworkContracts(network);
      if (Object.keys(contracts).length > 0) {
        result[network] = contracts;
      }
    })
  );
  
  return result;
};

export const switchNetwork = async (provider, network) => {
  if (!provider || !provider.request) {
    console.error('Invalid provider');
    return false;
  }
  
  const networkParams = {
    linea: {
      chainId: '0xe708', // 59144 in hex
      chainName: 'Linea Mainnet',
      nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
      rpcUrls: ['https://rpc.linea.build'],
      blockExplorerUrls: ['https://lineascan.build']
    },
    rootstock: {
      chainId: '0x1e', // 30 in hex
      chainName: 'RSK Mainnet',
      nativeCurrency: { name: 'Smart Bitcoin', symbol: 'RBTC', decimals: 18 },
      rpcUrls: ['https://public-node.rsk.co'],
      blockExplorerUrls: ['https://explorer.rsk.co']
    },
    arbitrum: {
      chainId: '0xa4b1', // 42161 in hex
      chainName: 'Arbitrum One',
      nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
      rpcUrls: ['https://arb1.arbitrum.io/rpc'],
      blockExplorerUrls: ['https://arbiscan.io']
    }
  };
  
  try {
    // Try to switch to the network first
    await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: networkParams[network].chainId }]
    });
    return true;
  } catch (switchError) {
    // If the network is not added, add it
    if (switchError.code === 4902) {
      try {
        await provider.request({
          method: 'wallet_addEthereumChain',
          params: [networkParams[network]]
        });
        return true;
      } catch (addError) {
        console.error('Error adding network:', addError);
        return false;
      }
    }
    console.error('Error switching network:', switchError);
    return false;
  }
};

/**
 * Switch network using wagmi's switchNetwork function
 * This is designed to work with Dynamic Labs and wagmi
 * @param {string} network - Network name (linea, rootstock, arbitrum)
 * @returns {Promise<boolean>} Success or failure
 */
export const switchNetworkChain = async (network) => {
  try {
    // Import dynamically to avoid circular dependencies
    const { switchChain } = await import('wagmi/actions');
    
    // Network chain IDs
    const chainIdMap = {
      linea: 59144,        // Linea Mainnet
      rootstock: 30,       // RSK Mainnet
      arbitrum: 42161      // Arbitrum One
    };
    
    const chainId = chainIdMap[network];
    if (!chainId) {
      console.error(`Unknown network: ${network}`);
      return false;
    }
    
    await switchChain({ chainId });
    return true;
  } catch (error) {
    console.error('Error switching network:', error);
    return false;
  }
};
