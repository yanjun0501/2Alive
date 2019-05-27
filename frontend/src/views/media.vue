<template>
  <div class="media-container">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="media" >视频中心</el-menu-item>
      <el-menu-item index="live" @click="linkToLive">直播中心</el-menu-item>
      <el-menu-item style="float: right" index="user">{{user.username}}</el-menu-item>
    </el-menu>
    <Nav :routerConfig="mediaConfig"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from '../components/nav.vue';
import { mapState } from 'vuex';
import { mediaConfig } from '../routerConfig';

export default {
  components: {
    Nav,
  },
  data() {
    return {
      mediaConfig,
      activeIndex: 'media',
    };
  },
  mounted() {
    this.$router.push({query: { type: 'edu' } });
    this.$store.dispatch('media/list');
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
    }),
  },
  watch: {

  },
  methods: {
    linkToLive() {
      this.$router.push('/live/list');
    },
  },
};
</script>


<style lang="scss">

</style>
