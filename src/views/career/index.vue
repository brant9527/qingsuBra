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
          name: '联系我们',
          path: '/career/contact'
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
    this.preIndex = this.$route.meta.preIndex
  }
}
</script>

<style lang="scss" scoped>
</style>
