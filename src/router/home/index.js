export default {
    path: '/Home',
    component : () => import('@/views/Home/index.vue'),
    children : [
        {
            path : 'BreadcrumbView',
            name : 'BreadcrumbView',
            component : () => import('@/views/Home/BreadcrumbView')
        },
        {
            path : 'EchartsView',
            name : 'EchartsView',
            component : () => import('@/views/Home/EchartsView')
        },
        {
            path : 'TableView',
            name : 'TableView',
            component : () => import('@/views/Home/TableView')
        },
        {
            path : 'DialogView',
            name : 'DialogView',
            component : () => import('@/views/Home/DialogView')
        },
        {
            path : 'TextView',
            name : 'TextView',
            component : () => import('@/views/Home/TextView')
        },
        {
            path : '/Home',
            redirect : '/Home/EchartsView'
        }
    ]
}