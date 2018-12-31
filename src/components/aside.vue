<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key="item.key" @click="link(item,index)" :class="currentIndex==index?'active':''">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
  props: ['list', 'preIndex'],
  methods: {
    link (item, index) {
      this.currentIndex = index
      this.$router.push(item.path)
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
  }
}
</script>
<style lang="scss" scoped>
ul {
  margin-top: 20px;
  width: 200px;
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
}
</style>
