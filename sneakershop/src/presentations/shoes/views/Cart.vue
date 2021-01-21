<template>
  <div class="flex flex-col lg:flex-row justify-between align">
    <!-- left -->
    <div class="pt-8 lg:w-3/4  px-6  lg:pr-14 ">
      <div>
        <h1 class=" font-semibold text-3xl">My Cart</h1>
        <p>
          <span class="count">{{ state.cartItems.length }}</span> items
        </p>
      </div>
      <hr class="underline-grey" />
      <div
        class="h-auto flex-col flex"
        v-if="state.cartItems && state.cartItems.length"
      >
        <!-- cart items -->
        <div
          class="h-full c-app-cartitem flex pt-6"
          v-for="cartItem in state.cartItems"
          :key="cartItem.id"
        >
          <!-- item -->

          <div class="flex w-full">
            <div
              class="bg-darkGrey flex justify-center items-center  c-app-cartitem__image-container  rounded-lg"
            >
              <!-- image -->
              <img
                :src="cartItem.shoe.imgUrl"
                class="c-app-cartitem__image"
                alt="nike court vision"
              />
            </div>
            <!-- name shoe -->
            <div class="ml-4">
              <p class=" text-sm lg:text-xl">
                {{ cartItem.shoe.title }}
              </p>
              <p class="font-semibold lg:text-lg uppercase">
                {{ cartItem.shoe.color }}
              </p>
            </div>
          </div>

          <div
            class=" flex justify-between items-end c-app-cartitem__item  flex-col-reverse lg:flex-row lg:justify-between lg:items-center w-full"
          >
            <div
              class="flex flex-col-reverse  items-end lg:flex-row lg:items-center lg:justify-between w-full price"
            >
              <div
                class="flex  c-app-cartitem__item lg:justify-center lg:items-center mt-4 lg:mt-0"
              >
                <button
                  disabled
                  v-if="cartItem.amount == 1"
                  @click="decreaseAmount(cartItem)"
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
                <button
                  v-if="cartItem.amount > 1"
                  @click="decreaseAmount(cartItem)"
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
                    />
                  </svg>
                </button>
                <!-- amount count -->
                <p class="lg:text-2xl ">{{ cartItem.amount }}</p>
                <button
                  @click="increaseAmount(cartItem)"
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

              <!-- price shoes -->
              <p class="lg:text-xl">€{{ cartItem.price }}</p>
            </div>
            <!-- trash shoes -->
            <div
              class="flex justify-end items-center c-app-cartitem__item w-max mb-3"
            >
              <button
                class="rounded-full bg-darkGrey c-app-cartitem__button"
                @click="removeShoeFromCart(cartItem)"
              >
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
            </div>
          </div>
        </div>
      </div>
      <!-- delivery location -->
      <div class="mt-10 mb-2">
        <p class="font-semibold text-2xl">Delivery Location</p>
        <hr class="underline-grey" />
      </div>
      <div class="delivery-location flex justify-between ">
        <div class="left flex justify-center items-center">
          <div
            class="icon flex justify-center items-center icon-container-location bg-darkGrey rounded-lg"
          >
            <svg
              svg
              class="icon-location"
              xmlns="http://www.w3.org/2000/svg"
              width="15.417"
              height="22.024"
              viewBox="0 0 15.417 22.024"
            >
              <path
                id="Icon_material-location-on"
                data-name="Icon material-location-on"
                d="M10.208,1A7.7,7.7,0,0,0,2.5,8.708c0,5.781,7.708,14.315,7.708,14.315s7.708-8.534,7.708-14.315A7.7,7.7,0,0,0,10.208,1Zm0,10.461a2.753,2.753,0,1,1,2.753-2.753A2.754,2.754,0,0,1,10.208,11.461Z"
                transform="translate(-2.5 -1)"
                fill="#26f8e2"
              />
            </svg>
          </div>
          <div class="adres ml-8">
            <p class="text-lg">Noordstraat 338</p>
            <p class="text-darkerGrey">8000, Brugge</p>
          </div>
        </div>
        <div class="link flex justify-center items-center ">
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14.556"
            height="25.461"
            viewBox="0 0 14.556 25.461"
          >
            <path
              id="Icon_ionic-ios-arrow-back"
              data-name="Icon ionic-ios-arrow-back"
              d="M19.543,17.888,9.91,8.262a1.82,1.82,0,0,1,2.577-2.569L23.4,16.6a1.816,1.816,0,0,1,.053,2.509L12.494,30.091a1.82,1.82,0,0,1-2.577-2.569Z"
              transform="translate(-9.375 -5.161)"
            />
          </svg> -->
        </div>
      </div>
      <!-- payment method -->
      <div class="mt-10 mb-2">
        <p class="font-semibold text-2xl">Payment Method</p>
        <hr class="underline-grey" />
      </div>
      <div class="delivery-location flex justify-between ">
        <div class="left flex justify-center items-center">
          <div
            class="icon flex justify-center items-center icon-container-location bg-darkGrey rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22.694"
              height="26.808"
              viewBox="0 0 22.694 26.808"
            >
              <path
                id="Icon_awesome-paypal"
                data-name="Icon awesome-paypal"
                d="M6.585,17.476C6.378,18.611,5.557,23.9,5.314,25.4c-.018.106-.059.148-.177.148H.727a.718.718,0,0,1-.715-.822L3.476,2.739a1.2,1.2,0,0,1,1.182-1c9,0,9.76-.219,12.059.674,3.553,1.377,3.878,4.7,2.6,8.294-1.271,3.7-4.286,5.291-8.282,5.338C8.471,16.087,6.928,15.632,6.585,17.476ZM21.109,8.97c-.106-.077-.148-.106-.177.077a13.835,13.835,0,0,1-.52,1.986c-2.359,6.727-8.9,6.142-12.089,6.142a.6.6,0,0,0-.644.556c-1.336,8.3-1.6,10.031-1.6,10.031a.629.629,0,0,0,.627.763h3.754a1.06,1.06,0,0,0,1.029-.881c.041-.319-.065.361.851-5.4.272-1.3.845-1.165,1.732-1.165,4.2,0,7.472-1.7,8.447-6.638C22.9,12.387,22.788,10.223,21.109,8.97Z"
                transform="translate(-0.005 -1.717)"
                fill="#26f8e2"
              />
            </svg>
          </div>
          <div class="adres ml-8  h-full">
            <p class="align-top text-lg">Paypal</p>
          </div>
        </div>
        <div class="link flex justify-center items-center ">
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14.556"
            height="25.461"
            viewBox="0 0 14.556 25.461"
          >
            <path
              id="Icon_ionic-ios-arrow-back"
              data-name="Icon ionic-ios-arrow-back"
              d="M19.543,17.888,9.91,8.262a1.82,1.82,0,0,1,2.577-2.569L23.4,16.6a1.816,1.816,0,0,1,.053,2.509L12.494,30.091a1.82,1.82,0,0,1-2.577-2.569Z"
              transform="translate(-9.375 -5.161)"
            />
          </svg> -->
        </div>
      </div>
    </div>

    <!-- right -->
    <div class="bg-darkGrey pt-8 lg:w-1/4  lg:h-screen mt-12  lg:mt-0">
      <!-- right -->
      <div>
        <!-- top -->
        <h1 class="font-semibold text-3xl lg:px-10 px-6 text-center mb-4">
          Summary
        </h1>
        <hr class="underline-white" />
        <div class="flex justify-between  mt-6 lg:px-10 px-6">
          <!-- subtotal -->
          <p class="lg:text-xl">Subtotal</p>
          <p class="lg:text-xl font-semibold">€{{ state.subTotal }}</p>
        </div>
        <div class="flex justify-between lg:px-10 px-6">
          <!-- shipping -->
          <p class="lg:text-xl font">
            Shipping
          </p>
          <p class="lg:text-xl font-semibold">€{{ state.shipping }}</p>
        </div>
      </div>
      <div
        class="bottom lg:mt-80 px-6 lg:px-10 mt-4  flex align-middle flex-col"
      >
        <div class="flex justify-between">
          <!-- total -->
          <p class="lg:text-3xl">Total</p>
          <p class="lg:text-3xl font-semibold">€{{ state.total }}</p>
        </div>
        <p class="text-sm font-semibold mt-2">Free shipping above €100</p>

        <!-- buton -->
        <div
          class="uppercase c-app__button py-4 text-center bg-mint mt-10 mb-10"
        >
          <p class="">
            checkout(
            <span class="font-bold">€{{ state.total }}</span>
            )
          </p>
          <span class="c-app__button-underline"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CartItem from "@/models/CartItem";
