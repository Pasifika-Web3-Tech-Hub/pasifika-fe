"use client";

import { useStacks } from "../hooks/use-stacks";
import { useState } from "react";

export function CreatePool() {
  const { handleCreatePool } = useStacks();
  const [token0, setToken0] = useState("");
  const [token1, setToken1] = useState("");
  const [fee, setFee] = useState(500);

  return (
    <div className="flex flex-col max-w-md w-full gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Create New Pool</h2>
      
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-700">Token 0 Contract</label>
        <input
          type="text"
          className="border-2 border-gray-300 rounded-lg px-4 py-3 text-black focus:border-blue-500 focus:outline-none transition-colors"
          placeholder="e.g., ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.token-a"
          value={token0}
          onChange={(e) => setToken0(e.target.value)}
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-700">Token 1 Contract</label>
        <input
          type="text"
          className="border-2 border-gray-300 rounded-lg px-4 py-3 text-black focus:border-blue-500 focus:outline-none transition-colors"
          placeholder="e.g., ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.token-b"
          value={token1}
          onChange={(e) => setToken1(e.target.value)}
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-700">Fee (basis points)</label>
        <input
          type="number"
          className="border-2 border-gray-300 rounded-lg px-4 py-3 text-black focus:border-blue-500 focus:outline-none transition-colors"
          placeholder="500 (0.5%)"
          max={10000}
          min={0}
          value={fee}
          onChange={(e) => setFee(parseInt(e.target.value) || 0)}
        />
        <p className="text-sm text-gray-600">
          Fee percentage: {(fee / 100).toFixed(2)}%
        </p>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> Make sure both token contracts are deployed and valid before creating the pool.
        </p>
      </div>

      <button
        onClick={() => handleCreatePool(token0, token1, fee)}
        className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={!token0 || !token1 || fee < 0}
      >
        Create Pool
      </button>
    </div>
  );
}
