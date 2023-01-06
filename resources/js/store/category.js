import axios from "axios";
import router from "@/router";

export default{
    state: {
        category: [],
        users:[],
    },
    getters: {
        category(state) {
            return state.category
        },
        users(state)
        {
            return state.users
        }
    },
    actions: {
        async viewUsers({commit}){
            const { data } = await axios.get('/api/users');
            commit('SET_USERS', data);
        },
        async viewCategories({commit}){
            const { data } = await axios.get('/api/category');
            commit('SET_CATEGORY', data);
        },
        async editCategories({commit}, id){
            const { data } = await axios.get('/api/category/edit/'+id);
            commit('SET_EDIT_CATEGORY', data);
        },
        async newCategory({commit}, category){
            const res = await axios.post('/api/category/add', category);
            console.log(res.data);
            commit('NEW_CATEGORY', category);
        },
        async removeCategory({commit}, id){
            const res = await axios.delete('/api/category/delete/' + id);
            commit('DELETE_CATEGORY', id);
        },
        updateCategory({commit}, {id, cat}){
            // return axios.put('/api/category/'+id).then(res =>{
            //     commit('EDIT_CATEGORY', id)
            // })  
            try {
                let result = axios.post("/api/category/update/"+id, category)
                console.log(result.response.data)
                commit('EDIT_CATEGORY', {id, cat})
              } catch (error) {
                console.error(error.response.data);    
              }
        }
    },
    mutations: {
        SET_CATEGORY(state, category) {
            state.category = category
        },
        SET_EDIT_CATEGORY(state, category_id)
        {
            state.category.category.find(f => f.id == category_id) = category
        },
        SET_USERS (state, value) {
            state.users = value
        },
        NEW_CATEGORY(state, category) {
            // let categories = state.categories.concat(category)
            // state.categories = categories
            state.category = state.category.unshift(category)
        },
        DELETE_CATEGORY(state, id) {
            state.category = state.category.filter(f => {
                return f.id !== id
            })
        },
        EDIT_CATEGORY(state, {id, cat}) {
            // const index = state.category.findIndex(f => f.id === category.id)
            // if(index !== -1) {
            //     state.category.splice(index, 1, category)
            // }
            // state.category.find(item => item.id == id) = category
            state.category.findIndex(f => f.id === id) = cat
            for (var i = 0; i < category.length; i++) {
                if(category[i].id == id)
                {
                    category = state.category
                }
            }
        }
    },
}