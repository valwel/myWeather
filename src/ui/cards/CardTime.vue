<template>
  <div class="card-time">
    <div class="card-time__location">Athens</div>
    <div class="card-time__time">{{ formatterTime.format(time) }}</div>
    <div class="card-time__date">{{ formatterDate.format(date) }}</div>
  </div>
</template>
<script setup lang="ts">
const time = new Date();
const formatterTime = new Intl.DateTimeFormat("ru", {
  hour: "numeric",
  minute: "numeric",
});
const date = new Date();
const formatterDate = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  day: "numeric",
  month: "short",
});
</script>
<style lang="scss" scoped>
@import "../../assets/styles/CardTime.scss";
</style>