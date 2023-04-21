import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from '@/router/index'
import 'vant/lib/index.css'
import {Tabbar,TabbarItem,Search,Icon,Skeleton,Loading} from 'vant'
const app = createApp(App);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Search);
app.use(Icon)
app.use(router)
app.use(Skeleton)
app.use(Loading)


const rootValue = 16
const rootWidth = 390 //这个是iphone12的宽度
const deviceWidth = document.documentElement.clientWidth  //用户的屏幕宽度
document.documentElement.style.fontSize = (deviceWidth * rootValue) / rootWidth + 'px' //设置fontsize

app.mount('#app');

// createApp(App).mount('#app')
