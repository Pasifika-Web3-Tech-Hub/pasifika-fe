// Auto-generated contract addresses and types
// Last updated: 2025-08-11T21:27:09.946Z

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
  amm: ContractInfo;
}

export const DEPLOYED_CONTRACTS: DeployedContracts = {
  "amm": {
    "address": "ST3P49R8XXQWG69S66MZASYPTTGNDKK0WW32RRJDN",
    "contractName": "amm",
    "network": "testnet",
    "deployedAt": "2025-08-11T21:27:09.945Z",
    "description": "Pasifika Stacks AMM Contract",
    "functions": [
      "create-pool",
      "add-liquidity",
      "remove-liquidity",
      "swap",
      "get-pool-data",
      "get-pool-id",
      "get-position-liquidity"
    ]
  }
} as const;

// Helper functions
export function getContractAddress(contractName: keyof DeployedContracts, network?: string): string {
  const contract = DEPLOYED_CONTRACTS[contractName];
  if (!contract) {
    throw new Error(`Contract ${contractName} not found`);
  }
  
  if (network && contract.network !== network) {
    console.warn(`Contract ${contractName} is deployed on ${contract.network}, but ${network} was requested`);
  }
  
  return contract.address;
}

export function getContractPrincipal(contractName: keyof DeployedContracts): string {
  const contract = DEPLOYED_CONTRACTS[contractName];
  if (!contract) {
    throw new Error(`Contract ${contractName} not found`);
  }
  
  return `${contract.address}.${contract.contractName || contractName}`;
}
