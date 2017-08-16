<!-- 
  用途：
    用于用户登录的弹出框
  设置 props：
    txt：  设置按钮的文字，默认为“确认”
-->

<template>

  <div class="m-alert">

    <!-- 确认按钮 -->
    <button
      ref="alert"
      class="btn alert-btn"
      @click="showMsg($event)"
    >
    {{ txt }}
    </button>

    <!-- 背景层 -->
    <div
      class="layer"
      :class="{active: show}"
    >
      <div class="signup-box">
        <div class="input-group">
          <label for="name">姓名:</label>
          <input type="text" class="form-control" id="name" placeholder="输入姓名">
        </div>
        <div class="input-group">
          <label for="tel">联系方式:</label>
          <input type="tel" class="form-control" id="tel" placeholder="输入联系方式">
        </div>
        <button class="btn">提交信息</button>
        <span
          @click="show=false"
          class="close-btn"
        >
          取 消
        </span>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  props: {
    txt: {
      default: "确认"
    }
  },
  data() {
    return {
      // 开关背景层
      show: false
    }
  },
  methods: {
    showMsg(e) {
      e.preventDefault()
      // 显示背景层
      this.show = true
    }
  }
}
</script>

<style lang="less">
button {
  margin: 0 auto;
  width: 100%;
}
.layer {
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,.6);
  z-index: 99;
  &.active{
    display: block;
    .signup-box{
      animation: show .3s forwards;
    }
  }
  .signup-box{
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 30px;
    border: 1px solid #ddd;
    background: #fff;
    box-shadow: 0 6px 30px #555;
    transform: translate(-50%, -50%) scale(5);
    opacity: 0;
    .input-group{
      margin-bottom: 1em;
      label{
        display: block;
      }
      input{
        width: 15em;
      }
    }
    .close-btn{
      display: block;
      width: 100%;
      padding: .5em;
      text-align: center;
    }
  }
}
@keyframes show{
  to {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}
</style>