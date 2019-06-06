<template>
  <div class="page-button">
    <div class="page-button-group" style="padding: 20px 50px 50px 50px">
      <div class="dd">
        <mt-button size="large" type="primary" @click="go('/invite')">邀请家长注册</mt-button>
      </div>
      <div class="dd">
        <mt-button size="large" type="primary" @click="go('/activity')">列表</mt-button>
      </div>
      <div class="dd">
        <mt-button size="large" type="primary" @click="go('/activity/pullDown2')">pullDown2-修改过带图片预览</mt-button>
      </div>
      <div class="dd">
        <mt-button size="large" type="primary" @click="go('/activity/pullDown')">pullDown</mt-button>
      </div>
      <div class="dd">
        <mt-button size="large" type="primary" @click="go('/swiper/virtual')">swiper</mt-button>
      </div>
      <div class="dd">
        <mt-button size="large" type="primary" @click="go('/swiper/watch')">watch监听</mt-button>
      </div>
    </div>


  </div>
</template>

<script>
    import { Button  } from 'mint-ui';
    export default {
      methods:{
          go(url){
              this.$router.push({path:url})
          }
      }
    };
</script>

<style lang="scss">
  .page-button-group{
    .dd{padding: 0 0 10px 0}
  }

</style>