<template>
	<div class="app-wrapper">
		<div class="main-container">
			<nav-bar></nav-bar>
			<app-main></app-main>
		</div>
	</div>
</template>

<script>
import { navBar, appMain } from '../layout';

export default {
  name: 'layout',
  components: {
    'nav-bar': navBar,
    'app-main': appMain
  },
  computed: {
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
</style>
