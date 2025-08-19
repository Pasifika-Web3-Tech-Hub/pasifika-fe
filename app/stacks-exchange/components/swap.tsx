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
    <div className="flex flex-col max-w-xl w-full bg-white rounded-xl shadow-lg border border-gray-200" style={{ gap: '8px', padding: '16px' }}>
      <h2 className="font-bold text-gray-800" style={{ fontSize: '20px', marginBottom: '4px' }}>Token Swap</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label className="font-semibold text-gray-700" style={{ fontSize: '14px' }}>From</label>
          <select
            className="border-2 border-gray-300 rounded-lg text-black focus:border-blue-500 focus:outline-none transition-colors"
            style={{ padding: '8px 12px' }}
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
            className="border-2 border-gray-300 rounded-lg text-black focus:border-blue-500 focus:outline-none transition-colors"
            style={{ padding: '8px 12px' }}
            placeholder="Enter amount"
            value={fromAmount || ""}
            onChange={(e) => setFromAmount(parseInt(e.target.value) || 0)}
          />
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '-4px 0' }}>
          <div className="bg-blue-100 rounded-full" style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg className="text-blue-600" style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label className="font-semibold text-gray-700" style={{ fontSize: '14px' }}>To</label>
          <select
            className="border-2 border-gray-300 rounded-lg text-black focus:border-blue-500 focus:outline-none transition-colors"
            style={{ padding: '8px 12px' }}
            value={toToken}
            onChange={(e) => setToToken(e.target.value)}
          >
            {toTokensList.map((token) => (
              <option key={token} value={token}>
                {token}
              </option>
            ))}
          </select>
          <div className="border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-600" style={{ padding: '8px 12px' }}>
            {estimatedToAmount.toString()} tokens
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg" style={{ padding: '8px' }}>
        <span className="text-blue-800" style={{ fontSize: '12px' }}>
          <strong>Estimated Output:</strong> {estimatedToAmount.toString()} {toToken}
        </span>
      </div>

      <button
        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
        style={{ padding: '8px 16px' }}
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
