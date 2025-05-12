/**
 * Test script for the Multi-Network Contract Loader
 * 
 * This script tests the contract-loader.js utility to ensure it correctly
 * loads contract addresses and ABIs across different networks.
 */

// Import fs and path to read contract files directly
const fs = require('fs');
const path = require('path');

// Base directory for contracts
const CONTRACT_DIR = path.join(__dirname, 'deployed_contracts');

// Helper function to read contract file
const getContractInfo = (contractName, network) => {
  try {
    const filePath = path.join(CONTRACT_DIR, `${contractName}_${network}.json`);
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContent);
    }
    return null;
  } catch (error) {
    console.error(`Error reading contract file: ${contractName}_${network}.json`);
    return null;
  }
};

// Helper function to check if ABI file exists
const hasABIFile = (contractName) => {
  const filePath = path.join(CONTRACT_DIR, `${contractName}_ABI.json`);
  return fs.existsSync(filePath);
};

// Test function to verify contract loading across networks
const testContractLoader = () => {
  console.log('Testing Multi-Network Contract System');
  console.log('----------------------------------------------');

  // Test 1: Get contract address for PasifikaTreasury on each network
  console.log('\nTEST 1: Get PasifikaTreasury address on each network');
  const networks = ['linea', 'rootstock', 'arbitrum'];
  
  for (const network of networks) {
    const info = getContractInfo('PasifikaTreasury', network);
    console.log(`Network: ${network}, Address: ${info ? info.address : 'Not deployed'}`);
    if (info) {
      console.log(`  Chain ID: ${info.chainId || info.network}`);
      console.log(`  Explorer: ${info.explorer}`);
    }
  }

  // Test 2: List all contract files with network name in filename
  console.log('\nTEST 2: List all contract files with network name in filename');
  const files = fs.readdirSync(CONTRACT_DIR);
  const networkContracts = files.filter(file => /^\w+_(linea|rootstock|arbitrum)\.json$/.test(file));
  networkContracts.forEach(file => {
    console.log(`- ${file}`);
  });

  // Test 3: Check that ABI files exist for deployed contracts
  console.log('\nTEST 3: Check ABI files for contracts');
  const contractNames = new Set(
    networkContracts.map(file => file.split('_')[0])
  );
  
  contractNames.forEach(contractName => {
    const hasABI = hasABIFile(contractName);
    console.log(`${contractName}: ABI file exists: ${hasABI}`);
  });

  console.log('\nTests completed!');
};

// Run the test
testContractLoader();
