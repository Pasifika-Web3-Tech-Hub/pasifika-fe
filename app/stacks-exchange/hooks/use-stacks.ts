import {
  addLiquidity,
  createPool,
  Pool,
  removeLiquidity,
  swap,
} from "../lib/amm";
import { AppConfig, UserSession, showConnect, openContractCall, showContractCall, UserData } from "@stacks/connect";
import { STACKS_TESTNET } from "@stacks/network";
import { PostConditionMode } from "@stacks/transactions";
import { useEffect, useState, useMemo } from "react";

const appDetails = {
  name: "Pasifika Stacks AMM",
  icon: "https://cryptologos.cc/logos/stacks-stx-logo.png",
};

export function useStacks() {
  const [userData, setUserData] = useState<UserData | null>(null);

  const appConfig = useMemo(() => new AppConfig(["store_write"]), []);
  const userSession = useMemo(() => new UserSession({ appConfig }), [appConfig]);

  function connectWallet() {
    console.log("=== WALLET CONNECTION ATTEMPT ===");
    console.log("showConnect function:", typeof showConnect);
    console.log("appDetails:", appDetails);
    
    showConnect({
      appDetails,
      onFinish: (authData) => {
        console.log("Wallet connection finished:", authData);
        const userData = authData.userSession.loadUserData();
        console.log("User data loaded:", userData);
        setUserData(userData);
      },
      onCancel: () => {
        console.log("Wallet connection cancelled");
      },
      userSession,
    });
  }

  function disconnectWallet() {
    userSession.signUserOut();
    setUserData(null);
  }

  async function handleCreatePool(token0: string, token1: string, fee: number) {
    try {
      console.log("=== POOL CREATION DEBUG START ===");
      console.log("handleCreatePool called with:", { token0, token1, fee });
      console.log("userData:", userData);
      console.log("openContractCall function:", typeof openContractCall);
      
      if (!userData) throw new Error("User not connected");
      
      console.log("Creating pool options...");
      const options = await createPool(token0, token1, fee);
      console.log("Pool options created:", options);
      
      console.log("Preparing contract call with appDetails:", appDetails);
      const contractCallOptions = {
        ...options,
        appDetails,
        network: STACKS_TESTNET,
        onFinish: (data: any) => {
          console.log("Transaction finished:", data);
          window.alert("Pool creation transaction sent successfully! Refreshing page to show new pool...");
          // Refresh the page to show the new pool
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
        onCancel: () => {
          console.log("Transaction cancelled by user");
          window.alert("Transaction cancelled");
        },
        postConditionMode: PostConditionMode.Allow,
      };
      console.log("Full contract call options:", contractCallOptions);
      
      console.log("Opening contract call...");
      console.log("userSession:", userSession);
      console.log("userSession.isUserSignedIn():", userSession.isUserSignedIn());
      
      // Try showContractCall instead of openContractCall
      console.log("Calling showContractCall...");
      showContractCall(contractCallOptions);
      console.log("showContractCall called");
      console.log("=== POOL CREATION DEBUG END ===");
    } catch (_err) {
      const err = _err as Error;
      console.error("=== ERROR in handleCreatePool ===");
      console.error("Error object:", err);
      console.error("Error message:", err.message);
      console.error("Error stack:", err.stack);
      window.alert(`Error creating pool: ${err.message}`);
      return;
    }
  }

  async function handleSwap(pool: Pool, amount: number, zeroForOne: boolean) {
    try {
      if (!userData) throw new Error("User not connected");
      const options = await swap(pool, amount, zeroForOne);
      await openContractCall({
        ...options,
        appDetails,
        onFinish: (data: any) => {
          window.alert("Swap transaction sent successfully!");
          console.log(data);
        },
        postConditionMode: PostConditionMode.Allow,
      });
    } catch (_err) {
      const err = _err as Error;
      console.log(err);
      window.alert(`Error executing swap: ${err.message}`);
      return;
    }
  }

  async function handleAddLiquidity(
    pool: Pool,
    amount0: number,
    amount1: number
  ) {
    try {
      if (!userData) throw new Error("User not connected");
      const options = await addLiquidity(pool, amount0, amount1);
      await openContractCall({
        ...options,
        appDetails,
        onFinish: (data: any) => {
          window.alert("Add liquidity transaction sent successfully!");
          console.log({ data });
        },
        postConditionMode: PostConditionMode.Allow,
      });
    } catch (_err) {
      const err = _err as Error;
      console.log(err);
      window.alert(`Error adding liquidity: ${err.message}`);
      return;
    }
  }

  async function handleRemoveLiquidity(pool: Pool, liquidity: number) {
    try {
      if (!userData) throw new Error("User not connected");
      const options = await removeLiquidity(pool, liquidity);
      await openContractCall({
        ...options,
        appDetails,
        onFinish: (data: any) => {
          window.alert("Remove liquidity transaction sent successfully!");
          console.log(data);
        },
        postConditionMode: PostConditionMode.Allow,
      });
    } catch (_err) {
      const err = _err as Error;
      console.log(err);
      window.alert(`Error removing liquidity: ${err.message}`);
      return;
    }
  }

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData: any) => {
        setUserData(userData);
      });
    } else if (userSession.isUserSignedIn()) {
      setUserData(userSession.loadUserData());
    }
  }, [userSession]);

  return {
    userData,
    handleCreatePool,
    handleSwap,
    handleAddLiquidity,
    handleRemoveLiquidity,
    connectWallet,
    disconnectWallet,
  };
}
