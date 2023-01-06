import axios from "axios";
import router from "@/router";

export default{
    state: {
        product: [],
    },
    getters: {
        product(state) {
            return state.product
        }
    },
    actions: {
        productEdit({ state }, id){
            // do something with state.someValue and the arg
            return state.product.find(f => f.id == id)
         },
        async viewProducts({commit}){
            const { data } = await axios.get('/api/product');
            commit('SET_PRODUCT', data);
        },
        async newProduct({commit}, product){
            const res = await axios.post('/api/product/add', product);
            console.log(res.data);
            commit('NEW_PRODUCT', product);
        },
        async removeProduct({commit}, id){
            const res = await axios.delete('/api/product/delete/' + id);
            commit('DELETE_PRODUCT', id);
        },
        async updateProduct({commit}, product){
            // return axios.put('/api/product/'+id).then(res =>{
            //     commit('EDIT_PRODUCT', id)
            // })  
            try {
                let result = await axios.put("/api/product/edit/"+id, product)
                console.log(result.response.data)
                commit('EDIT_PRODUCT', product)
              } catch (error) {
                console.error(error.response.data);    
              }
        }
    },
    mutations: {
        SET_PRODUCT(state, product) {
            state.product = product
        },
        NEW_PRODUCT(state, product) {
            // let product = state.product.concat(product)
            // state.product = product
            state.product = state.product.unshift(product)
        },
        DELETE_PRODUCT(state, id) {
            state.product = state.product.filter(f => {
                return f.id !== id
            })
        },
        EDIT_PRODUCT(state, product) {
            const index = state.product.findIndex(f => f.id === product.id)
            if(index !== -1) {
                state.product.splice(index, 1, product)
            }
        }
    },
}