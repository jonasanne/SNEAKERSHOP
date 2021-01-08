<template>
  <div class="px-6 md:px-20">
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

.z-m-1{
  z-index: -1;
}
.d-h{
  background-color: pink;
  height: 100px;
}
.fila_logo{
  max-width: 140px;
}
.nike_logo{
  max-width: 150px;
}
.wrapper-card{
  flex: 0 0 auto;
  max-width: 150px;
}


</style>
