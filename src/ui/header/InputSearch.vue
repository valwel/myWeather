<template>
  <form class="search" @submit.prevent="onSubmit">
    <input
      v-model="city"
      class="search__input"
      type="text"
      name=""
      id=""
      required
      pattern=".{1,}"
      placeholder="Search for your preffered city..."
    />
    <button class="search__button">
      <img src="../../assets/images/search.svg" alt="" />
    </button>
  </form>
</template>
<script setup lang="ts">
import { useWeatherStore } from '@/store/weatherStore';
import { ref } from 'vue';

const store = useWeatherStore();
const city = ref('')
function onSubmit() {
  store.loadCurrentWeatherStore(city.value)
}
</script>
<style lang="scss" scoped>
@import "../../assets/styles/InputSearch.scss";
</style>
