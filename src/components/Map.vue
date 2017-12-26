<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li><a href="./balance" target="_blank">1.Check Blance</a></li>
      <li><a href="./transfer" target="_blank">2.Transfer Ether</a></li>
      <li><a href="./transfer" target="_blank">3.Transfer Substitute</a></li>
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
