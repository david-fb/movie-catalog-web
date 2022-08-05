<script setup>
import { reactive } from 'vue';
import dayjs from 'dayjs';
import PlayIcon from './icons/PlayIcon.vue';
import ArrowIcon from './icons/ArrowIcon.vue';
import { useStore } from '../stores/movies';
import { storeToRefs } from 'pinia';

const imageBaseUrl = "https://image.tmdb.org/t/p/original";
const store = useStore();
const { headerMovies: movies } = storeToRefs(store);
const { getMovieGenres } = store;

function formateDate (date) {
    return dayjs(date).format('DD MMM YYYY');
}

let state = reactive({
    sliderActive: 0,
});

function moveSlider(index) {
    state.sliderActive = index;
    const sliderFirstItem = document.querySelector('.HeaderSlider__item');
    const elementHeight = sliderFirstItem.getBoundingClientRect().height;
    sliderFirstItem.style.marginTop = `-${index * elementHeight}px`
}

function moveSLiderWithArrow(amount) {
    let result = state.sliderActive + amount;
    if(result < 0) {
        result = movies.value.length - 1;
    }
    if(result > movies.value.length - 1) {
        result = 0;
    }
    moveSlider(result);
}

</script>
<template>
    <section class="HeaderSlider">
        <ul class="HeaderSlider__dots">
            <li v-for="(movie, index) in movies" :class="{active: index === state.sliderActive}" @click="moveSlider(index)"></li>
        </ul>
        <div class="HeaderSlider__item" v-for="movie in movies">
            <img :src="imageBaseUrl + movie.backdrop_path" loading="lazy"/>
            <div class="HeaderSlider__item__info">
                <h2 class="title">{{movie.title}}</h2>
                <ul class="genres">
                    <li v-for="genre in getMovieGenres(movie.genre_ids)" :key="'movie-' + movie.id + '-genre-' + genre.id">{{genre.name}}</li>
                </ul>
                <button class="button-trailer">
                    Watch Trailer <PlayIcon />
                </button>
                <p>In theaters</p>
                <p class="date">{{formateDate(movie.release_date)}} (USA)</p>
            </div>
        </div>
        <div class="HeaderSlider__arrows">
            <ArrowIcon rotate="0" @click="moveSLiderWithArrow(-1)"/>
            <ArrowIcon rotate="180" @click="moveSLiderWithArrow(1)"/>
        </div>
    </section>
</template>
<styles lang="scss">
@import '../assets/variables';

.HeaderSlider {
    width: 100%;
    height: 800px;
    background-color: $color-black;
    position: absolute;
    top: 0;
    z-index: 1;
    overflow: hidden;

    &__item {
        width: 100%;
        height: 100%;
        position: relative;

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &__info {
            display: flex;
            flex-direction: column;
            position: absolute;
            bottom: 100px;
            width: 100%;
            max-width: 1200px;
            height: 400px;
            left: 50%;
            transform: translateX(-50%);
            align-items: flex-start;

            .title {
                color: $header-text-color;
                font-weight: 700;
                font-size: 50px;
                text-transform: uppercase;
            }

            .genres {
                display: flex;
                list-style: none;
                gap: 30px;

                li {
                    color: $header-text-color;
                    text-transform: uppercase;
                }
            }

            .button-trailer {
                background-color: $primary-color;
                border: none;
                padding: 10px 15px 10px 30px;
                border-radius: 9999px;
                margin-top: 50px;
                font-weight: 500;
                display: flex;
                align-items: center;
                gap: 20px;
                cursor: pointer;
                z-index: 1;
            }

            p:first-of-type {
                margin-top: auto;
                font-size: 16px;
                color: $header-text-color;
            }

            .date {
                color: $primary-color;
                margin-top: 5px;
                font-size: 17px;
            }
        }
    }

    &__dots {
        position: absolute;
        left: 50px;
        gap: 20px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        list-style: none;
        z-index: 1;

        & li {
            cursor: pointer;
            background-color: rgba($color: #ffffff, $alpha: .5);
            border-radius: 50%;
            width: 10px;
            aspect-ratio: 1 / 1;

            &:hover {
                background-color: rgba($color: #ffffff, $alpha: 1);
            }
        }

        .active {
            background-color: rgba($color: #ffffff, $alpha: 1);
        }
    }

    &__arrows {
        position: absolute;
        right: 50px;
        gap: 20px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
    }
}
</styles>
