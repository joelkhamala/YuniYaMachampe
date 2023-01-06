<template>
    <div class="container">
       <h2 class="font-weight-bold mb-2">Latest Statistics</h2>
       <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
       <div class="row pb-5">
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
             <!-- Card-->
             <div class="card rounded shadow-sm border-0">
                <div class="card-body p-5">
                   <i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                   <h5>Products Sales</h5>
                   <span class="text-muted h5 font-weight-bold">{{product.length}} in stock</span>
                   <div class="progress rounded-pill">
                      <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;" class="progress-bar rounded-pill"></div>
                   </div>
                </div>
             </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
             <!-- Card -->
             <div class="card rounded shadow-sm border-0">
                <div class="card-body p-5">
                   <i class="fa fa-tasks fa-2x mb-3 text-success"></i>
                   <h5>Completed Orders</h5>
                   <p class="small text-muted font-italic">{{order.length}}</p>
                   <div class="progress rounded-pill">
                      <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;" class="progress-bar bg-success rounded-pill"></div>
                   </div>
                </div>
             </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
             <!-- Card -->
             <div class="card rounded shadow-sm border-0">
                <div class="card-body p-5">
                   <i class="fa fa-user-circle-o fa-2x mb-3 text-info"></i>
                   <h5>Users</h5>
                   <p class="small text-muted font-italic">{{users.length}}</p>
                   <div class="progress rounded-pill">
                      <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;" class="progress-bar bg-info rounded-pill"></div>
                   </div>
                </div>
             </div>
          </div>
          <!-- Card -->
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
             <div class="card rounded shadow-sm border-0">
                <div class="card-body p-5">
                   <i class="fa fa-shopping-bag fa-2x mb-3 text-warning"></i>
                   <h5>Customers</h5>
                   <p class="small text-muted font-italic">{{customer.length}}</p>
                   <div class="progress rounded-pill">
                      <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;" class="progress-bar bg-warning rounded-pill"></div>
                   </div>
                </div>
             </div>
          </div>
       </div>
       <!-- Demo content -->
    </div>
 </template>
 <script>
   import { mapGetters } from 'vuex';
    export default {
        name:"dashboard",
        data(){
            return {
                user:this.$store.state.auth.user
            }
        },
        computed: {
        ...mapGetters(["order","users","customer","product","category","users","productRestock"])
        },
        created(){
         this.$store.dispatch("viewOrders","viewCustomers", "viewCategories","viewProducts", "viewUsers", "viewSuppliers","restockProducts")
        },
        methods:
        {
         
        }
    }
 </script>