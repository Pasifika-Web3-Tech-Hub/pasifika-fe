// lib/hooks/useMoneyTransfer.ts
import { useReadContract, useWriteContract, useAccount } from 'wagmi';
import { PasifikaMoneyTransfer } from '../contracts';
import { Address } from 'viem';

// Hook for reading money transfer data
export function useMoneyTransferRead() {
  const { address } = useAccount();

  // Get fee percentage
  const { data: feePercentage, isLoading: isLoadingFee } = useReadContract({
    address: PasifikaMoneyTransfer.address,
    abi: PasifikaMoneyTransfer.abi,
    functionName: 'getFeePercentage',
    args: [address as Address],
    query: {
      enabled: Boolean(address)
    }
  });

  // Get total transactions
  const { data: totalTransactions, isLoading: isLoadingTotal } = useReadContract({
    address: PasifikaMoneyTransfer.address,
    abi: PasifikaMoneyTransfer.abi,
    functionName: 'getTotalTransactions',
  });

  // Check if user has admin role
  const { data: isAdmin, isLoading: isLoadingAdmin } = useReadContract({
    address: PasifikaMoneyTransfer.address,
    abi: PasifikaMoneyTransfer.abi,
    functionName: 'hasRole',
    args: ['0x0000000000000000000000000000000000000000000000000000000000000000', address as Address],
    query: {
      enabled: Boolean(address)
    }
  });

  return {
    feePercentage: feePercentage as number || 0,
    totalTransactions: totalTransactions as bigint || BigInt(0),
    isAdmin: !!isAdmin,
    isLoading: isLoadingFee || isLoadingTotal || isLoadingAdmin,
  };
}

// Hook for money transfer write operations
export function useMoneyTransferWrite() {
  const { writeContractAsync, isPending, isSuccess, isError, error } = useWriteContract();

  // Send money
  const sendMoney = async (recipient: Address, value: bigint) => {
    return writeContractAsync({
      address: PasifikaMoneyTransfer.address,
      abi: PasifikaMoneyTransfer.abi,
      functionName: 'sendMoney',
      args: [recipient],
      value,
    });
  };

  // Update fee percentages (admin only)
  const updateFeePercentages = async (
    guestFeePercentage: number,
    memberFeePercentage: number,
    nodeFeePercentage: number
  ) => {
    return writeContractAsync({
      address: PasifikaMoneyTransfer.address,
      abi: PasifikaMoneyTransfer.abi,
      functionName: 'updateFeePercentages',
      args: [guestFeePercentage, memberFeePercentage, nodeFeePercentage],
    });
  };

  return {
    sendMoney,
    updateFeePercentages,
    isPending,
    isSuccess,
    isError,
    error,
  };
}
