import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router);
let arr = [
    {
        path: '*', redirect: '/company',
        meta: {cname: 'empty'},
    },
    {
        path: '/login', component: () => import('@/components/Login/login.vue'),
        meta: {cname: 'empty'},
    },
    {
        path: '/', redirect: '/company',
        meta: {cname: 'empty'},
    }
];
routes.routes.push(...arr);
console.log(routes);
export default new Router({
  routes:routes.routes
})
