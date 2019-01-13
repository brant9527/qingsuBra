<template>
   <div class="flex-between">
        <qs-aside :list="list" :preIndex="preIndex"></qs-aside>
        <div class="qs-content">
        <router-view></router-view>
        </div>
    </div>
</template>
<script>
import qsAside from '@/components/aside.vue'
export default {
  components: {
    qsAside
  },
  data () {
    return {
      list: [
        {
          name: '经典时尚',
          path: '/product/classics',
          children: [
            {
              name: '亮影系列',
              path: '/product/classics/secret/light'
            },
            {
              name: '优雅曲线',
              path: '/product/classics/secret/grace'
            },
            {
              name: '雅韵系列',
              path: '/product/classics/secret/elegance'
            },
            {
              name: '柔情系列',
              path: '/product/classics/tenderness'
            }
          ]
        },
        {
          name: '理疗保健',
          path: '/product/healthcare',
          children: [
            {
              name: '护花使者',
              path: '/product/healthcare/protect'
            }
          ]
        }
      ],
      preIndex: 0
    }
  },
  watch: {
    $route: function (val) {
      console.log(val)
    }
  },
  created () {
    console.log(this.$route)
    this.preIndex = this.$route.meta.preIndex
  }
}
</script>

<style lang="scss" scoped>
</style>
