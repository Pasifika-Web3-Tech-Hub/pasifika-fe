// Fix for MetaMask SDK mobile provider error
(function() {
  if (window.ethereum && window.ethereum.isMetaMask) {
    const originalProvider = window.ethereum;
    
    // Create a proxy to intercept calls that might cause errors
    window.ethereum = new Proxy(originalProvider, {
      get: function(target, prop) {
        // Handle the specific case that causes the error
        if (prop === 'getMobileProvider') {
          return function() { return null; };
        }
        
        // For any other property, return the original
        return target[prop];
      }
    });
  }
})();
