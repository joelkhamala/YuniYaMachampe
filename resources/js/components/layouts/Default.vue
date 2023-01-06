<template>
    <div>
       <!-- Vertical navbar -->
       <div class="vertical-nav bg-white noclass" :class="{ active: isActive }" id="sidebar">
          <div class="mysidebar">
            <div class="py-4 px-3 mb-4 bg-light">
             <div class="media d-flex align-items-center">
                <img src="/images/avatar.png" alt="..." width="65" class="mr-3 rounded-circle img-thumbnail shadow-sm">
                <div class="media-body">
                   <h4 class="m-0">&nbsp; <b>{{user.firstname}} {{user.lastname}}</b></h4>
                   <p class="font-weight-light text-muted mb-0">&nbsp;  {{user.role}}</p>
                </div>
             </div>
          </div>
          <p class="text-gray font-weight-bold text-uppercase px-3 small pb-2 mb-0">Main</p>
          <ul class="nav flex-column bg-white mb-0">
             <li class="nav-item">
                <router-link class="nav-link text-dark" :to="{name:'dashboard'}"><i class="fa fa-th-large mr-3 text-primary fa-fw"></i>Home</router-link>
             </li>
             <li class="nav-item">
                <!-- <router-link class="nav-link text-dark" :to="{name:'viewcategory'}"><i class="fa fa-plus mr-3 text-primary fa-fw"></i>View Categories</router-link> -->
             </li>
             <li class="nav-item">
                  <a class="nav-link collapsed text-dark" data-toggle="collapse" href="#collapseCategories" role="button" aria-expanded="false" aria-controls="collapseCategories">
                     <i class="fa fa-list-alt mr-3 text-primary fa-fw"></i> Categories
                  </a>
               <div class="collapse" id="collapseCategories">
                  <div class="bg-light">
                     <router-link class="nav-link text-dark ml-3" :to="{name:'addcategory'}"><i class="fa fa-plus mr-1 text-primary fa-fw"></i>Add Category</router-link>
                     <router-link class="nav-link text-dark ml-3" :to="{name:'viewcategories'}"><i class="fa fa-plus mr-1 text-primary fa-fw"></i>View Categories</router-link>
                  </div>
               </div>
             </li>
             <li class="nav-item">
                  <a class="nav-link collapsed text-dark" data-toggle="collapse" href="#collapseProducts" role="button" aria-expanded="false" aria-controls="collapseProducts">
                     <i class="fa fa-leaf mr-3 text-primary fa-fw"></i> Products
                  </a>
               <div class="collapse" id="collapseProducts">
                  <div class="bg-light">
                     <router-link class="nav-link text-dark ml-3" :to="{name:'addproduct'}"><i class="fa fa-plus mr-1 text-primary fa-fw"></i>Add Product</router-link>
                     <router-link class="nav-link text-dark ml-3" :to="{name:'viewproducts'}"><i class="fa fa-plus mr-1 text-primary fa-fw"></i>View Products</router-link>
                  </div>
               </div>
             </li>
             <li class="nav-item">
                  <a class="nav-link collapsed text-dark" data-toggle="collapse" href="#collapseSuppliers" role="button" aria-expanded="false" aria-controls="collapseSuppliers">
                     <i class="fa fa-car mr-3 text-primary fa-fw"></i> Suppliers
                  </a>
               <div class="collapse" id="collapseSuppliers">
                  <div class="bg-light">
                     <router-link class="nav-link text-dark ml-3" :to="{name:'addsupplier'}"><i class="fa fa-plus mr-1 text-primary fa-fw"></i>Add Supplier</router-link>
                     <router-link class="nav-link text-dark ml-3" :to="{name:'viewsuppliers'}"><i class="fa fa-plus mr-1 text-primary fa-fw"></i>View Suppliers</router-link>
                  </div>
               </div>
             </li>
             <li class="nav-item">
                <a href="#" class="nav-link text-dark ">
                <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
                Stock List
                </a>
             </li>
             </ul>
             <p class="text-gray font-weight-bold text-uppercase px-3 small py-2 mb-0">Users</p>
             <ul class="nav flex-column bg-white mb-0">
             <li class="nav-item">
                  <a class="nav-link collapsed text-dark" data-toggle="collapse" href="#collapseCustomers" role="button" aria-expanded="false" aria-controls="collapseCustomers">
                     <i class="fa fa-users mr-3 text-primary fa-fw"></i> Manage Users
                  </a>
                  <div class="collapse" id="collapseCustomers">
                     <div class="bg-light">
                        <router-link class="nav-link text-dark ml-3" :to="{name:'addcustomer'}"><i class="fa fa-plus mr-1 text-primary fa-fw"></i>Add Customer</router-link>
                        <router-link class="nav-link text-dark ml-3" :to="{name:'viewcustomers'}"><i class="fa fa-plus mr-1 text-primary fa-fw"></i>View Customers</router-link>
                     </div>
                  </div>
             </li>
          </ul>
          <p class="text-gray font-weight-bold text-uppercase px-3 small py-2 mb-0">Actions</p>
             <ul class="nav flex-column bg-white mb-0">
             <li class="nav-item">
                  <a class="nav-link collapsed text-dark" data-toggle="collapse" href="#collapseOrders" role="button" aria-expanded="false" aria-controls="collapseOrders">
                     <i class="fa fa-sitemap mr-3 text-primary fa-fw"></i> Manage Orders
                  </a>
                  <div class="collapse" id="collapseOrders">
                     <div class="bg-light">
                        <router-link class="nav-link text-dark ml-3" :to="{name:'addorder'}"><i class="fa fa-plus mr-1 text-primary fa-fw"></i>Add Orders</router-link>
                        <router-link class="nav-link text-dark ml-3" :to="{name:'vieworders'}"><i class="fa fa-plus mr-1 text-primary fa-fw"></i>View Orders</router-link>
                     </div>
                  </div>
             </li>
             <li class="nav-item">
                  <a class="nav-link collapsed text-dark" data-toggle="collapse" href="#collapseSales" role="button" aria-expanded="false" aria-controls="collapseCustomers">
                     <i class="fa fa-pie-chart mr-3 text-primary fa-fw"></i> Manage Sales
                  </a>
                  <div class="collapse" id="collapseSales">
                     <div class="bg-light">
                        <router-link class="nav-link text-dark ml-3" :to="{name:'addsales'}"><i class="fa fa-plus mr-1 text-primary fa-fw"></i>Add Sales</router-link>
                        <router-link class="nav-link text-dark ml-3" :to="{name:'viewsales'}"><i class="fa fa-plus mr-1 text-primary fa-fw"></i>View Sales</router-link>
                     </div>
                  </div>
             </li>
          </ul>
          <p class="text-gray font-weight-bold text-uppercase px-3 small py-2 mb-0">Statistics</p>
          <ul class="nav flex-column bg-white mb-0">
             <li class="nav-item">
                <a href="#" class="nav-link text-dark ">
                <i class="fa fa-usd mr-3 text-primary fa-fw"></i>
                Invoices
                </a>
             </li>
             <li class="nav-item">
               </li>
             <li class="nav-item mb-4">
                <a href="#" class="nav-link text-dark ">
                <i class="fa fa-sign-out mr-3 text-primary fa-fw"></i>
                Logout
                </a>
             </li>
          </ul>
          </div>
       </div>
       <!-- End vertical navbar -->
       <!-- Page content holder -->
       <div class="page-content noclass" :class="{ active: isActive }" id="content">
          <nav class="navbar navbar-expand-lg navbar-dark bg-success">
             <div class="container-fluid">
                <a class="navbar-brand" href="http://localhost:8000" target="_blank">MamaMboga Inventory</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                   <ul class="navbar-nav me-auto">
                      <li class="nav-item">
                         <router-link :to="{name:'dashboard'}" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
                      </li>
                   </ul>
                   <div class="d-flex">
                      <ul class="navbar-nav">
                         <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{ user.name }}
                            </a>
                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                               <a class="dropdown-item" href="javascript:void(0)" @click="logout">Logout</a>
                            </div>
                         </li>
                      </ul>
                   </div>
                </div>
             </div>
          </nav>
          <main class="mt-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <button id="sidebarCollapse" type="button" class="btn btn-light bg-white rounded-pill shadow-sm mb-4" @click="toggleClass"><i class="fa fa-hand-o-left fa-2x mr-2" v-if="isActive==false"></i><i class="fa fa-hand-o-right fa-2x mr-2" v-else></i></button>
                    </div>
                </div>
            </div>
             <router-view></router-view>
          </main>
       </div>
    </div>
 </template>
 <script>
    import {mapActions,mapGetters} from 'vuex'
    
    export default {
        name:"default-layout",
        data(){
            return {
                user:this.$store.state.auth.user,
                isActive:false
            }
        },
        computed: {
        ...mapGetters(["productRestock"])
        },
        created(){
         this.$store.dispatch("restockProducts")
        },
        methods:{
            ...mapActions({
                signOut:"auth/logout"
            }),
            async logout(){
                await axios.post('/logout').then(({data})=>{
                    this.signOut()
                    this.$router.push({name:"login"})
                })
            },
            toggleClass(event) {
                this.isActive = !this.isActive
                var checkboxes = document.getElementsByClassName("noclass");
                for (var i=0; i<checkboxes.length; i++) {
                    checkboxes[i].classList.add("active");
                }
                
                event.target.classList.remove("active");
          }
        }
    }
    
    
 </script>
 <style scoped>
   body {
    background: #599fd9;
    background: -webkit-linear-gradient(to right, #599fd9, #c2e59c);
    background: linear-gradient(to right, #599fd9, #c2e59c);
    /* min-height: 100vh;
    overflow-x: hidden; */
    }
    .separator {
    margin: 3rem 0;
    border-bottom: 1px dashed #fff;
    }
    .text-uppercase {
    letter-spacing: 0.1em;
    }
    .text-gray {
    color: #aaa;
    }

    /* .mysidebar
    {
      position: absolute;
      min-height: 100vh;
      overflow-y: scroll;
    } */
    .vertical-nav {
    position: absolute;
    min-width: 17rem;
    /* width: 17rem; */
    min-height: 100vh;
    top: 0;
    left: 0;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.4s;
    }
    .page-content {
      position: fixed;
    width: calc(100% - 17rem);
    margin-left: 17rem;
    transition: all 0.4s;
    }
    /* for toggle behavior */
    #sidebar.active {
    margin-left: -17rem;
    }
    #content.active {
    width: 100%;
    margin: 0;
    }
    @media (max-width: 768px) {
      .vertical-nav {
         height: auto;
      }
      #sidebar {
         margin-left: -18rem;
      }
      #sidebar.active {
         margin-left: 0;
      }
      #content {
         width: 100%;
         margin: 0;
      }
      #content.active {
         margin-left: 17rem;
         width: calc(100% - 17rem);
      }
    }
 </style>