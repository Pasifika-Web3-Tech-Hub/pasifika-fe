"use client";

import { useStacks } from "../hooks/use-stacks";
import { getUserLiquidity, Pool } from "../lib/amm";
import { useEffect, useState } from "react";

export interface RemoveLiquidityProps {
  pools: Pool[];
}

export function RemoveLiquidity({ pools }: RemoveLiquidityProps) {
  const { userData, handleRemoveLiquidity } = useStacks();
  const [selectedPool, setSelectedPool] = useState<Pool>(pools[0]);
  const [liquidity, setLiquidity] = useState(0);
  const [userTotalLiquidity, setUserTotalLiquidity] = useState(0);

  async function fetchUserLiquidity() {
    const stxAddress = userData?.profile.stxAddress.testnet;
    if (!stxAddress) return;

    getUserLiquidity(selectedPool, stxAddress).then((liquidity) => {
      setUserTotalLiquidity(liquidity);
    });
  }

  useEffect(() => {
    fetchUserLiquidity();
  }, [selectedPool, userData]);

  const token0Withdraw = selectedPool.liquidity > 0 
    ? (liquidity / selectedPool.liquidity) * selectedPool["balance-0"]
    : 0;
  
  const token1Withdraw = selectedPool.liquidity > 0
    ? (liquidity / selectedPool.liquidity) * selectedPool["balance-1"]
    : 0;

  return (
    <div className="flex flex-col max-w-md w-full gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Remove Liquidity</h2>
      
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-700">Select Pool</label>
        <select
          className="border-2 border-gray-300 rounded-lg px-4 py-3 text-black focus:border-blue-500 focus:outline-none transition-colors"
          onChange={(e) => {
            const poolId = e.target.value;
            setSelectedPool(pools.find((pool) => pool.id === poolId)!);
          }}
        >
          {pools.map((pool) => (
            <option key={pool.id} value={pool.id}>
              Pool {pool.id} ({pool["token-0"].split(".")[1]} / {pool["token-1"].split(".")[1]})
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label className="font-semibold text-gray-700">Liquidity Amount</label>
          <span className="text-sm text-gray-600">Max: {userTotalLiquidity}</span>
        </div>
        <input
          type="number"
          className="border-2 border-gray-300 rounded-lg px-4 py-3 text-black focus:border-blue-500 focus:outline-none transition-colors"
          placeholder="Enter liquidity amount"
          value={liquidity || ""}
          onChange={(e) => setLiquidity(parseInt(e.target.value) || 0)}
          max={userTotalLiquidity}
        />
        <button
          className="text-sm text-blue-600 hover:text-blue-800 text-left"
          onClick={() => setLiquidity(userTotalLiquidity)}
        >
          Use Max ({userTotalLiquidity})
        </button>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-700 mb-2">You will receive:</h3>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span>{selectedPool["token-0"].split(".")[1]}:</span>
            <span className="font-medium">{token0Withdraw.toFixed(6)}</span>
          </div>
          <div className="flex justify-between">
            <span>{selectedPool["token-1"].split(".")[1]}:</span>
            <span className="font-medium">{token1Withdraw.toFixed(6)}</span>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Your Position:</strong><br/>
          Total Liquidity: {userTotalLiquidity}<br/>
          Pool Share: {selectedPool.liquidity > 0 ? ((userTotalLiquidity / selectedPool.liquidity) * 100).toFixed(4) : 0}%
        </p>
      </div>

      <button
        className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={liquidity > userTotalLiquidity || liquidity <= 0}
        onClick={() => handleRemoveLiquidity(selectedPool, liquidity)}
      >
        Remove Liquidity
      </button>
    </div>
  );
}
