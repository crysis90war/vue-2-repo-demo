import Vue from "vue";
import VueRouter from "vue-router";
// Importation des views/components
import Home from "../views/home/Home.vue";
import About from "../views/home/About.vue";
import ArticleList from "../views/article/ArticleList.vue";
import ArticleListVueX from "../views/article/ArticleListVueX.vue";
import NotFound from "../views/shared/NotFound.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            redirect: '/home',
        },
        {
            path: "/home",
            name: "Home",
            component: Home
        },
        {
            path: "/articles",
            name: "ArticleList",
            component: ArticleList,
            children: [{
                path: "vuex",
                name: "ArticleListVueX",
                component: ArticleListVueX
            }]
        },
        {
            path: "/about",
            name: "About",
            component: About
        },
        {
            path: '/404',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});

export default router;