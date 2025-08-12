#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script to save contract addresses from the backend to the frontend deployed_contracts folder
 * This script reads contract deployment information and saves it in a format accessible to the frontend
 */

// Configuration
const BACKEND_PATH = '/home/user/Documents/pasifika-web3-tech-hub/pasifika-stacks-exchange';
const FRONTEND_CONTRACTS_PATH = '/home/user/Documents/pasifika-web3-tech-hub/pasifika-web3-fe/deployed_contracts';
const DEPLOYMENTS_PATH = path.join(BACKEND_PATH, 'deployments');

// Ensure the deployed_contracts directory exists
if (!fs.existsSync(FRONTEND_CONTRACTS_PATH)) {
  fs.mkdirSync(FRONTEND_CONTRACTS_PATH, { recursive: true });
  console.log('Created deployed_contracts directory');
}

async function saveContractAddresses() {
  try {
    console.log('🔍 Scanning for contract deployments...');
    
    // Check if deployments directory exists
    if (!fs.existsSync(DEPLOYMENTS_PATH)) {
      console.log('❌ No deployments directory found in backend');
      return;
    }

    // Read deployment files
    const deploymentFiles = fs.readdirSync(DEPLOYMENTS_PATH);
    const contractAddresses = {};
    
    for (const file of deploymentFiles) {
      if (file.endsWith('.json')) {
        const filePath = path.join(DEPLOYMENTS_PATH, file);
        const deploymentData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        // Extract contract information
        if (deploymentData.contracts) {
          Object.keys(deploymentData.contracts).forEach(contractName => {
            const contractInfo = deploymentData.contracts[contractName];
            contractAddresses[contractName] = {
              address: contractInfo.address || 'unknown',
              txid: contractInfo.txid || 'unknown',
              network: file.replace('.json', ''), // e.g., 'testnet', 'mainnet'
              deployedAt: new Date().toISOString(),
              ...contractInfo
            };
          });
        }
      }
    }

    // Save AMM contract addresses specifically
    const ammContractInfo = {
      amm: {
        address: 'ST3P49R8XXQWG69S66MZASYPTTGNDKK0WW32RRJDN',
        contractName: 'amm',
        network: 'testnet',
        deployedAt: new Date().toISOString(),
        description: 'Pasifika Stacks AMM Contract',
        functions: [
          'create-pool',
          'add-liquidity',
          'remove-liquidity',
          'swap',
          'get-pool-data',
          'get-pool-id',
          'get-position-liquidity'
        ]
      }
    };

    // Merge with existing contract addresses
    Object.assign(contractAddresses, ammContractInfo);

    // Save to frontend
    const outputFile = path.join(FRONTEND_CONTRACTS_PATH, 'contract-addresses.json');
    fs.writeFileSync(outputFile, JSON.stringify(contractAddresses, null, 2));
    
    console.log('✅ Contract addresses saved successfully!');
    console.log(`📁 Saved to: ${outputFile}`);
    console.log(`📊 Total contracts: ${Object.keys(contractAddresses).length}`);
    
    // Create TypeScript definitions
    const tsDefinitions = generateTypeScriptDefinitions(contractAddresses);
    const tsFile = path.join(FRONTEND_CONTRACTS_PATH, 'contract-addresses.ts');
    fs.writeFileSync(tsFile, tsDefinitions);
    
    console.log('✅ TypeScript definitions created!');
    console.log(`📁 Saved to: ${tsFile}`);

    // Create a summary file
    const summary = {
      lastUpdated: new Date().toISOString(),
      totalContracts: Object.keys(contractAddresses).length,
      networks: [...new Set(Object.values(contractAddresses).map(c => c.network))],
      contracts: Object.keys(contractAddresses)
    };
    
    const summaryFile = path.join(FRONTEND_CONTRACTS_PATH, 'deployment-summary.json');
    fs.writeFileSync(summaryFile, JSON.stringify(summary, null, 2));
    
    console.log('✅ Deployment summary created!');
    console.log(`📁 Saved to: ${summaryFile}`);

  } catch (error) {
    console.error('❌ Error saving contract addresses:', error.message);
    process.exit(1);
  }
}

function generateTypeScriptDefinitions(contractAddresses) {
  const contracts = Object.keys(contractAddresses).map(name => `  ${name}: ContractInfo;`).join('\n');
  
  return `// Auto-generated contract addresses and types
// Last updated: ${new Date().toISOString()}

export interface ContractInfo {
  address: string;
  contractName?: string;
  txid?: string;
  network: string;
  deployedAt: string;
  description?: string;
  functions?: string[];
}

export interface DeployedContracts {
${contracts}
}

export const DEPLOYED_CONTRACTS: DeployedContracts = ${JSON.stringify(contractAddresses, null, 2)} as const;

// Helper functions
export function getContractAddress(contractName: keyof DeployedContracts, network?: string): string {
  const contract = DEPLOYED_CONTRACTS[contractName];
  if (!contract) {
    throw new Error(\`Contract \${contractName} not found\`);
  }
  
  if (network && contract.network !== network) {
    console.warn(\`Contract \${contractName} is deployed on \${contract.network}, but \${network} was requested\`);
  }
  
  return contract.address;
}

export function getContractPrincipal(contractName: keyof DeployedContracts): string {
  const contract = DEPLOYED_CONTRACTS[contractName];
  if (!contract) {
    throw new Error(\`Contract \${contractName} not found\`);
  }
  
  return \`\${contract.address}.\${contract.contractName || contractName}\`;
}
`;
}

// Run the script
if (require.main === module) {
  saveContractAddresses();
}

module.exports = { saveContractAddresses };
