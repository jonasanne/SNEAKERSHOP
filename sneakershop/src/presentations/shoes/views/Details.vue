<template>
  <div
    class="align px-6 md:px-20 mt-20 flex flex-col lg:flex-row justify-between"
  >
    <div class="w-full detail-item" v-if="state.shoe.title != ''">
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
          {{ state.shoe.title }}
        </p>
        <p class="text-2xl font-semibold">{{ state.shoe.color }}</p>
        <p class="font-semibold text-xl">€{{ state.shoe.price }}</p>
        <img
          class="image-detail mt-12"
          :src="state.shoe.imgUrl"
          :alt="state.shoe.title"
        />
      </div>
    </div>
    <div class="w-full detail-item__description">
      <!-- right -->
      <p class="font-semibold text-2xl mb-2 mt-8 ">Description</p>
      <hr class="underline-grey " />
      <p class="text-xl mt-5">
        {{ state.shoe.description }}
      </p>

      <p class="font-semibold text-2xl mb-2 mt-8 ">Select size</p>
      <hr class="underline-grey" />

      <form action="POST">
        <div class="flex flex-wrap flex-row mt-5">
          <input
            v-model="state.shoe.selectedSize"
            class="radiobutton-size"
            type="radio"
            name="size"
            id="size-36"
            disabled
          />
          <label class="for-radiobutton-size" for="size-36">36</label>

          <input
            v-model="state.shoe.selectedSize"
            class="radiobutton-size"
            type="radio"
            name="size"
            id="size-37"
            checked
          />
          <label class="for-radiobutton-size" for="size-37">37</label>

          <input
            v-model="state.shoe.selectedSize"
            class="radiobutton-size"
            type="radio"
            name="size"
            id="size-38"
          />
          <label class="for-radiobutton-size" for="size-38">38</label>

          <input
            v-model="state.shoe.selectedSize"
            class="radiobutton-size"
            type="radio"
            name="size"
            id="size-39"
          />
          <label class="for-radiobutton-size" for="size-39">39</label>

          <input
            v-model="state.shoe.selectedSize"
            class="radiobutton-size"
            type="radio"
            name="size"
            id="size-40"
          />
          <label class="for-radiobutton-size" for="size-40">40</label>

          <input
            v-model="state.shoe.selectedSize"
            class="radiobutton-size"
            type="radio"
            name="size"
            id="size-41"
            disabled
          />
          <label class="for-radiobutton-size" for="size-41">41</label>

          <input
            v-model="state.shoe.selectedSize"
            class="radiobutton-size"
            type="radio"
            name="size"
            id="size-42"
          />
          <label class="for-radiobutton-size" for="size-42">42</label>

          <input
            v-model="state.shoe.selectedSize"
            class="radiobutton-size"
            type="radio"
            name="size"
            id="size-43"
          />
          <label class="for-radiobutton-size" for="size-43">43</label>

          <input
            v-model="state.shoe.selectedSize"
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
          :to="`/ar/${state.shoe.id}`"
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
        <div class="mt-10 flex mb-10 justify-between lg:justify-start">
          <select
            name="amount"
            id="amount"
            class="amount-dropdown lg:mr-8"
            v-model="state.shoe.amount"
          >
            <option value="" disabled>0</option>
            <option value="1" selected>1</option>
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
            @click="addItemToCart(state.shoe.id)"
            class="uppercase c-app__button py-4 text-center bg-mint"
            style="max-width:200px; margin:0;"
          >
            <p class="">ADD TO CART</p>
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
import { defineComponent, reactive } from "vue";
import { getItemById, saveItem } from "@/utils/idb";
import Shoe from "@/models/shoe";
import router from "@/router";

type State = {
  shoe: Shoe;
};

export default defineComponent({
  setup() {
    const state: State = reactive({
      shoe: {
        id: 0,
        title: "",
        description: "",
        color: "",
        sizes: [],
        model: "",
        iosModel: "",
        imgUrl: "",
        amount: "1",
        price: 0,
      },
    });

    const addItemToCart = async (id: number) => {
      console.log(`adding item to cart with id: ${id}`);
      //amount and selectedsize toevoegen
      if (state.shoe.amount == undefined) {
        alert("please choose an amount.");
        return;
      }
      const newShoe = {
        id: state.shoe.id,
        title: state.shoe.title,
        description: state.shoe.description,
        color: state.shoe.color,
        //TODO FIX THIS
        // selectedSize: state.shoe.selectedSize,
        model: state.shoe.model,
        iosModel: state.shoe.iosModel,
        imgUrl: state.shoe.imgUrl,
        price: state.shoe.price,
      };
      console.log(newShoe);

      const newArrayShoe = [];
      newArrayShoe.push(newShoe);

      const newCartItem = {
        shoe: newShoe,
        date: new Date().toLocaleString(),
        amount: state.shoe.amount,
        price: state.shoe.price,
      };
      console.log(newCartItem);

      await saveItem("cartItems", newCartItem)
        .then((response) => {
          console.log("correct");
          alert("Item correctly added to your Cart");
          router.push({ name: "cart" });
        })
        .catch((response) => {
          console.log("error");
          console.log(response);
        });
    };
    const getItem = async () => {
      // console.log("getting data");
      const urlId = router.currentRoute.value.params.id.toString();

      await getItemById("shoes", urlId)
        .then((data) => {
          if (data.title == undefined) {
            //redirect
            console.log("niet aanwezig");

            // router.push({name: "home"});
          }
          state.shoe = data;
        })
        .catch((error) => {
          console.log("error");
          router.push({ name: "home" });
        });
    };

    getItem();

    return {
      state,
      addItemToCart,
    };
  },
});
</script>
