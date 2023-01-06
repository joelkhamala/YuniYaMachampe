import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from '@/store/auth'
import category from '@/store/category'
import product from '@/store/product'
import supplier from '@/store/supplier'
import customer from '@/store/customer'
import order from '@/store/order'
import sales from '@/store/sales'
import productRestock from '@/store/productRestock'

const store = createStore({
    plugins:[
        createPersistedState()
    ],
    modules:{
        auth,
        category,
        product,
        supplier,
        customer,
        order,
        sales,
        productRestock
    }
})

export default store