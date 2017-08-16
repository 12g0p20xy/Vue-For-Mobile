<template>
  <div id="app">

    <!-- 页面内容 -->
    <div class="wrap">
      <router-view></router-view>
    </div>

    <!-- 底部导航 -->
    <m-nav></m-nav>

  </div>
</template>

<script>

import mNav from './components/m-nav.vue'

export default {
  name: 'app',
  components: { mNav },
  data () {
    return {}
  }
}

</script>

<!-- 全局样式 -->
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wrap {
  padding: 0 4%;
}
h3{
  margin-bottom: 1em;
}
</style>
