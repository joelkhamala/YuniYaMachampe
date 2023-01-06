<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-9 mx-auto">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="text-center">Edit Order</h3>
                            <div class="row">
                                <div class="col-md-12">
                                    <form @submit="updateorder">
                                        <!-- <div class="form-group col-md-12 mb-4">
                                            <label for="ordername" class="font-weight-bold">Customer Name</label>
                                            <span v-if="customer.length > 0">
                                                <span v-for="cust in customer" :key="cust.id">
                                                    <select v-if="cust.id == order.customer_id" class="form-control" v-model="order.ordername" name="ordername">
                                                        <option v-for="user in users" :key="user.id">
                                                            <span>{{user.firstname}} {{user.lastname}}</span>
                                                        </option>
                                                    </select>
                                                </span>
                                            </span>
                                        </div> -->
                                        
                                        <div class="form-group col-md-12 mb-4">
                                            <label for="product_id" class="font-weight-bold">Product Name</label>
                                            <select v-if="product.length > 0" v-model="order.product_id" class="form-control" name="product_id" id="product_id" required>
                                                <option v-for="prod in product" :key="prod.id" :value="prod.id">{{prod.productname}}</option>
                                            </select>
                                            <input v-else type="text" class="form-control" value="No Data Found" disabled>
                                        </div>

                                        <div class="form-group col-md-12 mb-4">
                                            <label for="orderdescription" class="font-weight-bold">Order ID</label>
                                            <input type="text" class="form-control" v-model="order.id" name="orderdescription">
                                        </div>

                                        <div class="form-group col-md-12 mb-4">
                                            <label for="quantity" class="font-weight-bold">Order Quantity</label>
                                            <input type="number" class="form-control" v-model="order.quantity" name="quantity">
                                        </div>

                                        <div class="form-group col-md-12 mb-4">
                                            <label for="price" class="font-weight-bold">Order Price</label>
                                            <input type="number" class="form-control" v-model="order.price" name="price">
                                        </div>
                                        <button type="submit" class="btn btn-primary">Update Order</button>
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
            order(){
                return this.$store.state.order.order.find(f => f.id == this.$route.params.id)
            },
            category()
            {
                return this.$store.state.category.category
            },
            ...mapGetters(["product", "customer", "users"])
        },
        methods: {
            updateorder() {
                this.axios
                .put(`http://127.0.0.1:8000/api/order/update/${this.$route.params.id}`, this.order)
                .then((response) => {
                    this.$router.push({name: 'vieworder'});
                });
            }
        }
    }
</script>