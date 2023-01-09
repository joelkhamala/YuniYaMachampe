<template>
    <div class="log-in-pop mb-5 pb-5">
        <div class="log-in-pop-left">
            <h1>Hello...</h1>
            <p>
                Don't have an account? Create your account. It's take less then
                a minutes
            </p>
            <h4>Login with social media</h4>
            <ul>
                <li>
                    <a href="#"><i class="fa fa-facebook"></i> Facebook</a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-google"></i> Google+</a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-twitter"></i> Twitter</a>
                </li>
            </ul>
        </div>
        <div class="log-in-pop-right">
            <h4>Create an Account</h4>
            <p>
                Don't have an account? Create your account. It's take less then
                a minutes
            </p>

            <form
                action="javascript:void(0)"
                @submit="register"
                class="row"
                method="post"
            >
                <div
                    class="col-12"
                    v-if="Object.keys(validationErrors).length > 0"
                >
                    <div class="alert alert-danger">
                        <ul class="mb-0">
                            <li
                                v-for="(value, key) in validationErrors"
                                :key="key"
                            >
                                {{ value[0] }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="form-group col-lg-4">
                    <label for="firstname" class="font-weight-bold"
                        >First Name</label
                    >
                    <input
                        id="firstname"
                        type="text"
                        class="form-control"
                        name="firstname"
                        v-model="user.firstname"
                        required
                        autocomplete="firstname"
                        autofocus
                    />
                </div>

                <div class="form-group col-lg-4">
                    <label for="middlename" class="font-weight-bold"
                        >Middle Name</label
                    >
                    <input
                        id="middlename"
                        type="text"
                        class="form-control"
                        name="middlename"
                        v-model="user.middlename"
                        required
                        autocomplete="middlename"
                        autofocus
                    />
                </div>

                <div class="form-group col-lg-4">
                    <label for="lastname" class="font-weight-bold"
                        >Last Name</label
                    >
                    <input
                        id="lastname"
                        type="text"
                        class="form-control"
                        name="lastname"
                        v-model="user.lastname"
                        required
                        autocomplete="lastname"
                        autofocus
                    />
                </div>

                <div class="form-group col-lg-6">
                    <label for="username" class="font-weight-bold"
                        >User Name</label
                    >
                    <input
                        id="username"
                        type="text"
                        class="form-control"
                        name="username"
                        v-model="user.username"
                        required
                        autocomplete="username"
                        autofocus
                    />
                </div>

                <div class="form-group col-lg-6">
                    <label for="email" class="font-weight-bold">Email</label>
                    <input
                        type="text"
                        name="email"
                        v-model="user.email"
                        id="email"
                        placeholder="Enter Email"
                        class="form-control"
                    />
                </div>
                <div class="form-group col-lg-6">
                    <label for="phone" class="font-weight-bold">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        v-model="user.phone"
                        id="phone"
                        placeholder="Enter Phone"
                        class="form-control"
                    />
                </div>
                <div class="form-group col-lg-6">
                    <label for="date_of_birth" class="font-weight-bold">Date Of Birth</label>
                    <input
                        type="text"
                        name="date_of_birth"
                        v-model="user.date_of_birth"
                        id="date_of_birth"
                        placeholder="Enter Date Of Birth"
                        class="form-control"
                    />
                </div>
                <div class="form-group col-lg-12">
                    <label for="address" class="font-weight-bold">Address</label>
                    <input
                        type="text"
                        name="address"
                        v-model="user.address"
                        id="address"
                        placeholder="Enter Location Address"
                        class="form-control"
                    />

                    <input
                        type="hidden"
                        name="status"
                        v-model="user.status"
                    />
                </div>

                <div class="form-group col-lg-6">
                    <label for="password" class="font-weight-bold"
                        >Password</label
                    >
                    <input
                        type="password"
                        name="password"
                        v-model="user.password"
                        id="password"
                        placeholder="Enter Password"
                        class="form-control"
                    />
                    <input
                        type="hidden"
                        name="role"
                        v-model="user.role"
                    />
                </div>

                <div class="form-group col-lg-6">
                    <label for="password_confirmation" class="font-weight-bold"
                        >Confirm Password</label
                    >
                    <input
                        type="password"
                        name="password_confirmation"
                        v-model="user.password_confirmation"
                        id="password_confirmation"
                        placeholder="Enter Password"
                        class="form-control"
                    />
                </div>
                <div class="col-6 mb-2">
                    <button
                        type="submit"
                        :disabled="processing"
                        class="btn-block btn-lg waves-effect waves-light log-in-btn pt-3 pb-3"
                    >
                        {{ processing ? "Loading...Please wait" : "Register" }}
                    </button>
                </div>
                <div class="col-6 text-center d-flex align-items-center mt-2">
                    <label
                        >Already have an account?
                        <router-link :to="{ name: 'login' }"
                            >Login Now!</router-link
                        ></label
                    >
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "register",
    data() {
        return {
            user: {
                firstname: "",
                middlename: "",
                lastname: "",
                username: "",
                role: "student",
                email: "",
                phone: "",
                date_of_birth: "",
                address: "",
                status: "0",
                password: "",
                password_confirmation: "",
            },
            validationErrors: {},
            processing: false,
        };
    },
    methods: {
        ...mapActions({
            signIn: "auth/login",
        }),
        async register() {
            this.processing = true;
            await axios.get("/sanctum/csrf-cookie");
            await axios
                .post("/register", this.user)
                .then((response) => {
                    this.validationErrors = {};
                    this.signIn();
                })
                .catch(({ response }) => {
                    if (response.status === 422) {
                        this.validationErrors = response.data.errors;
                    } else {
                        this.validationErrors = {};
                        alert(response.data.message);
                    }
                })
                .finally(() => {
                    this.processing = false;
                });
        },
    },
};
</script>
<style>
a {
    text-decoration: none;
}
</style>
