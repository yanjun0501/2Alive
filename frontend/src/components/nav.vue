<template>
  <div class="nav-list">
    <div :class="routeIndex === item.name ? 'nav-list-item-active' : 'nav-list-item'"
      v-for="(item, index) in navConfig" :key="index">
    </div>
  </div>
</template>

<script>
import Nav from './components/nav.vue';

export default {
  components: {
    Nav,
  },
  props: {
    routerIndex: {
      default: '',
      type: String,
    },
    navConfig: {
      default: [],
      type: Array,
    },
  },
  data() {
    return {
    }
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
