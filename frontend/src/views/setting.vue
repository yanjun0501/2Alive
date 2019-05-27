<template>
  <div class="setting-container">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#233352"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="media" @click="exit">退出直播间</el-menu-item>
      <el-menu-item style="float: right" index="user">{{user.username}}</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {

    };
  },
  mounted() {
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
    }),
  },
  watch: {

  },
  methods: {
    exit() {
      this.$router.push('/live/list');
    },
  },
};
</script>


<style lang="scss">
.setting-container {
  height: calc(100% - 100px);
}
</style>
