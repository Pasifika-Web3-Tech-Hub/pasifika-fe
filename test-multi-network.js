/**
 * Multi-Network Test Utility
 * 
 * This script tests loading contract addresses and ABIs across multiple networks
 * (Linea, Arbitrum, RootStock) from the deployed_contracts directory.
 */

const fs = require('fs');
const path = require('path');

// Directory where contract files are stored
const contractsDir = path.join(__dirname, 'deployed_contracts');

// Networks to test
const networks = ['linea', 'arbitrum', 'rootstock'];

// Core contracts to test
const contracts = [
  'PasifikaTreasury',
  'PasifikaMembership',
  'PasifikaMoneyTransfer'
];

// Token adapter contracts by network
const tokenAdapters = {
  'linea': 'LineaTokenAdapter',
  'arbitrum': 'ArbitrumTokenAdapter',
  'rootstock': 'RootStockTokenAdapter'
};

/**
 * Get contract address from the contract file
 */
function getContractAddress(contractName, network) {
  try {
    const filePath = path.join(contractsDir, `${contractName}_${network}.json`);
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      const contractData = JSON.parse(data);
      return contractData.address;
    }
    return null;
  } catch (error) {
    console.error(`Error reading contract address for ${contractName} on ${network}:`, error.message);
    return null;
  }
}

/**
 * Get contract ABI from the ABI file
 */
function getContractABI(contractName, network) {
  try {
    // First try network-specific ABI file
    let filePath = path.join(contractsDir, `${contractName}_${network}_ABI.json`);
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    }
    
    // Fallback to standard ABI file
    filePath = path.join(contractsDir, `${contractName}_ABI.json`);
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    }
    
    return null;
  } catch (error) {
    console.error(`Error reading ABI for ${contractName} on ${network}:`, error.message);
    return null;
  }
}

/**
 * Get all contracts for a specific network
 */
function getNetworkContracts(network) {
  const result = {};
  const files = fs.readdirSync(contractsDir);
  
  // Find all files ending with _<network>.json
  const networkFiles = files.filter(file => file.endsWith(`_${network}.json`));
  
  for (const file of networkFiles) {
    try {
      const data = fs.readFileSync(path.join(contractsDir, file), 'utf8');
      const contractData = JSON.parse(data);
      // Extract contract name from filename (remove '_network.json')
      const contractName = file.replace(`_${network}.json`, '');
      result[contractName] = contractData.address;
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  return result;
}

/**
 * Get all contracts across all networks
 */
function getAllNetworkContracts() {
  const result = {};
  
  for (const network of networks) {
    const contracts = getNetworkContracts(network);
    if (Object.keys(contracts).length > 0) {
      result[network] = contracts;
    }
  }
  
  return result;
}

/**
 * Test a specific contract on a specific network
 */
function testContract(contractName, network) {
  try {
    // Test contract address loading
    const address = getContractAddress(contractName, network);
    const addressStatus = address ? '✅' : '❌';
    
    // Test ABI loading
    const abi = getContractABI(contractName, network);
    const abiStatus = abi ? '✅' : '❌';
    
    console.log(`${contractName}: Address ${addressStatus} | ABI ${abiStatus}`);
    
    if (address) {
      console.log(`   Address: ${address.substring(0, 10)}...`);
    }
    
    if (abi) {
      const functionCount = abi.filter(item => item.type === 'function').length;
      console.log(`   ABI Functions: ${functionCount || 'N/A'}`);
    }
  } catch (error) {
    console.error(`Error testing ${contractName} on ${network}:`, error.message);
  }
}

// Main testing function
function testMultiNetworkContracts() {
  console.log('===== MULTI-NETWORK DEPLOYMENT TEST =====');
  console.log('Testing contract loading across all networks...\n');
  
  // Test each network
  for (const network of networks) {
    console.log(`\n----- ${network.toUpperCase()} NETWORK -----`);
    
    // Test core contracts
    for (const contract of contracts) {
      testContract(contract, network);
    }
    
    // Test network-specific token adapter
    const tokenAdapter = tokenAdapters[network];
    if (tokenAdapter) {
      testContract(tokenAdapter, network);
    }
  }
  
  // Test getAllNetworkContracts function
  console.log('\n----- TESTING getAllNetworkContracts -----');
  const allNetworkContracts = getAllNetworkContracts();
  console.log(`Found ${Object.keys(allNetworkContracts).length} network configurations`);
  
  for (const network in allNetworkContracts) {
    const contractsInNetwork = allNetworkContracts[network];
    console.log(`\n${network}: ${Object.keys(contractsInNetwork).length} contracts`);
    
    for (const contractName in contractsInNetwork) {
      console.log(` - ${contractName}: ${contractsInNetwork[contractName].substring(0, 10)}...`);
    }
  }
  
  console.log('\n===== TEST COMPLETED =====');
}

// Run the test
testMultiNetworkContracts();
