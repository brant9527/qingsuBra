<template>
    <div>
        <ul>
            <div class="wrapper" v-for="(item,index) in list" :key="item.key" :class="currentIndex==index?'active':''">
                <li v-if="isFirst!=='no'" @click="link(item,index)" :class="currentIndex==index?'active':''" >{{item.name}}</li>
                <label v-else @click="link(item,index)"  >{{item.name}}</label>
                <qs-aside :list="item.children" v-if="item.children && item.children.length>0" :isFirst="'no'" :parentIndex="index" @event-change="change"></qs-aside>
            </div>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'qs-aside',
  props: ['list', 'preIndex', 'isFirst', 'children', 'parentIndex'],
  methods: {
    link (item, index) {
      this.currentIndex = index
      this.$router.push(item.path)
      this.$emit('event-change', this.parentIndex)
    },
    change (index) {
      console.log(index)
      this.currentIndex = index
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  created () {
    if (this.preIndex) {
      this.currentIndex = this.preIndex
    }
    if (this.renderIndex) this.children = this.list[this.renderIndex].children
    console.log(this.parentIndex)
  }
}
</script>
<style lang="scss" scoped>
ul {
  margin-top: 20px;
  width: 200px;
  .wrapper {
    li {
      height: 60px;
      line-height: 60px;
      border: 1px #cbcbcb solid;
      width: 100%;
      text-align: center;
      margin: 0 0 20px;
      font-size: 14px;
      display: block;
      box-sizing: border-box;
      cursor: pointer;
      transition: background-color 0.5s;
      &:hover {
        background-color: $theme;
        color: $theme_font_normal;
      }
      &.active {
        background-color: $theme;
        color: $theme_font_normal;
      }
    }
    label{
      height: 60px;
      line-height: 60px;
      width: 100%;
      text-align: center;
      margin: 0 0 20px;
      font-size: 14px;
      display: block;
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        background-color: $theme_font_grey;
        color: $theme_font_normal;
      }
      &.active {
        background-color: $theme_font_grey;
        // color: $theme_font_normal;
      }
    }
  }
}
</style>
