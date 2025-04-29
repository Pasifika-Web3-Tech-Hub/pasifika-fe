// app/components/GovernanceInfo.js
import { useWriteContract } from "wagmi";
import { abi } from "@/lib/abi";
import '../page.css';
import WalletActionButton from './WalletActionButton';

export default function GovernanceInfo() {
  const { writeContract, isPending } = useWriteContract();

  // Using Treasury contract as placeholder for Governance functionality
  const handleGovernance = () => {
    writeContract({
      address: "0x25832FC1A9A3eC86487595086e4719B43014B5Db", // Using Treasury contract as placeholder
      abi: abi,
      functionName: "pasifika", 
    });
  };

  return (
    <WalletActionButton 
      onClick={handleGovernance}
      disabled={isPending}
      isPending={isPending}
    >
      {isPending ? "Processing Governance..." : "View Governance Details"}
    </WalletActionButton>
  );
}
