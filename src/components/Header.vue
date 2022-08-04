<script setup>
import Nav from './Nav.vue';
import HeaderSlider from './HeaderSlider.vue';
</script>
<template>
  <header class="Header">
    <Nav />
    <header-slider />
  </header>
</template>
<styles lang="scss">
@import '../assets/variables';

.Header {
  min-height: 800px;
  position: relative;
}
</styles>
