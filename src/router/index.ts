import { createRouter, createWebHashHistory } from "vue-router";
const TabsView = () =>import('@/views/TabsView.vue')
const HomeView = ()=>import('@/views/home/HomeView.vue')
const OrderView = ()=>import('@/views/order/OrderView.vue')
const MeView = ()=>import('@/views/me/MeView.vue')
const LoginView = ()=>import('@/views/login/LoginView.vue')
const routes = [
    {
        path:'/',
        redirect:'/home',
    },
    {   
        name:'tabs',
        path:'/tabs',
        component:TabsView,
        children:[
            {name:'home',path:'/home',component:HomeView},
            {name:'order',path:'/order',component:OrderView},
            {name:'me',path:'/me',component:MeView}
        ]
    },
    {
        name:'login',
        path:'/login',
        component:LoginView
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router