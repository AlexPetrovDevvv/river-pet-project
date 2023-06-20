import { createRouter, createWebHistory } from "vue-router"
import mainPage from '../views/pages/Main/Index.vue'


const routes = [
    {
        path: '/',
        alias: '/main',
        name: 'main',
        component: mainPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router