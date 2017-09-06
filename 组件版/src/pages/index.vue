<template>
  <div id="index">
    <h3>首页</h3>
    <small>m-slider 组件示例</small>
    <m-slider width="100%" height="200px" ref="slider">
      <m-slider-list v-for="list in lists" :key="list">
        {{ list }}
      </m-slider-list>
    </m-slider>
    <small># 外部触发 slider 切换</small>
    <button class="btn" @click="sliderHandler('prev')">prev()</button>
    <button class="btn" @click="sliderHandler('next')">next()</button>
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
    <hr>
    <small>m-tab 组件示例</small>
    <m-tab>
      <m-tabcon label="项目1">内容1</m-tabcon>
      <m-tabcon label="项目2">内容2</m-tabcon>
      <m-tabcon label="Hello" :active="true">Hello world!</m-tabcon>
    </m-tab>
    <hr>
    <small>m-register 组件示例</small>
    <m-register txt="确认提交"></m-register>
  </div>
</template>

<script>

import mRegister from './../components/m-register.vue'
import mTab from './../components/tab/m-tab.vue'
import mTabcon from './../components/tab/m-tabcon.vue'
import mMessage from './../components/m-message.vue'
import mSlider from './../components/slider/m-slider.vue'
import mSliderList from './../components/slider/m-slider-list.vue'

export default {
  components: {
    mRegister, mTab, mTabcon, mMessage, mSlider, mSliderList
  },
  data() {
    return {
      lists: ['内容1', '内容2', '内容3', '内容4']
    }
  },
  methods: {
    msgEvent() {
      console.log('执行操作')
    },
    sliderHandler(type) {
      if (type === 'prev') {
        this.$refs.slider.prev()
      }
      if (type === 'next') {
        this.$refs.slider.next()
      }
    }
  }
}

</script>

<style lang="less">
body{
  padding-bottom: 20%;
}
.m-slider{
  margin-bottom: 1em;
}
small{
  display: block;
  margin-bottom: 1em;
}
</style>