<template>
    <div>

      <el-carousel height="400px" class="marginTop">
        <el-carousel-item v-for="item in list" :key="item.key">
         <div class="banner" :style="{backgroundImage:'url('+item.url+')'}"></div>
        </el-carousel-item>
    </el-carousel>
    </div>
</template>
<script>
export default {
  name: 'banner',
  data: () => ({
    list: [
      {
        url: require('@/assets/imgs/banner/slide1.jpg')
      },
      {
        url: require('@/assets/imgs/banner/slide2.jpg')
      },
      {
        url: require('@/assets/imgs/banner/slide3.jpg')
      }
    ]
  }),
  created () {
    console.log(this.list)
  }
}
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 400px;
  background-position: center;
  background-size: cover;
}
.marginTop{
  margin-top: 100px;
}
</style>
