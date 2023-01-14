import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from '@/store/auth'
import admin from '@/store/admin'

const store = createStore({
    plugins:[
        createPersistedState()
    ],
    modules:{
        auth,
        admin
    }
})

export default store