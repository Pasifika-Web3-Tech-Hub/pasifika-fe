// lib/hooks/useTreasury.ts
import { useReadContract, useWriteContract, useAccount } from 'wagmi';
import { PasifikaTreasury } from '../contracts';
import { Address } from 'viem';

// Define types for the contract data
interface Fund {
  id: bigint;
  name: string;
  balance: bigint;
}

interface FeeCollector {
  collectorAddress: Address;
  name: string;
  feePercentage?: number;
}

// Hook for reading treasury data
export function useTreasuryRead() {
  const { address } = useAccount();

  // Get treasury funds
  const { data: treasuryFunds, isLoading: isLoadingFunds, refetch: refetchFunds } = useReadContract({
    address: PasifikaTreasury.address,
    abi: PasifikaTreasury.abi,
    functionName: 'getFunds',
    query: {
      enabled: Boolean(address)
    }
  });

  // Get fee collectors
  const { data: feeCollectors, isLoading: isLoadingCollectors, refetch: refetchCollectors } = useReadContract({
    address: PasifikaTreasury.address,
    abi: PasifikaTreasury.abi,
    functionName: 'getFeeCollectors',
    query: {
      enabled: Boolean(address)
    }
  });

  // Check if user has admin role
  const { data: isAdmin, isLoading: isLoadingAdmin } = useReadContract({
    address: PasifikaTreasury.address,
    abi: PasifikaTreasury.abi,
    functionName: 'hasRole',
    args: ['0x0000000000000000000000000000000000000000000000000000000000000000', address as Address],
    query: {
      enabled: Boolean(address)
    }
  });

  // Check if user has treasury role
  const { data: isTreasurer, isLoading: isLoadingTreasurer } = useReadContract({
    address: PasifikaTreasury.address,
    abi: PasifikaTreasury.abi,
    functionName: 'hasRole',
    args: ['0x5c27b768db8b6766ba238c99164c0588576f0a6eb61af3b2877f74d3891a283c', address as Address],
    query: {
      enabled: Boolean(address)
    }
  });

  return {
    treasuryFunds: treasuryFunds as Fund[] || [],
    feeCollectors: feeCollectors as FeeCollector[] || [],
    isAdmin: !!isAdmin,
    isTreasurer: !!isTreasurer,
    isLoading: isLoadingFunds || isLoadingCollectors || isLoadingAdmin || isLoadingTreasurer,
    refetch: () => {
      refetchFunds();
      refetchCollectors();
    },
  };
}

// Hook for treasury write operations
export function useTreasuryWrite() {
  const { writeContractAsync, isPending, isSuccess, isError, error } = useWriteContract();

  // Register fee collector
  const registerFeeCollector = async (collectorAddress: Address, collectorName: string) => {
    return writeContractAsync({
      address: PasifikaTreasury.address,
      abi: PasifikaTreasury.abi,
      functionName: 'registerFeeCollector',
      args: [collectorAddress, collectorName],
    });
  };

  // Create new fund
  const createFund = async (fundName: string, initialAmount: bigint) => {
    return writeContractAsync({
      address: PasifikaTreasury.address,
      abi: PasifikaTreasury.abi,
      functionName: 'createFund',
      args: [fundName, initialAmount],
    });
  };

  // Withdraw from fund
  const withdrawFromFund = async (fundId: number, amount: bigint, recipient: Address) => {
    return writeContractAsync({
      address: PasifikaTreasury.address,
      abi: PasifikaTreasury.abi,
      functionName: 'withdrawFromFund',
      args: [fundId, amount, recipient],
    });
  };

  return {
    registerFeeCollector,
    createFund,
    withdrawFromFund,
    isPending,
    isSuccess,
    isError,
    error,
  };
}
