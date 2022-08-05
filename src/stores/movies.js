import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useStore = defineStore('main', () => {
  const movies = ref([
    {
      adult: false,
      backdrop_path: '/p1F51Lvj3sMopG948F5HsBbl43C.jpg',
      genre_ids: [28, 12, 14],
      id: 616037,
      original_language: 'en',
      original_title: 'Thor: Love and Thunder',
      overview:
        'After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.',
      popularity: 13162.608,
      poster_path: '/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
      release_date: '2022-07-06',
      title: 'Thor: Love and Thunder',
      video: false,
      vote_average: 6.7,
      vote_count: 1554,
    },
    {
      adult: false,
      backdrop_path: '/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg',
      genre_ids: [10751, 16, 12, 35, 14],
      id: 438148,
      original_language: 'en',
      original_title: 'Minions: The Rise of Gru',
      overview: 'A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.',
      popularity: 6979.538,
      poster_path: '/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
      release_date: '2022-06-29',
      title: 'Minions: The Rise of Gru',
      video: false,
      vote_average: 7.7,
      vote_count: 677,
    },
    {
      adult: false,
      backdrop_path: '/hT9ZUwLN5tB2O7miBu1oIMJFqJT.jpg',
      genre_ids: [12, 28, 878],
      id: 507086,
      original_language: 'en',
      original_title: 'Jurassic World Dominion',
      overview:
        'Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.',
      popularity: 6380.612,
      poster_path: '/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg',
      release_date: '2022-06-01',
      title: 'Jurassic World Dominion',
      video: false,
      vote_average: 7.1,
      vote_count: 2382,
    },
    {
      adult: false,
      backdrop_path: '/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg',
      genre_ids: [28, 18],
      id: 361743,
      original_language: 'en',
      original_title: 'Top Gun: Maverick',
      overview:
        'After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.',
      popularity: 4965.168,
      poster_path: '/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
      release_date: '2022-05-24',
      title: 'Top Gun: Maverick',
      video: false,
      vote_average: 8.3,
      vote_count: 1773,
    },
    {
      adult: false,
      backdrop_path: '/27Mj3rFYP3xqFy7lnz17vEd8Ms.jpg',
      genre_ids: [28, 53],
      id: 725201,
      original_language: 'en',
      original_title: 'The Gray Man',
      overview: "When a shadowy CIA agent uncovers damning agency secrets, he's hunted across the globe by a sociopathic rogue operative who's put a bounty on his head.",
      popularity: 3505.324,
      poster_path: '/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg',
      release_date: '2022-07-13',
      title: 'The Gray Man',
      video: false,
      vote_average: 7,
      vote_count: 1100,
    },
  ]);

  const genres = ref([
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Adventure',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 35,
      name: 'Comedy',
    },
    {
      id: 80,
      name: 'Crime',
    },
    {
      id: 99,
      name: 'Documentary',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 36,
      name: 'History',
    },
    {
      id: 27,
      name: 'Horror',
    },
    {
      id: 10402,
      name: 'Music',
    },
    {
      id: 9648,
      name: 'Mystery',
    },
    {
      id: 10749,
      name: 'Romance',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 10770,
      name: 'TV Movie',
    },
    {
      id: 53,
      name: 'Thriller',
    },
    {
      id: 10752,
      name: 'War',
    },
    {
      id: 37,
      name: 'Western',
    },
  ]);

  function getMovieGenres(movieGenres) {
    const res = this.genres.filter((genre) => movieGenres.includes(genre.id));
    return res;
  }

  return { movies, genres, getMovieGenres };
});
