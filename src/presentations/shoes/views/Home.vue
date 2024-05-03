<template>
  <div
    class="d-h align px-6 md:px-20 flex mb-16 xl:mb-0 home-item  items-center xl:justify-between flex-col xl:flex-row xl:h-screen home-item"
  >
    <img
      data-aos="fade-left"
      class="absolute inset-0 z-m-1 trapezium-left invisible xl:visible"
      src="@/assets/images/trapezium-left.svg"
      alt=""
    />
    <img
      data-aos="zoom-in"
      src="@/assets/images/shoes/Nike_Air_Zoom.webp"
      alt=""
      class="shoe-image mt-20 xl:mt-0 mb-12 xl:mb-0"
    />
    <div class="shoe-details" data-aos="zoom-in">
      <p class="name text-2xl">
        Nike <span class="font-semibold">Air Zoom</span> Pegasus 35
      </p>
      <p class="color font-bold text-3xl mb-2 mt-2">BLACK</p>
      <p class="description text-xl">
        The Nike Air Zoom Pegasus 35 for men are neutral running shoes. The
        shoes provide responsive cushioning. The thirty-fifth edition of one of
        Nike's most popular shoes features a full-length Zoom Air unit and a
        more streamlined design.
      </p>
      <div class="uppercase c-app__button-home py-3 text-center bg-mint mt-4 ">
        <router-link to="/details/3">Details</router-link>
        <span class="c-app__button-underline"></span>
      </div>
    </div>
  </div>
  <brands />
  <div class="relative mt-8">
    <div
      class="d-h align px-6 md:px-20 flex mb-16 xl:mb-0 home-item  items-center xl:justify-between  xl:flex-row xl:h-screen home-item flex-col-reverse"
    >
      <img
        data-aos="fade-right"
        class="absolute z-m-1 trapezium-left invisible xl:visible right-0"
        src="@/assets/images/trapezium_right.svg"
        alt=""
      />

      <div
        class="d-h align   flex mb-16 xl:mb-0 home-item  items-center xl:justify-between  xl:flex-row xl:h-screen home-item flex-col-reverse w-full"
      >
        <div class="shoe-details" data-aos="zoom-in">
          <p class="name text-2xl">
            Nike <span class="font-semibold">Air Zoom</span> Pegasus 36
          </p>
          <p class="font-bold text-3xl mb-2 mt-2  text-grey">GREY</p>
          <p class="description text-xl">
            The iconic Nike Air Zoom Pegasus 36 has an updated upper with more
            perforations and more targeted ventilation, namely in places where
            the foot heats up quickly. The tongue and heel counter have a
            thinner finish, without sacrificing comfort. The Flywire cables
            ensure that the shoe fits perfectly around the foot.
          </p>
          <div
            class="uppercase c-app__button-home py-3 text-center bg-mint mt-4 "
          >
            <router-link to="/details/1">Details</router-link>
            <span class="c-app__button-underline"></span>
          </div>
        </div>
        <div data-aos="zoom-in">
          <img
            src="@/assets/images/shoes/Nike_Air_Zoom_36.webp"
            alt="nike air zoom"
            class="shoe-image mt-20 xl:mt-0 mb-12 xl:mb-0 flip-image"
          />
        </div>
      </div>
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
        data-aos="zoom-in"
        src="@/assets/images/shoes/Vans_Old_Skool.webp"
        alt=""
        class="shoe-image mt-20 xl:mt-0 mb-12 xl:mb-0"
      />
      <div class="shoe-details" data-aos="zoom-in">
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
          class="uppercase c-app__button-home py-3 text-center bg-mint mt-4  mb-20 lg:mb-0"
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
import AOS from "aos";
import "aos/dist/aos.css";

export default defineComponent({
  setup() {
    //
    seedData();
    AOS.init();
  },
  components: {
    Brands,
    Newsletter,
  },
});
</script>
