<template>
    <div>
       <div class="container">
          <div class="card">
             <div class="card-body table-responsive">
                <h3 class="text-center">All Customers</h3>
                <br/>
                <table class="table table-bordered">
                   <thead>
                      <tr>
                         <th>Customer ID</th>
                         <th>Customer Name</th>
                         <th>Frequency of Purchase</th>
                         <th>Created At</th>
                         <th>Updated At</th>
                         <th>Actions</th>
                      </tr>
                   </thead>
                   <tbody v-if="customer.length>0">
                      <tr v-for="cust in customer" :key="cust.id">
                         <td>{{ cust.id }}</td>
                         <td><span v-for="user in users" :key="user.id"><span v-if="user.id == cust.user_id">{{user.firstname}} {{user.lastname}}</span></span></td>
                         <td>{{ cust.frequency_of_purchase }}</td>
                         <td>{{ cust.created_at }}</td>
                         <td>{{ cust.updated_at }}</td>
                         <td>
                            <div class="btn-group" role="group">
                               <!-- <router-link :to="{name: 'editcustomer', params: { id: cust.id }}" class="btn btn-primary">Edit
                               </router-link> -->
                               <button class="btn btn-danger" @click="deletecustomers(cust.id)">Delete</button>
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
        name: 'viewcustomers',
        data() {
            return {}
        },
        computed: {
        ...mapGetters(["customer","users","customer","product"])
        },
        created() {
            this.$store.dispatch("viewCustomers")
            this.$store.dispatch("viewUsers")
        },
        methods: {
            deletecustomers(id) {
               this.$swal({
                  title: 'Are you sure you want to delete customer?',
                  text: 'You can\'t revert your action',
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonText: 'Yes Delete it!',
                  cancelButtonText: 'No, Keep it!',
                  showCloseButton: true,
                  showLoaderOnConfirm: true
               }).then((result) => {
                  if(result.value) {
                     this.$store.dispatch("removeCustomer", id)
                     this.$swal('Deleted', 'You successfully deleted this record', 'success')
                  } else {
                     this.$swal('Cancelled', 'Your record is still intact', 'info')
                  }
               })
            }
        }
    }
 </script>