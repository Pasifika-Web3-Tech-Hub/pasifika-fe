import { useWriteContract, useReadContract, useAccount } from 'wagmi';
import { Address, parseEther } from 'viem';
import { useState } from 'react';

// ERC20 ABI just for approval and allowance functions
const ERC20_ABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      },
      {
        "name": "_spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export function useTokenApproval() {
  const { address } = useAccount();
  const { writeContractAsync, isPending, isSuccess, isError, error } = useWriteContract();
  const [isCheckingAllowance, setIsCheckingAllowance] = useState(false);

  // Hook for reading allowance
  const useAllowance = (tokenAddress?: Address, spenderAddress?: Address) => {
    return useReadContract({
      address: tokenAddress,
      abi: ERC20_ABI,
      functionName: 'allowance',
      args: address && tokenAddress && spenderAddress ? [address, spenderAddress] : undefined,
      query: {
        enabled: Boolean(address && tokenAddress && spenderAddress)
      }
    });
  };

  // Check token allowance
  const checkAllowance = async (
    tokenAddress: Address,
    spenderAddress: Address
  ) => {
    if (!address) return BigInt(0);
    
    setIsCheckingAllowance(true);
    
    try {
      // We'll create a one-time client to read data
      const result = await fetch(`https://sepolia-rollup.arbitrum.io/rpc`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'eth_call',
          params: [{
            to: tokenAddress,
            data: `0xdd62ed3e000000000000000000000000${address.slice(2)}000000000000000000000000${spenderAddress.slice(2)}`
          }, 'latest']
        })
      }).then(res => res.json());
      
      if (result.error) {
        throw new Error(result.error.message);
      }
      
      // Convert hex string to BigInt
      const allowance = result.result ? BigInt(result.result) : BigInt(0);
      return allowance;
    } catch (err) {
      console.error('Error checking allowance:', err);
      return BigInt(0);
    } finally {
      setIsCheckingAllowance(false);
    }
  };

  // Approve token spending
  const approveToken = async (
    tokenAddress: Address,
    spenderAddress: Address,
    amount: bigint = parseEther('1000000000') // Default to a large approval amount
  ) => {
    if (!address) return;
    
    try {
      const tx = await writeContractAsync({
        address: tokenAddress,
        abi: ERC20_ABI,
        functionName: 'approve',
        args: [spenderAddress, amount]
      });
      
      return tx;
    } catch (err) {
      console.error('Error approving token:', err);
      throw err;
    }
  };

  return {
    checkAllowance,
    approveToken,
    isPending,
    isSuccess,
    isError,
    error,
    isCheckingAllowance
  };
}
