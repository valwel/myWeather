<template>
  <div class="header">
    <DarkMode class="header__child"/>
    <InputSearch class="header__child"/>
    <CurrentLocation class="header__child"/>
  </div>
</template>
<script setup lang="ts">
import CurrentLocation from "@/ui/header/CurrentLocation.vue";
import DarkMode from "@/ui/header/DarkMode.vue";
import InputSearch from "@/ui/header/InputSearch.vue"
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  &__child:nth-child(n + 2) {
    margin-left: 81px;
  }
}
</style>