import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from '@/router/index'
import 'vant/lib/index.css'
import {Tabbar,TabbarItem} from 'vant'
const app = createApp(App);
app.use(Tabbar);
app.use(TabbarItem);
app.use(router)
app.mount('#app');

// createApp(App).mount('#app')
