<template>
  <div class="live-container">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#233352"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="media" @click="linkToMedia">视频中心</el-menu-item>
      <el-menu-item index="live">直播中心</el-menu-item>
      <el-menu-item style="float: right" index="user">{{user.username}}</el-menu-item>
      <el-menu-item style="float: right" index="start" @click="dialogVisible = true">
        开始直播
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
    <el-dialog
      title="选择开播方式"
      :visible.sync="dialogVisible"
      width="30%"
      center>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="startWebLive">webRTC</el-button>
        <el-button type="primary" @click="linkToStartLive">第三方</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Nav from '../components/nav.vue';
import { mapState } from 'vuex';
// import { liveConfig } from '../routerConfig';

export default {
  components: {
    Nav,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  mounted() {
    this.$store.dispatch('live/list');
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
    }),
  },
  watch: {

  },
  methods: {
    startWebLive() {
      this.$store.dispatch('live/findByUser',  {
        user: this.user.username,
        type: 'webrtc',
      });
      this.$router.push('/setting/webrtc');
    },
    linkToStartLive() {
      this.$store.dispatch('live/findByUser',  {
        user: this.user.username,
        type: 'rtmp',
      });
      this.$router.push('/setting/rtmp');
    },
    linkToMedia() {
      this.$router.push('/media/list');
    },
  },
};
</script>


<style lang="scss">
</style>
