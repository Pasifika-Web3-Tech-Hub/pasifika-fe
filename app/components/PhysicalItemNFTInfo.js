// app/components/PhysicalItemNFTInfo.js
import { useWriteContract } from "wagmi";
import { abi } from "@/lib/abi";
import '../page.css';
import WalletActionButton from './WalletActionButton';

export default function PhysicalItemNFTInfo() {
  const { writeContract, isPending } = useWriteContract();

  // Contract address from PhysicalItemNFT.json
  const CONTRACT_ADDRESS = "0x8ABFf1FB790839A42D5B20981656b7d479B26591";

  const handlePhysicalNFT = () => {
    writeContract({
      address: CONTRACT_ADDRESS, // PhysicalItemNFT address
      abi: abi,
      functionName: "pasifika", 
    });
  };

  return (
    <WalletActionButton 
      onClick={handlePhysicalNFT}
      disabled={isPending}
      isPending={isPending}
    >
      {isPending ? "Processing Marketplace Item..." : "View Marketplace Item"}
    </WalletActionButton>
  );
}
