<template>
  <div>
    <h1>Transfer Ether Demo</h1>
    <span>From:</span><input placeholder="Sender Address" />
    <br/><br/>
    <span>Password:</span><input placeholder="Sender Password" type="password" />
    <br/><br/>
    <span>To:</span><input placeholder="Receiver Address" />
    <br/><br/>
    <button type="button" name="button">Transfer</button>
  </div>
</template>


<script>
export default {
  name: 'TransferEther'
}
</script>


<style scoped>
span {
  display: inline-block;
  text-align: left;
  width: 80px;
}
input {
  width: 300px;
}
</style>
