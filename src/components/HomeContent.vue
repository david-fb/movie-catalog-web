<script setup>
import { reactive } from 'vue';
import AddFavoriteButton from './AddFavoriteButton.vue';
import GridIcon from './icons/GridIcon.vue';
import ListIcon from './icons/ListIcon.vue';
import SearchIcon from './icons/SearchIcon.vue';
import StarIcon from './icons/StarIcon.vue';

const imageBaseUrl = "https://image.tmdb.org/t/p/w400";

const movies = reactive([
    {
      "adult": false,
      "backdrop_path": "/p1F51Lvj3sMopG948F5HsBbl43C.jpg",
      "genre_ids": [
        28,
        12,
        14
      ],
      "id": 616037,
      "original_language": "en",
      "original_title": "Thor: Love and Thunder",
      "overview": "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
      "popularity": 13162.608,
      "poster_path": "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
      "release_date": "2022-07-06",
      "title": "Thor: Love and Thunder asdasdasdasdsdasd",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 1554
    },
    {
      "adult": false,
      "backdrop_path": "/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg",
      "genre_ids": [
        10751,
        16,
        12,
        35,
        14
      ],
      "id": 438148,
      "original_language": "en",
      "original_title": "Minions: The Rise of Gru",
      "overview": "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
      "popularity": 6979.538,
      "poster_path": "/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
      "release_date": "2022-06-29",
      "title": "Minions: The Rise of Gru",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 677
    },
    {
      "adult": false,
      "backdrop_path": "/hT9ZUwLN5tB2O7miBu1oIMJFqJT.jpg",
      "genre_ids": [
        12,
        28,
        878
      ],
      "id": 507086,
      "original_language": "en",
      "original_title": "Jurassic World Dominion",
      "overview": "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
      "popularity": 6380.612,
      "poster_path": "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
      "release_date": "2022-06-01",
      "title": "Jurassic World Dominion",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2382
    },
    {
      "adult": false,
      "backdrop_path": "/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
      "genre_ids": [
        28,
        18
      ],
      "id": 361743,
      "original_language": "en",
      "original_title": "Top Gun: Maverick",
      "overview": "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
      "popularity": 4965.168,
      "poster_path": "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
      "release_date": "2022-05-24",
      "title": "Top Gun: Maverick",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 1773
    },
    {
      "adult": false,
      "backdrop_path": "/27Mj3rFYP3xqFy7lnz17vEd8Ms.jpg",
      "genre_ids": [
        28,
        53
      ],
      "id": 725201,
      "original_language": "en",
      "original_title": "The Gray Man",
      "overview": "When a shadowy CIA agent uncovers damning agency secrets, he's hunted across the globe by a sociopathic rogue operative who's put a bounty on his head.",
      "popularity": 3505.324,
      "poster_path": "/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg",
      "release_date": "2022-07-13",
      "title": "The Gray Man",
      "video": false,
      "vote_average": 7,
      "vote_count": 1100
    },
    
  ])
</script>
<template>
    <main class="MainContainer">
        <section class="MovieList">
            <nav class="MovieList__nav">
                <ul class="MovieList__nav__list">
                    <li>in theaters</li>
                    <li>coming soon</li>
                    <li>charts</li>
                    <li>tv series</li>
                    <li>trailers</li>
                    <li>more</li>
                </ul>
                <button class="MovieList__nav__button"><star-icon/> 179</button>
            </nav>
            <div class="MovieList__control">
                <div class="typeButtons">
                    <button>
                        <list-icon />
                    </button>
                    <button>
                        <grid-icon />
                    </button>
                </div>
                <label class="range">
                    IMDb Rating
                    <input type="range" min="0" max="10" step="0.1"/>
                </label>
                <div class="search">
                    <input type="search">
                    <button>
                        <search-icon />
                    </button>
                </div>
            </div>
            <ul class="MovieList__grid">
                <li v-for="movie in movies" class="MovieList__grid__item">
                    <img :src="imageBaseUrl + movie.poster_path" loading="lazy"/>
                    <div >
                        <h3>{{movie.title}}</h3>
                        <p>{{movie.vote_average}}</p>
                        <div class="addFavorite">
                            <AddFavoriteButton />
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </main>
</template>
<style lang="scss">
@import '../assets/_variables.scss';

