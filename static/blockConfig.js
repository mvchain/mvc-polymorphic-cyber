import Web3 from 'web3';
let truffle  = {
  networks: {
    development: {
      host: '192.168.206.222',
      port: 8545,
      network_id: '*' // Match any network id
    }
  }
};
if (typeof web3 !== 'undefined') {
  // Use Mist/MetaMask's provider
  // window.web3 = new Web3(web3.currentProvider);
  window.web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.206.222:8545"));
  // console.log(web3.eth.getBalance('f7f0119659fbf8a53e2f9e657d6251f4b0c3a146'));
  console.log(web3);
} else {
  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  window.web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.206.222:8545"));
  console.log(2);
}
