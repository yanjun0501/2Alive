<template>
  <div class="card-list" v-loading="loading">
    <el-card @click.native="linkToMediaDetail(item)" class="card-item"
      v-for="(item, index) in dataFilterList" :key="index">
      <img style="width: 100%;display: block" :src="item.thumbnails" class="image">
      <div style="margin-top: 6px">
        <span>{{item.name}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    parentType: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      routerIndex: 'edu',
      dataList: [
        {
          item_id: 1,
          name: '四月是你的谎言1~',
          url: require('../../assets/video/acg-1.mp4'),
          thumbnails: require('../../assets/thumbnails/acg-1-bg.jpg'),
          type: 'acg',
        },
        {
          item_id: 2,
          name: '四月是你的谎言2~',
          url: require('../../assets/video/acg-2.mp4'),
          thumbnails: require('../../assets/thumbnails/acg-2-bg.jpg'),
          type: 'acg',
        },
        {
          item_id: 3,
          name: 'C++',
          url: require('../../assets/video/edu-1.mp4'),
          thumbnails: require('../../assets/thumbnails/edu-1-bg.jpg'),
          type: 'edu',
        },
        {
          item_id: 4,
          name: '美食视频1',
          url: require('../../assets/video/media-1.mp4'),
          thumbnails: require('../../assets/thumbnails/media-1-bg.jpg'),
          type: 'media',
        },
        {
          item_id: 5,
          name: '美食视频2',
          url: require('../../assets/video/media-2.mp4'),
          thumbnails: require('../../assets/thumbnails/media-2-bg.jpg'),
          type: 'media',
        },
      ],
    };
  },
  computed: {
    ...mapState({
      mediaList: state => state.media.mediaList,
      loading: state => state.media.loading,
    }),
    dataFilterList() {
      let arr = this.mediaList.filter(val => val.type === this.$route.query.type);
      return arr;
    },
  },
  watch: {
    // $route(val) {
    //   this.routerIndex = val.currentRoute.name;
    // },
  },
  methods: {
    linkToMediaDetail(item) {
      this.$router.push({ path: '/media/detail', query: {id: item.item_id}});
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
  }
}
</style>
