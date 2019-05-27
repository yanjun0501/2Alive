<template>
  <div class="setting-dashboard">
    <div class="setting-dashboard-form">
      <el-form style="margin-top: 24px"
        ref="form" :model="sizeForm" label-width="150px" size="mini">
        <el-form-item label="推流地址">
          <el-input v-model="stream" placeholder="在这填写服务端推流地址"></el-input>
        </el-form-item>
        <el-form-item label="直播间名称">
          <el-input v-model="roomName" ></el-input>
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
import ChatPanel from '../../components/rtcChat.vue';

export default {
  components: {
    ChatPanel,
  },
  data() {
    return {
      stream: '',
      roomName: '',
    };
  },
  mounted() {
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
      setting: state => state.live.setting,
      loading: state => state.media.loading,
    }),
  },
  watch: {
    setting(val) {
      this.stream = val.stream;
      this.roomName = val.room_name;
    },
  },
  methods: {
    updateRoomInfo() {
      this.$store.dispatch('live/update', {
        name: this.roomName,
        stream: this.stream,
        id: this.setting.id,
      })
    },
    toggleRoomStatus() {
      if (this.setting.status === 2 && this.setting.id === '') {
        this.$store.dispatch('live/add', {
          owner: this.user.username,
          name: this.roomName,
          type: 'rtmp',
          stream: this.stream,
        })
      } else {
        this.$store.dispatch('live/delete', {
          id: this.setting.id,
        })
      }
    },
  },
};
</script>


<style lang="scss">
.setting-dashboard {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  .setting-dashboard-form {
    flex: 1;
  }
  .chat-container {
    width: 550px;
    height: 100%;
  }
}
</style>
