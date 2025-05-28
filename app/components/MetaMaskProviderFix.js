'use client';

import { useEffect } from 'react';

/**
 * Component that patches the MetaMask provider to prevent the
 * "SDK state invalid -- undefined mobile provider" error
 */
export default function MetaMaskProviderFix() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let intervalId;
      
      // Wait for ethereum to be injected
      const checkForEthereum = () => {
        if (window.ethereum && window.ethereum.isMetaMask) {
          const originalProvider = window.ethereum;
          
          // Create a proxy to intercept calls that might cause errors
          window.ethereum = new Proxy(originalProvider, {
            get: function(target, prop) {
              // Handle the specific mobile provider case that causes the error
              if (prop === 'getMobileProvider') {
                return function() { 
                  console.log('MetaMask mobile provider requested, returning mock to prevent error');
                  return {
                    // Basic mock of mobile provider interface
                    request: async () => ({}),
                    on: () => {},
                    removeListener: () => {},
                    removeAllListeners: () => {},
                    // Add additional methods if needed
                  };
                };
              }
              
              // For any other property, return the original
              return target[prop];
            }
          });
          
          console.log('MetaMask provider patched successfully');
          if (intervalId) clearInterval(intervalId);
        }
      };
      
      // Check immediately and then set up interval
      checkForEthereum();
      intervalId = setInterval(checkForEthereum, 100);
      
      // Clean up interval on component unmount
      return () => {
        if (intervalId) clearInterval(intervalId);
      };
    }
  }, []);

  // This component doesn't render anything
  return null;
}
