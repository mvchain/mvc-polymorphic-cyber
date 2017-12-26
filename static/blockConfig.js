import Web3 from 'web3';
if (typeof window.web3 !== 'undefined') {
  window.web3 = new Web3(window.web3.currentProvider);
} else {
  window.web3 = new Web3(new Web3.providers.HttpProvider('http://47.52.202.250:8545'));
}
