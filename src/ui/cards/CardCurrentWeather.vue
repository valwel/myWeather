<template>
  <div class="current">
    <div class="current__wrapper">
      <div class="current__temperature">
        <div class="current__temperature-now">24°C</div>
        <div class="current__temperature-feels">Feels like: <span>22°C</span></div>
      </div>
      <div class="current__sun">
        <div class="current__sun-sunrise">
          <div class="current__sun-icon"><img src="../../assets/images/sunrise.svg" alt=""></div>
          <div class="current__sun-title">Sunrise</div>
          <div class="current__sun-time">06:37 AM</div>
        </div>
        <div class="current__sun-sunrise">
          <div class="current__sun-icon"><img src="../../assets/images/sunset.svg" alt=""></div>
          <div class="current__sun-title">Sunset</div>
          <div class="current__sun-time">20:37 AM</div>
        </div>
      </div>
    </div>
    <div class="current__wrapper">
      <div class="current__cloudiness">
        <div class="current__cloudiness-icon"><img src="../../assets/images/sun.svg" alt=""></div>
        <div class="current__cloudiness-title">Sunny</div>
      </div>
    </div>
    <div class="current__wrapper">
      <div class="current__information">
        <div class="current__information-data">
          <div class="current__imformation-icon"><img src="../../assets/images/humidity.svg" alt=""></div>
          <div class="current__imformation-template">41%</div>
          <div class="current__imformation-title">Humidity</div>
        </div>
        <div class="current__information-data">
          <div class="current__imformation-icon"><img src="../../assets/images/humidity.svg" alt=""></div>
          <div class="current__imformation-template">41%</div>
          <div class="current__imformation-title">Humidity</div>
        </div>
        <div class="current__information-data">
          <div class="current__imformation-icon"><img src="../../assets/images/humidity.svg" alt=""></div>
          <div class="current__imformation-template">41%</div>
          <div class="current__imformation-title">Humidity</div>
        </div>
        <div class="current__information-data">
          <div class="current__imformation-icon"><img src="../../assets/images/humidity.svg" alt=""></div>
          <div class="current__imformation-template">41%</div>
          <div class="current__imformation-title">Humidity</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../../assets/styles/CardCurrentWeather.scss";
</style>