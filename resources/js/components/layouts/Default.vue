<template>
    <!-- MOBILE MENU -->
    <section>
        <div class="ed-mob-menu">
            <div class="ed-mob-menu-con">
                <div class="ed-mm-left">
                    <div class="wed-logo">
                        <router-link :to="{name:'home'}"><img src="images/logo.png" alt="" /></router-link>
                    </div>
                </div>
                <div class="ed-mm-right">
                    <div class="ed-mm-menu">
                        <a href="#!" class="ed-micon"
                            ><i class="fa fa-bars"></i
                        ></a>
                        <div class="ed-mm-inn">
                            <a href="#!" class="ed-mi-close"
                                ><i class="fa fa-times"></i
                            ></a>
                            <h4>All Courses</h4>
                            <ul>
                                <li>
                                    <a href="course-details.html"
                                        >Accounting/Finance</a
                                    >
                                </li>
                                <li>
                                    <a href="course-details.html"
                                        >civil engineering</a
                                    >
                                </li>
                                <li>
                                    <a href="course-details.html">Art/Design</a>
                                </li>
                                <li>
                                    <a href="course-details.html"
                                        >Marine Engineering</a
                                    >
                                </li>
                                <li>
                                    <a href="course-details.html"
                                        >Business Management</a
                                    >
                                </li>
                                <li>
                                    <a href="course-details.html"
                                        >Journalism/Writing</a
                                    >
                                </li>
                                <li>
                                    <a href="course-details.html"
                                        >Physical Education</a
                                    >
                                </li>
                                <li>
                                    <a href="course-details.html"
                                        >Political Science</a
                                    >
                                </li>
                                <li>
                                    <a href="course-details.html">Sciences</a>
                                </li>
                                <li>
                                    <a href="course-details.html">Statistics</a>
                                </li>
                                <li>
                                    <a href="course-details.html"
                                        >Web Design/Development</a
                                    >
                                </li>
                                <li><a href="course-details.html">SEO</a></li>
                                <li>
                                    <a href="course-details.html"
                                        >Google Business</a
                                    >
                                </li>
                                <li>
                                    <a href="course-details.html"
                                        >Graphics Design</a
                                    >
                                </li>
                                <li>
                                    <a href="course-details.html"
                                        >Networking Courses</a
                                    >
                                </li>
                                <li>
                                    <a href="course-details.html"
                                        >Information technology</a
                                    >
                                </li>
                            </ul>
                            <h4>User Account</h4>
                            <ul>
                                <li>
                                    <router-link :to="{name:'login'}">Sign In</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'register'}">Sign Up</router-link>
                                </li>
                            </ul>
                            <h4>All Pages</h4>
                            <ul>
                                <li><router-link :to="{name:'home'}">Home</router-link></li>
                                <li><a href="about.html">About us</a></li>
                                <li><a href="admission.html">Admission</a></li>
                                <li>
                                    <a href="all-courses.html">All courses</a>
                                </li>
                                <li>
                                    <a href="course-details.html"
                                        >Course details</a
                                    >
                                </li>
                                <li><a href="awards.html">Awards</a></li>
                                <li><a href="seminar.html">Seminar</a></li>
                                <li><a href="events.html">Events</a></li>
                                <li>
                                    <a href="event-details.html"
                                        >Event details</a
                                    >
                                </li>
                                <li>
                                    <a href="event-register.html"
                                        >Event register</a
                                    >
                                </li>
                                <li>
                                    <a href="contact-us.html">Contact us</a>
                                </li>
                            </ul>
                            <h4>User Profile</h4>
                            <ul>
                                <li>
                                    <a href="dashboard.html">User profile</a>
                                </li>
                                <li><a href="db-courses.html">Courses</a></li>
                                <li><a href="db-exams.html">Exams</a></li>
                                <li><a href="db-profile.html">Prfile</a></li>
                                <li>
                                    <a href="db-time-line.html">Time line</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--HEADER SECTION-->
    <section>
        <!-- TOP BAR -->
        <div class="ed-top">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="ed-com-t1-left">
                            <ul>
                                <li>
                                    <a href="#"
                                        >Contact: Lake Road, Suite 180
                                        Farmington Hills, U.S.A.</a
                                    >
                                </li>
                                <li><a href="#">Phone: +101-1231-1231</a></li>
                            </ul>
                        </div>
                        <div class="ed-com-t1-right">
                            <ul>
                                <li>
                                    <router-link :to="{name:'login'}">Sign In</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'register'}">Sign Up</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="ed-com-t1-social">
                            <ul>
                                <li>
                                    <a href="#"
                                        ><i
                                            class="fa fa-facebook"
                                            aria-hidden="true"
                                        ></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="#"
                                        ><i
                                            class="fa fa-google-plus"
                                            aria-hidden="true"
                                        ></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="#"
                                        ><i
                                            class="fa fa-twitter"
                                            aria-hidden="true"
                                        ></i
                                    ></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- LOGO AND MENU SECTION -->
        <div class="top-logo" data-spy="affix" data-offset-top="250">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="wed-logo">
                            <router-link :to="{name:'home'}"><img src="images/logo.png" alt="" /></router-link>
                        </div>
                        <div class="main-menu">
                            <ul>
                                <li><router-link :to="{name:'home'}">Home</router-link></li>
                                <li class="about-menu">
                                    <a href="about.html" class="mm-arr"
                                        >About us</a
                                    >
                                    <!-- MEGA MENU 1 -->
                                    <div class="mm-pos">
                                        <div class="about-mm m-menu">
                                            <div class="m-menu-inn">
                                                <div class="mm1-com mm1-s1">
                                                    <div class="ed-course-in">
                                                        <a
                                                            class="course-overlay menu-about"
                                                            href="admission.html"
                                                        >
                                                            <img
                                                                src="images/h-about.jpg"
                                                                alt=""
                                                            />
                                                            <span
                                                                >Academics</span
                                                            >
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="mm1-com mm1-s2">
                                                    <p>
                                                        Want to change the
                                                        world? At Berkeley we’re
                                                        doing just that. When
                                                        you join the Golden Bear
                                                        community, you’re part
                                                        of an institution that
                                                        shifts the global
                                                        conversation every
                                                        single day.
                                                    </p>
                                                    <a
                                                        href="about.html"
                                                        class="mm-r-m-btn"
                                                        >Read more</a
                                                    >
                                                </div>
                                                <div class="mm1-com mm1-s3">
                                                    <ul>
                                                        <li>
                                                            <a
                                                                href="all-courses.html"
                                                                >All Courses</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="course-details.html"
                                                                >Course
                                                                details</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a href="about.html"
                                                                >About</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admission.html"
                                                                >Admission</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="awards.html"
                                                                >Awards</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mm1-com mm1-s4">
                                                    <ul>
                                                        <li>
                                                            <a
                                                                href="dashboard.html"
                                                                >Student
                                                                profile</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="db-courses.html"
                                                                >Dashboard
                                                                courses</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="db-exams.html"
                                                                >Dashboard
                                                                exams</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="db-profile.html"
                                                                >Dashboard
                                                                profile</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="db-time-line.html"
                                                                >Dashboard
                                                                timeline</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="admi-menu">
                                    <a href="#" class="mm-arr">Admission</a>
                                    <!-- MEGA MENU 1 -->
                                    <div class="mm-pos">
                                        <div class="admi-mm m-menu">
                                            <div class="m-menu-inn">
                                                <div
                                                    class="mm2-com mm1-com mm1-s1"
                                                >
                                                    <div class="ed-course-in">
                                                        <a
                                                            class="course-overlay"
                                                            href="about.html"
                                                        >
                                                            <img
                                                                src="images/h-about1.jpg"
                                                                alt=""
                                                            />
                                                            <span
                                                                >Academics</span
                                                            >
                                                        </a>
                                                    </div>
                                                    <p>
                                                        Donec lacus libero,
                                                        rutrum ac sollicitudin
                                                        sed, mattis non eros.
                                                        Vestibulum congue nec
                                                        eros quis lacinia.
                                                        Mauris non tincidunt
                                                        lectus. Nulla mollis,
                                                        orci vitae accumsan
                                                        rhoncus.
                                                    </p>
                                                    <a
                                                        href="about.html"
                                                        class="mm-r-m-btn"
                                                        >Read more</a
                                                    >
                                                </div>
                                                <div
                                                    class="mm2-com mm1-com mm1-s1"
                                                >
                                                    <div class="ed-course-in">
                                                        <a
                                                            class="course-overlay"
                                                            href="admission.html"
                                                        >
                                                            <img
                                                                src="images/h-adm1.jpg"
                                                                alt=""
                                                            />
                                                            <span
                                                                >Admission</span
                                                            >
                                                        </a>
                                                    </div>
                                                    <p>
                                                        Donec lacus libero,
                                                        rutrum ac sollicitudin
                                                        sed, mattis non eros.
                                                        Vestibulum congue nec
                                                        eros quis lacinia.
                                                        Mauris non tincidunt
                                                        lectus. Nulla mollis,
                                                        orci vitae accumsan
                                                        rhoncus.
                                                    </p>
                                                    <a
                                                        href="admission.html"
                                                        class="mm-r-m-btn"
                                                        >Read more</a
                                                    >
                                                </div>
                                                <div
                                                    class="mm2-com mm1-com mm1-s1"
                                                >
                                                    <div class="ed-course-in">
                                                        <a
                                                            class="course-overlay"
                                                            href="awards.html"
                                                        >
                                                            <img
                                                                src="images/h-cam1.jpg"
                                                                alt=""
                                                            />
                                                            <span
                                                                >History &
                                                                awards</span
                                                            >
                                                        </a>
                                                    </div>
                                                    <p>
                                                        Donec lacus libero,
                                                        rutrum ac sollicitudin
                                                        sed, mattis non eros.
                                                        Vestibulum congue nec
                                                        eros quis lacinia.
                                                        Mauris non tincidunt
                                                        lectus. Nulla mollis,
                                                        orci vitae accumsan
                                                        rhoncus.
                                                    </p>
                                                    <a
                                                        href="awards.html"
                                                        class="mm-r-m-btn"
                                                        >Read more</a
                                                    >
                                                </div>
                                                <div
                                                    class="mm2-com mm1-com mm1-s4"
                                                >
                                                    <div class="ed-course-in">
                                                        <a
                                                            class="course-overlay"
                                                            href="seminar.html"
                                                        >
                                                            <img
                                                                src="images/h-res1.jpg"
                                                                alt=""
                                                            />
                                                            <span
                                                                >Seminar
                                                                2018</span
                                                            >
                                                        </a>
                                                    </div>
                                                    <p>
                                                        Donec lacus libero,
                                                        rutrum ac sollicitudin
                                                        sed, mattis non eros.
                                                        Vestibulum congue nec
                                                        eros quis lacinia.
                                                        Mauris non tincidunt
                                                        lectus. Nulla mollis,
                                                        orci vitae accumsan
                                                        rhoncus.
                                                    </p>
                                                    <a
                                                        href="seminar.html"
                                                        class="mm-r-m-btn"
                                                        >Read more</a
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="all-courses.html">All Courses</a>
                                </li>
                                <!--<li><a class='dropdown-button ed-sub-menu' href='#' data-activates='dropdown1'>Courses</a></li>-->
                                <li class="cour-menu">
                                    <a href="#!" class="mm-arr">All Pages</a>
                                    <!-- MEGA MENU 1 -->
                                    <div class="mm-pos">
                                        <div class="cour-mm m-menu">
                                            <div class="m-menu-inn">
                                                <div
                                                    class="mm1-com mm1-cour-com mm1-s3"
                                                >
                                                    <h4>Frontend pages:1</h4>
                                                    <ul>
                                                        <li>
                                                            <router-link :to="{name:'home'}">Home</router-link>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="all-courses.html"
                                                                >All Courses</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="course-details.html"
                                                                >Course
                                                                Details</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a href="about.html"
                                                                >About us</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admission.html"
                                                                >admission</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="awards.html"
                                                                >awards</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a href="blog.html"
                                                                >blog</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="blog-details.html"
                                                                >blog details</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="contact-us.html"
                                                                >contact us</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="departments.html"
                                                                >Departments</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="events.html"
                                                                >events</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="event-details.html"
                                                                >event
                                                                details</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="event-register.html"
                                                                >event
                                                                register</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    class="mm1-com mm1-cour-com mm1-s3"
                                                >
                                                    <h4>Frontend pages:2</h4>
                                                    <ul>
                                                        <li>
                                                            <a
                                                                href="facilities.html"
                                                                >facilities</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="facilities-detail.html"
                                                                >facilities
                                                                detail</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="research.html"
                                                                >research</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="seminar.html"
                                                                >seminar</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="gallery-photo.html"
                                                                >gallery
                                                                photo</a
                                                            >
                                                        </li>
                                                    </ul>
                                                    <h4
                                                        class="ed-dr-men-mar-top"
                                                    >
                                                        User Dashboard
                                                    </h4>
                                                    <ul>
                                                        <li>
                                                            <a
                                                                href="dashboard.html"
                                                                >Student
                                                                profile</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="db-courses.html"
                                                                >Dashboard
                                                                courses</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="db-exams.html"
                                                                >Dashboard
                                                                exams</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="db-profile.html"
                                                                >Dashboard
                                                                profile</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="db-time-line.html"
                                                                >Dashboard
                                                                timeline</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    class="mm1-com mm1-cour-com mm1-s3"
                                                >
                                                    <h4>Admin panel:1</h4>
                                                    <ul>
                                                        <li>
                                                            <a href="admin.html"
                                                                >admin</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-add-courses.html"
                                                                >Add new
                                                                course</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-all-courses.html"
                                                                >All courses</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-student-details.html"
                                                                >Student
                                                                details</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-user-add.html"
                                                                >Add new user</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-user-all.html"
                                                                >All users</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-panel-setting.html"
                                                                >Admin
                                                                setting</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-event-add.html"
                                                                >event add</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-event-all.html"
                                                                >event all</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-setting.html"
                                                                >Admin
                                                                Setting</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-slider.html"
                                                                >Slider
                                                                setting</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-slider-edit.html"
                                                                >Slider edit</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-course-details.html"
                                                                >course
                                                                details</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-login.html"
                                                                >admin login</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    class="mm1-com mm1-cour-com mm1-s3"
                                                >
                                                    <h4>Admin panel:2</h4>
                                                    <ul>
                                                        <li>
                                                            <a
                                                                href="admin-event-edit.html"
                                                                >event edit</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-exam-add.html"
                                                                >exam add</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-exam-all.html"
                                                                >exam all</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-exam-edit.html"
                                                                >exam edit</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-export-data.html"
                                                                >export data</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-import-data.html"
                                                                >import data</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-job-add.html"
                                                                >Add new jobs</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-job-all.html"
                                                                >All jobs</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-job-edit.html"
                                                                >Edit job</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-main-menu.html"
                                                                >main menu</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-page-add.html"
                                                                >Add new page</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-page-all.html"
                                                                >All pages</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-page-edit.html"
                                                                >Edit page</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-forgot.html"
                                                                >forgot
                                                                password</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    class="mm1-com mm1-cour-com mm1-s4"
                                                >
                                                    <h4>Admin panel:3</h4>
                                                    <ul>
                                                        <li>
                                                            <a
                                                                href="admin-quick-link.html"
                                                                >quick link</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-seminar-add.html"
                                                                >Add new
                                                                seminar</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-seminar-all.html"
                                                                >All seminar</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-seminar-edit.html"
                                                                >Edit seminar</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-seminar-enquiry.html"
                                                                >Semester
                                                                enquiry</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-all-enquiry.html"
                                                                >All enquiry</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-view-enquiry.html"
                                                                >All enquiry
                                                                view</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-event-enquiry.html"
                                                                >event
                                                                enquiry</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-admission-enquiry.html"
                                                                >Admission
                                                                enquiry</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-common-enquiry.html"
                                                                >common
                                                                enquiry</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-course-enquiry.html"
                                                                >course
                                                                enquiry</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-all-menu.html"
                                                                >menu all</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-about-menu.html"
                                                                >Menu - About</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="admin-admission-menu.html"
                                                                >Menu -
                                                                admission</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="events.html">Events</a></li>
                                <li><a href="dashboard.html">Student</a></li>
                                <li>
                                    <a href="contact-us.html">Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="all-drop-down-menu"></div>
                </div>
            </div>
        </div>
        <div class="search-top">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="search-form">
                            <form>
                                <div class="sf-type">
                                    <div class="sf-input">
                                        <input
                                            type="text"
                                            id="sf-box"
                                            placeholder="Search course and discount courses"
                                        />
                                    </div>
                                    <div class="sf-list">
                                        <ul>
                                            <li>
                                                <a href="course-details.html"
                                                    >Accounting/Finance</a
                                                >
                                            </li>
                                            <li>
                                                <a href="course-details.html"
                                                    >civil engineering</a
                                                >
                                            </li>
                                            <li>
                                                <a href="course-details.html"
                                                    >Art/Design</a
                                                >
                                            </li>
                                            <li>
                                                <a href="course-details.html"
                                                    >Marine Engineering</a
                                                >
                                            </li>
                                            <li>
                                                <a href="course-details.html"
                                                    >Business Management</a
                                                >
                                            </li>
                                            <li>
                                                <a href="course-details.html"
                                                    >Journalism/Writing</a
                                                >
                                            </li>
                                            <li>
                                                <a href="course-details.html"
                                                    >Physical Education</a
                                                >
                                            </li>
                                            <li>
                                                <a href="course-details.html"
                                                    >Political Science</a
                                                >
                                            </li>
                                            <li>
                                                <a href="course-details.html"
                                                    >Sciences</a
                                                >
                                            </li>
                                            <li>
                                                <a href="course-details.html"
                                                    >Statistics</a
                                                >
                                            </li>
                                            <li>
                                                <a href="course-details.html"
                                                    >Web Design/Development</a
                                                >
                                            </li>
                                            <li>
                                                <a href="course-details.html"
                                                    >SEO</a
                                                >
                                            </li>
                                            <li>
                                                <a href="course-details.html"
                                                    >Google Business</a
                                                >
                                            </li>
                                            <li>
                                                <a href="course-details.html"
                                                    >Graphics Design</a
                                                >
                                            </li>
                                            <li>
                                                <a href="course-details.html"
                                                    >Networking Courses</a
                                                >
                                            </li>
                                            <li>
                                                <a href="course-details.html"
                                                    >Information technology</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="sf-submit">
                                    <input
                                        type="submit"
                                        value="Search Course"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--END HEADER SECTION-->

    <!--Other templates are injected here-->
    <router-view></router-view>

    <!-- FOOTER -->
    <section class="wed-hom-footer">
        <div class="container">
            <!--<div class="row">
				<div class="col-md-12">
				<h4>About Wedding Planner</h4>
				<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
				<p>more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
				<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
				<p></p>
			  </div>
			  </div>-->
            <div class="row wed-foot-link">
                <div class="col-md-4 foot-tc-mar-t-o">
                    <h4>Top Courses</h4>
                    <ul>
                        <li>
                            <a href="course-details.html">Accounting/Finance</a>
                        </li>
                        <li>
                            <a href="course-details.html">civil engineering</a>
                        </li>
                        <li><a href="course-details.html">Art/Design</a></li>
                        <li>
                            <a href="course-details.html">Marine Engineering</a>
                        </li>
                        <li>
                            <a href="course-details.html"
                                >Business Management</a
                            >
                        </li>
                        <li>
                            <a href="course-details.html">Journalism/Writing</a>
                        </li>
                        <li>
                            <a href="course-details.html">Physical Education</a>
                        </li>
                        <li>
                            <a href="course-details.html">Political Science</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h4>New Courses</h4>
                    <ul>
                        <li><a href="course-details.html">Sciences</a></li>
                        <li><a href="course-details.html">Statistics</a></li>
                        <li>
                            <a href="course-details.html"
                                >Web Design/Development</a
                            >
                        </li>
                        <li><a href="course-details.html">SEO</a></li>
                        <li>
                            <a href="course-details.html">Google Business</a>
                        </li>
                        <li>
                            <a href="course-details.html">Graphics Design</a>
                        </li>
                        <li>
                            <a href="course-details.html">Networking Courses</a>
                        </li>
                        <li>
                            <a href="course-details.html"
                                >Information technology</a
                            >
                        </li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h4>HELP & SUPPORT</h4>
                    <ul>
                        <li><a href="#">24x7 Live help</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Feedback</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Safety Tips</a></li>
                    </ul>
                </div>
            </div>
            <div class="row wed-foot-link-1">
                <div class="col-md-4 foot-tc-mar-t-o">
                    <h4>Get In Touch</h4>
                    <p>
                        Address: 28800 Orchard Lake Road, Suite 180 Farmington
                        Hills, U.S.A.
                    </p>
                    <p>Phone: <a href="#!">+101-1231-4321</a></p>
                    <p>Email: <a href="#!">info@edu.com</a></p>
                </div>
                <div class="col-md-4">
                    <h4>DOWNLOAD OUR FREE MOBILE APPS</h4>
                    <ul>
                        <li>
                            <a href="#"
                                ><span class="sprite sprite-android"></span
                            ></a>
                        </li>
                        <li>
                            <a href="#"
                                ><span class="sprite sprite-ios"></span
                            ></a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h4>SOCIAL MEDIA</h4>
                    <ul>
                        <li>
                            <a href="#"
                                ><i
                                    class="fa fa-facebook"
                                    aria-hidden="true"
                                ></i
                            ></a>
                        </li>
                        <li>
                            <a href="#"
                                ><i class="fa fa-twitter" aria-hidden="true"></i
                            ></a>
                        </li>
                        <li>
                            <a href="#"
                                ><i
                                    class="fa fa-google-plus"
                                    aria-hidden="true"
                                ></i
                            ></a>
                        </li>
                        <li>
                            <a href="#"
                                ><i class="fa fa-youtube" aria-hidden="true"></i
                            ></a>
                        </li>
                        <li>
                            <a href="#"
                                ><i
                                    class="fa fa-whatsapp"
                                    aria-hidden="true"
                                ></i
                            ></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- COPY RIGHTS -->
    <section class="wed-rights">
        <div class="container">
            <div class="row">
                <div class="copy-right">
                    <a target="_blank" href="https://www.templateshub.net"
                        >Templates Hub</a
                    >
                </div>
            </div>
        </div>
    </section>

    <!--SECTION LOGIN, REGISTER AND FORGOT PASSWORD-->
    <section>
        <!-- LOGIN SECTION -->
        <div id="modal1" class="modal fade" role="dialog">
            <div class="log-in-pop">
                <div class="log-in-pop-left">
                    <h1>Hello...</h1>
                    <p>
                        Don't have an account? Create your account. It's take
                        less then a minutes
                    </p>
                    <h4>Login with social media</h4>
                    <ul>
                        <li>
                            <a href="#"
                                ><i class="fa fa-facebook"></i> Facebook</a
                            >
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-google"></i> Google+</a>
                        </li>
                        <li>
                            <a href="#"
                                ><i class="fa fa-twitter"></i> Twitter</a
                            >
                        </li>
                    </ul>
                </div>
                <div class="log-in-pop-right">
                    <a href="#" class="pop-close" data-dismiss="modal"
                        ><img src="images/cancel.png" alt="" />
                    </a>
                    <h4>Login</h4>
                    <p>
                        Don't have an account? Create your account. It's take
                        less then a minutes
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
                                    class="waves-effect waves-light log-in-btn"
                                />
                            </div>
                        </div>
                        <div>
                            <div class="input-field s12">
                                <a
                                    href="#"
                                    data-dismiss="modal"
                                    data-toggle="modal"
                                    data-target="#modal3"
                                    >Forgot password</a
                                >
                                |
                                <a
                                    href="#"
                                    data-dismiss="modal"
                                    data-toggle="modal"
                                    data-target="#modal2"
                                    >Create a new account</a
                                >
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- REGISTER SECTION -->
        <div id="modal2" class="modal fade" role="dialog">
            <div class="log-in-pop">
                <div class="log-in-pop-left">
                    <h1>Hello...</h1>
                    <p>
                        Don't have an account? Create your account. It's take
                        less then a minutes
                    </p>
                    <h4>Login with social media</h4>
                    <ul>
                        <li>
                            <a href="#"
                                ><i class="fa fa-facebook"></i> Facebook</a
                            >
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-google"></i> Google+</a>
                        </li>
                        <li>
                            <a href="#"
                                ><i class="fa fa-twitter"></i> Twitter</a
                            >
                        </li>
                    </ul>
                </div>
                <div class="log-in-pop-right">
                    <a href="#" class="pop-close" data-dismiss="modal"
                        ><img src="images/cancel.png" alt="" />
                    </a>
                    <h4>Create an Account</h4>
                    <p>
                        Don't have an account? Create your account. It's take
                        less then a minutes
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
                                    class="waves-effect waves-light log-in-btn"
                                />
                            </div>
                        </div>
                        <div>
                            <div class="input-field s12">
                                <a
                                    href="#"
                                    data-dismiss="modal"
                                    data-toggle="modal"
                                    data-target="#modal1"
                                    >Are you a already member ? Login</a
                                >
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- FORGOT SECTION -->
        <div id="modal3" class="modal fade" role="dialog">
            <div class="log-in-pop">
                <div class="log-in-pop-left">
                    <h1>Hello...</h1>
                    <p>
                        Don't have an account? Create your account. It's take
                        less then a minutes
                    </p>
                    <h4>Login with social media</h4>
                    <ul>
                        <li>
                            <a href="#"
                                ><i class="fa fa-facebook"></i> Facebook</a
                            >
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-google"></i> Google+</a>
                        </li>
                        <li>
                            <a href="#"
                                ><i class="fa fa-twitter"></i> Twitter</a
                            >
                        </li>
                    </ul>
                </div>
                <div class="log-in-pop-right">
                    <a href="#" class="pop-close" data-dismiss="modal"
                        ><img src="images/cancel.png" alt="" />
                    </a>
                    <h4>Forgot password</h4>
                    <p>
                        Don't have an account? Create your account. It's take
                        less then a minutes
                    </p>
                    <form class="s12">
                        <div>
                            <div class="input-field s12">
                                <input
                                    type="text"
                                    data-ng-model="name3"
                                    class="validate"
                                />
                                <label>User name or email id</label>
                            </div>
                        </div>
                        <div>
                            <div class="input-field s4">
                                <input
                                    type="submit"
                                    value="Submit"
                                    class="waves-effect waves-light log-in-btn"
                                />
                            </div>
                        </div>
                        <div>
                            <div class="input-field s12">
                                <a
                                    href="#"
                                    data-dismiss="modal"
                                    data-toggle="modal"
                                    data-target="#modal1"
                                    >Are you a already member ? Login</a
                                >
                                |
                                <a
                                    href="#"
                                    data-dismiss="modal"
                                    data-toggle="modal"
                                    data-target="#modal2"
                                    >Create a new account</a
                                >
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- SOCIAL MEDIA SHARE -->
    <section>
        <div class="icon-float">
            <ul>
                <li>
                    <a href="#" class="sh"
                        >1k <br />
                        Share</a
                    >
                </li>
                <li>
                    <a href="#" class="fb1"
                        ><i class="fa fa-facebook" aria-hidden="true"></i
                    ></a>
                </li>
                <li>
                    <a href="#" class="gp1"
                        ><i class="fa fa-google-plus" aria-hidden="true"></i
                    ></a>
                </li>
                <li>
                    <a href="#" class="tw1"
                        ><i class="fa fa-twitter" aria-hidden="true"></i
                    ></a>
                </li>
                <li>
                    <a href="#" class="li1"
                        ><i class="fa fa-linkedin" aria-hidden="true"></i
                    ></a>
                </li>
                <li>
                    <a href="#" class="wa1"
                        ><i class="fa fa-whatsapp" aria-hidden="true"></i
                    ></a>
                </li>
                <li>
                    <a href="#" class="sh1"
                        ><i class="fa fa-envelope-o" aria-hidden="true"></i
                    ></a>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "default-layout",
    mounted() {
        $(document).ready(function () {
            "use strict";
            $(".chips").material_chip();
            $("select").material_select();

            //FILTER SELECT OPTIONS
            $(".wed-fil-1").on("click", function () {
                $(".fil-1").addClass("filt-eff");
                $(".fil-2").addClass("filt-eff-1");
            });
            //FILTER SELECT OPTIONS
            $(".wed-fil-2").on("click", function () {
                $(".fil-2").removeClass("filt-eff-1");
                $(".fil-3").addClass("filt-eff-1");
            });
            //FILTER SELECT OPTIONS
            $(".wed-fil-3").on("click", function () {
                $(".fil-3").removeClass("filt-eff-1");
                $(".fil-4").addClass("filt-eff-1");
            });
            //FILTER SELECT OPTIONS
            $(".wed-fil-4").on("click", function () {
                $(".fil-4").removeClass("filt-eff-1");
                $(".fil-5").addClass("filt-eff-1");
            });

            //MEGA MENU
            $(".about-menu").hover(function () {
                $(".about-mm").fadeIn();
            });
            $(".about-menu").mouseleave(function () {
                $(".about-mm").fadeOut();
            });
            //MEGA MENU
            $(".admi-menu").hover(function () {
                $(".admi-mm").fadeIn();
            });
            $(".admi-menu").mouseleave(function () {
                $(".admi-mm").fadeOut();
            });
            //MEGA MENU
            $(".cour-menu").hover(function () {
                $(".cour-mm").fadeIn();
            });
            $(".cour-menu").mouseleave(function () {
                $(".cour-mm").fadeOut();
            });
            //SINGLE DROPDOWN MENU
            $(".top-drop-menu").on("click", function () {
                $(".man-drop").fadeIn();
            });
            $(".man-drop").mouseleave(function () {
                $(".man-drop").fadeOut();
            });
            $(".wed-top").mouseleave(function () {
                $(".man-drop").fadeOut();
            });

            //SEARCH BOX
            $("#sf-box").on("click", function () {
                $(".sf-list").fadeIn();
            });
            $(".sf-list").mouseleave(function () {
                $(".sf-list").fadeOut();
            });
            $(".search-top").mouseleave(function () {
                $(".sf-list").fadeOut();
            });
            $(".sdb-btn-edit").hover(function () {
                $(this).text("Click to edit my profile");
            });
            $(".sdb-btn-edit").mouseleave(function () {
                $(this).text("edit my profile");
            });

            //AWARDS
            $(".time-hide-1-btn").on("click", function () {
                $(".time-hide-1, .time-hide-11-btn").slideDown();
                $(".time-hide-1-btn").fadeOut();
            });
            $(".time-hide-11-btn").on("click", function () {
                $(".time-hide-1, .time-hide-11-btn").slideUp();
                $(".time-hide-1-btn").fadeIn();
            });
            $(".time-hide-2-btn").on("click", function () {
                $(".time-hide-2, .time-hide-22-btn").slideDown();
                $(".time-hide-2-btn").fadeOut();
            });
            $(".time-hide-22-btn").on("click", function () {
                $(".time-hide-2, .time-hide-22-btn").slideUp();
                $(".time-hide-2-btn").fadeIn();
            });
            $(".time-hide-3-btn").on("click", function () {
                $(".time-hide-3, .time-hide-33-btn").slideDown();
                $(".time-hide-3-btn").fadeOut();
            });
            $(".time-hide-33-btn").on("click", function () {
                $(".time-hide-3, .time-hide-33-btn").slideUp();
                $(".time-hide-3-btn").fadeIn();
            });
            $(".time-hide-4-btn").on("click", function () {
                $(".time-hide-4, .time-hide-44-btn").slideDown();
                $(".time-hide-4-btn").fadeOut();
            });
            $(".time-hide-44-btn").on("click", function () {
                $(".time-hide-4, .time-hide-44-btn").slideUp();
                $(".time-hide-4-btn").fadeIn();
            });

            //MOBILE MENU OPEN
            $(".ed-micon").on("click", function () {
                $(".ed-mm-inn").addClass("ed-mm-act");
            });
            //MOBILE MENU CLOSE
            $(".ed-mi-close").on("click", function () {
                $(".ed-mm-inn").removeClass("ed-mm-act");
            });

            //MATERIAL SELECT BOX
            $("select").material_select();

            //MATERIAL COLLAPSIBLE
            $(".collapsible").collapsible();

            //MATERIAL CHIP COMMON
            $(".chips").material_chip();
            $(".chips-initial").material_chip({
                data: [
                    {
                        tag: "Apple",
                    },
                    {
                        tag: "Microsoft",
                    },
                    {
                        tag: "Google",
                    },
                ],
            });

            //MATERIAL CHIP PLACEHOLDER
            $(".chips-placeholder").material_chip({
                placeholder: "Enter a tag",
                secondaryPlaceholder: "+Amini (press enter)",
            });

            //MATERIAL CHIP AUTO-COMPLETE
            $(".chips-autocomplete").material_chip({
                autocompleteOptions: {
                    data: {
                        Apple: null,
                        Microsoft: null,
                        Google: null,
                    },
                    limit: Infinity,
                    minLength: 1,
                },
            });

            //GOOGLE MAP - SCROLL REMOVE
            $(".contact-map")
                .on("click", function () {
                    $(this).find("iframe").addClass("clicked");
                })
                .on("mouseleave", function () {
                    $(this).find("iframe").removeClass("clicked");
                });

            //$(".desk-hide").click(function(){
            //$(".desk-hide").fadeOut();
            //$(".mob-close").fadeIn();
            //});
            //$(".mob-close").click(function(){
            //$(".man-drop").fadeOut();
            //$(".mob-close").fadeOut();
            //$(".desk-hide").fadeIn();
            //});

            //RIGHT CLICK DISABLE
            //$("body").on("contextmenu",function(){
            //return false;
            //});
            $(".slider").slider({
                height: 500,
                interval: 1000,
            });
            $(".dropdown-button").dropdown({
                inDuration: 300,
                outDuration: 225,
                constrainWidth: 400, // Does not change width of dropdown to that of the activator
                hover: true, // Activate on hover
                gutter: 0, // Spacing from edge
                belowOrigin: false, // Displays dropdown below the button
                alignment: "left", // Displays dropdown with edge aligned to the left of button
                stopPropagation: false, // Stops event propagation
            });
            $(".dropdown-button2").dropdown({
                inDuration: 300,
                outDuration: 225,
                constrain_width: false, // Does not change width of dropdown to that of the activator
                hover: true, // Activate on hover
                gutter: ($(".dropdown-content").width() * 3) / 2.5 + 5, // Spacing from edge
                belowOrigin: false, // Displays dropdown below the button
                alignment: "left", // Displays dropdown with edge aligned to the left of button
            });
        });
    },
};
</script>
<style scoped>
body {
    background: #599fd9;
    background: -webkit-linear-gradient(to right, #599fd9, #c2e59c);
    background: linear-gradient(to right, #599fd9, #c2e59c);
    /* min-height: 100vh;
    overflow-x: hidden; */
}
.separator {
    margin: 3rem 0;
    border-bottom: 1px dashed #fff;
}
.text-uppercase {
    letter-spacing: 0.1em;
}
.text-gray {
    color: #aaa;
}

/* .mysidebar
    {
      position: absolute;
      min-height: 100vh;
      overflow-y: scroll;
    } */
.vertical-nav {
    position: absolute;
    min-width: 17rem;
    /* width: 17rem; */
    min-height: 100vh;
    top: 0;
    left: 0;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.4s;
}
.page-content {
    position: fixed;
    width: calc(100% - 17rem);
    margin-left: 17rem;
    transition: all 0.4s;
}
/* for toggle behavior */
#sidebar.active {
    margin-left: -17rem;
}
#content.active {
    width: 100%;
    margin: 0;
}
@media (max-width: 768px) {
    .vertical-nav {
        height: auto;
    }
    #sidebar {
        margin-left: -18rem;
    }
    #sidebar.active {
        margin-left: 0;
    }
    #content {
        width: 100%;
        margin: 0;
    }
    #content.active {
        margin-left: 17rem;
        width: calc(100% - 17rem);
    }
}
</style>
