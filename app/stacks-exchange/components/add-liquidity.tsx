"use client";

import { useStacks } from "../hooks/use-stacks";
import { Pool } from "../lib/amm";
import { useState } from "react";

export interface AddLiquidityProps {
  pools: Pool[];
}

export function AddLiquidity({ pools }: AddLiquidityProps) {
  const [selectedPool, setSelectedPool] = useState<Pool>(pools[0]);
  const [amount0, setAmount0] = useState<number>(0);
  const [amount1, setAmount1] = useState<number>(0);
  const { handleAddLiquidity } = useStacks();

  return (
    <div className="flex flex-col max-w-md w-full gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Add Liquidity</h2>
      
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
        <label className="font-semibold text-gray-700">
          {selectedPool["token-0"].split(".")[1]} Amount
        </label>
        <input
          type="number"
          className="border-2 border-gray-300 rounded-lg px-4 py-3 text-black focus:border-blue-500 focus:outline-none transition-colors"
          placeholder={`Enter ${selectedPool["token-0"].split(".")[1]} amount`}
          value={amount0 || ""}
          onChange={(e) => setAmount0(parseInt(e.target.value) || 0)}
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-700">
          {selectedPool["token-1"].split(".")[1]} Amount
        </label>
        <input
          type="number"
          className="border-2 border-gray-300 rounded-lg px-4 py-3 text-black focus:border-blue-500 focus:outline-none transition-colors"
          placeholder={`Enter ${selectedPool["token-1"].split(".")[1]} amount`}
          value={amount1 || ""}
          onChange={(e) => setAmount1(parseInt(e.target.value) || 0)}
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Pool Info:</strong><br/>
          Token 0: {selectedPool["token-0"]}<br/>
          Token 1: {selectedPool["token-1"]}<br/>
          Fee: {selectedPool.fee / 100}%
        </p>
      </div>

      <button
        onClick={() => handleAddLiquidity(selectedPool, amount0, amount1)}
        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={amount0 <= 0 || amount1 <= 0}
      >
        Add Liquidity
      </button>
    </div>
  );
}
