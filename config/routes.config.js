export default [
    {
        path: '/user',
        component: '../layouts/UserLayout',
        title: 'route.user',
        routes: [
            {
                path: '/user/login',
                title: 'route.user.login',
                component: 'User/Login'
            },
            {
                redirect: '/user/login'
            }
        ]
    },
    {
        path: '/',
        component: '../layouts/BasicLayout',
        Routes: ['./src/routes/Authenticated'],
        routes: [
            {
                path: '/dashboard',
                title: 'route.basic.dashboard',
                component: 'Dashboard',
            },
            {
                path: '/users',
                title: 'route.basic.users',
                routes: [
                    {
                        path: '/users/students',
                        title: 'route.basic.users.students',
                        component: 'Users/Students'
                    },
                    {
                        path: '/users/instructors',
                        title: 'route.basic.users.instructors',
                        component: 'Users/Instructors'
                    },
                    {
                        path: '/users/admins',
                        title: 'route.basic.users.admins',
                        component: 'Users/Admins'
                    },
                    {
                        redirect: '/exception/404'
                    }
                ]
            },
            {
                path: '/courses',
                routes: [
                    {
                        path: '/courses/courses',
                        title: 'route.basic.courses.courses',
                        component: 'Courses/Courses'
                    },
                    {
                        path: '/courses/exams',
                        title: 'route.basic.courses.exams',
                        component: 'Courses/Exams'
                    },
                    {
                        redirect: '/exception/404'
                    }
                ]
            },
            {
                path: '/course-settings',
                title: 'route.basic.coursesettings',
                routes: [
                    {
                        path: '/course-settings/areas',
                        title: 'route.basic.coursesettings.areas',
                        component: 'CourseSettings/Areas'
                    },
                    {
                        path: '/course-settings/categories',
                        title: 'route.basic.coursesettings.categories',
                        component: 'CourseSettings/Categories'
                    },
                    {
                        path: '/course-settings/topics',
                        title: 'route.basic.coursesettings.topics',
                        component: 'CourseSettings/Topics'
                    },
                    {
                        path: '/course-settings/levels',
                        title: 'route.basic.coursesettings.levels',
                        component: 'CourseSettings/Levels'
                    },
                    {
                        path: '/course-settings/languages',
                        title: 'route.basic.coursesettings.languages',
                        component: 'CourseSettings/Languages'
                    },
                    {
                        redirect: '/exception/404'
                    }
                ]
            },
            {
                path: '/marketing',
                title: 'route.basic.marketing',
                routes: [
                    {
                        path: '/marketing/theme',
                        title: 'route.basic.marketing.theme',
                        component: 'Marketing/Theme'
                    },
                    {
                        path: '/marketing/discounting',
                        title: 'route.basic.marketing.discounting',
                        component: 'Marketing/Discounting'
                    },
                    {
                        path: '/marketing/promotions',
                        title: 'route.basic.marketing.promotions',
                        component: 'Marketing/Promotions'
                    },
                    {
                        path: '/marketing/referral',
                        title: 'route.basic.marketing.referral',
                        component: 'Marketing/Referral'
                    },
                    {
                        redirect: '/exception/404'
                    }
                ]
            },
            {
                path: '/financial',
                title: 'route.basic.financial',
                component: 'Financial'
            },
            {
                path: '/statistics',
                title: 'route.basic.statistics',
                component: '/Statistics'
            },
            {
                path: '/report',
                title: 'route.basic.report',
                component: 'Reports'
            },
            {
                path: '/help',
                title: 'route.basic.help',
                component: 'Help'
            },
            {
                path: '/exception',
                routes: [
                    {
                        path: '/exception/404',
                        title: 'route.exception.404',
                        component: './Exception/404'
                    },
                    {
                        path: '/exception/403',
                        title: 'route.exception.403',
                        component: './Exception/403'
                    },
                    {
                        path: '/exception/500',
                        title: 'route.exception.500',
                        component: './Exception/500'
                    },
                    {
                        redirect: '/exception/404'
                    }
                ]
            },
            {
                path: '/',
                redirect: '/dashboard'
            },
            {
                redirect: '/exception/404'
            }
        ]
    }
];