<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-9 mx-auto">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="text-center">Edit Supplier</h3>
                            <div class="row">
                                <div class="col-md-12">
                                    <form @submit="updatesupplier">
                                        <div class="form-group col-md-12 mb-4">
                                            <label for="suppliername" class="font-weight-bold">Supplier Title</label>
                                            <input type="text" class="form-control" v-model="supplier.suppliername" name="suppliername">
                                        </div>
                                        
                                        <div class="form-group col-md-12 mb-4">
                                            <label for="category_id" class="font-weight-bold">Supplier Category</label>
                                            <select v-if="category.length > 0" v-model="supplier.category_id" class="form-control" name="category_id" id="category_id" required>
                                                <option v-for="cat in category" :key="cat.id" :value="cat.id">{{cat.categoryname}}</option>
                                            </select>
                                            <input v-else type="text" class="form-control" value="No Data Found" disabled>
                                        </div>

                                        <div class="form-group col-md-12 mb-4">
                                            <label for="supplierdescription" class="font-weight-bold">Supplier Description</label>
                                            <input type="text" class="form-control" v-model="supplier.supplierdescription" name="supplierdescription">
                                        </div>

                                        <div class="form-group col-md-12 mb-4">
                                            <label for="contact" class="font-weight-bold">Supplier Contact</label>
                                            <input type="number" class="form-control" v-model="supplier.contact" name="contact">
                                        </div>

                                        <div class="form-group col-md-12 mb-4">
                                            <label for="address" class="font-weight-bold">Supplier Address</label>
                                            <input type="text" class="form-control" v-model="supplier.address" name="address">
                                        </div>
                                        <button type="submit" class="btn btn-primary">Update Supplier</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
    export default {
        data() {
            return {}
        },
        computed: {
            supplier(){
                return this.$store.state.supplier.supplier.find(f => f.id == this.$route.params.id)
            },
            ...mapGetters(["category"])
        },
        methods: {
            updatesupplier(){
                this.processing = true
                this.$axios.get('/sanctum/csrf-cookie')
                this.$axios.put(`http://127.0.0.1:8000/api/supplier/update/${this.$route.params.id}`, this.supplier)
                .then(response=>{
                    this.$toast.success("Supplier Details edited successfully", {
                        position: "bottom-left",
                    })
                    this.$router.push({name: 'dashboard'});
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
            },
            // updatesupplier() {
            //     this.axios
            //     .post(`http://127.0.0.1:8000/api/supplier/update/${this.$route.params.id}`, this.supplier)
            //     .then((response) => {
            //         this.$router.push({name: 'dashboard'});
            //     });
            // }
        }
    }
</script>