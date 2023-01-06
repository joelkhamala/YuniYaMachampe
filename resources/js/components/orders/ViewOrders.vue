<template>
    <div>
       <div class="container">
          <div class="card">
             <div class="card-body table-responsive">
                <h3 class="text-center">Unsold Orders</h3>
                <br/>
                <table class="table table-bordered">
                   <thead>
                      <tr>
                         <th>Order ID</th>
                         <th>Product Name</th>
                         <th>Customer Name</th>
                         <th>Created At</th>
                         <th>Updated At</th>
                         <th>Actions</th>
                      </tr>
                   </thead>
                   <tbody v-if="order.length>0">
                      <tr v-for="ord in order" :key="ord.id">
                         <td>{{ ord.id }}</td>
                         <td><span v-if="product.length > 0"><span v-for="prod in product" :key="prod.id"><span v-if="prod.id == ord.product_id">{{prod.productname}}</span></span></span></td>
                         <td><span v-if="customer.length > 0"><span v-for="cust in customer" :key="cust.id"><span v-if="cust.id == ord.customer_id"><span v-for="user in users" :key="user.id"><span v-if="user.id == cust.user_id">{{user.firstname}} {{user.lastname}}</span></span></span></span></span></td>
                         <td>{{ ord.created_at }}</td>
                         <td>{{ ord.updated_at }}</td>
                         <td>
                            <div class="btn-group" role="group">
                               <router-link :to="{name: 'editorder', params: { id: ord.id }}" class="btn btn-primary">Edit
                               </router-link>
                               <button class="btn btn-danger" @click="deleteorders(ord.id)">Delete</button>
                            </div>
                         </td>
                      </tr>
                   </tbody>
                   <tbody v-else>
                     <tr>
                        <td colspan="6">
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
        name: 'vieworders',
        data() {
            return {}
        },
        computed: {
        ...mapGetters(["order","users","customer","product"])
        },
        created() {
            this.$store.dispatch("viewOrders")
        },
        methods: {
            deleteorders(id) {
               this.$swal({
                  title: 'Are you sure you want to delete order '+id+'?',
                  text: 'You can\'t revert your action',
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonText: 'Yes Delete it!',
                  cancelButtonText: 'No, Keep it!',
                  showCloseButton: true,
                  showLoaderOnConfirm: true
               }).then((result) => {
                  if(result.value) {
                     this.$store.dispatch("removeOrder", id)
                     this.$swal('Deleted', 'You successfully deleted this record', 'success')
                  } else {
                     this.$swal('Cancelled', 'Your record is still intact', 'info')
                  }
               })
            }
        }
    }
 </script>