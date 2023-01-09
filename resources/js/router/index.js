import { createWebHistory, createRouter } from "vue-router";
import store from "@/store";

/* Layouts */
const DefaultNav = () => import("@/components/layouts/Default.vue");
/* Layouts */

/* Authentication Layouts */
const Login = () => import("@/components/authLayouts/Login.vue");
const Register = () => import("@/components/authLayouts/Register.vue");
/* Authentication Layouts */

/* Dashboard Layout*/
const StudentDashboardLayout = () =>
    import("@/components/layouts/StudentDashboardLayout.vue");
const StudentDashboard = () =>
    import("@/components/Dashboard/StudentDashboard.vue");
/* Dashboard Layout*/

/* Guest Component */
const Home = () => import("@/components/Pages/Home.vue");
const About = () => import("@/components/Pages/About.vue");
const Awards = () => import("@/components/Pages/Awards.vue");
const Courses = () => import("@/components/Pages/AllCourses.vue");
const Admission = () => import("@/components/Pages/Admission.vue");
const Seminar = () => import("@/components/Pages/Seminar.vue");
const Events = () => import("@/components/Pages/Events.vue");
const Contact = () => import("@/components/Pages/Contact.vue");
/* Guest Component */

const routes = [
    {
        path: "/",
        component: DefaultNav,
        meta: {
            middleware: "guest",
            title: `Default`,
        },
        children: [
            {
                name: "home",
                path: "/",
                component: Home,
                meta: {
                    title: `Home`,
                },
            },
            {
                name: "login",
                path: "/login",
                component: Login,
                meta: {
                    title: `Login`,
                },
            },
            {
                name: "register",
                path: "/register",
                component: Register,
                meta: {
                    title: `Register`,
                },
            },
            {
                name: "about",
                path: "/about",
                component: About,
                meta: {
                    title: `About Us`,
                },
            },
            {
                name: "awards",
                path: "/awards",
                component: Awards,
                meta: {
                    title: `Awards`,
                },
            },
            {
                name: "courses",
                path: "/courses",
                component: Courses,
                meta: {
                    title: `All Courses`,
                },
            },
            {
                name: "admission",
                path: "/admission",
                component: Admission,
                meta: {
                    title: `Request Admission Letter`,
                },
            },
            {
                name: "seminar",
                path: "/seminar",
                component: Seminar,
                meta: {
                    title: `Seminars`,
                },
            },
            {
                name: "events",
                path: "/events",
                component: Events,
                meta: {
                    title: `Events`,
                },
            },
            {
                name: "contact-us",
                path: "/contact-us",
                component: Contact,
                meta: {
                    title: `Contact Us`,
                },
            },
            {
                path: "/studentdashboardlayout",
                component: StudentDashboardLayout,
                meta: {
                    middleware: "auth",
                },
                children: [
                    {
                        name: "studentdashboard",
                        path: "/studentdashboard",
                        component: StudentDashboard,
                        meta: {
                            title: `Student Dashboard`,
                        },
                    },
                ],
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    if (to.meta.middleware == "guest") {
        if (store.state.auth.authenticated) {
            next({ name: "studentdashboard" });
        }
        next();
    } else {
        if (store.state.auth.authenticated) {
            next();
        } else {
            next({ name: "login" });
        }
    }
});

export default router;
