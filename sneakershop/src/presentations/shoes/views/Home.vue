<template>
  <div
    class="d-h px-6 md:px-20 flex mb-16 xl:mb-0 home-item  items-center xl:justify-between flex-col xl:flex-row xl:h-screen home-item"
  >
    <img
      class="absolute inset-0 z-m-1 trapezium-left invisible xl:visible"
      src="@/assets/images/trapezium-left.svg"
      alt=""
    />
    <img
      src="@/assets/images/shoes/nike_court_vison.png"
      alt=""
      class="shoe-image mt-20 xl:mt-0 mb-12 xl:mb-0"
    />
    <div class="shoe-details">
      <p class="name text-2xl">
        Nike <span class="font-semibold">Court</span> Vision Low
      </p>
      <p class="color font-bold text-3xl mb-2 mt-2">BLACK</p>
      <p class="description text-xl">
        So you're in love with the classic look of 80s basketball, but also love
        the fast-paced look of today's sport. Discover the new Nike Court Vision
        Low. The sleek upper and stitched overlays are inspired by the hook
        shots of old-school basketball, and the super soft, low-cut collar
        creates a streamlined look that's comfortable all day long.
      </p>
      <div class="uppercase c-app__button-home py-3 text-center bg-mint mt-4 ">
        <p>details</p>
        <span class="c-app__button-underline"></span>
      </div>
    </div>
  </div>
  <brands />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BrandsComponent from "@/presentations/shoes/components/Brands.vue";
import Brands from "@/presentations/shoes/components/Brands.vue";
export default defineComponent({
  components: {
    Brands,
  },
});
</script>
