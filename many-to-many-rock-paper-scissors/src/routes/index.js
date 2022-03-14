import Vue from 'vue';
import VueRouter from 'vue-router';
import { store } from '../store/index.js';
import Main from '../views/Main.vue';
import AddUser from '../views/AddUser.vue';
import Stage from '../views/Stage.vue';

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
        },
        {
            path: `/stage:${store.state.stageCount}`,
            component: Stage
        }
    ]
})