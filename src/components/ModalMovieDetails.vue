<script setup>
import { ref } from 'vue';
const props = defineProps({
  show: Boolean
})

const imageBaseUrl = "https://image.tmdb.org/t/p/w400";

const movie = 
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
      "title": "Thor: Love and Thunder",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 1554
    };

const modalContainerRef = ref(null);

function handleMouseMove(evt) {
    const maxRotation = 10;
    const cardBound = modalContainerRef.value.getBoundingClientRect();
    const cardWidth = cardBound.width;
    const cardHeight = cardBound.height;
    const centerX = cardBound.left + cardWidth/2;
    const centerY = cardBound.top+ cardHeight/2;
    const mouseX = evt.clientX - centerX;
    const mouseY = evt.clientY - centerY;

    const rotationX = ((-1)*maxRotation*mouseY /(cardHeight/2)).toFixed(2);
    const rotationY = ((+1)*maxRotation*mouseX /(cardWidth/2)).toFixed(2);

    modalContainerRef.value.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}

function handleMouseLeave() {
    modalContainerRef.value.style.transform = `rotateX(0deg) rotateY(0deg)`
}

</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper" @mousemove="handleMouseMove($event)" @mouseleave="handleMouseLeave">
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
                        <li>Adventure</li>
                        <li>Action</li>
                        <li>Sci-fi</li>
                    </ul>
                    <ul class="movie-categories-classification">
                        <li>PG-13</li>
                        <li>Duration</li>
                    </ul>
                </div>
                <div class="movie-info">
                    <ul>
                        <li>Raiting</li>
                        <li>Score</li>
                        <li>Awards</li>
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

        & > li {
            color: #53b6e8;
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
</style>