import Index from './pages/index.vue'
import Rule from './pages/rule.vue'
import Game from './pages/game.vue'
import Rank from './pages/rank.vue'

export default [
  { path: '/', component: Index },
  { path: '/index', component: Index },
  { path: '/rule', component: Rule },
  { path: '/game', component: Game },
  { path: '/rank', component: Rank }
]
