<template>
    <section>
		<div class="ad-log-main">
			<div class="ad-log-in">
				<div class="ad-log-in-logo">
					<a href="index-2.html"><img src="images/logo.png" alt=""></a>
				</div>
				<div class="ad-log-in-con">
                    <div class="log-in-pop-right">
                        <h4>Login</h4>
                        <p>Don't have an account? Create your account. It's take less then a minutes</p>
                        <form class="s12" action="javascript:void(0)" @submit="login" method="post">
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
                            <div>
                                <div class="input-field s12">
                                    <input type="email" v-model="auth.email" name="email" id="email" class="validate">
                                    <label class="" for="email">Email</label>
                                </div>
                            </div>
                            <div>
                                <div class="input-field s12">
                                    <input type="password" v-model="auth.password" name="password" id="password" class="validate">
                                    <label>Password</label>
                                </div>
                            </div>
                            <div>
                                <div class="s12 log-ch-bx">
                                    <p>
                                        <input type="checkbox" id="test5">
                                        <label for="test5">Remember me</label>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div class="input-field s4">
                                    <button
                                        type="submit"
                                        :disabled="processing"
                                        @click="login"
                                        class="btn-block btn-lg waves-effect waves-light log-in-btn pt-3 pb-3"
                                        style="border: 0;"
                                    >
                                        {{ processing ? "Authenticating..." : "Login" }}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div class="input-field s12"> <a href="admin-forgot.html">Forgot password</a> | <a href="#">Create a new account</a> </div>
                            </div>
                        </form>
                    </div>
				</div>
			</div>
		</div>
   </section>
</template>

<script>
import { mapActions } from 'vuex'

export default{
    name: 'adminLogin',
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
            signIn:'admin/login'
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

<style scoped>
a {
    text-decoration: none;
}
</style>