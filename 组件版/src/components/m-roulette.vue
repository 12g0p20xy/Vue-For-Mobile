<template>
  <div class="m-roulette clearfix">
    <div class="line">
      <div class="cell" :class="{ active: index == 0 }">{{ rewards[0].name }}</div>
      <div class="cell" :class="{ active: index == 1 }">{{ rewards[1].name }}</div>
      <div class="cell" :class="{ active: index == 2 }">{{ rewards[2].name }}</div>
      <div class="cell" :class="{ active: index== 3 }">{{ rewards[3].name }}</div>
    </div>
    <div class="line">
      <div class="cell" :class="{ active: index == 11 }">{{ rewards[11].name }}</div>
      <div class="cell hidden-cell"></div>
      <div class="cell hidden-cell"></div>
      <div class="cell" :class="{ active: index == 4 }">{{ rewards[4].name }}</div>
    </div>
    <div class="line">
      <div class="cell" :class="{ active: index == 10 }">{{ rewards[10].name }}</div>
      <div class="cell hidden-cell"></div>
      <div class="cell hidden-cell"></div>
      <div class="cell" :class="{ active: index == 5 }">{{ rewards[5].name }}</div>
    </div>
    <div class="line">
      <div class="cell" :class="{ active: index == 9}">{{ rewards[9].name }}</div>
      <div class="cell" :class="{ active: index == 8 }">{{ rewards[8].name }}</div>
      <div class="cell" :class="{ active: index == 7 }">{{ rewards[7].name }}</div>
      <div class="cell" :class="{ active: index == 6 }">{{ rewards[6].name }}</div>
    </div>
    <div class="start-btn" @click="gameStart">
      <h3>START!</h3>
      <small>剩余抽奖次数：{{ count }}</small>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,      // 当前高亮的格子
      goal: 0,       // 中奖序号
      times: 0,      // 记录轮盘转的次数
      timer: null,   // 计时器
      count: 3,      // 抽奖机会
      rewards: [
        { name: '汽车零件A', isParts: true },
        { name: '洗车券*10', isParts: false },
        { name: '汽车零件B', isParts: true },
        { name: '优惠券', isParts: false },
        { name: '购物卡', isParts: false },
        { name: '汽车零件C', isParts: true },
        { name: '加油卡', isParts: false },
        { name: '汽车零件D', isParts: true },
        { name: '优酷会员', isParts: false },
        { name: '洗车券*100', isParts: false },
        { name: '汽车零件E', isParts: true },
        { name: '加油卡', isParts: false }
      ]
    }
  },
  methods: {
    gameStart() {
      let t = 100,     // 转动速度
          timer = null // 计时器

      // 判断当前轮盘是否已经在运转，防止重复点击
      if (this.timer) {
        return false
      }
      // 判断剩余抽奖次数
      this.count --
      if (this.count < 0) {
        this.count = 0
        alert('您已到达今日抽奖上限，请明天再来！')
        return
      }
      // 重置
      this.index = this.times = 0
      // 随机产生中奖序号
      this.goal = Math.round(Math.random() * 11)
      console.log(this.goal)

      // 轮盘运转
      function roll() {
        if (this.index >= 11) {
          this.index = -1
          // 轮盘转动次数增加一次
          this.times ++
        }
        // 停止
        if (t >= 160 && this.index == this.goal) {
          t = 100
          this.timer = null
          alert('奖品是：' + this.rewards[this.index].name)
          return false
        }
        this.index ++
        // 轮盘转动次数超过3次时逐渐减慢速度
        if (this.times >= 3) {
          t += 60
        }
        this.timer = setTimeout(roll.bind(this), t)
      }

      this.timer = setTimeout(roll.bind(this), t)
    }
  }
}
</script>

<style lang="less" scoped>
.m-roulette {
  position: relative;
  border: 4px solid #333;
  font-size: 0;
  .cell {
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    background: #eee;
    font-size: 12px;
    line-height: 8;
    text-align: center;
    &.hidden-cell {
      visibility: hidden;
    }
    &.active {
      background: #ccc;
    }
  }
  .start-btn {
    position: absolute;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 0;
    padding-bottom: 50%;
    font-size: 14px;
    text-align: center;
    background: #ddd;
  }
}
</style>