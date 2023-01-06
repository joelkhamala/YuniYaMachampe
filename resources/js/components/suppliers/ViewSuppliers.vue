<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="card-body table-responsive">
                    <h3 class="text-center">All Suppliers</h3><br/>
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Supplier Name</th>
                            <th>Product Category</th>
                            <th>Supplier Description</th>
                            <th>Supplier Phone Number</th>
                            <th>Supplier Address</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody v-if="supplier.length>0">
                            <tr v-for="sup in supplier" :key="sup.id">
                                <td>{{ sup.id }}</td>
                                <td>{{ sup.suppliername }}</td>
                                <!-- <td><span v-if="category.length > 0" v-for="cat in category" :key="cat.id"><span v-if="cat.id == sup.category_id">{{ cat.categoryname }}</span></span><span v-else>No Category</span></td> -->
                                <td><span v-for="cat in category" :key="cat.id"><span v-if="cat.id == sup.category_id">{{ cat.categoryname }}</span></span></td>
                                <td>{{ sup.supplierdescription }}</td>
                                <td>+254{{ sup.contact }}</td>
                                <td>{{ sup.address }}</td>
                                <td>
                                    <div class="btn-group" role="group">
                                        <router-link :to="{name: 'editsupplier', params: { id: sup.id }}" class="btn btn-primary">Edit
                                        </router-link>
                                        <button class="btn btn-danger" @click="deletesupplier(sup.id, sup.suppliername)">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td colspan="9">
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
        name: 'viewsuppliers',
        data() {
            return {}
        },
        computed: {
        ...mapGetters(["supplier", "category"])
        },
        created() {
            this.$store.dispatch("viewSuppliers")
        },
        methods: {
            deletesupplier(id, suppliername) {
                this.$swal({
                  title: 'Are you sure you want to remove ' + suppliername + '?',
                  text: 'You can\'t revert your action',
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonText: 'Yes, Remove Supplier',
                  cancelButtonText: 'No, Keep Supplier!',
                  showCloseButton: true,
                  showLoaderOnConfirm: true
               }).then((result) => {
                  if(result.value) {
                     this.$store.dispatch("removeSupplier", id)
                     this.$swal('Deleted', 'You successfully removed '+suppliername+' from your Suppliers database', 'success')
                  } else {
                     this.$swal('Cancelled', 'Your record is still intact', 'info')
                  }
               })
            }
        }
    }
</script>