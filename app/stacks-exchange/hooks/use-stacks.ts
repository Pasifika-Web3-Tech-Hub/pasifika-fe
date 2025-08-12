import {
  addLiquidity,
  createPool,
  Pool,
  removeLiquidity,
  swap,
} from "../lib/amm";
import {
  AppConfig,
  openContractCall,
  showConnect,
  type UserData,
  UserSession,
} from "@stacks/connect";
import { PostConditionMode } from "@stacks/transactions";
import { useEffect, useState } from "react";

const appDetails = {
  name: "Pasifika Stacks AMM",
  icon: "https://cryptologos.cc/logos/stacks-stx-logo.png",
};

export function useStacks() {
  const [userData, setUserData] = useState<UserData | null>(null);

  const appConfig = new AppConfig(["store_write"]);
  const userSession = new UserSession({ appConfig });

  function connectWallet() {
    showConnect({
      appDetails,
      onFinish: () => {
        window.location.reload();
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
      if (!userData) throw new Error("User not connected");
      const options = await createPool(token0, token1, fee);
      await openContractCall({
        ...options,
        appDetails,
        onFinish: (data: any) => {
          window.alert("Pool creation transaction sent successfully!");
          console.log(data);
        },
        postConditionMode: PostConditionMode.Allow,
      });
    } catch (_err) {
      const err = _err as Error;
      console.log(err);
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
  }, []);

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
