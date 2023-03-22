import { createRouter, createWebHistory } from "vue-router";

import HelloWorld from '../components/HelloWorld.vue';
import Projects from '../components/Projects.vue';
import AboutUs from '../components/AboutUs.vue';
import LoginForm from '../components/LoginForm.vue';



const routes = [
    { path: '/', component: HelloWorld },
    { path: '/aboutus',component: AboutUs },
    { path: '/contact',component: Projects },
    { path: '/login',component: LoginForm }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;