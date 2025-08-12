"use client";

import { useStacks } from "../hooks/use-stacks";
import { Pool } from "../lib/amm";
import { useEffect, useMemo, useState, useCallback } from "react";

export interface SwapProps {
  pools: Pool[];
}

export function Swap({ pools }: SwapProps) {
  const { handleSwap } = useStacks();
  const [fromToken, setFromToken] = useState<string>(pools[0]["token-0"]);
  const [toToken, setToToken] = useState<string>(pools[0]["token-1"]);
  const [fromAmount, setFromAmount] = useState<number>(0);
  const [estimatedToAmount, setEstimatedToAmount] = useState<bigint>(BigInt(0));

  const uniqueTokens = pools.reduce((acc, pool) => {
    const token0 = pool["token-0"];
    const token1 = pool["token-1"];

    if (!acc.includes(token0)) {
      acc.push(token0);
    }

    if (!acc.includes(token1)) {
      acc.push(token1);
    }

    return acc;
  }, [] as string[]);

  const toTokensList = useMemo(() => {
    const poolsWithFromToken = pools.filter(
      (pool) => pool["token-0"] === fromToken || pool["token-1"] === fromToken
    );
    const tokensFromPools = poolsWithFromToken.reduce((acc, pool) => {
      const token0 = pool["token-0"];
      const token1 = pool["token-1"];

      if (!acc.includes(token0) && token0 !== fromToken) {
        acc.push(token0);
      }

      if (!acc.includes(token1) && token1 !== fromToken) {
        acc.push(token1);
      }

      return acc;
    }, [] as string[]);

    return tokensFromPools;
  }, [fromToken, pools]);

  const estimateSwapOutput = useCallback(() => {
    const pool = pools.find(
      (p) =>
        (p["token-0"] === fromToken && p["token-1"] === toToken) ||
        (p["token-0"] === toToken && p["token-1"] === fromToken)
    );
    if (!pool) return;

    if (fromAmount === 0) return;

    const x = BigInt(pool["balance-0"]);
    const y = BigInt(pool["balance-1"]);
    const k = x * y;
    const feesFloat = pool.fee / 10_000;

    if (fromToken === pool["token-0"]) {
      const deltaX = BigInt(fromAmount);
      // (x-dx) * (y+dy) = k
      // y+dy = k/(x-dx)
      // dy = (k/(x-dx)) - y
      const xMinusDeltaX = x - deltaX;
      const yPlusDeltaY = k / xMinusDeltaX;
      const deltaY = yPlusDeltaY - y;
      const deltaYMinusFees =
        deltaY - BigInt(Math.ceil(Number(deltaY) * feesFloat));
      setEstimatedToAmount(deltaYMinusFees);
    } else {
      // (x+dx) * (y-dy) = k
      // x+dx = k/(y-dy)
      // dx = (k/(y-dy)) - x
      const deltaY = BigInt(fromAmount);
      const yMinusDeltaY = y - deltaY;
      const xPlusDeltaX = k / yMinusDeltaY;
      const deltaX = xPlusDeltaX - x;
      const deltaXMinusFees =
        deltaX - BigInt(Math.ceil(Number(deltaX) * feesFloat));
      setEstimatedToAmount(deltaXMinusFees);
    }
  }, [pools, fromToken, toToken, fromAmount]);

  useEffect(() => {
    estimateSwapOutput();
  }, [estimateSwapOutput]);

  return (
    <div className="flex flex-col max-w-xl w-full gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Token Swap</h2>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">From</label>
          <select
            className="border-2 border-gray-300 rounded-lg px-4 py-3 text-black focus:border-blue-500 focus:outline-none transition-colors"
            value={fromToken}
            onChange={(e) => setFromToken(e.target.value)}
          >
            {uniqueTokens.map((token) => (
              <option key={token} value={token}>
                {token}
              </option>
            ))}
          </select>
          <input
            type="number"
            className="border-2 border-gray-300 rounded-lg px-4 py-3 text-black focus:border-blue-500 focus:outline-none transition-colors"
            placeholder="Enter amount"
            value={fromAmount || ""}
            onChange={(e) => setFromAmount(parseInt(e.target.value) || 0)}
          />
        </div>
        
        <div className="flex justify-center py-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">To</label>
          <select
            className="border-2 border-gray-300 rounded-lg px-4 py-3 text-black focus:border-blue-500 focus:outline-none transition-colors"
            value={toToken}
            onChange={(e) => setToToken(e.target.value)}
          >
            {toTokensList.map((token) => (
              <option key={token} value={token}>
                {token}
              </option>
            ))}
          </select>
          <div className="border-2 border-gray-200 rounded-lg px-4 py-3 bg-gray-50 text-gray-600">
            {estimatedToAmount.toString()} tokens
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <span className="text-sm text-blue-800">
          <strong>Estimated Output:</strong> {estimatedToAmount.toString()} {toToken}
        </span>
      </div>

      <button
        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
        disabled={estimatedToAmount <= 0 || fromAmount <= 0}
        onClick={() => {
          const pool = pools.find(
            (p) =>
              (p["token-0"] === fromToken && p["token-1"] === toToken) ||
              (p["token-0"] === toToken && p["token-1"] === fromToken)
          );
          if (!pool) return;

          const zeroForOne = fromToken === pool["token-0"];
          handleSwap(pool, fromAmount, zeroForOne);
        }}
      >
        Swap Tokens
      </button>
    </div>
  );
}
