import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import useMultiNetworkContracts from '../../lib/hooks/useMultiNetworkContracts';
import { getAllNetworkAddresses } from '../../deployed_contracts/contract-loader';

/**
 * Network selector component that allows users to switch between 
 * different networks where Pasifika contracts are deployed
 */
export default function NetworkSelector() {
  const { account, library, active } = useWeb3React();
  const [treasuryNetworks, setTreasuryNetworks] = useState([]);
  const [selectedNetwork, setSelectedNetwork] = useState('');
  
  const {
    contract: treasuryContract,
    network: currentNetwork,
    availableNetworks,
    isLoading,
    error,
    changeNetwork
  } = useMultiNetworkContracts(library, 'PasifikaTreasury', selectedNetwork);

  // Load available networks on mount
  useEffect(() => {
    const loadNetworks = async () => {
      const networks = await getAllNetworkAddresses('PasifikaTreasury');
      setTreasuryNetworks(Object.keys(networks));
      
      // Set default selected network
      if (Object.keys(networks).length > 0 && !selectedNetwork) {
        setSelectedNetwork(Object.keys(networks)[0]);
      }
    };
    
    loadNetworks();
  }, [selectedNetwork]); // Add selectedNetwork to dependency array

  // Handle network change
  const handleNetworkChange = async (e) => {
    const newNetwork = e.target.value;
    setSelectedNetwork(newNetwork);
    await changeNetwork(newNetwork);
  };

  const getNetworkName = (networkId) => {
    const names = {
      'linea': 'Linea',
      'rootstock': 'RootStock (RSK)',
      'arbitrum': 'Arbitrum'
    };
    return names[networkId] || networkId;
  };

  if (!active) {
    return <div className="p-4 border rounded-lg bg-gray-50">Connect your wallet to access Pasifika contracts</div>;
  }

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-medium mb-4">Network Selection</h3>
      
      {isLoading ? (
        <p>Loading available networks...</p>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Select Network:
            </label>
            <select 
              value={selectedNetwork}
              onChange={handleNetworkChange}
              className="w-full border p-2 rounded-md"
            >
              {treasuryNetworks.map(network => (
                <option key={network} value={network}>
                  {getNetworkName(network)}
                </option>
              ))}
            </select>
          </div>
          
          {currentNetwork && (
            <div className="mt-2 text-sm">
              <p>Connected to: <strong>{getNetworkName(currentNetwork)}</strong></p>
              <p className="mt-1">Account: {account}</p>
              {treasuryContract && (
                <p className="mt-1 text-green-600">
                  PasifikaTreasury contract loaded successfully
                </p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
