module.exports = {
    serverRuntimeConfig: {
      // Set the base URL for the server
      BASE_URL: process.env.NODE_ENV === 'production' ? 'https://wolkeyserver.onrender.com' : 'http://localhost:3000',
    },
    publicRuntimeConfig: {
      // Expose the base URL to the client
      BASE_URL: process.env.NODE_ENV === 'production' ? 'https://wolkeyclientside.onrender.com' : 'http://localhost:3000',
    },
  };
  