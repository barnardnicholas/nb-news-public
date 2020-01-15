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

export const getCommentsByArticleId = article_id => {
  return axios
    .get(`${baseURL}/articles/${article_id}/comments`)
    .then(response => {
      return response.data.comments;
    });
};

export const patchArticleById = (article_id, votes) => {
  return axios
    .patch(`${baseURL}/articles/${article_id}`, { inc_votes: votes })
    .then(response => {
      return response.data.article;
    });
};

export const patchCommentById = (comment_id, votes) => {
  return axios
    .patch(`${baseURL}/comments/${comment_id}`, { inc_votes: votes })
    .then(response => {
      return response.data.comment;
    });
};

export const deleteComment = comment_id => {
  return axios.delete(`${baseURL}/comments/${comment_id}`).then(response => {
    console.log(response);
  });
};
