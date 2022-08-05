<script setup>
import Menu from './Menu.vue';
import UserMenu from './UserMenu.vue';
import ListIcon from './icons/ListIcon.vue';
</script>
<template>
  <nav class="Nav">
    <router-link to="/">
      <img class="Nav__logo" src='./icons/IMDb-logo.png'/>
    </router-link>
    <Menu />
    <user-menu />
    <button class="openMobileMenu"><list-icon color="#000000"/></button>
  </nav>
</template>
<style lang="scss">
.Nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  z-index: 2;

  &__logo {
    width: 100px;
  }
}

.openMobileMenu {
  display: none;
  border: none;
  background: transparent;
  cursor: pointer;
}

@media (max-width: 720px) {
  .openMobileMenu{
    display: block;
  }
}

</style>