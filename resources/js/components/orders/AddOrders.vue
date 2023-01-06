<template>
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-md-10 mx-auto">
                <div class="card shadow sm">
                    <div class="card-header">
                        <h1 class="text-center h4 m-2">Add Order</h1>
                    </div>
                    <div class="card-body">
                        <form action="javascript:void(0)" @submit="addorders" class="row" method="post">
                            <div class="col-12" v-if="Object.keys(validationErrors).length > 0">
                                <div class="alert alert-danger">
                                    <ul class="mb-0">
                                        <li v-for="(value, key) in validationErrors" :key="key">{{ value[0] }}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="form-group col-md-3 mb-4">
                                <label for="customer_id" class="font-weight-bold">Customer Name</label>
                                <select v-if="customer.length > 0" v-model="order.customer_id" class="form-control" name="customer_id" id="customer_id" required>
                                    <option v-for="custom in customer" :key="custom.id" :value="custom.id"><span v-for="person in users" :key="person.id"><span v-if="custom.user_id == person.id">{{person.firstname}} {{person.lastname}}</span></span></option>
                                </select>
                                <input v-else type="text" class="form-control" value="No Data Found" disabled>
                            </div>

                            <div class="form-group col-md-3 mb-4">
                                <label for="product_id" class="font-weight-bold">Product Name</label>
                                <select v-if="product.length > 0" v-model="order.product_id" class="form-control" name="product_id" id="product_id" required>
                                    <option v-for="cat in product" :key="cat.id" :value="cat.id">{{cat.productname}}</option>
                                </select>
                                <input v-else type="text" class="form-control" value="No Data Found" disabled>
                            </div>

                            <div class="form-group col-md-3 mb-4">
                                <label for="quantity" class="font-weight-bold">Order Quantity</label>
                            <input id="quantity" type="number" class="form-control" name="quantity" v-model="order.quantity" required autocomplete="quantity" autofocus>
                            </div>

                            <div class="form-group col-md-3 mb-4">
                                <label for="price" class="font-weight-bold">Order Price</label>
                            <input id="price" type="number" class="form-control" name="price" v-model="order.price" required autocomplete="price" autofocus>
                            </div>

                            <div class="col-md-12 mb-4">
                                <div class="row">
                                    <div class="col-md-4">
                                        <button type="submit" :disabled="processing" class="btn btn-primary btn-block">
                                            {{ processing ? "Please wait" : "Add order" }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'addorder',
    data(){
        return {
            order:{
                customer_id:'',
                product_id:'',
                quantity:'',
                price:'',
            },
            validationErrors:{},
            processing:false
        }
    },
    computed:
    {
        ...mapGetters(["category", "customer", "users", "product"])
    },
    created(){
        this.$store.dispatch("viewUsers","viewCustomers")
    },
    methods:{
        async addorders(){
            this.processing = true
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('/api/order/add',this.order).then(response=>{
                this.validationErrors = {}
                this.$toast.success("Order added successfully", {
                    position: "bottom-left",
                    max:20
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