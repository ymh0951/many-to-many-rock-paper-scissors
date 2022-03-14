import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';
import AddUser from '../views/AddUser.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: Main
        },
        {
            path: '/adduser',
            component: AddUser
        }
    ]
})

