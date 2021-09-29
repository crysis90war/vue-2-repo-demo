import Repository from "../../repositories/repository.factory";

const ArticleRepository = Repository.get("articles");

const state = () => ({
    articles: []
});

const getters = {
    articles: state => state.articles
};

const mutations = {
    LOAD_ARTICLES: (state, res) => {
        const { data } = res;
        state.articles = data;
    }
}

const actions = {
    GetArticles: async function({ commit }) {
        commit('LOAD_ARTICLES', await ArticleRepository.GetAll());
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}