<script setup>
import Nav from './Nav.vue';
</script>
<template>
  <header class="Header">
    <Nav />
  </header>
</template>
<styles lang="scss">
.Header {
  @import '../assets/variables';

  background-color: $text-color;
  min-height: 500px;
}
</styles>
