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

export const patchArticleById = (article_id, votes) => {
  return axios
    .patch(`${baseURL}/articles/${article_id}`, { inc_votes: votes })
    .then(response => {
      console.log(response);
      return response.data.article;
    });
};
