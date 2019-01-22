<template>
<div class="head-wrapper">
    <div class="head qs-wapper">
        <div class="logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="qs-router">
            <div class="item" v-for="item in routerList" :key="item.key" @click="linkPath(item)">
                <div class="name">{{item.name}}</div>
                <div class="label">{{item.label}}</div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      routerList: [
        {
          name: '穿古越今',
          path: '/about',
          label: 'ABOUT'
        },
        {
          name: '产品家族',
          path: '/product',
          label: 'PRODUCT'
        },
        {
          name: '事业机会',
          path: '/career',
          label: 'CAREER'
        },
        {
          name: '倾愫电商',
          path: '/',
          label: 'E-Commerce'
        }
      ]
    }
  },
  methods: {
    linkPath (item) {
      this.$router.push(item.path)
    }
  }
}
</script>

<style lang="scss" scoped>
.head-wrapper {
  background-color: $theme;
  box-shadow: 2px 2px 5px #333333;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 11;
}
.head {
  display: flex;
  align-items: center;
  height: 100px;

  .logo {
    width: 80px;
    img {
      width: 80px;
    }
  }
  .qs-router {
    display: flex;
    margin-left: 50px;
    .item {
      position: relative;
      width: 120px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      overflow: hidden;
      cursor: pointer;
      .name {
        vertical-align: middle;
        line-height: inherit;
        color: $theme_font_pink;
      }
      .label {
        position: absolute;
        line-height: inherit;
        width: 120px;
        text-transform: uppercase;
        color: $theme_font;
        background-color: #ffc7c7;
        top: 100px;
        transition: top 0.5s;
        &::before {
          position: absolute;
          bottom: 0;
          left: 55px;
          content: " ";
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 5px 7px 5px;
          border-color: transparent transparent $theme_font transparent;
        }
      }
      &:hover {
        .label {
          top: 0;
        }
      }
    }
  }
}
</style>
