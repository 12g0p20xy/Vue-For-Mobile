// 组件
Vue.component('m-message', {
  template: `
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
  `,
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
})

// 路由
const Index = Vue.extend({
  template: '#index',
  data() {
    return {

    }
  },
  methods: {
    msgEvent() {
      console.log('执行操作')
    }
  }
})

const Game = Vue.extend({
  template: '#game'
})

const Rule = Vue.extend({
  template: '#rule'
})

const Rank = Vue.extend({
  template: '#rank'
})

const router = new VueRouter({
  routes: [
    { path: '/', component: Index },
    { path: '/index', component: Index },
    { path: '/game', component: Game },
    { path: '/rule', component: Rule },
    { path: '/rank', component: Rank }
  ]
})

// vuex
// const store = new Vuex.Store({
//   // store 的变量
//   state: {
    
//   },
//   // store 的方法
//   mutations: {
    
//   }
// })


new Vue({
  el: '#app',
  router
})