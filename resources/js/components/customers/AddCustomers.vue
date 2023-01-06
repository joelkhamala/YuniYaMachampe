<template>
    <div class="container">
        <div class="row">
            <div class="col-md-9 mx-auto">
                <div class="card shadow sm">
                    <div class="card-body">
                        <h1 class="text-center">Add Customer</h1>
                        <hr/>
                        <form action="javascript:void(0)" @submit="registerCustomer" class="row" method="post">
                            <div class="col-12" v-if="Object.keys(validationErrors).length > 0">
                                <div class="alert alert-danger">
                                    <ul class="mb-0">
                                        <li v-for="(value, key) in validationErrors" :key="key">{{ value[0] }}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="firstname" class="font-weight-bold">First Name</label>
                            <input id="firstname" type="text" class="form-control" name="firstname" v-model="customer.firstname" required autocomplete="firstname" autofocus>
                            </div>

                            <div class="form-group col-md-4">
                                <label for="middlename" class="font-weight-bold">Middle Name</label>
                            <input id="middlename" type="text" class="form-control" name="middlename" v-model="customer.middlename" required autocomplete="middlename" autofocus>
                            </div>

                            <div class="form-group col-md-4">
                                <label for="lastname" class="font-weight-bold">Last Name</label>
                            <input id="lastname" type="text" class="form-control" name="lastname" v-model="customer.lastname" required autocomplete="lastname" autofocus>
                            </div>

                            <div class="form-group col-md-4">
                                <label for="username" class="font-weight-bold">User Name</label>
                            <input id="username" type="text" class="form-control" name="username" v-model="customer.username" required autocomplete="username" autofocus>
                            </div>

                            <div class="form-group col-md-4 my-2">
                                <label for="email" class="font-weight-bold">Email</label>
                                <input type="text" name="email" v-model="customer.email" id="email" placeholder="Enter Email" class="form-control">
                            </div>

                            <div class="form-group col-md-4 my-2">
                                <label for="role" class="font-weight-bold">Role</label>
                                <select type="text" id="role" class="form-control" name="role" v-model="customer.role" required autocomplete="role">
                                    <option value="admin">Administrator</option>
                                    <option value="customer">Customer</option>
                                </select>
                            </div>
                            <div class="form-group col-12">
                                <label for="password" class="font-weight-bold">Password</label>
                                <input type="password" name="password" v-model="customer.password" id="password" placeholder="Enter Password" class="form-control">
                            </div>

                            <div class="form-group col-12 my-2">
                                <label for="password_confirmation" class="font-weight-bold">Confirm Password</label>
                                <input type="password" name="password_confirmation" v-model="customer.password_confirmation" id="password_confirmation" placeholder="Enter Password" class="form-control">
                            </div>
                            <div class="col-4 mb-4 mt-2">
                                <button type="submit" :disabled="processing" class="btn btn-primary btn-block">
                                    {{ processing ? "Please wait" : "Add Customer" }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'addcustomer',
    data(){
        return {
            customer:{
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
        async registerCustomer(){
            this.processing = true
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('/api/customer/add',this.customer).then(response=>{
                this.validationErrors = {}
                this.$toast.success("Customer added successfully", {
                    position: "bottom-left",
                })
            }).catch(({response})=>{
                if(response.status===422){
                    this.validationErrors = response.data.errors
                }else{
                    this.validationErrors = {}
                    this.$toast.error(response.data.message, {
                        position: "bottom-left",
                        duration: 4000
                    })
                }
            }).finally(()=>{
                this.processing = false
            })
        }
    }
}
</script>