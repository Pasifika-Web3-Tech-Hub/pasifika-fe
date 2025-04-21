// app/components/TreasuryInfo.js
import { useWriteContract } from "wagmi";
import { abi } from "@/lib/abi";

export default function TreasuryInfo() {
  const { writeContract, isPending } = useWriteContract();

  // Contract address from PasifikaTreasury.json
  const CONTRACT_ADDRESS = "0x25832FC1A9A3eC86487595086e4719B43014B5Db";

  const handleInteractWithTreasury = () => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: abi,
      functionName: "pasifika",
    });
  };

  return (
    <button 
      className="docs-button" 
      onClick={handleInteractWithTreasury}
      disabled={isPending}
    >
      {isPending ? "Processing treasury..." : "Treasury Management"}
    </button>
  );
}
