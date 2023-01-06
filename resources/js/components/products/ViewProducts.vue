<template>
    <div>
       <div class="container">
          <div class="card">
             <div class="card-body table-responsive">
                <h3 class="text-center">All Products in Stock</h3>
                <div class="row mt-2 mb-4">
                   <div class="col-md-9 mx-auto">
                      <div v-if="productRestock.length>0">
                               <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                  <h4 class="alert-heading"><span class="fa fa-exclamation-circle"></span> &nbsp; Warning!!</h4>
                                  <hr>
                                  <div v-for="pro in productRestock" :key="pro.index">
                                     <ul>
                                        <li v-if="pro.productname != ''">Please add more <b class="font-weight-bold">{{pro.productname}}</b> in stock</li>
                                     </ul>
                                  </div>
                                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                               </div>
                            </div>
                   </div>
                </div>
                <table class="table table-bordered">
                   <thead>
                      <tr>
                         <th>ID</th>
                         <th>Product Name</th>
                         <th>Product Category</th>
                         <th>Product Description</th>
                         <th>Quantity</th>
                         <th>Lowest Limit</th>
                         <th>Price Per Unit</th>
                         <th>Total Sale Value</th>
                         <th>Actions</th>
                      </tr>
                   </thead>
                   <tbody v-if="product.length>0">
                      <tr v-for="prod in product" :key="prod.id">
                         <td>{{ prod.id }}</td>
                         <td>{{ prod.productname }}</td>
                         <!-- <td><span v-if="category.length > 0" v-for="cat in category" :key="cat.id"><span v-if="cat.id == prod.category_id">{{ cat.categoryname }}</span></span><span v-else>No Category</span></td> -->
                         <td><span v-for="cat in category" :key="cat.id"><span v-if="cat.id == prod.category_id">{{ cat.categoryname }}</span></span></td>
                         <td>{{ prod.productdescription }}</td>
                         <td>{{ prod.quantity }}</td>
                         <td>{{ prod.lowestquantity }}</td>
                         <td>Kshs. {{ prod.price.toLocaleString('en-US') }}</td>
                         <td>Kshs. {{ (prod.price * prod.quantity).toLocaleString('en-US') }}</td>
                         <td>
                            <div class="btn-group" role="group">
                               <router-link :to="{name: 'editproduct', params: { id: prod.id }}" class="btn btn-primary">Edit
                               </router-link>
                               <button type="submit" class="btn btn-danger" @click="deleteproduct(prod.id,prod.productname)">Delete</button>
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
        name: 'viewproducts',
        data() {
            return {
                checkLimit:false
            }
        },
        computed: {
        ...mapGetters(["product", "category","productRestock"])
        },
        created() {
            this.$store.dispatch("viewProducts","restockProducts")
        },
        methods: {
            deleteproduct(id, productname) {
                this.$swal({
                  title: 'Are you sure you want to delete '+productname+' from database?',
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
                     this.$swal('Deleted', 'You successfully deleted '+productname, 'success')
                  } else {
                     this.$swal('Cancelled', 'Your product record is still intact', 'info')
                  }
               })
            }
        }
    }
 </script>
 <style scoped>
    ul.alert{
    list-style: none;
    }
 </style>