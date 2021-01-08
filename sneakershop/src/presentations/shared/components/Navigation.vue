// todo uitwerken
// pt-4 pb-4 md:px-20 sm:px-2
<template> 
  <nav class="flex justify-between  items-center  py-5 z-10 px-6 md:px-20">
    <router-link class="font-bold tracking-widest text-2xl md:text-4xl " to="/"
      >SNEAKERSHOP</router-link
    >
    <router-link class="" to="/cart">
      <!-- icon -->
        <img src="@/assets/icons/icon-shopping-cart.svg" alt="shopping cart icon">
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
