<template>
    <div class="m-message" @click="open">
        <slot></slot>
          <div class="layer" v-if="show">
            <transition name="scale">
              <div class="model-box" v-show="showBox">
                <h3 v-if="title">
                  {{ title }}
                </h3>
                <p>{{ content }}</p>
                <span class="close-btn" @click="eventHandler('cancel')">
                  <i class="zmdi zmdi-close"></i>
                </span>
                <div v-if="type==='alert'">
                  <span @click="eventHandler('cancel')" class="btn btn-success">
                    确定
                  </span>
                </div>
                <div v-if="type==='confirm'">
                  <span @click="eventHandler('cancel')" class="btn btn-default">
                    取消
                  </span>
                  <span @click="eventHandler('confirm')" class="btn btn-success">
                    确定
                  </span>
                </div>
              </div>
            </transition>
          </div>
    </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'alert'
    },
    title: {
      type: String,
      default: '标题'
    },
    content: {
      type: String,
      default: '内容'
    },
    btnTxt: {
      type: String,
      default: '确定'
    }
  },
  data() {
    return {
      show: false,
      showBox: false
    }
  },
  methods: {
    open(event) {
      if (event.target.tagName === 'BUTTON') {
        this.show = true
        setTimeout(function() {
          this.showBox = true
        }.bind(this), 10)
        document.body.style.overflow = 'hidden'
      }
    },
    eventHandler(type) {
      if (type === 'cancel') {
        this.show = this.showBox = false
        document.body.style.overflow = 'auto'
      }
      if (type === 'confirm') {
        this.show = this.showBox = false
        this.$emit('confirm')
        document.body.style.overflow = 'auto'
      }
    }
  }
}
</script>

<style lang="less">
.m-message {
  display: inline-block;
  
  .layer {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
    z-index: 100;

    .model-box {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 80%;
      max-width: 300px;
      padding: 2em;
      background: #fff;

      h3 {
        font-size: 18px;
        margin-top: 0;
        i.zmdi {
          color: #ccc;
        }
      }

      span.btn {
        float: right;
        margin-left: .5em;
      }

      .close-btn {
        display: block;
        position: absolute;
        top: 5%;
        right: 0;
        width: 45px;
        height: 45px;
        text-align: center;
        line-height: 45px;
      }
    }
  }
}
.scale-enter-active, .scale-leave-active {
  transition: .3s;
}
.scale-enter, .scale-leave-to {
  margin-top: -150px;
  opacity: 0;
}
</style>