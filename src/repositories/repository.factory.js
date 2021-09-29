import articleRepository from "./article.repository"

const repositories = {
    'articles': articleRepository
}

export default {
    get: name => repositories[name]
}