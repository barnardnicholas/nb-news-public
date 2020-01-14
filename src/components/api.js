import axios from "axios";

const baseURL = "https://be-nb-news.herokuapp.com/api";

export const getAllArticles = () => {
  return axios.get(`${baseURL}/articles`).then(response => {
    return response.data.articles;
  });
};

export const getArticleById = article_id => {
  return axios.get(`${baseURL}/articles/${article_id}`).then(response => {
    return response.data.article;
  });
};
