/*  import vue components */
import Error404 from './components/Error.vue'
import Login from './components/auth/Login.vue'
import User from './components/views/User.vue';
import Dashboard from './components/views/pages/Dashboard.vue';
import Users from './components/views/pages/Users.vue';
import Brands from './components/views/pages/Brands.vue';
import JobOrders from './components/views/pages/JobOrders.vue';
import StickyNotes from './components/views/pages/StickyNotes.vue';
import AddBrand from './components/views/pages/brands/AddBrand.vue';
import UpdateBrand from './components/views/pages/brands/UpdateBrand.vue';
import BrandProfile from './components/views/pages/brands/BrandProfile.vue';
import ViewJobOrder from './components/views/pages/joborders/ViewJobOrder.vue';
import ViewJoCrea from './components/views/pages/joborders/ViewJoCrea.vue';
import NewJobOrderWeb from './components/views/pages/joborders/NewJobOrderWeb.vue';
import NewJobOrderCreative from './components/views/pages/joborders/NewJobOrderCreative.vue';
import Messages from './components/views/pages/Messages.vue';
import Boards from './components/views/pages/Boards.vue';
import BoardKanban from './components/views/pages/boards/Kanban.vue';
import Conversation from './components/views/pages/messages/Conversation.vue';
import Welcome from './components/views/pages/messages/Welcome.vue';
import Workload from './components/views/pages/Workload.vue';
import Workbook from './components/views/pages/Workbook.vue';
import AddWorkbook from './components/views/pages/workbook/AddWorkbook.vue';
import ViewWB from './components/views/pages/workbook/ViewWB.vue';
// import ClientViewWorkbook from './components/views/pages/workbook/ClientViewWorkbook.vue';
import ReviewWB from './components/views/pages/workbook/ReviewWB.vue';
import SingleWorkbook from './components/views/pages/workbook/Workbook.vue';
import KanbanAddTask from './components/views/pages/boards/kanban/AddTask.vue';
import KanbanViewTask from './components/views/pages/boards/kanban/ViewTask.vue';
import KanbanGallery from './components/views/pages/boards/kanban/Gallery.vue';
import USAddTask from './components/views/pages/boards/test/AddTask.vue';
import USViewTask from './components/views/pages/boards/test/ViewTask.vue';
import dConf from './components/views/pages/boards/test/dConf.vue';
import dustask from './components/views/pages/boards/test/UStaskdel.vue';
import dSprintConf from './components/views/pages/boards/test/SprintDConf.vue';
import ScrumNewSprint from './components/views/pages/boards/test/AddSprint.vue';
import Test from './components/views/pages/boards/Test.vue';
import TestSprint from './components/views/pages/boards/test/Test.vue';
import SNT from './components/views/pages/boards/test/AddUS.vue';
import ViewUS from './components/views/pages/boards/test/ViewUS.vue';
import AddUStask from './components/views/pages/boards/test/sprint/AddTask.vue';
import ViewUStask from './components/views/pages/boards/test/sprint/ViewTask.vue';
import ProfileUser from './components/views/pages/ProfileUser.vue';
import BurndownChart from './components/views/pages/boards/test/sprint/BurndownChart.vue';
import Statistics from './components/views/pages/boards/test/sprint/Statistics.vue';
import KanbanStatistics from './components/views/pages/boards/kanban/Statistics.vue';
import CumulativeChart from './components/views/pages/boards/test/sprint/CumulativeChart.vue';
import deletekanbantask from './components/views/pages/boards/kanban/deletemodal.vue';
import deletekanbancard from './components/views/pages/boards/kanban/deletemodalcard.vue';
// C:\laragon\www\Captivate\resources\assets\js\components\views\pages\boards\scrum\deletemodalsprintcard.vue
import deletemodalsprintcard from './components/views/pages/boards/test/sprint/deletemodalsprintcard.vue'
/* end of import vue components */

