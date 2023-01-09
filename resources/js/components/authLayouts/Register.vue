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
            <form class="s12">
                <div>
                    <div class="input-field s12">
                        <input
                            type="text"
                            data-ng-model="name1"
                            class="validate"
                        />
                        <label>User name</label>
                    </div>
                </div>
                <div>
                    <div class="input-field s12">
                        <input type="email" class="validate" />
                        <label>Email id</label>
                    </div>
                </div>
                <div>
                    <div class="input-field s12">
                        <input type="password" class="validate" />
                        <label>Password</label>
                    </div>
                </div>
                <div>
                    <div class="input-field s12">
                        <input type="password" class="validate" />
                        <label>Confirm password</label>
                    </div>
                </div>
                <div>
                    <div class="input-field s4">
                        <input
                            type="submit"
                            value="Register"
                            class="waves-effect waves-light log-in-btn pt-2 pb-3 px-4 py-4 rounded"
                        />
                    </div>
                </div>
                <div>
                    <div class="input-field s12">
                        <router-link :to="{name:'login'}"><i class="fa fa-sign-in mr-3 text-primary fa-fw"></i> Are you a already member ? Login</router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "register",
};
</script>
<style>
a {
    text-decoration: none;
}
</style>
