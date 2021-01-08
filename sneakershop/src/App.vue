<template>
  <div class="">
    <navigation />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "./presentations/shared/components/Navigation.vue";

export default defineComponent({
  components: {
    Navigation,
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;600;700&display=swap");
#app {
  font-family: "Titillium Web", sans-serif;
}

$colors-neutral: (
  "light-grey": #fbfbfb,
  "dark-grey": #f6f6f6,
  "mint": #26f8e2,
);

html {
  transition: background 1500ms ease-out;
  background: var(--global-background-color);
  font-family: "Titillium Web", sans-serif;
}

// buttons
.c-app__button {
  all: unset;
  width: 100%;
  text-decoration: none;
  max-width: 300px;
  margin: auto;
  cursor: pointer;
  &:hover > .c-app__button-underline::before,
  &:hover > .c-app__button-underline::after {
    width: 50%;
  }
}
//span with this class for underline animation
.c-app__button-underline {
  margin-top: 1px;
  display: block;
  position: relative;
  width: 100%;
  max-width: 145px;
  margin: auto;
  &::before,
  &::after {
    content: "";
    height: 1px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: black;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  &::before {
    left: 50%;
  }
  &::after {
    right: 50%;
  }
}
//UTILS
.z-m-1 {
  z-index: -1;
}
.all-unset {
  all: unset;
}

//-----------COMPONENTS-----------

//BRANDS
.wrapper-card {
  flex: 0 0 auto;
  max-width: 150px;
}
//CART
.c-app-cart-summary {
  background-color: map-get($map: $colors-neutral, $key: "dark-grey");
}
.c-app-cartitem {
  max-height: 140px;
}
.c-app-cartitem__image-container {
  max-width: 140px;
  max-height: 140px;
}
.c-app-cartitem__button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  
}

.c-app-cartitem__item {
  max-width: 200px;
}
.svg-button{
  width: 12px;
  height: 12px;
}
.svg-button-cross{
  width: 10px;
  height: 10px;
  fill: black;
}
//UNDERLINE
.underline {
  border-top: white 2px solid;
  max-width: 80%;
  margin-top: 0.3rem;
}

$breakpoint-medium: 768px;
@media (min-width: $breakpoint-medium) {
  .c-app-cartitem__item {
    max-width: 300px;
    width: 100%;
  }
  .c-app-cartitem__button {
    width: 40px;
    height: 40px;
  }
}
</style>
