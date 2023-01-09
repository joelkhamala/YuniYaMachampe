<template>
    <div class="log-in-pop mb-5 pb-5">
        <div class="log-in-pop-left">
            <h1>Hello...</h1>
            <p>
                Don't have an account? Create your account. It's take less then
                a minutes
            </p>
            <h4>Login with social media</h4>
            <ul>
                <li>
                    <a href="#"><i class="fa fa-facebook"></i> Facebook</a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-google"></i> Google+</a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-twitter"></i> Twitter</a>
                </li>
            </ul>
        </div>
        <div class="log-in-pop-right">
            <h4>Login</h4>
            <p>
                Don't have an account? Create your account. It's take less then
                a minutes
            </p>
            <form action="javascript:void(0)" @submit="login" class="row" method="post">
                <div
                    class="col-12"
                    v-if="Object.keys(validationErrors).length > 0"
                >
                    <div class="alert alert-danger">
                        <ul class="mb-0">
                            <li
                                v-for="(value, key) in validationErrors"
                                :key="key"
                            >
                                {{ value[0] }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="form-group col-12">
                    <label for="email" class="font-weight-bold">Email</label>
                    <input
                        type="text"
                        v-model="auth.email"
                        name="email"
                        id="email"
                        class="form-control"
                    />
                </div>
                <div class="form-group col-12 my-2">
                    <label for="password" class="font-weight-bold"
                        >Password</label
                    >
                    <input
                        type="password"
                        v-model="auth.password"
                        name="password"
                        id="password"
                        class="form-control"
                    />
                </div>
                <div class="col-12 mb-2">
                    <button
                        type="submit"
                        :disabled="processing"
                        class="btn btn-primary btn-block"
                    >
                        {{ processing ? "Please wait" : "Login" }}
                    </button>
                </div>
                <div class="col-12 text-center">
                    <label
                        >Don't have an account?
                        <router-link :to="{ name: 'register' }"
                            >Register Now!</router-link
                        ></label
                    >
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:"login",
    data(){
        return {
            auth:{
                email:"",
                password:""
            },
            validationErrors:{},
            processing:false
        }
    },
    methods:{
        ...mapActions({
            signIn:'auth/login'
        }),
        async login(){
            this.processing = true
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('/login',this.auth).then(({data})=>{
                this.signIn()
            }).catch(({response})=>{
                if(response.status===422){
                    this.validationErrors = response.data.errors
                }else{
                    this.validationErrors = {}
                    alert(response.data.message)
                }
            }).finally(()=>{
                this.processing = false
            })
        },
    }
}
</script>

<style>
a {
    text-decoration: none;
}
</style>
