<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-9 mx-auto">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="text-center">Edit Product</h3>
                            <div class="row">
                                <div class="col-md-12">
                                    <form @submit="updateproduct">
                                        <div class="form-group col-md-12 mb-4">
                                            <label for="productname" class="font-weight-bold">Product Title</label>
                                            <input type="text" class="form-control" v-model="product.productname" name="productname">
                                        </div>
                                        
                                        <div class="form-group col-md-12 mb-4">
                                            <label for="category_id" class="font-weight-bold">Product Category</label>
                                            <select v-if="category.length > 0" v-model="product.category_id" class="form-control" name="category_id" id="category_id" required>
                                                <option v-for="cat in category" :key="cat.id" :value="cat.id">{{cat.categoryname}}</option>
                                            </select>
                                            <input v-else type="text" class="form-control" value="No Data Found" disabled>
                                        </div>

                                        <div class="form-group col-md-12 mb-4">
                                            <label for="productdescription" class="font-weight-bold">Product Description</label>
                                            <input type="text" class="form-control" v-model="product.productdescription" name="productdescription">
                                        </div>

                                        <div class="form-group col-md-12 mb-4">
                                            <label for="quantity" class="font-weight-bold">Product Quantity</label>
                                            <input type="number" class="form-control" v-model="product.quantity" name="quantity">
                                        </div>

                                        <div class="form-group col-md-12 mb-4">
                                            <label for="price" class="font-weight-bold">Product Price</label>
                                            <input type="number" class="form-control" v-model="product.price" name="price">
                                        </div>
                                        <button type="submit" class="btn btn-primary">Update Product</button>
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
    export default {
        data() {
            return {}
        },
        computed: {
            product(){
                return this.$store.state.product.product.find(f => f.id == this.$route.params.id)
            },
            category()
            {
                return this.$store.state.category.category
            }
        },
        methods: {
            updateproduct() {
                this.axios
                .put(`http://127.0.0.1:8000/api/product/update/${this.$route.params.id}`, this.product)
                .then((response) => {
                    this.$router.push({name: 'viewproduct'});
                    this.$toast.success("Product Edited successfully", {
                    position: "bottom-left",
                })
                });
            }
        }
    }
</script>