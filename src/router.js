import Vue from 'vue';
import VueRouter from "vue-router";
import PageWithPhotos from "@/views/PageWithPhotos";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/5'
        },
        {
            path: '/:page',
            name: 'page',
            component: PageWithPhotos
        }
    ]
});

export default router;