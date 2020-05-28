import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
const urlApi = 'https://api.themoviedb.org/3/';
const key = 'a039f2d285e5ded9988c4d0bc7313879';

export const fetchTrands = () => {
  return axios.get(`${urlApi}trending/all/day?api_key=${key}`).then(response => response.data.results);
};

export const fetchMovies = searchQuery => {
  return axios
    .get(`${urlApi}search/movie?api_key=${key}&language=en-US&query=${searchQuery}&page=1`)
    .then(response => response.data.results);
};

export const fetchMoviesWithId = movieId => {
  return axios.get(`${urlApi}movie/${movieId}?api_key=${key}&language=en-US`).then(response => response.data);
};

export const fetchReviews = movieId => {
  return axios.get(`${urlApi}movie/${movieId}/reviews?api_key=${key}`).then(response => response.data.results);
};
export const fetchCast = movieId => {
  return axios.get(`${urlApi}movie/${movieId}/credits?api_key=${key}`).then(response => response.data.cast);
};
