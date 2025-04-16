// app/components/Counter.js
import { useReadContract } from "wagmi";
import { abi } from "@/lib/abi";

export default function Counter() {
  const { 
    data: counterValue, 
    error,
    isPending,
    refetch 
  } = useReadContract({
    address: "0x80d3c57b95a2fca3900f3EAC71196Bf133aaa517", // Add your deployed smart contract address here
    abi: abi,
    functionName: "number",
  });

  const statusText = isPending 
    ? "Loading..." 
    : error 
      ? "Error: " + error.shortMessage 
      : `Counter: ${counterValue?.toString() ?? "?"}`;

  return (
    <button 
      className="docs-button" 
      onClick={() => refetch()}
    >
      {statusText} • Click to refresh
    </button>
  );
}