<template>
  <div class="nav-list">
    <el-radio-group v-model="navIndex" size="medium">
      <el-radio-button v-for="(item, index) in routerConfig" :key="index" :label="item.label">

      </el-radio-button>
    </el-radio-group>
    <!-- <div :class="routeIndex === item.name ? 'nav-list-item active' : 'nav-list-item'"
      v-for="(item, index) in routerConfig" :key="index">
      {{item.name}}
    </div> -->
  </div>
</template>

<script>
const MEDIA_MAP = {
  教学资源: 'edu',
  ACG: 'acg',
  其他: 'media',
};

const LIVE_MAP = {
  在线课堂: 'edu',
  游戏直播: 'game',
  聊天室: 'chat',
};

export default {
  props: {
    routerConfig: {
      default: () => [],
      type: Array,
    },
  },
  data() {
    return {
      MEDIA_MAP,
      LIVE_MAP,
      navIndex: this.$route.path.indexOf('media') === -1 ? '在线课堂' : '教学资源',
    };
  },
  watch: {
    navIndex(val) {
      if (this.$route.path.indexOf('media') !== -1) {
        this.$router.push({ path: '/media/list', query: { type: MEDIA_MAP[val] } });
      } else {
        this.$router.push({ path: '/live/list', query: { type: LIVE_MAP[val] } });
      }
    },
  },
};
</script>


<style lang="scss">
.media-container {
  .nav-list {
    text-align: left;
    background: #233352;
    .el-radio-button__orig-radio:checked+.el-radio-button__inner {
      background: #233352;
      color: #fff;
      font-weight: bold;
      border-color: transparent;
      &:hover {
        color: #fff !important;
      }
    }
    .el-radio-button__inner:hover {
      color: #233352 !important;
      font-weight: bold;
      // border-color: transparent;
    }
    .el-radio-button .el-radio-button__inner {
      // border: none;
      border-radius: 0px;
    }
  }
}
.live-container {
  .nav-list {
    text-align: left;
    background: #900048;
    .el-radio-button__orig-radio:checked+.el-radio-button__inner {
      background: #900048;
      color: #fff;
      font-weight: bold;
      border-color: transparent;
      &:hover {
        color: #fff !important;
      }
    }
    .el-radio-button__inner:hover {
      color: #900048 !important;
      font-weight: bold;
      // border-color: transparent;
    }
    .el-radio-button .el-radio-button__inner {
      // border: none;
      border-radius: 0px;
    }
  }
}
</style>
