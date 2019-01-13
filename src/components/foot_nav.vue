<template>
    <div class="foot_nav footbg">
        <div class="wrapper flex-between">
            <div class="left">
               <ul><li v-for="item in list" :key="item.key" @click="linkTo(item)">{{item.name}}</li></ul>
            </div>
            <div class="tip_beian">
                <!-- <span>© 2014 GUJIN   沪ICP备17052029号-1  沪公网安备 31010102002554号</span> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          name: 'abouts us',
          path: '/about'
        },
        {
          name: 'product',
          path: '/product'
        },
        {
          name: 'career',
          path: '/career'
        },
        {
          name: 'E-Commerce',
          path: ''
        }
      ]
    }
  },
  methods: {
    linkTo (item) {
      if (item.path) {
        this.$router.push({path: item.path})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  li {
    position: relative;
    color: #666;
    padding: 0 10px;
    line-height: 80px;
    text-align: left;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.5s;

    &:hover{
        color: #999;
    }
    &::before {
      content: "|";
      position: absolute;
      right: 0;
      top: -1px;
    }
    &:last-child {
      &::before {
        content: " ";
      }
    }
  }
}
.footbg {
  width: 100%;
  height: 80px;
  background-color: $theme_bg_foot_nav;
  .wrapper {
    width: 1200px;
    margin: 0 auto 0;
  }
}
.tip_beian {
  line-height: 80px;
  vertical-align: middle;
  color: #666;
  font-size: 12px;
  text-transform: uppercase;
}
</style>
