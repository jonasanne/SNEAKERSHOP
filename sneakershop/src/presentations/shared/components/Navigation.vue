// todo uitwerken
<template> 
  <nav class="flex justify-between  items-center  py-5 z-10 px-6 md:px-20 align ">
    <router-link class="font-bold tracking-widest text-2xl md:text-4xl z-10  " to="/"
      >SNEAKERSHOP</router-link
    >
    <!-- <router-link to="/ar">TEST AR</router-link> -->
    <router-link class="z-10" to="/cart">
      <!-- icon -->
        <img src="@/assets/icons/icon-shopping-cart.svg" alt="shopping cart icon">
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
