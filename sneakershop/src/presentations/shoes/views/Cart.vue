<template>
  <div class="flex flex-col md:flex-row justify-between ">
    <div class="pt-8 w-3/4 pl-20">
      <!-- left -->
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
          <div class=" ml-8">
            <p class="text-xl">
              Nike <span class="font-semibold">Court</span> Vision Low
            </p>
            <p class="font-semibold text-lg">Black</p>
          </div>
          <!-- amount shoes -->
          <div class="flex justify-center items-center c-app-cartitem__item">
            <button
              class="rounded-full bg-darkGrey c-app-cartitem__button mr-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.0"
                height="5.69"
                viewBox="0 0 26.551 5.69"
              >
                <path
                  id="Icon_awesome-minus"
                  data-name="Icon awesome-minus"
                  d="M24.655,2.031H1.9A1.9,1.9,0,0,0,0,3.928v1.9a1.9,1.9,0,0,0,1.9,1.9H24.655a1.9,1.9,0,0,0,1.9-1.9v-1.9A1.9,1.9,0,0,0,24.655,2.031Z"
                  transform="translate(0 -2.031)"
                  fill="#dcdcdc"
                />
              </svg>
            </button>
            <!-- amount count -->
            <p class="text-2xl">1</p>
            <button
              class="rounded-full bg-darkGrey c-app-cartitem__button ml-3"
            >
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="26.441"
                  viewBox="0 0 26.441 26.441"
                >
                  <path
                    id="Union_1"
                    data-name="Union 1"
                    d="M12.277,26.441a1.888,1.888,0,0,1-1.889-1.888v-8.5h-8.5A1.887,1.887,0,0,1,0,14.165V12.276a1.888,1.888,0,0,1,1.886-1.889h8.5v-8.5A1.888,1.888,0,0,1,12.277,0h1.888a1.888,1.888,0,0,1,1.889,1.888v8.5h8.5a1.888,1.888,0,0,1,1.889,1.889v1.889a1.888,1.888,0,0,1-1.889,1.889h-8.5v8.5a1.888,1.888,0,0,1-1.889,1.888Z"
                  />
                </svg>
              </a>
            </button>
          </div>
          <!-- price shoes -->
          <div class=" flex justify-center items-center c-app-cartitem__item">
            <p class="text-xl">€145</p>
          </div>
          <!-- trash shoes -->
          <div class="flex justify-center items-center c-app-cartitem__item ">
            <button
              class="rounded-full bg-darkGrey c-app-cartitem__button mr-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.955"
                height="23.172"
                viewBox="0 0 20.955 23.172"
              >
                <g
                  id="Icon_feather-trash"
                  data-name="Icon feather-trash"
                  transform="translate(0.5 0.5)"
                >
                  <path
                    id="Path_8"
                    data-name="Path 8"
                    d="M1.5,3H21.455"
                    transform="translate(-1.5 1.434)"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  />
                  <path
                    id="Path_9"
                    data-name="Path 9"
                    d="M18.02,5.434v15.52A2.217,2.217,0,0,1,15.8,23.172H4.717A2.217,2.217,0,0,1,2.5,20.955V5.434m3.326,0V3.217A2.217,2.217,0,0,1,8.043,1h4.434a2.217,2.217,0,0,1,2.217,2.217V5.434"
                    transform="translate(-0.283 -1)"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  />
                </g>
              </svg>
            </button>
            <!-- delete -->
          </div>
        </div>
      </div>
    </div>

    <div class="bg-darkGrey pt-8 w-1/4  h-screen">
      <!-- right -->
      <div>
        <!-- top -->
        <h1 class="font-semibold text-3xl px-10">Summary</h1>
        <hr class="underline" />
        <div class="flex justify-between mb-2 mt-6 px-10">
          <!-- subtotal -->
          <p class="text-xl">Subtotal</p>
          <p class="text-xl font-semibold">€290</p>
        </div>
        <div class="flex justify-between px-10">
          <!-- shipping -->
          <p class="text-xl font">Shipping</p>
          <p class="text-xl font-semibold">€7.99</p>
        </div>
      </div>
      <div class="bottom mt-80 px-10 flex align-middle flex-col">
        <div class="flex justify-between ">
          <!-- total -->
          <p class="text-3xl">Total</p>
          <p class="text-3xl font-semibold">€297.99</p>
        </div>
        <!-- buton -->
        <div class="uppercase c-app__button py-4 text-center bg-mint mt-10">
          <p class="">
            checkout(
            <span class="font-bold ">€152.99</span>
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
