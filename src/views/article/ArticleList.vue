<template>
    <div>
        <h1>{{ title }}</h1>

        <div v-for="(article, index) in articles" :key="index">
            <p>{{ article.titre }}</p>
        </div>
    </div>
</template>

<script>
import Repository from "../../repositories/repository.factory";

const ArticleRepository = Repository.get("articles");

export default {
    name: "Article",
    data() {
        return {
            title: "Articles",
            articles: []
        }
    },

    created() {
        this.GetArticles();
    },

    methods: {
        GetArticles: async function() {
            const { data } = await ArticleRepository.GetAll();
            this.articles = data;
        }
    }
}
</script>

<style scoped>
</style>