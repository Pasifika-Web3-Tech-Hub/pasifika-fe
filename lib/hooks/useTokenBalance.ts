import { useReadContract, useAccount } from 'wagmi';
import { Address, formatUnits } from 'viem';
import { useState, useEffect } from 'react';

// ERC20 ABI just for balanceOf
const ERC20_BALANCE_ABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "balance",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

export function useTokenBalance(tokenAddress?: Address, decimals: number = 18) {
  const { address } = useAccount();
  const [formattedBalance, setFormattedBalance] = useState<string>('0');
  
  const { data: balance, isLoading, error } = useReadContract({
    address: tokenAddress,
    abi: ERC20_BALANCE_ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: {
      enabled: Boolean(address && tokenAddress)
    }
  });

  useEffect(() => {
    if (balance) {
      setFormattedBalance(formatUnits(balance as bigint, decimals));
    } else {
      setFormattedBalance('0');
    }
  }, [balance, decimals]);

  return {
    balance: balance as bigint | undefined,
    formattedBalance,
    isLoading,
    error
  };
}