.MainContainer{
    width: 100%;
    background-color: $bg-color;
}
.MovieList{
    background: linear-gradient(0deg, $bg-color 0%, $bg-grid 85%);
    width: 100%;
    max-width: 1200px;
    min-height: 500px;
    top: -70px;
    margin: auto;
    padding: 0px 40px;
    z-index: 1;
    border-radius: 5px;

    &__nav {
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid #dcdcdc;
        align-items: center;
        &__list{
            list-style: none;
            display: flex;
            gap: 60px;

            & li {
                text-transform: uppercase;
                color: $text-color;
                height: 80px;
                display: flex;
                align-items: center;
                cursor: pointer;
                bottom: -2px;
                font-weight: 400;

                &:first-child, &:hover {
                    color: $primary-color;
                    border-bottom: 2px solid $primary-color;
                }
            }
        }
        &__button {
            border: none;
            background-color: $primary-color;
            padding: 9px 30px;
            border-radius: 5px;
            color: $color-white;
            display: flex;
            gap: 15px;
            align-items: center;
            font-size: 16px;
            font-weight: 500;
        }
    }

    &__grid {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(3, minmax(300px, 400px));
        gap: 20px;
        margin-top: 50px;

        &__item {
            overflow: hidden;
            display: flex;
            flex-direction: column;
            box-shadow: 0px 8px 7px rgba($color: #000000, $alpha: .05);
            border-radius: 3px;

            & > img {
                width: 100%;
                min-height: 500px;
                object-fit: cover;
            }
            & > div {
                background-color: $color-white;
                padding: 20px;
                position: relative;

                & > h3 {
                    font-weight: 500;
                    text-transform: uppercase;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                & > p {
                    font-weight: 600;
                    font-size: 24px;
                }

                .addFavorite {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    color: $color-white;
                    width: 55px;
                    height: 55px;
                }
            }

            &:hover {
                transform: scale(1.05);
                z-index: 1;
                box-shadow: 0px 0px 25px rgba($color: #000000, $alpha: .6);
                transition: transform .3s ease;
            }
        }
    }

    &__control {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 40px;

        & .typeButtons {
            display: flex;
            gap: 5px;
            & > button {
                background: transparent;
                border: none;
                cursor: pointer;
            }
        }

        & .range {
            display: flex;
            flex-direction: column;
            gap: 7px;
            width: 600px;
            & > input {
                width: 100%;
                height: 2px;
                margin-top: 8px;
                -webkit-appearance: none;

                &::-webkit-slider-runnable-track {
                    background-color: rgb(207, 207, 207);
                    height: 2px;
                }
                &::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    width: 15px;
                    height: 15px;
                    background: $primary-color;
                    border-radius: 50%;
                    margin-top: -6px;
                }
                // Firefox
                &::-moz-range-thumb {
                    width: 15px;
                    height: 15px;
                    background: $primary-color;
                    border: none;
                }
                &::-moz-range-progress {
                    height: 2px;
                    background: $primary-color;
                    border: 0;
                    margin-top: 0;
                }
                &::-moz-range-track {
                    height: 2px;
                    background: rgb(207, 207, 207);
                }
            }
        }

        & .search {
            width: 370px;
            background-color: $bg-grid;
            border-bottom: 2px solid rgb(207, 207, 207);
            display: flex;
            align-items: flex-end;
            padding-bottom: 2px;
            gap: 5px;
            & > input {
                border: none;
                background: transparent;
                flex: 1;

                &:focus {
                    outline: none;
                }
            }
            & > button {
                border: none;
                background: transparent;
                cursor: pointer;
            }
        }
    }
}
</style>