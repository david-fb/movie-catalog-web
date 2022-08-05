import { defineStore } from 'pinia';
import { ref, computed, reactive } from 'vue';
import { getMoviesInTheatres, getMoviesGenres } from '../services/api/movies';

export const useStore = defineStore('main', () => {
  let moviesData = ref({});

  let movies = ref([]);

  let headerMovies = ref([]);

  const genres = ref([]);

  function getMovieGenres(movieGenres) {
    const res = this.genres.filter((genre) => movieGenres.includes(genre.id));
    return res;
  }

  async function loadMoviesInTheatres() {
    const { data: genresRes } = await getMoviesGenres();
    this.genres = genresRes.genres;

    const { data } = await getMoviesInTheatres();
    this.moviesData = { ...data };
    this.movies = [...data.results];
    this.headerMovies = [...data.results.slice(0, 5)];
  }

  return { movies, headerMovies, genres, getMovieGenres, loadMoviesInTheatres };
});
