<template>
  <div class="align px-6 md:px-20 mt-20">
    <div class="">
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
    <div>
      <!-- right -->
      <p class="font-semibold text-2xl">Description</p>
      <hr class="underline-grey" />
      <p class="text-xl">
        So you're in love with the classic look of 80s basketball, but also love
        the fast-paced look of today's sport. Discover the new Nike Court Vision
        Low. The sleek upper and stitched overlays are inspired by the hook
        shots of old-school basketball, and the super soft, low-cut collar
        creates a streamlined look that's comfortable all day long.
      </p>

      <p class="font-semibold text-2xl">Select Size</p>
      <hr class="underline-grey" />

      <form action="POST">
        <div class="radiobuttons">
          <input class="radiobutton-size" type="radio" name="size" id="size-36" disabled>
          <label class="for-radiobutton-size" for="size-36">36</label>

          <input class="radiobutton-size" type="radio" name="size" id="size-37">
          <label class="for-radiobutton-size" for="size-37">37</label>

          <input class="radiobutton-size" type="radio" name="size" id="size-38">
          <label class="for-radiobutton-size" for="size-38">38</label>

          <input class="radiobutton-size" type="radio" name="size" id="size-39">
          <label class="for-radiobutton-size" for="size-39">39</label>

          <input class="radiobutton-size" type="radio" name="size" id="size-40">
          <label class="for-radiobutton-size" for="size-40">40</label>

          <input class="radiobutton-size" type="radio" name="size" id="size-41" disabled>
          <label class="for-radiobutton-size" for="size-41">41</label>

          <input class="radiobutton-size" type="radio" name="size" id="size-42">
          <label class="for-radiobutton-size" for="size-42">42</label>

          <input class="radiobutton-size" type="radio" name="size" id="size-43">
          <label class="for-radiobutton-size" for="size-43">43</label>

          <input class="radiobutton-size" type="radio" name="size" id="size-44">
          <label class="for-radiobutton-size" for="size-44">44</label>
 

        </div>
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
