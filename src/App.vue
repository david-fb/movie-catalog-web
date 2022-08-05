<script setup>
import { onBeforeMount } from 'vue';
import { useStore } from './stores/movies';
const store = useStore();
const { loadMoviesInTheatres } = store;

onBeforeMount(() => {
  loadMoviesInTheatres();
});

</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss"></style>
