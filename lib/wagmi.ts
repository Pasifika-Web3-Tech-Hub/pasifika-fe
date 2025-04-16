// lib/wagmi.ts
import { http, createConfig } from "wagmi";
import { lineaSepolia, linea } from "wagmi/chains"; // Add this

export const config = createConfig({
  chains: [lineaSepolia, linea], // Add this
  multiInjectedProviderDiscovery: false,
  ssr: true,
  transports: {
    [lineaSepolia.id]: http(), // Add this
    [linea.id]: http(), // and this
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
