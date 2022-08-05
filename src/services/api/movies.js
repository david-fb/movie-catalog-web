import endPoints from '.';
import axios from 'axios';

export const getMoviesInTheatres = async (page = 1) => {
  return await axios.get(endPoints.moviesInTheatres(page));
};

export const getMoviesGenres = async () => {
  return await axios.get(endPoints.moviesGenres());
};
