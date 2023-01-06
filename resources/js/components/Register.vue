<template>
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-12 col-md-6 offset-md-3">
                <div class="card shadow sm">
                    <div class="card-body">
                        <h1 class="text-center">Register</h1>
                        <hr/>
                        <form action="javascript:void(0)" @submit="register" class="row" method="post">
                            <div class="col-12" v-if="Object.keys(validationErrors).length > 0">
                                <div class="alert alert-danger">
                                    <ul class="mb-0">
                                        <li v-for="(value, key) in validationErrors" :key="key">{{ value[0] }}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="form-group col-12">
                                <label for="firstname" class="font-weight-bold">First Name</label>
                            <input id="firstname" type="text" class="form-control" name="firstname" v-model="user.firstname" required autocomplete="firstname" autofocus>
                            </div>

                            <div class="form-group col-12">
                                <label for="middlename" class="font-weight-bold">Middle Name</label>
                            <input id="middlename" type="text" class="form-control" name="middlename" v-model="user.middlename" required autocomplete="middlename" autofocus>
                            </div>

                            <div class="form-group col-12">
                                <label for="lastname" class="font-weight-bold">Last Name</label>
                            <input id="lastname" type="text" class="form-control" name="lastname" v-model="user.lastname" required autocomplete="lastname" autofocus>
                            </div>

                            <div class="form-group col-12">
                                <label for="username" class="font-weight-bold">User Name</label>
                            <input id="username" type="text" class="form-control" name="username" v-model="user.username" required autocomplete="username" autofocus>
                            </div>

                            <div class="form-group col-12 my-2">
                                <label for="email" class="font-weight-bold">Email</label>
                                <input type="text" name="email" v-model="user.email" id="email" placeholder="Enter Email" class="form-control">
                            </div>

                            <div class="form-group col-12 my-2">
                                <label for="role" class="font-weight-bold">Role</label>
                                <select id="role" type="role" class="form-control" name="role" v-model="user.role" required autocomplete="role">
                                    <option value="">Choose...</option>
                                    <option value="admin">Administrator</option>
                                    <option value="customer">Customer</option>
                                </select>
                            </div>
                            <div class="form-group col-12">
                                <label for="password" class="font-weight-bold">Password</label>
                                <input type="password" name="password" v-model="user.password" id="password" placeholder="Enter Password" class="form-control">
                            </div>

                            <div class="form-group col-12 my-2">
                                <label for="password_confirmation" class="font-weight-bold">Confirm Password</label>
                                <input type="password" name="password_confirmation" v-model="user.password_confirmation" id="password_confirmation" placeholder="Enter Password" class="form-control">
                            </div>
                            <div class="col-12 mb-2">
                                <button type="submit" :disabled="processing" class="btn btn-primary btn-block">
                                    {{ processing ? "Please wait" : "Register" }}
                                </button>
                            </div>
                            <div class="col-12 text-center">
                                <label>Already have an account? <router-link :to="{name:'login'}">Login Now!</router-link></label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'register',
    data(){
        return {
            user:{
                firstname:'',
                middlename:'',
                lastname:'',
                username:'',
                email:'',
                role:'',
                password:'',
                password_confirmation:''
            },
            validationErrors:{},
            processing:false
        }
    },
    methods:{
        ...mapActions({
            signIn:'auth/login'
        }),
        async register(){
            this.processing = true
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('/register',this.user).then(response=>{
                this.validationErrors = {}
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
        }
    }
}
</script>