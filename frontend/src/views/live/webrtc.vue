<template>
  <div class="media-detail-container">
    <div class="player-container">
      <div ref="dplayer">
      </div>
    </div>
    <div class="chat-container">
      <chat-panel :username="user.username" :id="chat_id" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Peer from 'peerjs';
import DPlayer from 'dplayer';
import 'hls.js';
import 'dplayer/dist/DPlayer.min.css';
import ChatPanel from '../../components/chatPanel.vue';

export default {
  components: {
    ChatPanel,
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
      detail: state => state.live.detail,
      loading: state => state.media.loading,
    }),
  },
  watch: {
    detail(val) {
      this.chat_id = val.id;
      let that = this;

      const clientId = (+new Date).toString(36) + '_' + (Math.random().toString()).split('.')[1];

      let peer = new Peer(clientId, {
        host: 'localhost', 
        port: 9000, 
        path: '/',
      });

      let conn = peer.connect(val.stream);

      conn.on('open', function() {
        conn.send(clientId);
      });

      peer.on('call', function(call) {
        call.answer();
        call.on('stream', function(remoteStream) {
          document.getElementsByTagName('video')[0].srcObject = remoteStream;
        });

        call.on('close', function() { /*...*/ });
      });
    },
  },
  mounted() {
    let that = this;

    const dp = new DPlayer({
      container: that.$refs.dplayer,
      screenshot: true,
      video: {
        url: '',
      },
    });
    this.$store.dispatch('live/find', {
      id: this.$route.query.id
    })
  },
  data() {
    return {
      player: '',
      stream: '',
      chat_id: 0,
    };
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
    height: 80%;
  }
  .chat-container {
    flex: 1;
  }
}
</style>
