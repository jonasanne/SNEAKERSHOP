<template>
  <div
    class="d-h align px-6 md:px-20 flex mb-16 xl:mb-0 home-item  items-center xl:justify-between flex-col xl:flex-row xl:h-screen home-item"
  >
    <img
      class="absolute inset-0 z-m-1 trapezium-left invisible xl:visible"
      src="@/assets/images/trapezium-left.svg"
      alt=""
    />
    <img
      src="@/assets/images/shoes/Nike_Air_Zoom.png"
      alt=""
      class="shoe-image mt-20 xl:mt-0 mb-12 xl:mb-0"
    />
    <div class="shoe-details">
      <p class="name text-2xl">
        Nike <span class="font-semibold">Air Zoom</span> Pegasus 35
      </p>
      <p class="color font-bold text-3xl mb-2 mt-2">BLACK</p>
      <p class="description text-xl">
        The Nike Pegasus Kids Running Shoes are always a winning bet as they are
        the ideal choice for your child's first steps in training. Expected
        every year by runners and athletes around the world, the Pegasus is one
        of the best trainers in the world and the 35 series is certainly no
        exception to this rule.
      </p>
      <div class="uppercase c-app__button-home py-3 text-center bg-mint mt-4 ">
        <router-link to="/details/3">Details</router-link>
        <span class="c-app__button-underline"></span>
      </div>
    </div>

    <!-- <img
      src="@/assets/images/shoes/nike_court_vision.png"
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
        <router-link to="/details/1">Details</router-link>
        <span class="c-app__button-underline"></span>
      </div>
    </div> -->
  </div>
  <brands />
  <div class="relative mt-8">
    <div
      class="d-h align px-6 md:px-20 flex mb-16 xl:mb-0 home-item  items-center xl:justify-between  xl:flex-row xl:h-screen home-item flex-col-reverse"
    >
      <img
        class="absolute z-m-1 trapezium-left invisible xl:visible right-0"
        src="@/assets/images/trapezium_right.svg"
        alt=""
      />
      <div class="shoe-details">
        <p class="name text-2xl">
          Puma <span class="font-semibold">Suede</span> Classic Eco
        </p>
        <p class="font-bold text-3xl mb-2 mt-2  text-red">RED</p>
        <p class="description text-xl">
          With the red low sneakers suede classic eco from Puma you can go in
          all directions. The sneakers score high points due to the high-quality
          finish of the sole of durable rubber and the insole of textile. The
          7-hole lacing gives the sneakers a trendy look. The outer layer of
          this product is made of leather.
        </p>
        <div
          class="uppercase c-app__button-home py-3 text-center bg-mint mt-4 "
        >
          <router-link to="/details/2">Details</router-link>
          <span class="c-app__button-underline"></span>
        </div>
      </div>
      <img
        src="@/assets/images/shoes/puma_suede.png"
        alt=""
        class="shoe-image mt-20 xl:mt-0 mb-12 xl:mb-0 flip-image"
      />
    </div>
  </div>
  <newsletter />
  <div class="relative">
    <img
      class="absolute inset-0 z-m-1 trapezium-left invisible xl:visible"
      src="@/assets/images/trapezium-left.svg"
      alt=""
    />
    <div
      class="d-h align px-6 md:px-20 flex mb-16 xl:mb-0 home-item  items-center xl:justify-between flex-col xl:flex-row xl:h-screen home-item"
    >
      <img
        src="@/assets/images/shoes/Vans_Old_Skool.png"
        alt=""
        class="shoe-image mt-20 xl:mt-0 mb-12 xl:mb-0"
      />
      <div class="shoe-details">
        <p class="name text-2xl">
          Vans <span class="font-semibold">Old Skool </span> Low Sneakers
        </p>
        <p class="color text-blue font-bold text-3xl mb-2 mt-2">BLUE</p>
        <p class="description text-xl">
          The Old Skool shoe is a true Vans classic; a low top lace-up shoe that
          was the first to wear the iconic side stripe. The shoe is lined, has
          padded cuffs for support and flexibility and the reinforced toe cap
          can take a beating. Of course, the waffle sole that is characteristic
          of Vans shoes is also included.
        </p>
        <div
          class="uppercase c-app__button-home py-3 text-center bg-mint mt-4 "
        >
          <router-link to="/details/4">Details</router-link>
          <span class="c-app__button-underline"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Brands from "@/presentations/shoes/components/Brands.vue";
import Newsletter from "@/presentations/shoes/components/Newsletter.vue";
import { getItems, seedData } from "@/utils/idb";

export default defineComponent({
  setup() {
    //
    seedData();
  },
  components: {
    Brands,
    Newsletter,
  },
});
</script>
