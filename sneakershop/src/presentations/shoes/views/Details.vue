<template>
  <div
    class="align px-6 md:px-20 mt-20 flex flex-col lg:flex-row justify-between"
  >
    <div class="w-full detail-item">
      <!-- left -->
      <!-- background -->
      <svg
        class="background-detail"
        xmlns="http://www.w3.org/2000/svg"
        width="850"
        height="950"
        viewBox="0 0 850 950"
      >
        <path id="greyBg" d="M0,0H849.8l.2,950H0Z" fill="#fbfbfb" />
      </svg>
      <div>
        <p class="text-3xl">
          Nike <span class="font-semibold">Court</span> Vision Low
        </p>
        <p class="text-2xl font-semibold">Black</p>
        <p class="font-semibold text-xl">€145</p>
        <img
          class="image-detail mt-12"
          src="@/assets/images/shoes/nike_court_vision.png"
          alt="nike court vision shoe"
        />
      </div>
    </div>
    <div class="w-full detail-item__description">
      <!-- right -->
      <p class="font-semibold text-2xl mb-2 mt-8 ">Description</p>
      <hr class="underline-grey " />
      <p class="text-xl mt-5">
        So you're in love with the classic look of 80s basketball, but also love
        the fast-paced look of today's sport. Discover the new Nike Court Vision
        Low. The sleek upper and stitched overlays are inspired by the hook
        shots of old-school basketball, and the super soft, low-cut collar
        creates a streamlined look that's comfortable all day long.
      </p>

      <p class="font-semibold text-2xl mb-2 mt-8 ">Select size</p>
      <hr class="underline-grey" />

      <form action="POST">
        <div class="flex flex-wrap flex-row mt-5">
          <input
            class="radiobutton-size"
            type="radio"
            name="size"
            id="size-36"
            disabled
          />
          <label class="for-radiobutton-size" for="size-36">36</label>

          <input
            class="radiobutton-size"
            type="radio"
            name="size"
            id="size-37"
          />
          <label class="for-radiobutton-size" for="size-37">37</label>

          <input
            class="radiobutton-size"
            type="radio"
            name="size"
            id="size-38"
          />
          <label class="for-radiobutton-size" for="size-38">38</label>

          <input
            class="radiobutton-size"
            type="radio"
            name="size"
            id="size-39"
          />
          <label class="for-radiobutton-size" for="size-39">39</label>

          <input
            class="radiobutton-size"
            type="radio"
            name="size"
            id="size-40"
          />
          <label class="for-radiobutton-size" for="size-40">40</label>

          <input
            class="radiobutton-size"
            type="radio"
            name="size"
            id="size-41"
            disabled
          />
          <label class="for-radiobutton-size" for="size-41">41</label>

          <input
            class="radiobutton-size"
            type="radio"
            name="size"
            id="size-42"
          />
          <label class="for-radiobutton-size" for="size-42">42</label>

          <input
            class="radiobutton-size"
            type="radio"
            name="size"
            id="size-43"
          />
          <label class="for-radiobutton-size" for="size-43">43</label>

          <input
            class="radiobutton-size"
            type="radio"
            name="size"
            id="size-44"
          />
          <label class="for-radiobutton-size" for="size-44">44</label>
        </div>

        <p class="font-semibold text-2xl mb-2 mt-8 ">
          Watch these shoes virtual
        </p>
        <hr class="underline-grey" />

        <!-- TODO: link veranderen naar Augmented Reality pagina -->
        <router-link
          to="/details/1"
          class="font-semibold text-1xl flex items-center mt-5"
        >
          <!-- svg -->
          <svg
            class="detail-discover__arrow mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="7.493"
            height="13.106"
            viewBox="0 0 7.493 13.106"
          >
            <path
              id="Icon_ionic-ios-arrow-back"
              data-name="Icon ionic-ios-arrow-back"
              d="M13.047,10.853,8.088,5.9A.937.937,0,0,1,9.415,4.575l5.618,5.615a.935.935,0,0,1,.027,1.291L9.418,17.134a.937.937,0,0,1-1.327-1.323Z"
              transform="translate(-7.813 -4.301)"
            />
          </svg>

          Discover it here</router-link
        >
        <div class="mt-10 flex mb-10 justify-between">
          <select name="amount" id="amount" class="amount-dropdown">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <div
            class="uppercase c-app__button py-4 text-center bg-mint" style="max-width:200px; margin:0;"
          >
            <p class="">ADD TO BASKET</p>
            <span class="c-app__button-underline"></span>
          </div>
        </div>
        <!-- dropdown -->
        <!-- button -->
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import route from "@/router";
export default defineComponent({
  setup() {
    //TODO change name
    const annabelle = async () => {
      const urlId = route.currentRoute.value.params.id;
      console.log(urlId);
    };
    annabelle();
  },
});
</script>
