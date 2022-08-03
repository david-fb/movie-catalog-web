<script setup>
import Menu from './Menu.vue';
import UserMenu from './UserMenu.vue';
</script>
<template>
  <nav class="Nav">
    <router-link to="/">
      <img class="Nav__logo" src='./icons/IMDb-logo.png'/>
    </router-link>
    <Menu />
    <user-menu />
  </nav>
</template>
<style lang="scss">
.Nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;

  &__logo {
    width: 100px;
  }
}
</style>