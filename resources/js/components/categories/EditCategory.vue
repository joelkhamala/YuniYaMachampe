<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-9 mx-auto">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="text-center">Edit Category</h3>
                            <div class="row">
                                <div class="col-md-12">
                                    <form @submit="updatecategory">
                                        <div class="form-group col-md-12 mb-4">
                                            <label for="categoryname" class="font-weight-bold">Category Title</label>
                                            <input type="text" class="form-control" v-model="category.categoryname">
                                        </div>
                                        
                                        <div class="form-group col-md-12 mb-4">
                                            <label for="categorydescription" class="font-weight-bold">Description</label>
                                            <input type="text" class="form-control" v-model="category.categorydescription">
                                        </div>
                                        <button type="submit" class="btn btn-primary">Update Category</button>
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
import axios from 'axios';
    export default {
        data() {
            return {
                user:this.$store.state.auth.user,
            }
        },
        computed: {
            category(){
                return this.$store.state.category.category.find(f => f.id == this.$route.params.id)
            }
        },
        methods: {
            async updatecategory() {
                try {
                    let id = this.category.id
                    const formData = new FormData()
                    formData.append('categoryname', this.category.categoryname)
                    formData.append('categorydescription', this.category.categorydescription)
                    formData.append("_method", 'put')

                    const response = await axios.post("/api/category/update/"+id, formData)
                    .then(res => {
                        console.log(res.data)
                    })
                    .then(() => {
                            this.$toast.success(response.data.message, {
                                position: "bottom-left",
                            })
                            this.$router.push("/category/viewcat")
                    })               
                } catch (error) {
                    this.$toast.error(response.data.message, {
                        position: "bottom-left",
                        duration: 4000
                    })
                }
            }
        }
    }
</script>