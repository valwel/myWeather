<template>
  <div class="container">
    <HeaderContent/>
    <DataCards />
  </div>
</template>
<script setup lang="ts">
import HeaderContent from "@/components/HeaderContent.vue"
import DataCards from "@/components/DataCards.vue";
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
  padding: 63px 78px;
  background: linear-gradient(110deg, #383838 0%, #111111 71.82%);
}
</style>