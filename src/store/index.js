import Vue from "vue";
import Vuex from "vuex";
import ArticleModule from "./modules/article.module";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        'ArticleModule': ArticleModule
    }
});