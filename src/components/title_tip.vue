<template>
    <div class="tip-content">
        <h2 class="tip">{{title}}</h2>
    </div>
</template>
<script>
export default {
  props: ['title']
}
</script>
<style lang="scss" scoped>
.tip-content {
    position: relative;
    width: 1200px;
    margin: 20px auto  0px;
  .tip {
    height: 70px;
    line-height: 70px;
    text-align: left;
    width: 220px;
    font-size: 40px;
    text-transform: uppercase;
  }
    &::before{
        position: absolute;
        top: 10px;
        width: 220px;
        content: " ";
        height: 1px;
        border-top:1px solid #999
    }
}
</style>
