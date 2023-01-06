import axios from "axios";
import router from "@/router";

export default{
    state: {
        sales: [],
    },
    getters: {
        sales(state) {
            return state.sales
        }
    },
    actions: {
        salesEdit({ state }, id){
            // do something with state.someValue and the arg
            return state.sales.find(f => f.id == id)
         },
        async viewSales({commit}){
            const { data } = await axios.get('/api/sales');
            commit('SET_SALES', data);
        },
        async makeSale({commit}, id){
            await axios.get('/sanctum/csrf-cookie')
            await axios.post(`/api/sales/add?order_id=${id}`).then(response=>{
                this.$toast.success("Sales Data addedd successfully", {
                    position: "bottom-left",
                })
                commit('NEW_SALES', id);
            })
        },
        async removeProduct({commit}, id){
            const res = await axios.delete('/api/sales/delete/' + id);
            commit('DELETE_SALES', id);
        },
        async updateProduct({commit}, sales){
            // return axios.put('/api/sales/'+id).then(res =>{
            //     commit('EDIT_SALES', id)
            // })  
            try {
                let result = await axios.put("/api/sales/edit/"+id, sales)
                console.log(result.response.data)
                commit('EDIT_SALES', sales)
              } catch (error) {
                console.error(error.response.data);    
              }
        }
    },
    mutations: {
        SET_SALES(state, sales) {
            state.sales = sales
        },
        NEW_SALES(state, sales) {
            // let sales = state.sales.concat(sales)
            // state.sales = sales
            state.sales = state.sales.unshift(sales)
        },
        DELETE_SALES(state, id) {
            state.sales = state.sales.filter(f => {
                return f.id !== id
            })
        },
        EDIT_SALES(state, sales) {
            const index = state.sales.findIndex(f => f.id === sales.id)
            if(index !== -1) {
                state.sales.splice(index, 1, sales)
            }
        }
    },
}