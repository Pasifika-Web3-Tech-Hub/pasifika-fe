// lib/contracts.ts
import { Address } from 'viem';
import PasifikaTreasuryAbi from '../deployed_contracts/PasifikaTreasury_ABI.json';
import PasifikaMembershipAbi from '../deployed_contracts/PasifikaMembership_ABI.json';
import PasifikaMoneyTransferAbi from '../deployed_contracts/PasifikaMoneyTransfer_ABI.json';

// Import Arbitrum contract addresses
import PasifikaTreasuryAddress from '../deployed_contracts/PasifikaTreasury_arbitrum.json';
import PasifikaMembershipAddress from '../deployed_contracts/PasifikaMembership_arbitrum.json';
import PasifikaMoneyTransferAddress from '../deployed_contracts/PasifikaMoneyTransfer_arbitrum.json';

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
