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
            <h4>Login</h4>
            <p>
                Don't have an account? Create your account. It's take less then
                a minutes
            </p>
            <form class="s12">
                <div>
                    <div class="input-field s12">
                        <input
                            type="text"
                            data-ng-model="name"
                            class="validate"
                        />
                        <label>User name</label>
                    </div>
                </div>
                <div>
                    <div class="input-field s12">
                        <input type="password" class="validate" />
                        <label>Password</label>
                    </div>
                </div>
                <div>
                    <div class="s12 log-ch-bx">
                        <p>
                            <input type="checkbox" id="test5" />
                            <label for="test5">Remember me</label>
                        </p>
                    </div>
                </div>
                <div>
                    <div class="input-field s4">
                        <input
                            type="submit"
                            value="Login"
                            class="waves-effect waves-light log-in-btn pt-2 pb-3 px-4 py-4 rounded"
                        />
                    </div>
                </div>
                <div>
                    <div class="input-field s12">
                        <router-link :to="{name:'login'}"><i class="fa fa-unlock-alt mr-3 text-primary fa-fw"></i> Forgot Password? </router-link>
                        |
                        <router-link :to="{name:'register'}"><i class="fa fa-user-plus mr-3 text-primary fa-fw"></i> Create New Account</router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",
};
</script>

<style>
a {
    text-decoration: none;
}
</style>
