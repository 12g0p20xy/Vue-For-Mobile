<template>
  <nav>
    <router-link to="/">活动首页</router-link>
    <router-link to="/rule">活动说明</router-link>
    <router-link to="/game">开始游戏</router-link>
    <router-link to="/rank">查看排名</router-link>
  </nav>
</template>

<script>

  export default {

  }

</script>

<style lang="less" scoped>
nav{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #333;
  a{
    display: block;
    float: left;
    width: 25%;
    padding: 1em 0;
    text-align: center;
    color: #eee;
    text-decoration: none;
    &:hover{
      background: lighten(#333, 10%);
    }
  }
}
</style>