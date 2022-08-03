<template>
  <details class="ToggleMenu">
    <summary>
        <div class="ToggleMenu__circle"></div>
        <img class="ToggleMenu__image" src="https://avatars.githubusercontent.com/u/65629979?s=40&v=4">
    </summary>
    <ul class="UserMenu">
      <li class="UserMenu__item">Favorites</li>
      <li class="UserMenu__item">Log out</li>
    </ul>
  </details>
</template>
<style lang="scss">
@import '../assets/variables';

.ToggleMenu {
  color: $header-text-color;
  
  & > summary {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 18px;
  }

  &__image {
    border-radius: 10px;
    box-shadow: 0px 1px 7px rgb(0, 0, 0, 0.4);
  }

  &__circle {
    width: 8px;
    aspect-ratio: 1 / 1;
    border: 1px solid $header-text-color;
    border-radius: 9999px;
  }
}
.UserMenu {
  list-style: none;
  position: absolute;
  right: 0;
  background-color: antiquewhite;
  color: $text-color;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>