import { useReadContract, useWriteContract, useBalance, useAccount } from 'wagmi'
import { useEffect, useState } from 'react'
import { formatEther, parseEther, Address } from 'viem'

// Import contract configurations
import { PasifikaExchange, PasifikaPriceFeed } from '../contracts'

type PairInfo = {
  tokenAddress: string
  tokenReserve: bigint
  ethReserve: bigint
  exchangeRate: number // tokens per ETH
}

/**
 * Hook for interacting with the Pasifika Exchange smart contract
 */
export function useExchange() {
  const { address } = useAccount()
  const [pairs, setPairs] = useState<PairInfo[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  
  // Get user's ETH balance
  const { data: userBalance } = useBalance()
  
  // Contract interaction hooks
  const { writeContractAsync, isPending, isSuccess, isError, error } = useWriteContract()
  
  /**
   * Create a new trading pair with ETH and a token
   */
  const createPair = async (tokenAddress: string, tokenAmount: bigint, ethAmount: bigint) => {
    setIsLoading(true)
    setErrorMessage('')
    
    try {
      await writeContractAsync({
        address: PasifikaExchange.address as `0x${string}`,
        abi: PasifikaExchange.abi,
        functionName: 'createPair',
        args: [tokenAddress, tokenAmount],
        value: ethAmount
      })
      
      console.log(`Successfully created pair for ${tokenAddress}`)
      
      // Refresh pairs after creation
      await fetchPairs()
    } catch (err) {
      setErrorMessage(`Error creating pair: ${(err as Error).message}`)
      console.error(`Failed to create pair: ${(err as Error).message}`)
    } finally {
      setIsLoading(false)
    }
  }
  
  /**
   * Add liquidity to an existing pair
   */
  const addLiquidity = async (tokenAddress: string, tokenAmount: bigint, ethAmount: bigint) => {
    setIsLoading(true)
    setErrorMessage('')
    
    try {
      await writeContractAsync({
        address: PasifikaExchange.address as `0x${string}`,
        abi: PasifikaExchange.abi,
        functionName: 'addLiquidity',
        args: [tokenAddress, tokenAmount],
        value: ethAmount
      })
      
      console.log(`Added liquidity to ${tokenAddress}`)
      
      // Refresh pairs after adding liquidity
      await fetchPairs()
    } catch (err) {
      setErrorMessage(`Error adding liquidity: ${(err as Error).message}`)
      console.error(`Failed to add liquidity: ${(err as Error).message}`)
    } finally {
      setIsLoading(false)
    }
  }
  
  /**
   * Remove liquidity from a pair
   */
  const removeLiquidity = async (tokenAddress: string, liquidityAmount: bigint) => {
    setIsLoading(true)
    setErrorMessage('')
    
    try {
      await writeContractAsync({
        address: PasifikaExchange.address as `0x${string}`,
        abi: PasifikaExchange.abi,
        functionName: 'removeLiquidity',
        args: [tokenAddress, liquidityAmount]
      })
      
      console.log(`Removed liquidity from ${tokenAddress}`)
      
      // Refresh pairs after removing liquidity
      await fetchPairs()
    } catch (err) {
      setErrorMessage(`Error removing liquidity: ${(err as Error).message}`)
      console.error(`Failed to remove liquidity: ${(err as Error).message}`)
    } finally {
      setIsLoading(false)
    }
  }
  
  /**
   * Swap ETH for tokens
   */
  const swapETHForTokens = async (tokenAddress: string, minTokens: bigint, ethAmount: bigint) => {
    setIsLoading(true)
    setErrorMessage('')
    
    try {
      await writeContractAsync({
        address: PasifikaExchange.address as `0x${string}`,
        abi: PasifikaExchange.abi,
        functionName: 'swapETHForTokens',
        args: [tokenAddress, minTokens],
        value: ethAmount
      })
      
      console.log(`Swapped ${formatEther(ethAmount)} ETH for tokens`)
      
      // Refresh pairs after swap
      await fetchPairs()
    } catch (err) {
      setErrorMessage(`Error swapping ETH for tokens: ${(err as Error).message}`)
      console.error(`Failed to swap: ${(err as Error).message}`)
    } finally {
      setIsLoading(false)
    }
  }
  
  /**
   * Swap tokens for ETH
   */
  const swapTokensForETH = async (tokenAddress: string, tokenAmount: bigint, minETH: bigint) => {
    setIsLoading(true)
    setErrorMessage('')
    
    try {
      await writeContractAsync({
        address: PasifikaExchange.address as `0x${string}`,
        abi: PasifikaExchange.abi,
        functionName: 'swapTokensForETH',
        args: [tokenAddress, tokenAmount, minETH]
      })
      
      console.log(`Swapped tokens for ETH`)
      
      // Refresh pairs after swap
      await fetchPairs()
    } catch (err) {
      setErrorMessage(`Error swapping tokens for ETH: ${(err as Error).message}`)
      console.error(`Failed to swap: ${(err as Error).message}`)
    } finally {
      setIsLoading(false)
    }
  }
  
  /**
   * Get the estimated amount of tokens for a given ETH amount
   */
  // Get estimated tokens out for ETH
  const useTokensOutEstimate = (tokenAddress: string | undefined, ethAmount: bigint) => {
    return useReadContract({
      address: PasifikaExchange.address,
      abi: PasifikaExchange.abi,
      functionName: 'getTokensOutForETH',
      args: tokenAddress ? [tokenAddress as Address, ethAmount] : undefined,
      query: {
        enabled: Boolean(tokenAddress)
      }
    });
  };
  
  // Get estimated ETH out for tokens
  const useETHOutEstimate = (tokenAddress: string | undefined, tokenAmount: bigint) => {
    return useReadContract({
      address: PasifikaExchange.address,
      abi: PasifikaExchange.abi,
      functionName: 'getETHOutForTokens',
      args: tokenAddress ? [tokenAddress as Address, tokenAmount] : undefined,
      query: {
        enabled: Boolean(tokenAddress)
      }
    });
  };
  
  /**
   * Fetch trading pairs from the exchange
   */
  const fetchPairs = async () => {
    // This is a simplified version - in a real app, you would need to have 
    // a way to discover which token pairs exist
    // For now, we'll just simulate with placeholder logic
    
    // In a real implementation, you would loop through known token addresses
    // and call getLiquidity() for each
    
    // Example (pseudocode):
    // const knownTokens = await getKnownTokens()
    // const pairData = await Promise.all(knownTokens.map(async (token) => {
    //   const { tokenReserve, ethReserve } = await getLiquidity(token)
    //   const exchangeRate = await getExchangeRate(token)
    //   return { tokenAddress: token, tokenReserve, ethReserve, exchangeRate }
    // }))
    // setPairs(pairData)
    
    setPairs([]) // Placeholder
  }
  
  // Initial data fetch
  useEffect(() => {
    fetchPairs()
  }, [])
  
  return {
    pairs,
    isLoading,
    errorMessage,
    userBalance,
    createPair,
    addLiquidity,
    removeLiquidity,
    swapETHForTokens,
    swapTokensForETH,
    useTokensOutEstimate,
    useETHOutEstimate,
    refreshPairs: fetchPairs,
    isPending,
    isSuccess,
    isError,
    error
  }
}
