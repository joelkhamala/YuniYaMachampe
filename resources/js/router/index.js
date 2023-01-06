import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'

/* Guest Component */
const Home = () => import('@/components/Home.vue')
/* Guest Component */

/* Layouts */
const DashboardLayout = () => import('@/components/layouts/Default.vue')
/* Layouts */

/* Authenticated Component */
const Dashboard = () => import('@/components/Dashboard.vue')
/* Authenticated Component */


const routes = [
    {
        name: "home",
        path: "/",
        component: Home,
        meta: {
            middleware: "guest",
            title: `Home`
        }
    },
    {
        path: "/dashboard",
        component: DashboardLayout,
        meta: {
            middleware: "auth"
        },
        children: [
            {
                name: "dashboard",
                path: '/userdashboard',
                component: Dashboard,
                meta: {
                    title: `Dashboard`
                }
            },
        ]
    }
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