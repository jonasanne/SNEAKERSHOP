<template>
  <div class="flex flex-col md:flex-row justify-between  ">
    <!-- left -->
    <div class="pt-8 md:w-3/4 md:pl-14 px-6 ">
      <h1 class=" font-semibold text-3xl">My Cart</h1>
      <div class="h-full flex-col flex">
        <!-- cart items -->
        <div class="h-full c-app-cartitem flex pt-6">
          <!-- item -->
          <div
            class="bg-darkGrey flex justify-center items-center  c-app-cartitem__image-container h-full w-full rounded-lg"
          >
            <!-- image -->
            <img
              src="@/assets/images/shoes/nike_court_vision.png"
              class="c-app-cartitem__image"
              alt="nike court vision"
            />
          </div>
          <!-- name shoes -->
          <div
            class="ml-2 md:ml-8 flex md:flex-row flex-col  justify-between w-full"
          >
            <div>
              <p class=" text-sm md:text-xl">
                Nike <span class="font-semibold">Court</span> Vision Low
              </p>
              <p class="font-semibold md:text-lg">Black</p>
            </div>
            <!-- amount shoes -->
            <div
              class="flex  c-app-cartitem__item md:justify-center md:items-center"
            >
              <button
                class="rounded-full bg-darkGrey c-app-cartitem__button mr-3"
              >
                <svg
                  class="svg-button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 26 6"
                >
                  <rect
                    id="Rectangle_15"
                    data-name="Rectangle 15"
                    width="26"
                    height="6"
                    rx="3"
                    fill="#dcdcdc"
                  />
                </svg>
              </button>
              <!-- amount count -->
              <p class="md:text-2xl ">1</p>
              <button
                class="rounded-full bg-darkGrey c-app-cartitem__button ml-3"
              >
                <svg
                  class="svg-button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25.999 26"
                >
                  <path
                    id="Union_3"
                    data-name="Union 3"
                    d="M-2461-1261.858v-7h-7a3,3,0,0,1-3-3,3,3,0,0,1,3-3h7v-7a3,3,0,0,1,3-3,3,3,0,0,1,3,3v7h7a3,3,0,0,1,3,3,3,3,0,0,1-3,3h-7v7a3,3,0,0,1-3,3A3,3,0,0,1-2461-1261.858Z"
                    transform="translate(2471 1284.858)"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            class=" flex justify-between items-end c-app-cartitem__item flex-col-reverse md:flex-row md:justify-around md:items-center"
          >
            <!-- price shoes -->
            <p class="md:text-xl">€145</p>
            <!-- trash shoes -->
            <div class="flex justify-end items-center c-app-cartitem__item w-max">
              <button class="rounded-full bg-darkGrey c-app-cartitem__button ">
                <svg
                class="svg-button-cross"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20.142 20.142"
                >
                  <path
                    id="Union_2"
                    data-name="Union 2"
                    d="M-2744.767-1264.089l-4.95-4.95-4.949,4.95a3,3,0,0,1-4.243,0,3,3,0,0,1,0-4.243l4.95-4.95-4.95-4.95a3,3,0,0,1,0-4.243,3,3,0,0,1,4.243,0l4.949,4.95,4.95-4.95a3,3,0,0,1,4.242,0,3,3,0,0,1,0,4.243l-4.95,4.95,4.95,4.95a3,3,0,0,1,0,4.243,2.992,2.992,0,0,1-2.121.878A2.991,2.991,0,0,1-2744.767-1264.089Z"
                    transform="translate(2759.788 1283.353)"
                  />
                </svg>
              </button>
              <!-- delete -->
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- right -->
    <div class="bg-darkGrey pt-8 md:w-1/4  md:h-screen mt-12  md:mt-0">
      <!-- right -->
      <div>
        <!-- top -->
        <h1 class="font-semibold text-3xl md:px-10 px-6">Summary</h1>
        <hr class="underline" />
        <div class="flex justify-between  mt-6 md:px-10 px-6">
          <!-- subtotal -->
          <p class="md:text-xl">Subtotal</p>
          <p class="md:text-xl font-semibold">€290</p>
        </div>
        <div class="flex justify-between md:px-10 px-6">
          <!-- shipping -->
          <p class="md:text-xl font">Shipping</p>
          <p class="md:text-xl font-semibold">€7.99</p>
        </div>
      </div>
      <div class="bottom md:mt-80 px-6 md:px-10 mt-4  flex align-middle flex-col">
        <div class="flex justify-between ">
          <!-- total -->
          <p class="md:text-3xl">Total</p>
          <p class="md:text-3xl font-semibold">€297.99</p>
        </div>
        <!-- buton -->
        <div class="uppercase c-app__button py-4 text-center bg-mint mt-10 mb-10">
          <p class="">
            checkout(
            <span class="font-bold">€152.99</span>
            )
          </p>
          <span class="c-app__button-underline"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
