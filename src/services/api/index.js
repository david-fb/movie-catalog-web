const API_KEY = import.meta.env.VITE_API_KEY;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const endPoints = {
  moviesInTheatres: (page) => `${API_BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`,
  moviesGenres: () => `${API_BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
};

export default endPoints;
