<template>
  <div class="card-list">
    <el-card @click.native="linkToMediaDetail(item)" class="card-item"
      v-for="(item, index) in roomList" :key="index">
      <div class="fix-tips">
        <div>
          房间状态: 
          <span style="color: red">{{map[`${item.room_status}`]}}</span>
        </div>
        <div>
          主播: 
          <span style="color: #4199ee;font-weight: bold">
            {{item.owner_name}}
          </span>
        </div>
      </div>
      <div style="margin-top: 6px;color: gray">
        <span>{{item.room_name}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';

const MAP = {
  1: '开启',
  2: '关闭'
};

export default {
  props: {

  },
  data() {
    return {
      map: MAP,
    };
  },
  computed: {
    ...mapState({
      roomList: state => state.live.roomList,
    }),
  },
  watch: {
  },
  methods: {
    linkToMediaDetail(item) {
      if (item.type === 'rtmp') {
        this.$router.push({ path: '/live/detail', query: {id: item.id}});
      } else {
        this.$router.push({ path: '/live/webrtc', query: {id: item.id}});
      }
    },
  },
};
</script>


<style lang="scss">
.card-list {
  margin: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  .card-item {
    width: 300px;
    height: 220px;
    margin-right: 12px;
    cursor: pointer;
    &:hover {
      transition: all .6s;
      transform: scale(1.1);
    }
    .fix-tips {
      width: 80px;
      text-align: left;
      font-size: 12px;
    }
  }
}
</style>
