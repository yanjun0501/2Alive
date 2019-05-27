<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Nav from '../components/GlobalNavBar.vue';
/* TODO 
1. 分享直播间
2. 显示房间成员列表
3. 修改权限
*/
export default {
  components: {
    // Nav,
  },
  updated() {
    if (localStorage.getItem('username') === null) {
      this.$router.push('/login');
    }
  },
};
</script>

<style lang="scss">
html, body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
