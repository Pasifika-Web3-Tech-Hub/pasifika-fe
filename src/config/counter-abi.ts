// src/config/counter-abi.ts
export const COUNTER_ABI = [
    {
      inputs: [],
      name: "count",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
      name: "increment",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }
  ];