import axios from "axios";
import router from "@/router";

export default{
    state: {
        supplier: [],
    },
    getters: {
        supplier(state) {
            return state.supplier
        }
    },
    actions: {
        async viewSuppliers({commit}){
            const { data } = await axios.get('/api/supplier');
            commit('SET_SUPPLIER', data);
        },
        async newSupplier({commit}, supplier){
            const res = await axios.post('/api/supplier/add', supplier);
            console.log(res.data);
            commit('NEW_SUPPLIER', supplier);
        },
        async removeSupplier({commit}, id){
            const res = await axios.delete('/api/supplier/delete/' + id);
            commit('DELETE_SUPPLIER', id);
        },
        async updateSupplier({commit}, supplier){
            // return axios.put('/api/supplier/'+id).then(res =>{
            //     commit('EDIT_SUPPLIER', id)
            // })  
            try {
                let result = await axios.put("/api/supplier/edit/"+id, supplier)
                console.log(result.response.data)
                commit('EDIT_SUPPLIER', supplier)
              } catch (error) {
                console.error(error.response.data);    
              }
        }
    },
    mutations: {
        SET_SUPPLIER(state, supplier) {
            state.supplier = supplier
        },
        NEW_SUPPLIER(state, supplier) {
            // let supplier = state.supplier.concat(supplier)
            // state.supplier = supplier
            state.supplier = state.supplier.unshift(supplier)
        },
        DELETE_SUPPLIER(state, id) {
            state.supplier = state.supplier.filter(f => {
                return f.id !== id
            })
        },
        EDIT_SUPPLIER(state, supplier) {
            const index = state.supplier.findIndex(f => f.id === supplier.id)
            if(index !== -1) {
                state.supplier.splice(index, 1, supplier)
            }
        }
    },
}