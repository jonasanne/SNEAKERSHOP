<template>
  <div class="h-full align">
    <div class="m-auto  model-viewer-container">
      <model-viewer
        class="w-full model-viewer"
        ar
        ar-modes="scene-viewer quick-look webxr"
        :poster="state.shoe.posterUrl"
        :src="state.shoe.model"
        :ios-src="state.shoe.iosModel"
        alt=""
        auto-rotate
        camera-controls
        loading="eager"
        reveal="auto"
      >
      </model-viewer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { getItemById, saveItem } from "@/utils/idb";
import route from "@/router";
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
        model: "",
        iosModel: "",
        imgUrl: "",
        price: 0,
        posterUrl: "",
      },
    });

    const getItem = async () => {
      // console.log("getting data");
      const urlId = route.currentRoute.value.params.id.toString();

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
    };
  },
});
</script>

<!-- <div class="m-auto">
    <model-viewer
      class="m-auto "
      ar
      ar-modes="webxr scene-viewer quick-look"
      ar-scale="auto"
      src="https://raw.githubusercontent.com/jonasanne/SNEAKERSHOP/master/sneakershop/src/assets/models/PS5.glb"
      ios-src="https://raw.githubusercontent.com/jonasanne/SNEAKERSHOP/master/sneakershop/src/assets/models/PS5.usdz"
      alt="A 3D model of an ps5"
      auto-rotate
      camera-controls
    ></model-viewer>
  </div> -->
