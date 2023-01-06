import './bootstrap';
import '../sass/app.scss'
import Router from '@/router'
import store from '@/store'

import { createApp } from 'vue/dist/vue.esm-bundler';
import Toaster from '@meforma/vue-toaster';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp({})
app.use(Router)
app.use(Toaster)
app.use(VueSweetalert2)
app.use(store)
app.mount('#app')