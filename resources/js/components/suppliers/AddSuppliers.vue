<template>
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-md-9 mx-auto">
                <div class="card shadow sm">
                    <div class="card-header">
                        <h1 class="text-center h4 m-2">Add Supplier</h1>
                    </div>
                    <div class="card-body">
                        <form ref="myForm" action="javascript:void(0)" @submit="addsuppliers" class="row" method="post">
                            <div class="col-12" v-if="Object.keys(validationErrors).length > 0">
                                <div class="alert alert-danger">
                                    <ul class="mb-0">
                                        <li v-for="(value, key) in validationErrors" :key="key">{{ value[0] }}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="form-group col-md-12 mb-4">
                                <label for="suppliername" class="font-weight-bold">Supplier Name</label>
                            <input id="suppliername" type="text" class="form-control" name="suppliername" v-model="supplier.suppliername" required autocomplete="suppliername" autofocus>
                            </div>

                            <div class="form-group col-md-4 mb-4">
                                <label for="category_id" class="font-weight-bold">Supplier Product Category</label>
                                <select v-if="category.length > 0" v-model="supplier.category_id" class="form-control" name="category_id" id="category_id" required>
                                    <option v-for="cat in category" :key="cat.id" :value="cat.id">{{cat.categoryname}}</option>
                                </select>
                                <input v-else type="text" class="form-control" value="No Data Found" disabled>
                            </div>

                            <div class="form-group col-md-4 mb-4">
                                <label for="contact" class="font-weight-bold">Supplier Contact</label>
                            <input id="contact" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength = "10" type="number" class="form-control" name="contact" v-model="supplier.contact" required autocomplete="contact" autofocus>
                            </div>

                            <div class="form-group col-md-4 mb-4">
                                <label for="address" class="font-weight-bold">Supplier Address</label>
                            <input id="address" type="text" class="form-control" name="address" v-model="supplier.address" required autocomplete="address" autofocus>
                            </div>

                            <input type="hidden" name="supplier_id" id="supplier_id" v-model="supplier.supplier_id">
                            <div class="form-group col-md-12 mb-4">
                                <label for="supplierdescription" class="font-weight-bold">Supplier Description</label>
                                <textarea id="supplierdescription" type="text" class="form-control" name="supplierdescription" rows="3" v-model="supplier.supplierdescription" required autocomplete="supplierdescription" autofocus></textarea>
                            </div>

                            <div class="col-md-6 mb-4">
                                <button type="submit" :disabled="processing" class="btn btn-primary btn-block">
                                    {{ processing ? "Please wait" : "Add supplier" }}
                                </button>
                            </div>
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
    name:'addsupplier',
    data(){
        return {
            supplier:{
                suppliername:'',
                supplierdescription:'',
                contact:'',
                category_id:'',
                address:'',
            },
            validationErrors:{},
            processing:false
        }
    },
    computed:
    {
        ...mapGetters(["category"])
    },
    methods:{
        async addsuppliers(){
            this.processing = true
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('/api/supplier/add',this.supplier).then(response=>{
                this.validationErrors = {}
                this.$toast.success("Supplier Details added successfully", {
                        position: "bottom-left",
                    })
                document.getElementById("myForm").reset(); // This will clear that form
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