import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ProductPage from './views/ProductPage.vue'
import CartPage from './views/CartPage.vue'
import ShoppingHome from './views/ShoppingHome.vue'

const routes = [
    {
        path: '/productpage',
        name: 'ProductPage',
        component: ProductPage,
    },
    {
        path: '/cartpage',
        name: 'CartPage',
        component: CartPage,
    },
    {
        path: '/',
        name: 'ShoppingHome',
        component: ShoppingHome,
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app');
