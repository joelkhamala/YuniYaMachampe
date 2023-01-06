<template>
    <div>
       <div class="container">
          <div class="card">
             <div class="card-body table-responsive">
                <h3 class="text-center">All Categories</h3>
                <br/>
                <table class="table table-bordered">
                   <thead>
                      <tr>
                         <th>ID</th>
                         <th>Title</th>
                         <th>Description</th>
                         <th>Date Added</th>
                         <th>Actions</th>
                      </tr>
                   </thead>
                   <tbody v-if="category.length>0">
                      <tr v-for="cat in category" :key="cat.id">
                         <td>{{ cat.id }}</td>
                         <td>{{ cat.categoryname }}</td>
                         <td>{{ cat.categorydescription }}</td>
                         <td>{{ cat.created_at }}</td>
                         <td>
                            <div class="btn-group" role="group">
                               <router-link :to="{name: 'editcategory', params: { id: cat.id }}" class="btn btn-primary">Edit
                               </router-link>
                               <button class="btn btn-danger" @click="deletecategories(cat.id)">Delete</button>
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
        name: 'viewcategories',
        data() {
            return {}
        },
        computed: {
        ...mapGetters(["category"])
        },
        created() {
            this.$store.dispatch("viewCategories")
        },
        methods: {
            deletecategories(id) {
               this.$swal({
                  title: 'Are you sure you want to delete item?',
                  text: 'You can\'t revert your action',
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonText: 'Yes Delete it!',
                  cancelButtonText: 'No, Keep it!',
                  showCloseButton: true,
                  showLoaderOnConfirm: true
               }).then((result) => {
                  if(result.value) {
                     this.$store.dispatch("removeCategory", id)
                     this.$swal('Deleted', 'You successfully deleted this record', 'success')
                  } else {
                     this.$swal('Cancelled', 'Your record is still intact', 'info')
                  }
               })
            }
        }
    }
 </script>