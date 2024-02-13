<template>
  <div class="container">
    <HeaderContent />
    <DataCards />
  </div>
</template>
<script setup lang="ts">
import HeaderContent from "@/components/HeaderContent.vue"
import DataCards from "@/components/DataCards.vue";
import { useWeatherStore } from "@/store/weatherStore";
import { onBeforeMount } from "vue";

const store = useWeatherStore();
onBeforeMount(() => {
  store.loadCurrentWeatherStore();
  store.loadForecastStore();
});
</script>
<style lang="scss" scoped>
body.white {
  .container {
    background: linear-gradient(260deg, #383838 0%, #ffffff 71.82%);
  }
}

.container {
  padding: 63px 78px 10px 78px;
  background: linear-gradient(110deg, #383838 0%, #111111 71.82%);
  width: 100%;

  @media (max-width: 1024px) {
    padding: 10px 10px;
  }

  @media (max-width: 567px) {
    padding: 5px 5px;
  }
}
</style>