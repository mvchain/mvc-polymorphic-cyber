<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>
      <transition name="el-fade-in-linear" mode="out-in">
        <router-view></router-view>
      </transition>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'appMain',
    computed: {
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>

