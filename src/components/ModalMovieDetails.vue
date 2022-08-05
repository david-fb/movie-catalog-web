<script setup>
import { ref } from 'vue';
import { useStore } from '../stores/movies';
import HeartIcon from './icons/HeartIcon.vue';
import ThumbUpIcon from './icons/ThumbUpIcon.vue';
import AwardsIcon from './icons/AwardsIcon.vue';
const props = defineProps({
  show: Boolean,
  movie: Object
});
const store = useStore();
const { getMovieGenres } = store;

const imageBaseUrl = "https://image.tmdb.org/t/p/w400";

const modalContainerRef = ref(null);
const modalWrapperRef = ref(null);

function handleMouseMove(evt) {
    const maxRotation = 10;
    const cardBound = modalContainerRef.value?.getBoundingClientRect();
    const cardWidth = cardBound?.width;
    const cardHeight = cardBound?.height;
    const centerX = cardBound?.left + cardWidth/2;
    const centerY = cardBound?.top+ cardHeight/2;
    const mouseX = evt.clientX - centerX;
    const mouseY = evt.clientY - centerY;

    const rotationX = ((-1)*maxRotation*mouseY /(cardHeight/2)).toFixed(2);
    const rotationY = ((+1)*maxRotation*mouseX /(cardWidth/2)).toFixed(2);

    if(!modalContainerRef.value) return;
    modalContainerRef.value.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}

function handleMouseLeave() {
    if(!modalContainerRef.value) return;
    modalContainerRef.value.style.transform = `rotateX(0deg) rotateY(0deg)`
}

</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div ref="modalWrapperRef" class="modal-wrapper" @mousemove="handleMouseMove($event)" @mouseleave="handleMouseLeave">
        <div ref="modalContainerRef" class="modal-container">
          <div class="modal-image">
            <img :src="imageBaseUrl + movie.poster_path" loading="lazy"/>
          </div>

          <div class="modal-body">
            <button class="modal-close-button" @click="$emit('close')">X</button>
            <div class="modal-body-header">
                <h3>{{movie.title}}</h3>
                <div class="movie-categories">
                    <ul class="movie-categories-genres">
                        <li v-for="genre in getMovieGenres(movie.genre_ids)">{{genre.name}}</li>
                    </ul>
                    <ul class="movie-categories-classification">
                        <li>PG-13</li>
                        <li>Duration</li>
                    </ul>
                </div>
                <div class="movie-info">
                    <ul>
                        <li>
                          <span><heart-icon />{{movie.vote_average}}</span>
                          <p>Raiting</p>
                        </li>
                        <li>
                          <span><thumb-up-icon />{{movie.vote_count}}</span>
                          <p>Score</p>
                        </li>
                        <li>
                          <span><awards-icon />12</span>
                          <p>Awards</p>
                        </li>
                    </ul>
                </div>
            </div>
            <p class="movie-overview">
                {{movie.overview}}
                <br/>
                <br/>
                <a href="#">Full Movie Profile --></a>
            </p>
            <div class="modal-body-buttons">
                <button class="watch">Watch Trailer</button>
                <button class="add">To Watchlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss">
@import '../assets/variables';

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: grid;
  place-items: center;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: flex;
  width: fit-content;
  perspective: 1000px;
}

.modal-container::before, .modal-container::after {
    content: '';
    position: absolute;
    height: 7px;
    left: 50%;
    transform: translateX(-50%);
}

.modal-container::before{
    top: -7px;
    width: 650px;
    background: rgba(34, 40, 73, 0.4);
}
.modal-container::after {
    background: rgba(77, 34, 34, 0.4);
    width: 580px;   
    top: -14px;
}

.modal-container {
  display: flex;
  width: 750px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-container:hover {
    transition: none;
}

.modal-image {
  width: 300px;

  & > img {
    width: 300px;
    height: 100%;
    object-fit: cover;
  }
}
.modal-close-button {
    position: absolute;
    right: 5px;
    top: 0;
    padding: 4px;
    cursor: pointer;
    z-index: 1;
    border: none;
    background: transparent;
    font-size: 20px;
    color: #c7c7c7;
    font-weight: 500;
}
.modal-body {
    display: flex;
    flex-direction: column;
    position: relative;
}
.modal-body-buttons {
    width: 100%;
    height: 50px;
    margin-top: auto;
    background-color: $color-black;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    & > button {
        border: none;
        font-weight: 500;
    }

    & .watch {
        background: $primary-color;
        color: $color-white;
    }

    & .add {
        background: $color-black;
        color: $primary-color;
    }
}

.modal-body-header {
    width: 95%;
    background-color: #fff;
    padding: 20px 20px 10px;
    margin-top: 30px;
    right: 23px;
    z-index: 1;
    border-radius: 2px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.33);

    > h3 {
        text-transform: uppercase;
    }
    & ul {
        list-style: none;
        display: flex;
    }
}

.movie-categories {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-genres {
        gap: 10px;
        width: 230px;
        overflow: auto;

        & > li {
            color: #53b6e8;
            white-space: nowrap;
        }
    }
    &-classification {
        gap: 10px;
        & > li {
            background: #f2f2f2;
            padding: 5px 10px;
            border-radius: 9999px;
        }
    }
}

.movie-info {
    margin-top: 15px;
    & > ul {
        border-top: 2px solid #f2f2f2;
        justify-content: space-around;
        padding: 10px;
        align-items: center;

        & > li {
          display: flex;
          flex-direction: column;
          align-items: center;

          & > span {
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 18px;
          }

          > p {
            font-size: 12px;
          }
        }
    }
}

.movie-overview {
    widows: 100%;
    padding: 20px;

    & > a {
        color: #53b6e8;
        font-weight: 500;
        text-transform: uppercase;
    }
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media (max-width: 780px) {
  .modal-container{
    width: 500px;
  }
  .modal-container::before{
    width: 400px;
  }
  .modal-container::after {
      width: 330px;   
  }
  .modal-image {
    display: none;
  }
}
@media (max-width: 545px) {
  .modal-container{
    width: 300px;
  }
  .modal-container::before{
    width: 200px;
  }
  .modal-container::after {
      width: 130px;   
  }
  .modal-body-header {
    width: 280px;
  }
  .movie-categories {
    flex-direction: column;
  }
  .modal-body-buttons{
    display: flex;
    flex-direction: column;

    & > button {
      padding: 15px;
    }
  }
}
</style>