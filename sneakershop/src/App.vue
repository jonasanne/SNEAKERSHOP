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

</style>