import Shoe from "@/models/shoe";
import router from "@/router";
import { getItems, getItemById, deleteItem, seedData } from "@/utils/idb";
import { defineComponent, reactive } from "vue";

type State = {
  cartItems: Array<CartItem>;
  total: number;
  shipping: number;
  subTotal: number;
};

export default defineComponent({
  setup() {
    const state: State = reactive({
      cartItems: [],
      total: 0,
      shipping: 0,
      subTotal: 0,
      price: 0,
      amount: 0,
    });

    //TODO 1.  bij het begin van pagina laden alle prijzen berekenen
    const calculateTotalCartItem = async (cartItem: CartItem) => {
      if (cartItem.price || cartItem.amount) {
        console.log("calculating total");
        let total =
          (cartItem.shoe.price ? cartItem.shoe.price : 0) *
          (cartItem.amount ? cartItem.amount : 0);

        total = Math.round(total * 100) / 100;

        cartItem.price = total;
      }
    };

    const calculateTotal = async () => {
      console.log("calculating total");
      // console.log(state.cartItems);
      let subtotal = 0;
      state.cartItems.forEach((element) => {
        calculateTotalCartItem(element);
        subtotal += element.price ? element.price : 0;
        subtotal = Math.round(subtotal * 100) / 100;
      });
      // console.log(subtotal);
      state.subTotal = subtotal;
      state.total = subtotal + state.shipping;
      state.total = Math.round(state.total * 100) / 100;
      if (state.total <= 100) {
        state.shipping = 7.99;
      } else {
        state.shipping = 0;
      }
    };

    calculateTotal();

    //TODO 3.  controle dat er niet 2 keer hetzelfde artikel wordt ingestoken in de winkelmand

    const getCartItems = async () => {
      await getItems("cartItems")
        .then((items) => {
          // console.log("got the cart items");
          state.cartItems = items;
          // console.log(items);
          calculateTotal();
        })
        .catch((error) => {
          // console.log(error)
          console.log("no cart items");
        });
    };

    getCartItems();

    const removeShoeFromCart = async (cartItem: CartItem) => {
      console.log("deleting item");

      await deleteItem("cartItems", cartItem)
        .then((response: any) => {
          // reload page
          console.log("reload");
          location.reload();
        })
        .catch((error: any) => {
          console.log("there has been an error");
        });
    };

    const increaseAmount = async (cartItem: CartItem) => {
      if (cartItem.amount != 10) cartItem.amount!++;
      calculateTotal();
    };

    const decreaseAmount = async (cartItem: CartItem) => {
      console.log(cartItem.amount);

      //controleren als amount naar 0 gaat
      if (cartItem.amount == 0) {
        removeShoeFromCart(cartItem);
      } else {
        //decreasing
        cartItem.amount!--;
        calculateTotal();
      }
    };

    return {
      state,
      increaseAmount,
      decreaseAmount,
      removeShoeFromCart,
    };
  },
});
</script>
