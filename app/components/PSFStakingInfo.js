// app/components/PSFStakingInfo.js
import { useWriteContract } from "wagmi";
import { abi } from "@/lib/abi";
import '../page.css';
import WalletActionButton from './WalletActionButton';

export default function PSFStakingInfo() {
  const { writeContract, isPending } = useWriteContract();

  // Contract address from PSFStaking.json
  const CONTRACT_ADDRESS = "0x5d224f318b39a3F589fd61E3B4DF1E980ED56233";

  const handleInteractWithStaking = () => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: abi,
      functionName: "pasifika",
    });
  };

  return (
    <WalletActionButton 
      onClick={handleInteractWithStaking}
      disabled={isPending}
      isPending={isPending}
    >
      {isPending ? "Processing staking..." : "Token Staking System"}
    </WalletActionButton>
  );
}
