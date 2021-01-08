<template>
  <div class="d-h">
    <img class="absolute inset-0 z-m-1" src="@/assets/images/trapezium-left.svg" alt="">
  </div>
  <brands/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BrandsComponent from '@/presentations/shoes/components/Brands.vue';
import Brands from '@/presentations/shoes/components/Brands.vue';
export default defineComponent({
  components: {
     Brands
      },
});
</script>
