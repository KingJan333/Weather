import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/MainPage/main.vue'),
        meta: {
            layout: 'default',
            requiresAuth: false,
        },
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    next()
    window.scrollTo(0, 0)
})

export default router
