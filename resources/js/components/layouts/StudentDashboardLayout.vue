<template>
    <!--SECTION START-->
    <section>
        <div class="pro-cover"></div>
        <div class="pro-menu">
            <div class="container">
                <div class="col-md-9 col-md-offset-3">
                    <ul>
                        <li><a href="#" class="pro-act">My Dashboard</a></li>
                        <li><a href="db-profile.html">Profile</a></li>
                        <li><a href="db-courses.html">Courses</a></li>
                        <li><a href="db-exams.html">Exams</a></li>
                        <li><a href="db-time-line.html">Time Line</a></li>
                        <li><a href="#">Entry</a></li>
                        <li><a href="#">Notifications</a></li>
                        <li><a href="#" @click="logout">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </section>
    <!--SECTION END-->
</template>
<script>
import { mapActions } from "vuex";
export default {
    name: "studentdashboardlayout",
    data() {
        return {
            user: this.$store.state.auth.user,
            isActive: false,
        };
    },
    methods: {
        ...mapActions({
            signOut: "auth/logout",
        }),
        async logout() {
            await axios.post("/logout").then(({ data }) => {
                this.signOut();
                this.$router.push({ name: "login" });
            });
        },
        toggleClass(event) {
            this.isActive = !this.isActive;
            var checkboxes = document.getElementsByClassName("noclass");
            for (var i = 0; i < checkboxes.length; i++) {
                checkboxes[i].classList.add("active");
            }

            event.target.classList.remove("active");
        },
    },
};
</script>
<style>
a {
    text-decoration: none;
}
</style>
