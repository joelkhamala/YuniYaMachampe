import axios from "axios";
import router from "@/router";

export default{
    state: {
        productRestock:[],
    },
    getters: {
        productRestock(state)
        {
            return state.productRestock
        }
    },
    actions: {
        async restockProducts({commit}){
            const { data } = await axios.get('/api/product/restock').then((res)=>
            {
                commit('RESTOCK_PRODUCT', res.data);
            })
        },
    },
    mutations: {
        RESTOCK_PRODUCT(state, product)
        {
            state.productRestock = product
        },
    },
}