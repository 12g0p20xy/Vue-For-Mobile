<template>
  <div class="m-tab">
    <!-- 这里将 labelArray 传递给子组件 tabnav -->
    <m-tabnav
      @tabnavChanged="changeTab"
      :label-array="labelArray"
      :index="index"
    ></m-tabnav>
    <slot></slot>
  </div>
</template>

<script>

import mTabnav from './m-tabnav.vue'

export default {
  components: { mTabnav },
  data() {
    return {
      index: 0,
      // 用于保存 tabnav 的项目，将由 m-tabcon 传入
      labelArray: []
    }
  },
  methods: {
    // 由子组件 m-tabcon 触发，接受 m-tabcon 的 props
    pushLabel(l, a) {
      // 更新 labelArray
      this.labelArray.push(l)
      // 判断如果给某个 tabcon 传递了 active 值，则切换到对应 tabnav 标签上
      if (a) {
        this.index = this.labelArray.indexOf(l)
      }
    },
    changeTab(i) {

      // 将 tabnav 传来的 i 更新到 index
      this.index = i

      // 用 $slots.default 访问到所有未命名的插槽
      // ！注意：因为未命名的 $slots.default 不仅仅包括我们需要的 tabcon，需要先判断是否是元素，过滤出 tabcon
      let tabconArray = this.$slots.default.filter(function(el) {
        return el.elm.nodeType === 1
      })

      // 现在获取到了包含所有 tabcon 元素的数组 tabconArray
      // console.log(tabconArray)

      // 找到对应当前点击的 index 的 tabcon，设置 style，实现切换
      const _this = this
      tabconArray.forEach(function(tabcon, i) {
        if (i === _this.index) {
          tabcon.elm.style.display = "block"
        }
        else {
          tabcon.elm.style.display = "none"
        }
      })

    }
  }
}
</script>

<style lang="less" scoped>
</style>