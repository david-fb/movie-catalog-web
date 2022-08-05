<script setup>
import TwitterIcon from './icons/TwitterIcon.vue';
import FacebookIcon from './icons/FacebookIcon.vue';
import InstagramIcon from './icons/InstagramIcon.vue'
</script>
<template>
    <footer class="Footer">
        <div class="Footer-info">
            <h4>IMDb</h4>
            <ul>
                <li><twitter-icon /></li>
                <li><facebook-icon /></li>
                <li><instagram-icon /></li>
            </ul>
            <p>1990-2015 IMDB.com, INC</p>
        </div>
        <div class="Footer-menu">
            <p>show menu</p>
        </div>
    </footer>
</template>
<style lang="scss">
@import '../assets/variables';
.Footer-info {
    display: flex;
    height: 100px;
    justify-content: space-between;
    background: $color-white;
    align-items: center;
    padding: 25px;

    & > h4 {
        font-weight: 700;
        color: #bcbcbc;
    }

    & > ul {
        display: flex;
        list-style: none;
        gap: 30px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    & > p {
        color: #bcbcbc;
        text-transform: uppercase;
    }
}
.Footer-menu {
    border-top: 1px solid #f2f2f2;
    background-color: $color-white;
    display: grid;
    place-items: center;
    padding: 10px;

    & > p {
        color: $primary-color;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
    }
}
</style>