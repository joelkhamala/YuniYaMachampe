import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'

/* Guest Component */
const Login = () => import('@/components/Login.vue')
const Register = () => import('@/components/Register.vue')
const Home = () => import('@/components/Home.vue')
/* Guest Component */

/* Layouts */
const DashboardLayout = () => import('@/components/layouts/Default.vue')
/* Layouts */

/* Authenticated Component */
const Dashboard = () => import('@/components/Dashboard.vue')
const AddCategory = () => import('@/components/categories/AddCategory.vue')
const ViewCategory = () => import('@/components/categories/ViewCategory.vue')
const EditCategory = () => import('@/components/categories/EditCategory.vue')

const AddProduct = () => import('@/components/products/AddProducts.vue')
const ViewProduct = () => import('@/components/products/ViewProducts.vue')
const EditProduct = () => import('@/components/products/EditProduct.vue')

const AddSupplier = () => import('@/components/suppliers/AddSuppliers.vue')
const ViewSupplier = () => import('@/components/suppliers/ViewSuppliers.vue')
const EditSupplier = () => import('@/components/suppliers/EditSupplier.vue')

const AddCustomer = () => import('@/components/customers/AddCustomers.vue')
const ViewCustomer = () => import('@/components/customers/ViewCustomers.vue')
// const EditCustomer = () => import('@/components/customers/EditCustomer.vue')

const AddOrder = () => import('@/components/orders/AddOrders.vue')
const ViewOrder = () => import('@/components/orders/ViewOrders.vue')
const EditOrder = () => import('@/components/orders/EditOrder.vue')

const AddSales = () => import('@/components/sales/AddSales.vue')
const ViewSales = () => import('@/components/sales/ViewSales.vue')
/* Authenticated Component */


const routes = [
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
            middleware: "guest",
            title: `Login`
        }
    },
    {
        name: "register",
        path: "/register",
        component: Register,
        meta: {
            middleware: "guest",
            title: `Register`
        }
    },
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
            {
                name: "addcategory",
                path: '/category/addcat',
                component: AddCategory,
                meta: {
                    title: `AddCategory`
                }
            },
            {
                name: "viewcategories",
                path: '/category/viewcat',
                component: ViewCategory,
                meta: {
                    title: `ViewCategory`
                }
            },
            {
                name: "editcategory",
                path: '/category/catedit/:id',
                component: EditCategory,
                meta: {
                    title: `EditCategory`
                }
            },
            {
                name: "addproduct",
                path: '/products/addproduct',
                component: AddProduct,
                meta: {
                    title: `AddProduct`
                }
            },
            {
                name: "viewproducts",
                path: '/products/viewproduct',
                component: ViewProduct,
                meta: {
                    title: `ViewProduct`
                }
            },
            {
                name: "editproduct",
                path: '/products/productedit/:id',
                component: EditProduct,
                meta: {
                    title: `EditProduct`
                }
            },
            {
                name: "addsupplier",
                path: '/suppliers/addsupplier',
                component: AddSupplier,
                meta: {
                    title: `AddSupplier`
                }
            },
            {
                name: "viewsuppliers",
                path: '/suppliers/viewsupplier',
                component: ViewSupplier,
                meta: {
                    title: `ViewSupplier`
                }
            },
            {
                name: "editsupplier",
                path: '/suppliers/supplieredit/:id',
                component: EditSupplier,
                meta: {
                    title: `EditSupplier`
                }
            },
            {
                name: "addcustomer",
                path: '/customers/addcustomer',
                component: AddCustomer,
                meta: {
                    title: `AddCustomer`
                }
            },
            {
                name: "viewcustomers",
                path: '/customers/viewcustomers',
                component: ViewCustomer,
                meta: {
                    title: `ViewCustomer`
                }
            },
            {
                name: "addorder",
                path: '/orders/addorder',
                component: AddOrder,
                meta: {
                    title: `AddOrder`
                }
            },
            {
                name: "vieworders",
                path: '/suppliers/vieworder',
                component: ViewOrder,
                meta: {
                    title: `ViewOrder`
                }
            },
            {
                name: "editorder",
                path: '/suppliers/editorder/:id',
                component: EditOrder,
                meta: {
                    title: `EditOrder`
                }
            },
            {
                name: 'addsales',
                path: '/sales/addsales',
                component: AddSales,
                meta:{
                    title: `AddSales`
                }
            },
            {
                name: "viewsales",
                path: '/sales/viewsales',
                component: ViewSales,
                meta: {
                    title: `ViewSales`
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