<template>
  <div class="p-16">
    <h1 class="text-center">testing ar enviroment</h1>
  </div>

  <div class="m-auto">
    <model-viewer
      class="m-auto"
      ar
      ar-modes="webxr scene-viewer quick-look"
      ar-scale="auto"
      src="https://raw.githubusercontent.com/jonasanne/SNEAKERSHOP/master/sneakershop/src/assets/models/PS5.glb"
      ios-src="https://raw.githubusercontent.com/jonasanne/SNEAKERSHOP/master/sneakershop/src/assets/models/PS5.usdz"
      alt="A 3D model of an ps5"
      auto-rotate
      camera-controls
    ></model-viewer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
