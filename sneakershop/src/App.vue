<template>
  <div class="app">
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
  "mint-light": #53ffee,
);

html {
  transition: background 1500ms ease-out;
  background: var(--global-background-color);
  font-family: "Titillium Web", sans-serif;
}

// buttons
.c-app__button {
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
.c-app__button-home {
  width: 100%;
  text-decoration: none;
  max-width: 150px;
  margin-left: auto;
  cursor: pointer;
  &:hover > .c-app__button-underline::before,
  &:hover > .c-app__button-underline::after {
    width: 30%;
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
.align {
  max-width: 1500px;
  margin: auto;
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
.svg-button {
  width: 12px;
  height: 12px;
}
.svg-button-cross {
  width: 10px;
  height: 10px;
  fill: black;
}
.c-app-cartitem__name {
  max-width: 500px;
}
.price {
  max-width: 60%;
}

//HOME
.shoe-image {
  max-width: 600px;
  width: 100%;
  height: auto;
}
.shoe-details {
  max-width: 500px;
}

.trapezium-left {
  max-height: 925px;
}
.square-left {
  top: 0;
  left: 0;
  height: 800px;
  width: 400px;
}

//NEWSLETTER

.input-email {
  width: 250px;
  height: 50px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-left: 5px;
  &:focus{
    outline: none;
  }
}
.btn-send {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  &:focus {
    outline: none;
  }
  &:hover{
    background-color: map-get($map: $colors-neutral, $key: "mint-light");
  }
}
.svg-send-button {
  height: 15px;
  width: 15px;
}

//CART LOCATION
.icon-container-location {
  height: 50px;
  width: 50px;
}
.icon-location {
}

//UNDERLINE
.underline-white {
  border-top: white 2px solid;
  max-width: 80%;
  margin-top: 0.3rem;
}
.underline-grey {
  border-top: map-get($map: $colors-neutral, $key: "dark-grey") solid 3px;
  width: 100%;
  margin-top: 5px;
}

$breakpoint-medium: 768px;
@media (min-width: $breakpoint-medium) {
  .c-app-cartitem__button {
    width: 40px;
    height: 40px;
  }
  .input-email {
  width: 300px;
}

}
$breakpoint-large: 1024px;
@media (min-width: $breakpoint-large) {
  .shoe-details {
    min-width: 500px;
  }
  .home-item {
    min-height: 800px;
    max-height: 900px;
  }
}
</style>
