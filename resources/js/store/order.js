import axios from "axios";

export default{
    state: {
        order: [],
    },
    getters: {
        order(state) {
            return state.order
        }
    },
    actions: {
        orderEdit({ state }, id){
            // do something with state.someValue and the arg
            return state.order.find(f => f.id == id)
         },
        async viewOrders({commit}){
            const { data } = await axios.get('/api/order');
            commit('SET_ORDER', data);
        },
        async newOrder({commit}, order){
            const res = await axios.post('/api/order/add', order);
            console.log(res.data);
            commit('NEW_ORDER', order);
        },
        async removeOrder({commit}, id){
            const res = await axios.delete('/api/order/delete/' + id);
            commit('DELETE_ORDER', id);
        },
        async updateOrder({commit}, order){
            // return axios.put('/api/order/'+id).then(res =>{
            //     commit('EDIT_ORDER', id)
            // })  
            try {
                let result = await axios.put("/api/order/edit/"+id, order)
                console.log(result.response.data)
                commit('EDIT_ORDER', order)
              } catch (error) {
                console.error(error.response.data);    
              }
        }
    },
    mutations: {
        SET_ORDER(state, order) {
            state.order = order
        },
        NEW_ORDER(state, order) {
            // let order = state.order.concat(order)
            // state.order = order
            state.order = state.order.unshift(order)
        },
        DELETE_ORDER(state, id) {
            state.order = state.order.filter(f => {
                return f.id !== id
            })
        },
        EDIT_ORDER(state, order) {
            const index = state.order.findIndex(f => f.id === order.id)
            if(index !== -1) {
                state.order.splice(index, 1, order)
            }
        }
    },
}