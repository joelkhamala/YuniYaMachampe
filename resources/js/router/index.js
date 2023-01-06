import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'

/* Layouts */
const DefaultNav = () => import('@/components/layouts/Default.vue')
/* Layouts */

/* Guest Component */
const Home = () => import('@/components/Home.vue')
/* Guest Component */

const routes = [
    {
        path: "/",
        component: DefaultNav,
        meta: {
            middleware: "guest",
            title: `Default`
        },
        children: [
            {
                name: "home",
                path: "/",
                component: Home,
                meta: {
                    title: `Home`
                }
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if (to.meta.middleware == "guest") {
        if (store.state.auth.authenticated) {
            next({ name: "dashboard" })
        }
        next()
    } else {
        if (store.state.auth.authenticated) {
            next()
        } else {
            next({ name: "login" })
        }
    }
})

export default router