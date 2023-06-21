import { createRouter, createWebHistory } from "vue-router"
import mainPage from '../views/pages/Main/Index.vue'
import formPage from '../views/pages/Form/Index.vue'


const routes = [
    {
        path: '/',
        alias: '/main',
        name: 'main',
        component: mainPage
    },
    {
        path: '/form',
        name: 'form',
        component: formPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router