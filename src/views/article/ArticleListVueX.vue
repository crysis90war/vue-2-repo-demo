<template>
    <div>
        <h1>{{ title }}</h1>

        <div v-for="(article, index) in articles" :key="index">
            <p>{{ article.titre }}</p>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "Article",
    data() {
        return {
            title: "Articles VueX",
        }
    },

    computed: {
        ...mapGetters({
            articles: "Articles/articles"
        })
    },

    created() {
        // this.$store.dispatch('articles/GetArticles')
        this.GetArticles();
    },

    methods: {
        ...mapActions({
            GetArticles: "Articles/GetArticles"
        })
    }
}
</script>

<style scoped>
</style>