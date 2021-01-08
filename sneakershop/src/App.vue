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
    Navigation
  }
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;600;700&display=swap');
#app{

  font-family: 'Titillium Web', sans-serif;
}

$colors-neutral: (
    "light-grey": #FBFBFB,
    "dark-grey" : #DCDCDC,
    "mint" : #26f8e2
);


html {
    transition: background 1500ms ease-out;
    background: var(--global-background-color);
    font-family: 'Titillium Web', sans-serif;
}
.c-app-header-nav__logo{
  letter-spacing: 5px;
  font-weight: bold;
  font-size: 2rem;
}
.c-app-header-nav{
  padding: 0 5rem;
}

// buttons
.c-app__button{
  background-color: map-get($map: $colors-neutral, $key: "mint");
  all: unset;
  text-decoration: none;
  cursor: pointer;

  &:hover ~ .c-app__button-underline::before,
  &:hover ~ .c-app__button-underline::after{
  width: 50%;
  }
}
//span with this class for underline animation
.c-app__button-underline{
  margin-top: 2px;
  display: block;
  position: relative;
  width: 100%;
  &::before,
  &::after {
      content: "";
      height: 2px;
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

</style>
