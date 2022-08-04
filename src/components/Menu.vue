<template>
  <ul class="Menu">
    <li class="Menu__item">
      <router-link to="/">Movies</router-link>
    </li>
    <li class="Menu__item">
      <router-link to="/celebs-n-photos">Celebs & Photos</router-link>
    </li>
    <li class="Menu__item">
      <router-link to="/community">Community</router-link>
    </li>
    <li class="Menu__item">
      <router-link to="/news">News</router-link>
    </li>
  </ul>
</template>
<style lang="scss">
@import '../assets/variables';

.Menu {
  display: flex;
  list-style: none;
  gap: 50px;
  color: $header-text-color;

  &__item {
    text-transform: uppercase;
    cursor: pointer;

    & > a {
      text-decoration: none;
      color: $header-text-color;
      font-weight: 400;

      &.router-link-exact-active {
        color: $primary-color;
      }
    }

    & a:hover {
      color: $primary-color;
    }
  }
}
</style>