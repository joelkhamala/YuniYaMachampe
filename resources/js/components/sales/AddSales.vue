<template>
   <div class="container h-100">
       <div class="row h-100 align-items-center">
           <div class="col-md-12 mx-auto">
               <div class="card shadow sm">
                   <h1 class="text-center h4 mt-4">Add Sales Data</h1>
                   <hr/>
                   <div class="card-body">
                       <form action="javascript:void(0)" @submit="addsaless" class="row" method="post">
                           <div class="col-12" v-if="Object.keys(validationErrors).length > 0">
                               <div class="alert alert-danger">
                                   <ul class="mb-0">
                                       <li v-for="(value, key) in validationErrors" :key="key">{{ value[0] }}</li>
                                   </ul>
                               </div>
                           </div>
                           <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Product Name</th>
                            <th>Customer Name</th>
                            <th>Quantity Ordered</th>
                            <th>Price Per Unit</th>
                            <th>Total Sale Value</th>
                            <th>Select Order</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody v-if="order.length>0">
                        <tr v-for="ord in order" :key="ord.id">
                            <td>{{ ord.id }}</td>
                            <!-- <td><span v-if="product.length > 0" v-for="prod in product" :key="prod.id"><span v-if="prod.id == ord.category_id">{{ prod.categoryname }}</span></span><span v-else>No Category</span></td> -->
                            <td><span v-for="prod in product" :key="prod.id"><span v-if="prod.id == ord.product_id">{{ prod.productname }}</span></span></td>
                            <td><span v-if="customer.length > 0"><span v-for="cust in customer" :key="cust.id"><span v-if="cust.id == ord.customer_id"><span v-for="user in users" :key="user.id"><span v-if="user.id == cust.user_id">{{user.firstname}} {{user.lastname}}</span></span></span></span></span></td>
                            <td>{{ ord.quantity }}</td>
                            <td>Kshs. {{ ord.price.toLocaleString('en-US') }}</td>
                            <td>Kshs. {{ (ord.price * ord.quantity).toLocaleString('en-US') }}</td>
                            <td>
                              <div class="form-group">
                                <!-- <label for="order_id" class="font-weight-bold">Select Order</label> -->
                                 <select v-if="order.length > 0" v-model="sales.order_id" class="form-control" name="order_id" id="order_id" required>
                                       <option v-for="ord in order" :key="ord.id" :value="ord.id"><span v-for="custom in customer" :key="custom.id"><span v-if="custom.id == ord.customer_id"><span v-for="person in users" :key="person.id"><span v-if="custom.user_id == person.id">{{person.firstname}} {{person.lastname}}</span></span></span></span></option>
                                 </select>
                                 <input v-else type="text" class="form-control" value="No Data Found" disabled>
                              </div>
                           </td>
                            <td>
                                <div class="btn-group" role="group">
                                    <button type="submit" :disabled="processing" class="btn btn-primary btn-block">
                                       {{ processing ? "Please wait" : "Add sales" }}
                                    </button>
                                    <!-- <router-link :to="{name: 'editsale', params: { id: ord.id }}" class="btn btn-primary">Edit
                                    </router-link> -->
                                    <button class="btn btn-danger" @click="deletesale(ord.id)">Delete</button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td colspan="8">
                                <div class="alert alert-danger text-center">
                                        No Data Found
                                </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
   name:'addsales',
   data(){
       return {
           sales:{
               order_id:'',
           },
           validationErrors:{},
           processing:false
       }
   },
   computed:
   {
       ...mapGetters(["order","customer","users","product"])
   },
   created() {
            this.$store.dispatch("viewOrders")
        },
   methods:{
       async addsaless(){
           this.processing = true
           await axios.get('/sanctum/csrf-cookie')
           await axios.post('/api/sales/add',this.sales).then(response=>{
               this.validationErrors = {}
               this.$toast.success("Sales data added successfully", {
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