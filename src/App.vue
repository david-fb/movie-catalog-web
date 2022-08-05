<script setup>
import { onBeforeMount } from 'vue';
import { useStore } from './stores/movies';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue'

const store = useStore();
const { loadMoviesInTheatres } = store;

onBeforeMount(() => {
  loadMoviesInTheatres();
});

</script>

<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<style lang="scss"></style>
