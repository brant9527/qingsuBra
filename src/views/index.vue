<template>
    <div>
        <header-part></header-part>
               <banner></banner>
        <title-tip :title="title"></title-tip>
        <div class="qs-content">
        <router-view></router-view>
        </div>
        <foot-part></foot-part>
    </div>
</template>
<script>
import headerPart from '../components/header'
import titleTip from '../components/title_tip'
import footPart from '../components/foot'
import banner from '@/components/banner.vue'
export default {
  components: {
    headerPart,
    footPart,
    banner,
    titleTip
  },
  created () {
    this.title = this.$route.matched[1].meta.title
  },
  data () {
    return {
      title: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.qs-content{
    width: 1200px;
    margin: 0 auto
}
</style>
