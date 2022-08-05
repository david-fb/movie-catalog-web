<script setup>
import { ref } from 'vue';
import AddFavoriteButton from './AddFavoriteButton.vue';
import GridIcon from './icons/GridIcon.vue';
import ListIcon from './icons/ListIcon.vue';
import SearchIcon from './icons/SearchIcon.vue';
import StarIcon from './icons/StarIcon.vue';
import DotsIcon from './icons/DotsIcon.vue';
import ModalMovieDetails from './ModalMovieDetails.vue';
import { useStore } from '../stores/movies';
import { storeToRefs } from 'pinia';

const imageBaseUrl = "https://image.tmdb.org/t/p/w400";

const store = useStore();
const { movies } = storeToRefs(store);
const { getMovieGenres, loadMoreMovies } = store;

const showModal = ref(false);

const selectedMovie = ref({});

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
                <li v-for="movie in movies" class="MovieList__grid__item" @click="selectedMovie = movie; showModal = true">
                    <img :src="imageBaseUrl + movie.poster_path" loading="lazy"/>
                    <div >
                        <h3>{{movie.title}}</h3>
                        <ul class="genres-list">
                            <li v-for="genre in getMovieGenres(movie.genre_ids)">{{genre.name}}</li>
                        </ul>
                        <p>{{movie.vote_average}}</p>
                        <div class="addFavorite">
                            <AddFavoriteButton />
                        </div>
                    </div>
                </li>
                    <modal-movie-details :movie="selectedMovie" :show="showModal" @close="showModal = false"/>
            </ul>

            <button class="MovieList__showMore" @click="loadMoreMovies"><dots-icon /></button>
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

            & > li {
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
                flex: 1;

                & > h3 {
                    font-weight: 500;
                    text-transform: uppercase;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                & .genres-list  {
                    list-style: none;
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;

                    & > li {
                        color: $primary-color;
                        font-weight:500;
                    }
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

    &__showMore {
        border: none;
        width: 50px;
        aspect-ratio: 1 / 1;
        background: $primary-color;
        margin: 70px auto 0;
        border-radius: 50%;
        display: grid;
        place-items: center;
        cursor: pointer;
    }
}

@media (max-width: 1130px) {
    .MovieList__control {
        & .range {
            width: 500px;
        }
        & .search {
            width: 340px;
        }
    }
}

@media (max-width: 1000px) {
    .MovieList__grid{
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    }

    .MovieList__control {
        flex-direction: column-reverse;
        gap: 15px;
    }
}

@media (max-width: 975px) {

    .MovieList__nav {
        gap: 20px;
        overflow-x: auto;
        overflow-y: hidden;

        &__list {
            & > li {
                white-space: nowrap;
            }
        }
    }
}

@media (max-width: 560px) {
    .MovieList__control {
        & .range {
            width: 350px;
        }
        & .search {
            width: 290px;
        }
    }
}
@media (max-width: 410px) {
    .MovieList__control {
        & .range {
            width: 270px;
        }
        & .search {
            width: 240px;
            & > input {
                width: 220px;
            }
        }
    }
}
</style>