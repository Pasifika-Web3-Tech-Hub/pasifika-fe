// Auto-generated contract addresses and types
// Last updated: 2025-08-16T10:38:30.642Z

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
  "mock-token": ContractInfo;
  "mock-token-2": ContractInfo;
}

export const DEPLOYED_CONTRACTS: DeployedContracts = {
  "amm": {
    "address": "ST1KQ3KDWYE3B4WMY0WQ7SP7EYX0842PR64K3DBE2",
    "contractName": "amm",
    "network": "testnet",
    "deployedAt": "2025-08-16T10:38:30.637Z",
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
  },
  "mock-token": {
    "address": "ST1KQ3KDWYE3B4WMY0WQ7SP7EYX0842PR64K3DBE2",
    "contractName": "mock-token",
    "network": "testnet",
    "deployedAt": "2025-08-16T10:38:30.637Z",
    "description": "Pasifika Stacks Mock Token Contract",
    "functions": [
      "transfer",
      "get-balance",
      "get-total-supply",
      "mint"
    ]
  },
  "mock-token-2": {
    "address": "ST1KQ3KDWYE3B4WMY0WQ7SP7EYX0842PR64K3DBE2",
    "contractName": "mock-token-2",
    "network": "testnet",
    "deployedAt": "2025-08-16T10:38:30.637Z",
    "description": "Pasifika Stacks Mock Token 2 Contract",
    "functions": [
      "transfer",
      "get-balance",
      "get-total-supply",
      "mint"
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
