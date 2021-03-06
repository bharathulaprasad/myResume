import axios from "axios";

export const GitHubQuery = () => {
  return axios
    .get(`https://api.github.com/users/bharathulaprasad/repos?q=stars:>=1`)
    .then((res) => res.data)
    .then((data) => {
      return data;
    });
};

export const DevToArticles = () => {
  return axios
    .get(`https://dev.to/api/articles?username=bharathulaprasad`)
    .then((res) => {
      // console.log(JSON.stringify(res, null, 2));
      return res.data;
    })
    .then((data) => {
      //console.log(JSON.stringify(data, null, 2));
      return data;
    });
};
