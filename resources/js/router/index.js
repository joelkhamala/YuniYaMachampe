import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'

/* Layouts */
const DefaultNav = () => import("@/components/layouts/Default.vue");
/* Layouts */

/* Authentication Layouts */
const Login = () => import("@/components/authLayouts/Login.vue");
const Register = () => import("@/components/authLayouts/Register.vue");
const AdminLogin = () => import("@/components/admin/auth/AdminLogin.vue");
/* Authentication Layouts */

/* Dashboard Layout*/
const StudentDashboardLayout = () =>
    import("@/components/layouts/StudentDashboardLayout.vue");
const StudentDashboard = () =>
    import("@/components/Dashboard/StudentDashboard.vue");
const AdminLayout = () =>
    import("@/components/admin/layouts/AdminLayout.vue");
const AdminDashboard = () =>
    import("@/components/admin/AdminDashboard.vue");
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

/* Student Dashboard Pages */
const Profile = () => import("@/components/Dashboard/Profile.vue");
const Dashboard = () => import("@/components/Dashboard/Dashboard.vue");
const MyCourses = () => import("@/components/Dashboard/MyCourses.vue");
const Exams = () => import("@/components/Dashboard/Exams.vue");
const Timeline = () => import("@/components/Dashboard/Timeline.vue");
/* Student Dashboard Pages */

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
                    middleware: "login",
                },
            },
            {
                name: "register",
                path: "/register",
                component: Register,
                meta: {
                    title: `Register`,
                    middleware: "login",
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
                        path: "/studentdashboard",
                        component: StudentDashboard,
                        meta: {
                            title: `Student Dashboard`,
                        },
                        children: [
                            {
                                name: "studentdashboard",
                                path: "/studentdashboard",
                                component: Dashboard,
                                meta: {
                                    title: `Student Dashboard | Dashboard`,
                                },
                            },
                            {
                                name: "profile",
                                path: "/profile",
                                component: Profile,
                                meta: {
                                    title: `Student Dashboard | Profile`,
                                },
                            },
                            {
                                name: "my-courses",
                                path: "/my-courses",
                                component: MyCourses,
                                meta: {
                                    title: `Student Dashboard | My Courses`,
                                },
                            },
                            {
                                name: "exams",
                                path: "/exams",
                                component: Exams,
                                meta: {
                                    title: `Student Dashboard | Exams`,
                                },
                            },
                            {
                                name: "timeline",
                                path: "/timeline",
                                component: Timeline,
                                meta: {
                                    title: `Student Dashboard | Timeline`,
                                },
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "admin-login",
        path: "/admin-login",
        component: AdminLogin,
        meta: {
            middleware: "login",
            title: `AdminLogin`,
        }
    },
    {
        path: "/admin-layout",
        component: AdminLayout,
        meta: {
            middleware: "admin",
        },
        children: [
            {
                name: "admin-dashboard",
                path: "/admin-dashboard",
                component: AdminDashboard,
                meta: {
                    title: `AdminDashboard`,
                },
            },
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    if (to.meta.middleware == "guest") {
        if (store.state.auth.authenticated) {
            next();
        } else if (store.state.admin.authenticated && store.state.admin.isAdmin) {
            next();
        }
        next();
    } else if (to.meta.middleware == "login") {
        if (store.state.admin.authenticated && store.state.admin.isAdmin) {
            next({ name: "admin-dashboard" })
        } else if (store.state.auth.authenticated) {
            next({ name: "studentdashboard" })
        } else {
            next();
        }
        
    } else {
        if (to.path == "/studentdashboard" && store.state.auth.authenticated) {
            next();
        } else if (to.path == "/studentdashboard" && !store.state.auth.authenticated){
            next({ name: "login" });
        } else if (to.path == "/admin-dashboard" && !store.state.admin.authenticated && !store.state.admin.isAdmin){
            next({ name: "admin-login" });
        } else if (to.path == "/admin-dashboard" && store.state.admin.authenticated && store.state.admin.isAdmin) {
            next();
        }
    }
});


export default router