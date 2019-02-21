<template>
  <div id="app">
    <Nav :routerConfig="mediaConfig" :routerIndex="routerIndex" />
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from '../components/nav.vue';
import { liveConfig } from '../routerConfig';

export default {
  components: {
    Nav,
  },
  data() {
    return {
      routerIndex: 'edu',
    }
  },
  computed: {
  },
  watch: {
    $route(val) {
      this.routerIndex = val.currentRoute.name;
    },
  },
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
