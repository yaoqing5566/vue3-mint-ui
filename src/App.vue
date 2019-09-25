<template>
  <div id="app" :style="{'min-height':$store.state.windowHeight+'px'}">
    <router-view/>
  </div>
</template>
<script>
    import {Toast} from 'mint-ui';

    export default {
        components: {
            Toast

        },
        created() {
            window.alert=function (msg) {
                Toast(msg)
            }
        }
    }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; position: relative;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.mint-indicator-mask{ z-index: 9998}
</style>
