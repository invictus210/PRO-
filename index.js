const request = require("request");

module.exports = SolanaQuery;

function addressToPublicKey(address) {
  return new Web3.PublicKey(address);
}

/**
 * Constructor function
 * Init SolanaQuery
 * 
 * @param {string} rpcEndpoint The url of RPC Endpoint
