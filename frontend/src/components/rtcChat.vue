<template>
  <div class="chat-panel">
    <div class="message-list">
      <div class="message" v-for="(item, index) in msgList" :key="index">
        <div v-if="item.type === 'sys'" class="sys-message">
          {{ item.content }}
        </div>
        <div v-else :class="item.type === 'my' ? 'my-message' : 'normal-message'">
          <span v-if="item.type !== 'my'" class="normal-message-user">
            {{item.user}}:
          </span>
          <span class="message-content">
            {{ item.content }}
          </span>
        </div>
      </div>
    </div>
    <div class="user-control">
      <el-input placeholder="在此输入消息"
        v-model="content" @keyup.enter.native="emitMsg">

      </el-input>
    </div>
  </div>
</template>

<script>
// import io from '../socket';
import IO from 'socket.io-client';
import { mapState } from 'vuex';

const options = {
  // reconnectionDelay: 1000,
};

const socket = new IO('http://localhost:3002', options);

export default {
  data() {
    return {
      content: '',
      socket: socket,
      msgList: [],
      userList: [],
      userCount: 0,
    };
  },
  props: {
    username: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: '',
    }
  },
  updated() {
    this.scrollToBottom();
  },
  computed: {
    ...mapState({
      setting: state => state.live.setting,
    }),
  },
  methods: {
    emitMsg() {
      this.socket.send(this.content);
      // this.socket.emit('addmsg', this.username, this.content);
      this.content = '';
    },
    scrollToBottom() {
      this.$nextTick(() => {
	      var container = this.$el.querySelector(".message-list");
        container.scrollTop = container.scrollHeight;
      })
    },
    sendMessage() {
      this.socket.send(this.content);
      this.content = '';
    },
    leaveRoom() {
      this.socket.emit('leave');
    },
  },
  mounted() {
    this.scrollToBottom();

    let that = this
    // 加入房间
    console.log(this.socket);
    this.socket.on('connect', function () {
      console.log('test', that.username, that.setting.id)
      that.socket.emit('join', that.username, that.setting.id);
    });

    // 监听消息
    this.socket.on('msg', function (userName, msg) {
      if (userName === that.username) {
        that.msgList.push({
          user: userName,
          content: msg,
          type: 'my'
        });
      } else {
        that.msgList.push({
          user: userName,
          content: msg,
          type: 'msg'
        });
      }
    });

    // 监听系统消息
    this.socket.on('sys', function (sysMsg, users) {
      that.msgList.push({
        user: '',
        content: sysMsg,
        type: 'sys'
      });

      that.userCount = users.length;
      that.userList = users;
      console.log('test', users);
    });
  },
};
</script>


<style lang="scss">
.chat-panel {
  height: 100%;
  flex: 1;
  // width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  .message-list {
    flex: 1;
    overflow: scroll;
    max-height: 90%;
    .message {
      .sys-message, .my-message, .normal-message {
        margin: 5px 0;
        padding: 2px 5px;
      }
      .sys-message {
        text-align: center;
        font-size: 12px;
        background: #e6e6e6;
      }
      .my-message {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        .message-content {
          border-radius: 4px;
          padding: 4px;
          background: #4199ee;
          color: #fff;
        }
      }
      .normal-message {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        .normal-message-user {
          padding: 4px;
          color: #4199ee;
          font-weight: bold;
        }
        .message-content {
          border-radius: 4px;
          padding: 4px;
          background: gray;
          color: #fff;
        }
      }
    }
  }
  .user-control {
    height: 40px;
  }
}
</style>
