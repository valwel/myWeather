<template>
  <form class="search" @submit.prevent="onSubmit">
    <input v-model="city" class="search__input" type="text" name="" id="" required pattern=".{1,}"
      placeholder="Search city..." />
    <button class="search__button">
      <img src="@/assets/images/search.svg" alt="" />
    </button>
  </form>
</template>
<script setup lang="ts">
import { useWeatherStore } from "@/store/weatherStore";
import { ref } from "vue";

const store = useWeatherStore();
const city = ref("");
function onSubmit() {
  store.loadCurrentWeatherStore(city.value);
  store.loadForecastStore(city.value);
  city.value = ''
}
</script>
<style lang="scss" scoped>
body.white {
  .search {
    &__input {
      background: #D9D9D9;
      border: 1px solid #444;
      color: #444;
    }
  }
}

.search {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 2 / 1 / 3 / 3;

  &__input {
    font-size: 16px;
    padding: 20px 0 20px 102px;
    border: none;
    line-height: 1.4em;
    outline: none;
    color: inherit;
    color: #fff;
    width: 100%;
    border-radius: 40px;
    background: #444;
    box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 10);

    @media (max-width: 567px) {
      padding-left: 30px;
    }
  }

  &__button {
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    left: 33px;

    @media (max-width: 567px) {
      display: none;
    }

    img {
      height: 46px;
    }
  }
}
</style>
