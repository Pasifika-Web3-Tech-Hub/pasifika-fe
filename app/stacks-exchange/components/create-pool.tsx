"use client";

import { useStacks } from "../hooks/use-stacks";
import { useState } from "react";

export function CreatePool() {
  const { handleCreatePool, userData, connectWallet } = useStacks();
  const [token0, setToken0] = useState("");
  const [token1, setToken1] = useState("");
  const [fee, setFee] = useState(500);

  // If user is not connected, show wallet connection UI
  if (!userData) {
    return (
      <div className="flex flex-col max-w-md w-full gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Create New Pool</h2>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="font-semibold text-gray-700">Wallet Not Connected</span>
          </div>
          <p className="text-gray-600 mb-4">
            You need to connect your Stacks wallet to create a new liquidity pool.
          </p>
          <button
            onClick={connectWallet}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Connect Stacks Wallet
          </button>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-700 mb-2">What you can do after connecting:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Create new liquidity pools</li>
            <li>• Add/remove liquidity</li>
            <li>• Swap tokens</li>
            <li>• View your positions</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col max-w-md w-full gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold text-gray-800">Create New Pool</h2>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-green-600 font-medium">Connected</span>
        </div>
      </div>
      
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
        onClick={async (e) => {
          e.preventDefault();
          e.stopPropagation();
          
          console.log("=== CREATE POOL BUTTON CLICKED ===");
          console.log("Event:", e);
          console.log("Form values:", { token0, token1, fee });
          console.log("handleCreatePool function:", typeof handleCreatePool);
          console.log("userData:", userData);
          
          // Test basic alert first
          alert("Button clicked! Check console for details.");
          
          if (!handleCreatePool) {
            console.error("handleCreatePool is undefined!");
            alert("handleCreatePool function is undefined!");
            return;
          }
          
          if (!userData) {
            console.error("userData is null!");
            alert("User not connected to wallet!");
            return;
          }
          
          try {
            console.log("About to call handleCreatePool...");
            const result = await handleCreatePool(token0, token1, fee);
            console.log("handleCreatePool completed with result:", result);
          } catch (error) {
            console.error("Error in button click handler:", error);
            alert(`Button click error: ${error}`);
          }
        }}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!token0 || !token1 || fee <= 0}
      >
        Create Pool
      </button>
    </div>
  );
}
