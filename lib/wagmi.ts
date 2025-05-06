// lib/wagmi.ts
import { http, createConfig } from "wagmi";
import { lineaSepolia, linea, arbitrumSepolia, arbitrum } from "wagmi/chains"; // Added Arbitrum chains

export const config = createConfig({
  chains: [lineaSepolia, linea, arbitrumSepolia, arbitrum], // Added Arbitrum chains
  multiInjectedProviderDiscovery: false,
  ssr: true,
  transports: {
    [lineaSepolia.id]: http(),
    [linea.id]: http(),
    [arbitrumSepolia.id]: http(), // Added Arbitrum Sepolia
    [arbitrum.id]: http(), // Added Arbitrum
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
