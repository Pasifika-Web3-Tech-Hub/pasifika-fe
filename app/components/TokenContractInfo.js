'use client';

import { useWriteContract } from "wagmi";
import { abi } from "@/lib/abi";
import Image from "next/image";
import { useState } from "react";
import '../page.css';
import WalletActionButton from './WalletActionButton';

export default function TokenContractInfo() {
  const { writeContract, isPending } = useWriteContract();
  const [showImage, setShowImage] = useState(false);

  const handleShowToken = () => {
    writeContract({
      address: "0x2e57c2f37283941C7804DA0b97BFf3f8dc821eA2", // PSF Token address
      abi: abi,
      functionName: "pasifika",
    });
    
    // Show the token image when interaction is triggered
    setShowImage(true);
  };

  return (
    <div className="token-interaction">
      <WalletActionButton 
        onClick={handleShowToken}
        disabled={isPending}
        isPending={isPending}
      >
        {isPending ? "Processing PSF Token..." : "Show PSF Token Details"}
      </WalletActionButton>
      
      {showImage && (
        <div className="token-image-container">
          <Image 
            src="/pasifika.png"
            alt="PSF Token"
            width={100}
            height={100}
            className="token-image"
          />
          <div className="token-info">
            <p className="token-name">PSF</p>
            <p className="token-network">Linea Sepolia</p>
          </div>
        </div>
      )}
    </div>
  );
}
