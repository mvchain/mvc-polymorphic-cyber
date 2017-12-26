<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li><router-link to="/balance" target="_self">1.Check Blance</router-link></li>
      <li><router-link to="/transfer-ether" target="_self">2.Transfer Ether</router-link></li>
      <li><router-link to="/transfer-substitute" target="_self">3.Transfer Substitute</router-link></li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'Map',
  data () {
    return {
      msg: 'Maverick Wallet Functionality Demo'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
