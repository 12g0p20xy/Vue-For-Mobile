<template>
  <div class="m-slider" ref="slider">
    <div class="container" ref="container">
      <slot></slot>
    </div>
    <div class="slider-nav">
      <span
        v-for="(item, i) in len"
        @click="moveTo(i)"
        :class="{ active: i == currentIndex }"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lists: {
      type: Array
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "200px"
    },
  },
  data() {
    return {
      currentIndex: 0,
      listWidth: 0,
      len: 0
    }
  },
  mounted() {
    // 设置 slider 宽高
    this.$refs.slider.style.width = this.width
    this.$refs.slider.style.height = this.height

    // 获取 list 数量
    let sliderListArray = this.$slots.default.filter(function(el) {
      return el.elm.nodeType === 1
    })
    this.len = sliderListArray.length

    // 获取 slider 真实宽度
    this.listWidth = this.$refs.slider.offsetWidth
    // console.log(this.listWidth)

    // 设置 list 的宽度
    sliderListArray.forEach(function(el) {
      console.log(this.listWidth + 'px')
      el.elm.style.width = this.listWidth + 'px'
    }.bind(this))

    // 设置 list 外部容器宽度，让 list 横向展开
    this.$refs.container.style.width = this.listWidth * this.len + 'px'
  },
  watch: {
    // 设置 container 的左位移来控制移动
    distance(val) {
      this.$refs.container.style.left = val
      console.log(this.distance)
    }
  },
  computed: {
    // 轮播图移动的距离
    distance() {
      return - this.listWidth * this.currentIndex + 'px'
    }
  },
  methods: {
    moveTo(i) {
      this.currentIndex = i
    },
    prev() {
      this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.len - 1
    },
    next() {
      this.currentIndex = this.currentIndex < this.len - 1 ? this.currentIndex + 1 : 0
    }
  }
}
</script>

<style lang="less" scoped>
.m-slider {
  position: relative;
  overflow: hidden;

  .container {
    position: absolute;
    left: 0;
    margin: 0;
    padding: 0;
    height: 100%;
    transition: .3s;
  }
}

.slider-nav {
  position: absolute;
  left: 50%;
  bottom: 0;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  span {
    display: inline-block;
    margin-right: .5em;
    width: 30px;
    height: 4px;
    background: #fff;
    opacity: .6;
    cursor: pointer;

    &.active {
      opacity: 1;
    }
  }
}
</style>