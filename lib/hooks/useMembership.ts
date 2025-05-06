// lib/hooks/useMembership.ts
import { useReadContract, useWriteContract, useAccount } from 'wagmi';
import { PasifikaMembership } from '../contracts';
import { Address } from 'viem';

// Hook for reading membership data
export function useMembershipRead() {
  const { address } = useAccount();

  // Check if address is a member
  const { data: isMember, isLoading: isLoadingMember, refetch: refetchMember } = useReadContract({
    address: PasifikaMembership.address,
    abi: PasifikaMembership.abi,
    functionName: 'isMember',
    args: [address as Address],
    query: {
      enabled: Boolean(address)
    }
  });

  // Get membership fee
  const { data: membershipFee, isLoading: isLoadingFee } = useReadContract({
    address: PasifikaMembership.address,
    abi: PasifikaMembership.abi,
    functionName: 'getMembershipFee',
  });

  // Get total members
  const { data: totalMembers, isLoading: isLoadingTotal } = useReadContract({
    address: PasifikaMembership.address,
    abi: PasifikaMembership.abi,
    functionName: 'getTotalMembers',
  });

  // Check if user has admin role
  const { data: isAdmin, isLoading: isLoadingAdmin } = useReadContract({
    address: PasifikaMembership.address,
    abi: PasifikaMembership.abi,
    functionName: 'hasRole',
    args: ['0x0000000000000000000000000000000000000000000000000000000000000000', address as Address],
    query: {
      enabled: Boolean(address)
    }
  });

  return {
    isMember: !!isMember,
    membershipFee: membershipFee as bigint || BigInt(0),
    totalMembers: totalMembers as bigint || BigInt(0),
    isAdmin: !!isAdmin,
    isLoading: isLoadingMember || isLoadingFee || isLoadingTotal || isLoadingAdmin,
    refetch: refetchMember,
  };
}

// Hook for membership write operations
export function useMembershipWrite() {
  const { writeContractAsync, isPending, isSuccess, isError, error } = useWriteContract();

  // Join membership
  const joinMembership = async (value: bigint) => {
    return writeContractAsync({
      address: PasifikaMembership.address,
      abi: PasifikaMembership.abi,
      functionName: 'joinMembership',
      args: [],
      value,
    });
  };

  // Set membership fee (admin only)
  const setMembershipFee = async (newFee: bigint) => {
    return writeContractAsync({
      address: PasifikaMembership.address,
      abi: PasifikaMembership.abi,
      functionName: 'setMembershipFee',
      args: [newFee],
    });
  };

  return {
    joinMembership,
    setMembershipFee,
    isPending,
    isSuccess,
    isError,
    error,
  };
}
