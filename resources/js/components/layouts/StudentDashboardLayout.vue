<template>
    <!--SECTION START-->
    <section>
        <div class="pro-cover">
        </div>
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
                    </ul>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </section>
    <!--SECTION END-->
 </template>
 <script>
    export default {
        name:"studentdashboardlayout",
        data(){
            return {
                user:this.$store.state.auth.user
            }
        },
    }
 </script>
 <style>
 a{
 text-decoration:none;
 }
 </style>