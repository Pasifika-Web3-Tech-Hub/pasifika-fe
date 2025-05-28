// lib/contracts.ts
import { Address } from 'viem';
import PasifikaTreasuryAbi from '../deployed_contracts/PasifikaTreasury_ABI.json';
import PasifikaMembershipAbi from '../deployed_contracts/PasifikaMembership_ABI.json';
import PasifikaMoneyTransferAbi from '../deployed_contracts/PasifikaMoneyTransfer_ABI.json';
import PasifikaExchangeAbi from '../deployed_contracts/PasifikaExchange_ABI.json';
import PasifikaPriceFeedAbi from '../deployed_contracts/PasifikaPriceFeed_ABI.json';

// Standard ERC20 ABI (minimal version with just the functions we need)
export const ERC20_ABI = [
  {
    "inputs": [
      { "name": "owner", "type": "address" },
      { "name": "spender", "type": "address" }
    ],
    "name": "allowance",
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "name": "spender", "type": "address" },
      { "name": "amount", "type": "uint256" }
    ],
    "name": "approve",
    "outputs": [{ "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "name": "account", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [{ "name": "", "type": "uint8" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [{ "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "name": "recipient", "type": "address" },
      { "name": "amount", "type": "uint256" }
    ],
    "name": "transfer",
    "outputs": [{ "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

// Import Arbitrum contract addresses
import PasifikaTreasuryAddress from '../deployed_contracts/PasifikaTreasury_arbitrum.json';
import PasifikaMembershipAddress from '../deployed_contracts/PasifikaMembership_arbitrum.json';
import PasifikaMoneyTransferAddress from '../deployed_contracts/PasifikaMoneyTransfer_arbitrum.json';
import PasifikaExchangeAddress from '../deployed_contracts/PasifikaExchange.json';
import PasifikaPriceFeedAddress from '../deployed_contracts/PasifikaPriceFeed.json';

// Contract information types
export interface ContractInfo {
  address: Address;
  abi: any;
}

// Contract configurations
export const PasifikaTreasury: ContractInfo = {
  address: PasifikaTreasuryAddress.address as Address,
  abi: PasifikaTreasuryAbi,
};

export const PasifikaMembership: ContractInfo = {
  address: PasifikaMembershipAddress.address as Address,
  abi: PasifikaMembershipAbi,
};

export const PasifikaMoneyTransfer: ContractInfo = {
  address: PasifikaMoneyTransferAddress.address as Address,
  abi: PasifikaMoneyTransferAbi,
};

export const PasifikaExchange: ContractInfo = {
  address: PasifikaExchangeAddress.address as Address,
  abi: PasifikaExchangeAbi,
};

export const PasifikaPriceFeed: ContractInfo = {
  address: PasifikaPriceFeedAddress.address as Address,
  abi: PasifikaPriceFeedAbi,
};

// Network information
export const networkConfig = {
  arbitrumSepolia: {
    chainId: 421614,
    name: 'Arbitrum Sepolia',
    rpcUrl: 'https://sepolia-rollup.arbitrum.io/rpc',
    blockExplorer: 'https://sepolia-explorer.arbitrum.io',
  },
  rootstockTestnet: {
    chainId: 31,
    name: 'RSK Testnet',
    rpcUrl: 'https://public-node.testnet.rsk.co',
    blockExplorer: 'https://explorer.testnet.rsk.co',
  },
  lineaTestnet: {
    chainId: 59141,
    name: 'Linea Testnet',
    rpcUrl: 'https://rpc.goerli.linea.build',
    blockExplorer: 'https://explorer.goerli.linea.build',
  },
  arbitrum: {
    chainId: 42161,
    name: 'Arbitrum One',
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
    blockExplorer: 'https://arbiscan.io',
  },
  rootstock: {
    chainId: 30,
    name: 'RSK Mainnet',
    rpcUrl: 'https://public-node.rsk.co',
    blockExplorer: 'https://explorer.rsk.co',
  },
  linea: {
    chainId: 59144,
    name: 'Linea Mainnet',
    rpcUrl: 'https://rpc.linea.build',
    blockExplorer: 'https://explorer.linea.build',
  },
};

// Default network
export const defaultNetwork = networkConfig.arbitrumSepolia;

// Contract deployments by chain ID
export const contractDeployments = {
  // Arbitrum Sepolia testnet
  421614: {
    bridge: '0xd54f502e184b6b739d7d27a6410a67dc462d69e8' as Address,
    exchange: PasifikaExchange.address,
    priceFeed: PasifikaPriceFeed.address,
  },
  // RSK Testnet
  31: {
    bridge: '0x2b2e8f82ca14c63394e7e5e4809e759d282f9220' as Address,
    exchange: '0xc984648655a061c2607384f724d90c7c9bd4e6e9' as Address,
    priceFeed: '0x8648a2512278eef0e24bd9eb9f3967c05e36f750' as Address,
  },
  // Linea Testnet
  59141: {
    bridge: '0x9e5d9f8cf8f088242430917ca5bbe300e95096fa' as Address,
    exchange: '0xb827581fe301a5ced90c6257ce6b48ce52f13a04' as Address,
    priceFeed: '0x2fd7c80634ef43914416a5c25bf6adf27ea26c7e' as Address,
  },
  // Arbitrum One mainnet
  42161: {
    bridge: '0x8315177ab297ba92a06054ce80a67ed4dbd7ed3a' as Address,
    exchange: '0x75ce7ce05f0ad66394224f0f684e12eb3146f5a6' as Address,
    priceFeed: '0xf18a3451469131977731125ab9a35e7362221dd2' as Address,
  },
  // RSK Mainnet
  30: {
    bridge: '0x37a6fc079cad790e556baedda879358e076ef1a3' as Address,
    exchange: '0x6182c15db5ceddc546de58cf49f8de31070df698' as Address,
    priceFeed: '0xd28257f121c560d04c7bd3f328251322eb218fca' as Address,
  },
  // Linea Mainnet
  59144: {
    bridge: '0xb4c501a3f5b8c0f7c21e097ea38a4842a8e30fb6' as Address,
    exchange: '0xf41674fa5b35dc5c4ea31b0fb324e3aaa1ed6348' as Address,
    priceFeed: '0x95172d70b498dc62e88b58f24eea9fa5e0742358' as Address,
  }
};

// Token mappings by chain ID
export const tokenMappings = {
  // Arbitrum Sepolia (Testnet)
  421614: {
    'USDC': '0xE3809b2D68A9Ec8D0bd71DeBd0539f58D976E97b',
    'USDT': '0x8b7e69Ddd6d61EAd1C1b539dc7CAeE598aF2aB10',
    'LINK': '0xb1D4538B4571d411F07960EF2838Ce337FE1E80E',
    'ARB': '0xE5dF461803a59292c6c03978c17857479c40558a'
  },
  // RSK Testnet
  31: {
    'USDC': '0x8c3a9ff4eC9bf3518e101ff51185E4957173c2',
    'DOC': '0xCb46C0DdC60d18eFEB0e586c17AF6Ea36452DaE0',
    'LINK': '0x8d7d3409D1B32A012842495A8718D27dD8c15CC7'
  },
  // Linea Testnet
  59141: {
    'USDC': '0xF17A45AaD6Ff67bc5E7565CD50e7D0eF867E5E3A',
    'USDT': '0x1E052E74E55FE8F7dF5c93adbC5d8ba937F8CED5',
    'LINK': '0xc1C0472A9fE6c147D8fD48C99Eb1C65b8FaE0985'
  },
  // Arbitrum One (Mainnet)
  42161: {
    'USDC': '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    'USDT': '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    'LINK': '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4',
    'ARB': '0x912CE59144191C1204E64559FE8253a0e49E6548'
  },
  // RSK Mainnet
  30: {
    'USDC': '0x1bC5Fe7D3C870CD1cACF01d193a0fE96DB2Aa1bB',
    'DOC': '0xe700691dA7b9851F2F35f8b8182c69c53CcaD9Db',
    'LINK': '0x14AdaE34beF7ca957Ce2dDe5ADD97ea050123827'
  },
  // Linea Mainnet
  59144: {
    'USDC': '0x176211869cA2b568f2A7D4EE941E073a821EE1ff',
    'USDT': '0xA219439258ca9da29E9Cc4cE5596924745e12B93',
    'LINK': '0x5352C72584e65A740A30788bCcD86d7Fcee76f7B'
  }
};
