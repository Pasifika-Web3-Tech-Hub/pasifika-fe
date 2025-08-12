"use client";
import { useStacks } from "../hooks/use-stacks";
import { abbreviateAddress } from "../lib/stx-utils";
import Link from "next/link";

export function Navbar() {
  const { userData, connectWallet, disconnectWallet } = useStacks();

  return (
    <nav className="flex w-full items-center justify-between gap-4 p-4 h-16 bg-white shadow-md border-b border-gray-200">
      <Link href="/stacks-exchange" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
        Pasifika Stacks AMM
      </Link>

      <div className="flex items-center gap-8">
        <Link href="/stacks-exchange" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
          Swap
        </Link>
        <Link href="/stacks-exchange/pools" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
          Pools
        </Link>
        <Link href="/stacks-exchange/liquidity" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
          Liquidity
        </Link>
      </div>

      <div className="flex items-center gap-2">
        {userData ? (
          <div className="flex items-center gap-2">
            <div className="bg-blue-50 px-3 py-2 rounded-lg">
              <span className="text-sm font-medium text-blue-800">
                {abbreviateAddress(userData.profile.stxAddress.testnet)}
              </span>
            </div>
            <button
              type="button"
              onClick={disconnectWallet}
              className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={connectWallet}
            className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
}
