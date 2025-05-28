'use client';

// This patch prevents the "SDK state invalid -- undefined mobile provider" error
// by intercepting calls to getMobileProvider and returning a mock implementation
export function applyMetaMaskPatch() {
  if (typeof window !== 'undefined') {
    if (window.ethereum && window.ethereum.isMetaMask) {
      const originalProvider = window.ethereum;
      
      // Create a proxy to intercept calls that might cause errors
      window.ethereum = new Proxy(originalProvider, {
        get: function(target, prop) {
          // Handle the specific case that causes the error
          if (prop === 'getMobileProvider') {
            return function() { 
              console.log('MetaMask mobile provider requested, returning mock to prevent error');
              return {
                // Basic mock of required functionality
                request: async () => ({}),
                on: () => {},
                removeListener: () => {}
              };
            };
          }
          
          // For any other property, return the original
          return target[prop];
        }
      });
      
      console.log('MetaMask provider patched to prevent mobile provider errors');
    }
  }
}
