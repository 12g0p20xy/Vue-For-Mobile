<template>
  <div class="tabnav">
    <span
      v-for="(label, i) in labelArray"
      :class="{ active: i === now }"
      @click="changeTab(i)"
    >
      {{ label }}
    </span>
  </div>
</template>

<script>

export default {
  props: ['labelArray', 'index'],
  data() {
    return {
      now: this.index
    }
  },
  // 在父组件 m-tab 的 index 发生改变后会同步到 now
  watch: {
    index(val) {
      this.now = val
    }
  },
  methods: {
    changeTab(i) {
      this.now = i
      // 将 i 的值传给父组件 m-tab
      this.$emit('tabnavChanged', i)
    }
  }
}
</script>

<style lang="less">
.tabnav span{
  display: inline-block;
  padding: .5em;
  &.active{
    border-bottom: 2px solid #666;
  }
}
</style>