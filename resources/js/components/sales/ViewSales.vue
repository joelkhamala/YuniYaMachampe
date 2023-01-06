<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="card-body table-responsive">
                    
                    <h3 class="text-center">Product Sales</h3>
                    <table class="table table-bordered">
                      <div class="col-12" v-if="Object.keys(validationErrors).length > 0">
                                 <div class="alert alert-danger">
                                     <ul class="mb-0">
                                         <li v-for="(value, key) in validationErrors" :key="key">{{ value[0] }}</li>
                                     </ul>
                                 </div>
                             </div>
                        <thead>
                        <tr>
                            <th>Sale ID</th>
                            <th>Product Name</th>
                            <th>Customer Name</th>
                            <th>Quantity Ordered</th>
                            <th>Price Per Unit</th>
                            <th>Total Sale Value</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody v-if="sales.length>0">
                            <tr v-for="sale in sales" :key="sale.id">
                                <td>{{sale.id}}</td>
                                <td><span v-for="prod in product" :key="prod.id"><span v-if="prod.id == sale.product_id">{{prod.productname}}</span></span></td>
                                <td><span v-if="customer.length > 0"><span v-for="cust in customer" :key="cust.id"><span v-if="cust.id == sale.customer_id"><span v-for="user in users" :key="user.id"><span v-if="user.id == cust.user_id">{{user.firstname}} {{user.lastname}}</span></span></span></span></span></td>
                                <td>{{ sale.quantity }}</td>
                                <td>Kshs. {{ sale.price.toLocaleString('en-US') }}</td>
                                <td>Kshs. {{ (sale.price * sale.quantity).toLocaleString('en-US') }}</td>
                                <td>
                                    <div class="btn-group" role="group">
                                    <!-- <router-link :to="{name: 'editorder', params: { id: sale.id }}" class="btn btn-primary">Edit
                                    </router-link> -->
                                    <button class="btn btn-danger" @click="deletecategories(sale.id)">Delete</button>
                                    </div>
                                </td>
                            </tr>
                            <!-- <tr v-for="sale in order" :key="sale.id">
                                <td>{{ sale.id }}</td>
                                <td><span v-if="product.length > 0"><span v-for="prod in product" :key="prod.id"><span v-if="prod.id == sale.product_id">{{prod.productname}}</span></span></span></td>
                                <td><span v-if="customer.length > 0"><span v-for="cust in customer" :key="cust.id"><span v-if="cust.id == sale.customer_id"><span v-for="user in users" :key="user.id"><span v-if="user.id == cust.user_id">{{user.firstname}} {{user.lastname}}</span></span></span></span></span></td>
                                <td>{{ sale.quantity }}</td>
                                <td>Kshs. {{ sale.price.toLocaleString('en-US') }}</td>
                                <td>Kshs. {{ (sale.price * sale.quantity).toLocaleString('en-US') }}</td>
                                <td>
                                    <div class="btn-group" role="group">
                                    <router-link :to="{name: 'editorder', params: { id: sale.id }}" class="btn btn-primary">Edit
                                    </router-link>
                                    <button class="btn btn-danger" @click="deletecategories(sale.id)">Delete</button>
                                    </div>
                                </td>
                            </tr> -->
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td colspan="7">
                                <div class="alert alert-danger text-center">
                                        No Data Found
                                </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
 </template>
 <script>
    import {mapGetters} from 'vuex';
 
    export default {
        name: 'viewsales',
        data() {
            return {
             sale:
             {
                id:''
             },
             validationErrors:{},
            }
        },
        computed: {
        ...mapGetters(["product", "users", "customer", "order","sales"])
        },
        created() {
            this.$store.dispatch("viewSales")
        },
        methods: {
            deletesale(id) {
                this.$swal({
                  title: 'Are you sure you want to delete order number '+id+' from database?',
                  text: 'You can\'t revert your action',
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonText: 'Yes Delete it!',
                  cancelButtonText: 'No, Keep it!',
                  showCloseButton: true,
                  showLoaderOnConfirm: true
               }).then((result) => {
                  if(result.value) {
                     this.$store.dispatch("removeProduct", id)
                     this.$swal('Deleted', 'You successfully deleted order number '+id, 'success')
                  } else {
                     this.$swal('Cancelled', 'Your sale record is still intact', 'info')
                  }
               })
            },
        }
    }
 </script>
 <style scoped>
 ul.alert{
    list-style: none;
 }
 </style>