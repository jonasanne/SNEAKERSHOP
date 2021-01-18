<template>
  <div class="app">
    <navigation />
    <router-view />
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
  "darker-grey": #dcdcdc,
  "mint": #26f8e2,
  "mint-light": #53ffee,
);

html {
  transition: background 1500ms ease-out;
  background: var(--global-background-color);
  font-family: "Titillium Web", sans-serif;
}
//app transitions
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
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
.flip-image {
  transform: scaleX(-1);
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
  width: 120px;
  height: 120px;
  max-width: 120px;
}
.c-app-cartitem__image {
  max-width: 90px;
  height: auto;
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
  &:focus {
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
  &:hover {
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

//DETAIL PAGE
.detail-item__description {
  max-width: 600px;
}
.background-detail {
  position: absolute;
  left: 0;
  top: 0;
  height: auto;
  fill: map-get($map: $colors-neutral, $key: "dark-grey");
  z-index: -1;
  width: 100%;
}
.image-detail {
  max-width: 650px;
  width: 100%;
  height: auto;
}

//radiobuttons

.radiobutton-size {
  display: none;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  left: -9999px;
  &:checked + .for-radiobutton-size {
    border: 1px solid black;
    background-color: map-get($map: $colors-neutral, $key: "mint");
    text-decoration: underline;
  }

  &:disabled + .for-radiobutton-size {
    color: map-get($map: $colors-neutral, $key: "darker-grey");
  }
  &:disabled + .for-radiobutton-size::before,
  .for-radiobutton-size::after {
    position: absolute;
    left: 0;
    content: " ";
    height: 1px;
    top: 50%;
    width: 100%;
    background-color: map-get($map: $colors-neutral, $key: "darker-grey");
  }
  &:disabled + .for-radiobutton-size::after {
    position: absolute;
    left: 0;
    content: " ";
    height: 1px;
    top: 50%;
    width: 100%;
    background-color: map-get($map: $colors-neutral, $key: "darker-grey");
  }

  &:disabled + .for-radiobutton-size::before {
    transform: rotate(45deg);
  }
  &:disabled + .for-radiobutton-size::after {
    transform: rotate(-45deg);
  }
}
.for-radiobutton-size {
  background-color: #fff;
  font-size: 1.25rem;
  text-align: center;
  position: relative;
  display: inline-block;
  width: 50px;
  padding: 10px;
  border: solid 1px map-get($map: $colors-neutral, $key: "darker-grey");
  transition: all ease-in-out 0.1s;
}
//dropdown
.amount-dropdown {
  height: 56px;
  width: 75px;
  padding-left: 0.5rem;
  border: 1px solid map-get($map: $colors-neutral, $key: "darker-grey");
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
  .background-detail {
    max-width: 850px;
    width: auto;
  }
}
</style>
