import axios from "axios";

const baseURL = "https://be-nb-news.herokuapp.com/api";

export const getArticles = topic => {
  return axios
    .get(`${baseURL}/articles`, { params: { topic } })
    .then(response => {
      return response.data.articles;
    });
};

export const getArticleById = article_id => {
  return axios.get(`${baseURL}/articles/${article_id}`).then(response => {
    return response.data.article;
  });
};
