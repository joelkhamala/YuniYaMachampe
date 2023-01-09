<template>
    <!--SECTION START-->
    <div class="stu-db">
        <div class="container pg-inn">
            <div class="col-md-3">
                <div class="pro-user" v-if="user.gender != 'none'">
                    <img src="images/male.png" alt="user" v-if="user.gender == 'male'"/>
                    <img src="images/female.png" alt="user" v-else/>
                </div>
                <div class="pro-user" v-else>
                    <img src="images/other.png" alt="user"/>
                </div>
                <div class="pro-user-bio">
                    <ul>
                        <li>
                            <h4>{{user.firstname }} {{user.middlename }} {{user.lastname }}</h4>
                        </li>
                        <li>Student Id: {{ user.random_id }}</li>
                        <li>
                            <a href="#!"
                                ><i class="fa fa-facebook"></i> Facebook: facebook.com/{{user.lastname }}</a
                            >
                        </li>
                        <li>
                            <a href="#!"
                                ><i class="fa fa-google-plus"></i> Google: {{user.email }}</a
                            >
                        </li>
                        <li>
                            <a href="#!"
                                ><i class="fa fa-twitter"></i> Twitter: @{{user.lastname }}</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
    <!--SECTION END-->
</template>
<script>
import { mapActions } from "vuex";

export default {
    name: "studentdashboard",
    data() {
        return {
            user: this.$store.state.auth.user,
            isActive: false,
        };
    },
};
</script>