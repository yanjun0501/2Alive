<template>
  <div class="media-detail-container">
    <div class="player-container">
      <div class="setting-player" ref="dplayer">
      </div>
      <el-form style="margin-top: 24px"
        ref="form" :model="sizeForm" label-width="150px" size="mini">
        <el-form-item label="RTC_ID">
          <el-input disabled v-model="rtcid"></el-input>
        </el-form-item>
        <el-form-item label="直播间名称">
          <el-input v-model="roomName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="toggleRoomStatus">
            {{setting.status === 2 ? '开始直播' : '停止直播'}}
          </el-button>
          <el-button type="primary" @click="updateRoomInfo">
            保存设置
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="chat-container">
      <chat-panel :username="user.username" :id="setting.id" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import DPlayer from 'dplayer';
import Peer from 'peerjs';
import 'hls.js';
import 'dplayer/dist/DPlayer.min.css';
import ChatPanel from '../../components/rtcChat.vue';

export default {
  components: {
    ChatPanel,
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
      setting: state => state.live.setting,
      loading: state => state.media.loading,
    }),
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
    this.roomName = this.setting.room_name;
    const clientId = (+new Date).toString(36) + '_' + (Math.random().toString()).split('.')[1];
    this.rtcid = this.setting.stream === '' ? clientId : this.setting.stream;
    let peer = new Peer(this.rtcid, {
      host: 'localhost', 
      port: 9000, 
      path: '/',
    });

    navigator.getUserMedia({ audio: false, video: { width: 1000, height: 400 }}, function(stream) {
      window.stream = stream;
      document.getElementsByTagName('video')[0].srcObject = window.stream;
      console.log(
        document.getElementsByTagName('video')[0],
        document.getElementsByTagName('video')[0].srcObject,
        window.stream
      );
    }, function() {});

    peer.on('connection', function(conn) {
      conn.on('data', function(clientId){
        let call = peer.call(clientId, window.stream);
        call.on('close', function() { /*...*/ });
      });
    });
  },
  data() {
    return {
      rtcid: '',
      roomName: '',
    };
  },
  watch: {
    setting(val) {
      this.roomName = val.room_name;

      const clientId = (+new Date).toString(36) + '_' + (Math.random().toString()).split('.')[1];
      this.rtcid = val.stream === '' ? clientId : val.stream;
      //由于其它端都要连它，指定一个固定的 ID
      let peer = new Peer(this.rtcid, {
        host: 'localhost', 
        port: 9000, 
        path: '/',
      });

      navigator.getUserMedia({ audio: false, video: { width: 1000, height: 400 }}, function(stream) {
        window.stream = stream;
        document.getElementsByTagName('video')[0].srcObject = window.stream;
        console.log(
          document.getElementsByTagName('video')[0],
          document.getElementsByTagName('video')[0].srcObject,
          window.stream
        );
      }, function() {});

      peer.on('connection', function(conn) {
        conn.on('data', function(clientId){
          let call = peer.call(clientId, window.stream);
          call.on('close', function() { /*...*/ });
        });
      });
      console.log('test1', this.rtcid);
    },
  },
  methods: {
    updateRoomInfo() {
      this.$store.dispatch('live/update', {
        name: this.roomName,
        stream: this.rtcid,
        id: this.setting.id,
      })
    },
    toggleRoomStatus() {
      if (this.setting.status === 2 && this.setting.id === '') {
        this.$store.dispatch('live/add', {
          owner: this.user.username,
          name: this.roomName,
          type: 'webrtc',
          stream: this.rtcid,
        })
      } else {
        this.$store.dispatch('live/delete', {
          id: this.setting.id,
        })
        // this.$store.dispatch('live/add', {
        //   owner: this.user.username,
        //   name: this.roomName,

        //   type: 'webrtc',
        //   stream: this.rtcid,
        // })
      }
    },
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
    // .setting-player {
    //   height: 400px;
    //   // width: 1000px;
    // }
  }
  .chat-container {
    flex: 1;
  }
}
</style>
