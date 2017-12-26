<template>
  <div>
    <h1>Balance Check Demo</h1>
    <input v-model="address"  placeholder="Input Your Ethereum Address" />
    <br/>
    <button type="button" name="button" @click="getBalance">Show Me the Balance</button>
    <button type="button" name="button" @click="testConn">Test Connection</button>
    <br/><br/>
    <span>{{ balance }}</span>
  </div>
</template>


<script>
import Web3 from 'web3'

let web3
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider)
} else {
  web3 = new Web3(new Web3.providers.HttpProvider('http://192.168.206.222:8545'))
}

export default {
  name: 'Balance',
  data () {
    return {
      address: '',
      balance: ''
    }
  },
  methods: {
    testConn () {
      let res = web3.isConnected()
      alert(res === true ? '成功' : '失败')
    },
    getBalance () {
      let balance = web3.eth.getBalance(this.address)
      this.balance = Number(web3.fromWei(balance, 'ether'))
    }
  }
}
</script>
<style scoped>
input {
  width: 300px;
  margin: 5px auto;
}
</style>
