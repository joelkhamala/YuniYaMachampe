<template>
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-md-9 mx-auto">
                <div class="card shadow sm">
                    <div class="card-header">
                        <h1 class="text-center h4 m-2">Add Product Category</h1>
                    </div>
                    <div class="card-body">
                        <form action="javascript:void(0)" @submit.prevent="addCategory" class="row" method="post">
                            <div class="col-12" v-if="Object.keys(validationErrors).length > 0">
                                <div class="alert alert-danger">
                                    <ul class="mb-0">
                                        <li v-for="(value, key) in validationErrors" :key="key">{{ value[0] }}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="form-group col-md-12 mb-4">
                                <label for="categoryname" class="font-weight-bold">Category Name</label>
                            <input id="categoryname" type="text" class="form-control" name="categoryname" v-model="category.categoryname" required autocomplete="categoryname" autofocus>
                            </div>

                            <div class="form-group col-md-12 mb-4">
                                <label for="categorydescription" class="font-weight-bold">Category Description</label>
                                <textarea id="categorydescription" type="text" class="form-control" name="categorydescription" rows="3" v-model="category.categorydescription" required autocomplete="categorydescription" autofocus></textarea>
                            </div>

                            <div class="col-md-6 mb-4">
                                <button type="submit" :disabled="processing" class="btn btn-primary btn-block">
                                    {{ processing ? "Please wait" : "Add Category" }}
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
export default {
    name:'addcategory',
    data(){
        return {
            category:{
                categoryname:'',
                categorydescription:''
            },
            validationErrors:{},
            processing:false
        }
    },
    methods:{
        async addCategory(){
            this.processing = true
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('/api/category/add',this.category).then(response=>{
                this.validationErrors = {}
                this.$toast.success("Category added successfully", {
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