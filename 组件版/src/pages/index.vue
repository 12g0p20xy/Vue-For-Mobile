<template>
  <div id="index">
    <h3>首页</h3>
    <small>m-register 组件示例</small>
    <m-register txt="确认提交"></m-register>
    <hr>
    <small>m-tab 组件示例</small>
    <m-tab>
      <m-tabcon label="项目1">内容1</m-tabcon>
      <m-tabcon label="项目2">内容2</m-tabcon>
      <m-tabcon label="Hello" :active="true">Hello world!</m-tabcon>
    </m-tab>
    <hr>
    <small>m-message 组件示例</small>
    <m-message
      type="alert"
      title="自定义标题"
      content="自定义提示内容">
      <button class="btn">Alert</button>
    </m-message>
    <m-message
      type="confirm"
      title="等待确认"
      content="要执行操作吗？"
      @confirm="msgEvent">
      <button class="btn">Confirm</button>
    </m-message>
  </div>
</template>

<script>

import mRegister from './../components/m-register.vue'
import mTab from './../components/tab/m-tab.vue'
import mTabcon from './../components/tab/m-tabcon.vue'
import mMessage from './../components/m-message.vue'

export default {
  components: {
    mRegister, mTab, mTabcon, mMessage
  },
  methods: {
    msgEvent() {
      console.log('执行操作')
    }
  }
}

</script>

<style lang="less">
small{
  display: block;
  margin-bottom: 1em;
}
</style>