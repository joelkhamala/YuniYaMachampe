import axios from "axios";
import router from "@/router";

export default{
    state: {
        users:[],
    },
    getters: {
        users(state)
        {
            return state.users
        }
    },
    actions: {
        viewUsers({commit}){
            const { data } = axios.get('/api/users');
            commit('SET_USERS', data);
        },
        
    },
    mutations: {
        SET_USERS (state, value) {
            state.users = value
        }
    },
}