export const routes = [

    {
        path: '/',
        alias: '/home',
        component: User,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '',
                name: 'dashboard',
                component: Dashboard,
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: '/profile',
                name: 'profile_user',
                component: ProfileUser,
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: 'users',
                name: 'users',
                component: Users,
                meta: {
                    requiresAuth: true
                },
                beforeEnter: (to, from, next) => {
                    // let param = to.params.brandId;
                    axios.get('/api/verifyAdmin')
                        .then((response) => {
                            if(response.data.status === 'authenticated') {
                                next();
                            }
                            else{
                                next({ name: 'error404' });
                            }
                            
                        })
                }
            },
            {
                path: 'brands',
                name: 'brands',
                component: Brands,
                meta: {
                    requiresAuth: true
                },
                beforeEnter: (to, from, next) => {
                    // let param = to.params.brandId;
                    axios.get('/api/verifyBrands')
                        .then((response) => {
                            if(response.data.status === 'authenticated') {
                                next();
                            }
                            else{
                                next({ name: 'error404' });
                            }
                            
                        })
                }

            },
            {
                path: 'brands/add',
                name: 'new_brand',
                component: AddBrand,
                meta: {
                    requiresAuth: true
                },
                beforeEnter: (to, from, next) => {
                    // let param = to.params.brandId;
                    axios.get('/api/verifyAdmin')
                        .then((response) => {
                            if(response.data.status === 'authenticated') {
                                next();
                            }
                            else{
                                next({ name: 'error404' });
                            }
                            
                        })
                }
            },
            {
                path: 'brands/brand-profile-:brandId',
                name: 'brand_profile',
                component: BrandProfile,
                props: true,
                meta: {
                    requiresAuth: true
                },
                beforeEnter: (to, from, next) => {
                    let param = to.params.brandId;
                    axios.post('/api/verifyBrandProfile', {
                        brand: param
                    })
                        .then((response) => {
                            if(response.data.status === 'authenticated') {
                                next();
                            }
                            else{
                                next({ name: 'error404' });
                            }
                            
                        })
                }
            },
            {
                path: 'brands/update/:brand_Id',
                name: 'update_brand',
                component: UpdateBrand,
                meta: {
                    requiresAuth: true
                },
                beforeEnter: (to, from, next) => {
                    let param = to.params.brand_Id;
                    axios.post('/api/verifyBrandProfile', {
                        brand: param
                    })
                        .then((response) => {
                            if(response.data.status === 'authenticated') {
                                next();
                            }
                            else{
                                next({ name: 'error404' });
                            }
                            
                        })
                }
            },
            {
                path: 'jo',
                name: 'all_jo_list',
                component: JobOrders,
                meta: {
                    requiresAuth: true
                },
                beforeEnter: (to, from, next) => {
                    axios.get('/api/verifyAllJOList')
                        .then((response) => {
                            if(response.data.status === 'authenticated') {
                                next();
                            }
                            else{
                                next({ name: 'error404' });
                            }
                            
                        })
                }
            },
            {
                path: 'brands/jo/:id',
                name: 'brands_jo_list',
                component: JobOrders,
                meta: {
                    requiresAuth: true
                },
                beforeEnter: (to, from, next) => {
                    // let param = to.params.brandId;
                    axios.get('/api/verifyAdminAcma')
                        .then((response) => {
                            if(response.data.status === 'authenticated') {
                                next();
                            }
                            else{
                                next({ name: 'error404' });
                            }
                            
                        })
                }
            },
            {
                path: 'sticky-notes',
                name: 'sticky_notes',
                component: StickyNotes,
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: 'jo/new-jo-web',
                name: 'new_jo_web',
                component: NewJobOrderWeb,
                meta: {
                    requiresAuth: true
                },
                beforeEnter: (to, from, next) => {
                    // let param = to.params.brandId;
                    axios.get('/api/verifyAddJO')
                        .then((response) => {
                            if(response.data.status === 'authenticated') {
                                next();
                            }
                            else{
                                next({ name: 'error404' });
                            }
                            
                        })
                }
            },
            {
                path: 'jo/new-jo-creative',
                name: 'new_jo_creative',
                component: NewJobOrderCreative,
                meta: {
                    requiresAuth: true
                },
                beforeEnter: (to, from, next) => {
                    // let param = to.params.brandId;
                    axios.get('/api/verifyAddJO')
                        .then((response) => {
                            if(response.data.status === 'authenticated') {
                                next();
                            }
                            else{
                                next({ name: 'error404' });
                            }
                            
                        })
                }
            },
            {
                path: 'jo/web/:jo_id',
                name: 'viewjoweb',
                component: ViewJobOrder,
                meta: {
                    requiresAuth: true
                },
                beforeEnter: (to, from, next) => {
                    let param = to.params.jo_id;
                    axios.post('/api/verifyJOView', {
                        jo: param
                    })
                        .then((response) => {
                            if(response.data.status === 'authenticated') {
                                next();
                            }
                            else{
                                next({ name: 'error404' });
                            }
                            
                        })
                }
            },
            {
                path: 'jo/creative/:jo_id',
                name: 'viewjocreative',
                component: ViewJoCrea,
                meta: {
                    requiresAuth: true
                },
                beforeEnter: (to, from, next) => {
                    let param = to.params.jo_id;
                    axios.post('/api/verifyJOView', {
                        jo: param
                    })
                        .then((response) => {
                            if(response.data.status === 'authenticated') {
                                next();
                            }
                            else{
                                next({ name: 'error404' });
                            }
                            
                        })
                }
            },
            {
                path: 'clients/add',
                name: 'new_client',
                component: Dashboard,
                meta: {
                    requiresAuth: true
                },
                beforeEnter: (to, from, next) => {
                    // let param = to.params.brandId;
                    axios.get('/api/verifyAdmin')
                        .then((response) => {
                            if(response.data.status === 'authenticated') {
                                next();
                            }
                            else{
                                next({ name: 'error404' });
                            }
                            
                        })
                }
            },
            {
                path: 'workload',
                name: 'workload',
                component: Workload,
                meta: {
                    requiresAuth: true
                },
                beforeEnter: (to, from, next) => {
                    // let param = to.params.brandId;
                    axios.get('/api/verifyworkloadusers')
                        .then((response) => {
                            if(response.data.status === 'authenticated') {
                                next();
                            }
                            else{
                                next({ name: 'error404' });
                            }
                            
                        })
                }
            },
            {
                path: 'workbook',
                name: 'workbook',
                component: Workbook,
                meta: {
                    requiresAuth: true
                },
                beforeEnter: (to, from, next) => {
                    // let param = to.params.brandId;
                    axios.get('/api/verifyAllJOList')
                        .then((response) => {
                            if(response.data.status === 'authenticated') {
                                next();
                            }
                            else{
                                next({ name: 'error404' });
                            }
                            
                        })
                }

            },
            {
                path: 'workbook/add',
                name: 'add_workbook',
                component: AddWorkbook,
                meta: {
                    requiresAuth: true
                },
                beforeEnter: (to, from, next) => {
                    // let param = to.params.brandId;
                    axios.get('/api/verifyAddJO')
                        .then((response) => {
                            if(response.data.status === 'authenticated') {
                                next();
                            }
                            else{
                                next({ name: 'error404' });
                            }
                            
                        })
                }
            },
            
            {
                path: 'workbook/:wb_id',
                // name: 'cworkbook',
                component: SingleWorkbook,
                meta: {
                    requiresAuth: true
                },
                children: [
                    {
                        path: '',
                        name: 'view_workbook',
                        component: ViewWB,
                        meta: {
                            requiresAuth: true
                        },
                        beforeEnter: (to, from, next) => {
                            let param = to.params.wb_id;
                            axios.post('/api/verifyViewWorkbook', {
                                wb: param
                            })
                                .then((response) => {
                                    if(response.data.status === 'authenticated') {
                                        next();
                                    }
                                    else{
                                        next({ name: 'error404' });
                                    }
                                    
                                })
                        }
                    },
                    {
                        path: 'review',
                        name: 'review_workbook',
                        component: ReviewWB,
                        meta: {
                            requiresAuth: true
                        },
                        beforeEnter: (to, from, next) => {
                            let param = to.params.wb_id;
                            axios.post('/api/verifyReviewWorkbook', {
                                wb: param
                            })
                                .then((response) => {
                                    if(response.data.status === 'authenticated') {
                                        next();
                                    }
                                    else{
                                        next({ name: 'error404' });
                                    }
                                    
                                })
                        }
                    },
                ]
            },
            
               
            
            {
                path: 'messages',
                component: Messages,
                meta: {
                    requiresAuth: true
                },
                
                children: [
                    {
                        path: '',
                        name: 'messages',
                        component: Welcome,
                        meta: {
                            requiresAuth: true
                        },

                    },
                    {
                        path: ':convo_id',
                        name: 'convo-view',
                        component: Conversation,
                        meta: {
                            requiresAuth: true
                        },
                        beforeEnter: (to, from, next) => {
                            let param = to.params.convo_id;
                            axios.post('/api/verifyConvoUsers', {
                                slug: param
                            })
                                .then((response) => {
                                    if(response.data.status === 'authenticated') {
                                        next();
                                    }
                                    else{
                                        next({ name: 'error404' });
                                    }
                                    
                                })
                        }

                    }
                ]
            },
            {
                path: 'boards',
                name: 'boards',
                component: Boards,
                meta: {
                    requiresAuth: true
                },
                beforeEnter: (to, from, next) => {
                    // let param = to.params.brandId;
                    axios.get('/api/verifyworkloadusers')
                        .then((response) => {
                            if(response.data.status === 'authenticated') {
                                next();
                            }
                            else{
                                next({ name: 'error404' });
                            }
                            
                        })
                }
            },
            {
                path: 'boards/kanban/:board_id',
                name: 'kanboard',
                component: BoardKanban,
                meta: {
                    requiresAuth: true
                },
                beforeEnter: (to, from, next) => {
                    let param = to.params.board_id;
                    axios.post('/api/verifyBoardUsers', {
                        id: param,
                        type: 1
                    })
                        .then((response) => {
                            if(response.data.status === 'authenticated') {
                                next();
                            }
                            else{
                                next({ name: 'error404' });
                            }
                            
                        })
                },
                children: [
                    {
                        path: 'addtask/:list_id',
                        name: 'kanboard_addtask',
                        component: KanbanAddTask,
                        meta: {
                            requiresAuth: true
                        },
                        beforeEnter: (to, from, next) => {
                            let param = to.params.board_id;
                            axios.post('/api/verifyKanbanTask', {
                                board_id: param,
                                action: 'Add',
                                type: 'task'
                            })
                                .then((response) => {
                                    if(response.data.status === 'authenticated') {
                                        next();
                                    }
                                    else{
                                        next({ name: 'error404' });
                                    }
                                    
                                })
                        },
                    },
                    {
                        path: 'viewtask/:task_id',
                        name: 'kanboard_viewtask',
                        component: KanbanViewTask,
                        meta: {
                            requiresAuth: true
                        },
                        beforeEnter: (to, from, next) => {
                            let param = to.params.board_id;
                            axios.post('/api/verifyKanbanTask', {
                                board_id: param,
                                action: 'View',
                                type: 'task'
                            })
                                .then((response) => {
                                    if(response.data.status === 'authenticated') {
                                        next();
                                    }
                                    else{
                                        next({ name: 'error404' });
                                    }
                                    
                                })
                        },
                    },
                    {
                        path: 'gallery/:task_id',
                        name: 'kanboard_gallery',
                        component: KanbanGallery,
                        meta: {
                            requiresAuth: true
                        },
                    },
                    {
                        path: 'delete/:taskid',
                        name: 'delete',
                        component: deletekanbantask,
                        meta: {
                            requiresAuth: true
                        },
                    },
                    {
                        path: 'delete/:cardid',
                        name: 'deletecard',
                        component: deletekanbancard,
                        meta: {
                            requiresAuth: true
                        },
                    },
                    {
                        path: 'statistics',
                        name: 'kanboard_stats',
                        component: KanbanStatistics,
                        meta: {
                            requiresAuth: true
                        },
                    }
                ]
            },
            {
                path: 'boards/scrum/:board_id',
                name: 'test',
                component: Test,
                meta: {
                    requiresAuth: true
                },
                beforeEnter: (to, from, next) => {
                    let param = to.params.board_id;
                    axios.post('/api/verifyBoardUsers', {
                        id: param,
                        type: 2
                    })
                        .then((response) => {
                            console.log(response);
                            
                            if(response.data.status === 'authenticated') {
                                next();
                            }
                            else{
                                next({ name: 'error404' });
                            }
                            
                        })
                },
                children: [
                    {
                        path: 'addus/:sprint_id',
                        name: 'snt',
                        component: SNT,
                        meta: {
                            requiresAuth: true
                        },
                        beforeEnter: (to, from, next) => {
                            let param = to.params.board_id;
                            axios.post('/api/verifyKanbanTask', {
                                board_id: param,
                                action: 'Add',
                                type: 'us'
                            })
                                .then((response) => {
                                    if(response.data.status === 'authenticated') {
                                        next();
                                    }
                                    else{
                                        next({ name: 'error404' });
                                    }
                                    
                                })
                        },
                    },
                    
                    {
                        path: 'delus/:us_id',
                        name: 'd_conf',
                        component: dConf,
                        meta: {
                            requiresAuth: true
                        },
                        beforeEnter: (to, from, next) => {
                            let param = to.params.board_id;
                            axios.post('/api/verifyKanbanTask', {
                                board_id: param,
                                action: 'Delete',
                                type: 'us'
                            })
                                .then((response) => {
                                    if(response.data.status === 'authenticated') {
                                        next();
                                    }
                                    else{
                                        next({ name: 'error404' });
                                    }
                                    
                                })
                        },
                    },

                    {
                        path: 'delsprint/:sprint_id',
                        name: 'dsprint_conf',
                        component: dSprintConf,
                        meta: {
                            requiresAuth: true
                        },
                        beforeEnter: (to, from, next) => {
                            let param = to.params.board_id;
                            axios.post('/api/verifyKanbanTask', {
                                board_id: param,
                                action: 'Delete',
                                type: 'sprint'
                            })
                                .then((response) => {
                                    if(response.data.status === 'authenticated') {
                                        next();
                                    }
                                    else{
                                        next({ name: 'error404' });
                                    }
                                    
                                })
                        },
                    },

                    {
                        path: 'newsprint/',
                        name: 'scrumboard_newsprint',
                        component: ScrumNewSprint,
                        meta: {
                            requiresAuth: true
                        },
                        beforeEnter: (to, from, next) => {
                            let param = to.params.board_id;
                            axios.post('/api/verifyKanbanTask', {
                                board_id: param,
                                action: 'Add',
                                type: 'sprint'
                            })
                                .then((response) => {
                                    if(response.data.status === 'authenticated') {
                                        next();
                                    }
                                    else{
                                        next({ name: 'error404' });
                                    }
                                    
                                })
                        },
                    },
                    {
                        path: 'deltask/:ustask_id',
                        name: 'deltask',
                        component: dustask,
                        meta: {
                            requiresAuth: true
                        },
                        beforeEnter: (to, from, next) => {
                            let param = to.params.board_id;
                            axios.post('/api/verifyKanbanTask', {
                                board_id: param,
                                action: 'Delete',
                                type: 'us'
                            })
                                .then((response) => {
                                    if(response.data.status === 'authenticated') {
                                        next();
                                    }
                                    else{
                                        next({ name: 'error404' });
                                    }
                                    
                                })
                        },
                    },
                    {
                        path: 'us/:sprint_id/:us_id',
                        name: 'us_view',
                        component: ViewUS,
                        meta: {
                            requiresAuth: true
                        },
                        beforeEnter: (to, from, next) => {
                            let param = to.params.board_id;
                            axios.post('/api/verifyKanbanTask', {
                                board_id: param,
                                action: 'View',
                                type: 'us'
                            })
                                .then((response) => {
                                    if(response.data.status === 'authenticated') {
                                        next();
                                    }
                                    else{
                                        next({ name: 'error404' });
                                    }
                                    
                                })
                        },
                        children: [
                            {
                                path: 'addtask/',
                                name: 'us_addtask',
                                component: USAddTask,
                                meta: {
                                    requiresAuth: true
                                },
                                beforeEnter: (to, from, next) => {
                                    let param = to.params.board_id;
                                    axios.post('/api/verifyKanbanTask', {
                                        board_id: param,
                                        action: 'Add',
                                        type: 'task'
                                    })
                                        .then((response) => {
                                            if(response.data.status === 'authenticated') {
                                                next();
                                            }
                                            else{
                                                next({ name: 'error404' });
                                            }
                                            
                                        })
                                },
                            },
                            {
                                path: 'viewtask/:task_id',
                                name: 'us_viewtask',
                                component: USViewTask,
                                meta: {
                                    requiresAuth: true
                                },
                                beforeEnter: (to, from, next) => {
                                    let param = to.params.board_id;
                                    axios.post('/api/verifyKanbanTask', {
                                        board_id: param,
                                        action: 'View',
                                        type: 'task'
                                    })
                                        .then((response) => {
                                            if(response.data.status === 'authenticated') {
                                                next();
                                            }
                                            else{
                                                next({ name: 'error404' });
                                            }
                                            
                                        })
                                },
                            },
                            {
                                path: 'gallery/:task_id',
                                name: 'scrumboard_gallery',
                                component: KanbanGallery,
                                meta: {
                                    requiresAuth: true
                                },
                            },
                        ]
                    },
                ]
            },
            {
                path: 'boards/scrum/:board_id/:sprint_id',
                name: 'test_sprint',
                component: TestSprint,
                meta: {
                    requiresAuth: true
                },
                beforeEnter: (to, from, next) => {
                    let param = to.params.board_id;
                    let sprint_id = to.params.sprint_id;
                    axios.post('/api/verifyBoardUsers', {
                        id: param,
                        type: 2,
                        sprint_id: sprint_id
                    })
                        .then((response) => {
                            if(response.data.status === 'authenticated') {
                                next();
                            }
                            else{
                                next({ name: 'error404' });
                            }
                            
                        })
                },
                children: [
                    {
                        path: 'addtask/:us_id',
                        name: 'addtask_sprint',
                        component: AddUStask,
                        meta: {
                            requiresAuth: true
                        },
                        beforeEnter: (to, from, next) => {
                            let param = to.params.board_id;
                            axios.post('/api/verifyKanbanTask', {
                                board_id: param,
                                action: 'Add',
                                type: 'task'
                            })
                                .then((response) => {
                                    if(response.data.status === 'authenticated') {
                                        next();
                                    }
                                    else{
                                        next({ name: 'error404' });
                                    }
                                    
                                })
                        },
                    },
                    {
                        path: 'vt/:us_id/:task_id',
                        name: 'viewtask_sprint',
                        component: ViewUStask,
                        meta: {
                            requiresAuth: true
                        },
                        beforeEnter: (to, from, next) => {
                            let param = to.params.board_id;
                            axios.post('/api/verifyKanbanTask', {
                                board_id: param,
                                action: 'View',
                                type: 'task'
                            })
                                .then((response) => {
                                    if(response.data.status === 'authenticated') {
                                        next();
                                    }
                                    else{
                                        next({ name: 'error404' });
                                    }
                                    
                                })
                        },
                    },
                    {
                        path: 'gallery/:task_id',
                        name: 'sprint_gallery',
                        component: KanbanGallery,
                        meta: {
                            requiresAuth: true
                        },
                    },
                    {
                        path: 'statistics',
                        name: 'sprint_stats',
                        component: Statistics,
                        meta: {
                            requiresAuth: true
                        },
                    },
                    {
                        path: 'deletesprintcard/:cardid',
                        name: 'deletesprint',
                        component: deletemodalsprintcard,
                        meta: {
                            requiresAuth: true
                        },
                    },
                ]
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            requiresGuest: true
        },
    },
    {
        path: '*',
        name:'error404', 
        component: Error404
    }

];

export function verifyUser() {
    
}