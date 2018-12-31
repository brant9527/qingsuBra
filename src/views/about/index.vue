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
          name: '企业概况',
          path: '/about/business'
        },
        {
          name: '使命愿景',
          path: '/about/future'
        },
        {
          name: '发展历程',
          path: '/about/experience'
        },
        {
          name: '最新动态',
          path: '/about/news'
        }
      ],
      preIndex: 0
    }
  },
  watch: {
    '$route': function (val) {
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
// .qs-content{
//     width: 1200px;
//     margin: 0 auto
// }
</style>
