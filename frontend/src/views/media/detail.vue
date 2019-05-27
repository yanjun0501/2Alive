<template>
  <div class="media-detail-container">
    <div class="player-container">
      <div ref="dplayer">
      </div>
    </div>
    <div class="chat-container">
      <chat-panel :username="user.username" :id="detail.id"  />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import DPlayer from 'dplayer';
import 'hls.js';
import 'dplayer/dist/DPlayer.min.css';
import ChatPanel from '../../components/chatPanel.vue';

export default {
  components: {
    ChatPanel,
  },
  watch: {
    detail(val) {
      let that = this;
      const dp = new DPlayer({
        container: that.$refs.dplayer,
        screenshot: true,
        video: {
          url: val.url,
          thumbnails: val.thumbnails,
        },
        danmaku: {
          id: 'demo',
          api: 'http://localhost:1207/',
          addition: ['http://localhost:1207/v3/bilibili?cid=10492'],
        },
      });
      this.player = dp;
    },
  },
  mounted() {
    this.$store.dispatch('media/find', {
      id: this.$route.query.id
    })
  },
  data() {
    return {
      player: '',
    };
  },
  computed: {
    ...mapState({
      detail: state => state.media.detail,
      user: state => state.user.user,
      loading: state => state.media.loading,
    }),
  },
};
</script>


<style lang="scss">
.media-detail-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  .player-container {
    padding: 12px;
    width: 70%;
    height: 70%;
  }
  .chat-container {
    flex: 1;
  }
}
</style>
