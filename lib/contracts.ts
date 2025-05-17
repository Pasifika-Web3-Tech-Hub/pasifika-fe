// lib/contracts.ts
import { Address } from 'viem';
import PasifikaTreasuryAbi from '../deployed_contracts/PasifikaTreasury_ABI.json';
import PasifikaMembershipAbi from '../deployed_contracts/PasifikaMembership_ABI.json';
import PasifikaMoneyTransferAbi from '../deployed_contracts/PasifikaMoneyTransfer_ABI.json';
import PasifikaExchangeAbi from '../deployed_contracts/PasifikaExchange_ABI.json';
import PasifikaPriceFeedAbi from '../deployed_contracts/PasifikaPriceFeed_ABI.json';

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
  arbitrum: {
    chainId: 42161,
    name: 'Arbitrum One',
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
    blockExplorer: 'https://arbiscan.io',
  },
};

// Default network
export const defaultNetwork = networkConfig.arbitrumSepolia;
