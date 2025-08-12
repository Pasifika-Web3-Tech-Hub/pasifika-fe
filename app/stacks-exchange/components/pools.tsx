import { Pool } from "../lib/amm";
import Link from "next/link";

export interface PoolsListProps {
  pools: Pool[];
}

export function PoolsList({ pools }: PoolsListProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="grid grid-cols-5 gap-4 p-4 font-semibold text-center">
          <span>Pool ID</span>
          <span>Token Pair</span>
          <span>Fee</span>
          <span>Liquidity</span>
          <span>TVL</span>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {pools.length > 0 ? (
          pools.map((pool) => (
            <PoolListItem
              key={`pool-${pool["token-0"]}-${pool["token-1"]}`}
              pool={pool}
            />
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            <p>No pools available. Create the first pool to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function PoolListItem({ pool }: { pool: Pool }) {
  const token0Name = pool["token-0"].split(".")[1];
  const token1Name = pool["token-1"].split(".")[1];
  const feesInPercentage = (pool.fee / 10000).toFixed(2);
  const tvl = Number(pool["balance-0"]) + Number(pool["balance-1"]);

  return (
    <div className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50 transition-colors">
      <div className="text-center">
        <span className="font-medium text-gray-900">{pool.id}</span>
      </div>
      
      <div className="flex items-center justify-center gap-2">
        <Link
          href={`https://explorer.hiro.so/txid/${pool["token-0"]}?chain=testnet`}
          target="_blank"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          {token0Name}
        </Link>
        <span className="text-gray-400">/</span>
        <Link
          href={`https://explorer.hiro.so/txid/${pool["token-1"]}?chain=testnet`}
          target="_blank"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          {token1Name}
        </Link>
      </div>
      
      <div className="text-center">
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
          {feesInPercentage}%
        </span>
      </div>
      
      <div className="text-center text-sm">
        <div className="text-gray-600">
          {pool["balance-0"]} {token0Name}
        </div>
        <div className="text-gray-600">
          {pool["balance-1"]} {token1Name}
        </div>
      </div>
      
      <div className="text-center">
        <span className="font-semibold text-gray-900">
          {tvl.toLocaleString()}
        </span>
        <div className="text-xs text-gray-500">Total Value</div>
      </div>
    </div>
  );
}
