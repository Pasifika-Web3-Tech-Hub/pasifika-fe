// app/components/DynamicNFTInfo.js
import { useWriteContract } from "wagmi";
import { abi } from "@/lib/abi";
import '../page.css';

export default function DynamicNFTInfo() {
  const { writeContract, isPending } = useWriteContract();

  // Contract address from PasifikaDynamicNFT.json
  const CONTRACT_ADDRESS = "0xB659053eD5CF4d1f33C3E5401C55717B862F67D9";

  const handleDynamicNFT = () => {
    writeContract({
      address: CONTRACT_ADDRESS, // PasifikaDynamicNFT address
      abi: abi,
      functionName: "pasifika", 
    });
  };

  return (
    <button 
      className="docs-button" 
      onClick={handleDynamicNFT}
      disabled={isPending}
    >
      {isPending ? "Processing Dynamic NFT..." : "Display Dynamic NFT Details"}
    </button>
  );
}
