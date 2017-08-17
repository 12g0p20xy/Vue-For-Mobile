<template>
  <div
    class="tabcon"
    v-show="active"
  >
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: {
    label: String,
    active: Boolean
  },
  data() {
    return {
    }
  },
  created() {
    // 触发父组件 m-tab 的 pushLabel 事件，传递出 props
    this.$parent.pushLabel(this.label, this.active)
  }
}
</script>

<style lang="less">
.tabcon{
  width: 100%;
  height: 200px;
  padding: 4%;
  background: #ddd;
}
</style>