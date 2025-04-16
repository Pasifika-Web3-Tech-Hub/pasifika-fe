'use client';

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { BitcoinWalletConnectors } from "@dynamic-labs/bitcoin";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { config } from "@/lib/wagmi";


export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {

  const queryClient = new QueryClient();

  return (
   <DynamicContextProvider
      theme="auto"
      settings={{
        environmentId:
          // replace with your own environment ID
          process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID ||
          "3c552309-a86f-48bb-9565-9606b81f63a5",
        walletConnectors: [EthereumWalletConnectors, BitcoinWalletConnectors],
      }}
    >
      
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>
            {children}
          </DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
      
    </DynamicContextProvider>
  );
}