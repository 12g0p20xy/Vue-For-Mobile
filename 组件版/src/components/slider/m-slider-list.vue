<template>
  <div class="slider-list" ref="list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    lists: {
      type: Array
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.slider-list {
  float: left;
  width: 100%;
  height: 100%;
  background: #ddd;
}
</style>