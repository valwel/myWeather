<template>
  <div class="cards">
    <div class="cards__wrapper">
      <CardTemplate>
        <CardTime />
      </CardTemplate>
      <CardTemplate>
        <CardCurrentWeather />
      </CardTemplate>
    </div>
    <div class="cards__wrapper">
      <CardTemplate>
        <CardDaysForecast />
      </CardTemplate>
      <CardTemplate>
        <CardHourlyForecast />
      </CardTemplate>
    </div>
  </div>
</template>
<script setup lang="ts">
import CardTemplate from '@/ui/cards/CardTemplate.vue';
import CardTime from '@/ui/cards/CardTime.vue';
import CardCurrentWeather from '@/ui/cards/CardCurrentWeather.vue';
import CardDaysForecast from '@/ui/cards/CardDaysForecast.vue';
import CardHourlyForecast from '@/ui/cards/CardHourlyForecast.vue';
</script>
<style lang="scss" scoped>
.cards {
  // display: grid;
  // grid-template-columns: repeat(5, 1fr);
  // grid-template-rows: repeat(5, 1fr);414px 870px  336px 336px
  // grid-template-columns: 510px 780px 414px 870px;
  // grid-template-rows: 370px 336px;
  // gap: 50px;
  // display: flex;
  // flex-wrap: wrap;

  // grid-template-areas: 
  // "a b"
  // "c d";
  &__wrapper {
    display: flex;
    width: 100%;
    margin-top: 50px;
  }
}


.a {
  // grid-area: a;
}
.b {
  // grid-area: b;
}
.c {
  // grid-area: c;
  // grid-column: span 2;
}
.d {
  // grid-area: d;
}
</style>