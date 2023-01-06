<template>
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-md-9 mx-auto">
                <div class="card shadow sm">
                    <div class="card-header">
                        <h1 class="text-center h4 m-2">Add Product</h1>
                    </div>
                    <div class="card-body">
                        <form action="javascript:void(0)" @submit="addproducts" class="row" method="post">
                            <div class="col-12" v-if="Object.keys(validationErrors).length > 0">
                                <div class="alert alert-danger">
                                    <ul class="mb-0">
                                        <li v-for="(value, key) in validationErrors" :key="key">{{ value[0] }}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="form-group col-md-12 mb-4">
                                <label for="productname" class="font-weight-bold">Product Name</label>
                            <input id="productname" type="text" class="form-control" name="productname" v-model="product.productname" required autocomplete="productname" autofocus>
                            </div>

                            <div class="form-group col-md-6 mb-4">
                                <label for="category_id" class="font-weight-bold">Product Category</label>
                                <select v-if="category.length > 0" v-model="product.category_id" class="form-control" name="category_id" id="category_id" required>                                    
                                    <option v-for="cat in category" :key="cat.id" :value="cat.id">{{cat.categoryname}}</option>
                                </select>
                                <input v-else type="text" class="form-control" value="No Data Found" disabled>
                            </div>

                            <div class="form-group col-md-6 mb-4">
                                <label for="quantity" class="font-weight-bold">Product Quantity</label>
                            <input id="quantity" type="number" class="form-control" name="quantity" v-model="product.quantity" required autocomplete="quantity" autofocus>
                            </div>

                            <div class="form-group col-md-6 mb-4">
                                <label for="lowestquantity" class="font-weight-bold">Alert me when product quantity is below</label>
                            <input id="lowestquantity" type="number" class="form-control" name="lowestquantity" v-model="product.lowestquantity" required autocomplete="lowestquantity" autofocus>
                            </div>

                            <div class="form-group col-md-6 mb-4">
                                <label for="price" class="font-weight-bold">Product Price</label>
                            <input id="price" type="number" class="form-control" name="price" v-model="product.price" required autocomplete="price" autofocus>
                            </div>

                            <input type="hidden" name="supplier_id" id="supplier_id" v-model="product.supplier_id">
                            <div class="form-group col-md-12 mb-4">
                                <label for="productdescription" class="font-weight-bold">Product Description</label>
                                <textarea id="productdescription" type="text" class="form-control" name="productdescription" rows="3" v-model="product.productdescription" required autocomplete="productdescription" autofocus></textarea>
                            </div>

                            <div class="col-md-6 mb-4">
                                <button type="submit" :disabled="processing" class="btn btn-primary btn-block">
                                    {{ processing ? "Please wait" : "Add product" }}
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
    name:'addproduct',
    data(){
        return {
            product:{
                productname:'',
                productdescription:'',
                quantity:'',
                lowestquantity:'',
                category_id:'',
                supplier_id:'',
                price:'',
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
        async addproducts(){
            this.processing = true
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('/api/product/add',this.product).then(response=>{
                this.validationErrors = {}
                this.$toast.success("Product added successfully", {
                    position: "bottom-left",
                })
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