import axios from "axios";
import router from "@/router";

export default{
    state: {
        customer: [],
    },
    getters: {
        customer(state) {
            return state.customer
        }
    },
    actions: {
        async viewCustomers({commit}){
            const { data } = await axios.get('/api/customer');
            commit('SET_CUSTOMER', data);
        },
        async newCustomer({commit}, customer){
            const res = await axios.post('/api/customer/add', customer);
            console.log(res.data);
            commit('NEW_CUSTOMER', customer);
        },
        async removeCustomer({commit}, id){
            const res = await axios.delete('/api/customer/delete/' + id);
            commit('DELETE_CUSTOMER', id);
        },
        updateCustomer({commit}, {id, cat}){
            // return axios.put('/api/customer/'+id).then(res =>{
            //     commit('EDIT_CUSTOMER', id)
            // })  
            try {
                let result = axios.post("/api/customer/update/"+id, customer)
                console.log(result.response.data)
                commit('EDIT_CUSTOMER', {id, cat})
              } catch (error) {
                console.error(error.response.data);    
              }
        }
    },
    mutations: {
        SET_CUSTOMER(state, customer) {
            state.customer = customer
        },
        NEW_CUSTOMER(state, customer) {
            // let customer = state.customer.concat(customer)
            // state.customer = customer
            state.customer = state.customer.unshift(customer)
        },
        DELETE_CUSTOMER(state, id) {
            state.customer = state.customer.filter(f => {
                return f.id !== id
            })
        },
        EDIT_CUSTOMER(state, {id, cat}) {
            // const index = state.customer.findIndex(f => f.id === customer.id)
            // if(index !== -1) {
            //     state.customer.splice(index, 1, customer)
            // }
            // state.customer.find(item => item.id == id) = customer
            state.customer.findIndex(f => f.id === id) = cat
            for (var i = 0; i < customer.length; i++) {
                if(customer[i].id == id)
                {
                    customer = state.customer
                }
            }
        }
    },
}