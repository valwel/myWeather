<template>
  <button class="location">
    <img src="../../assets/images/current.svg" alt="" class="location__img">
    <p class="location__text">Current location</p>
  </button>
</template>
<style lang="scss" scoped>
.location {
  background-color: #4cbb17;
  max-height: 62px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: none;
  white-space: nowrap;
  grid-area: 1 / 2 / 2 / 3;
  cursor: pointer;
  &__img {
    width: 35px;
  }

  &__text {
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin-left: 10px;
    // display: none;
    @media (max-width: 567px) {
      display: none;
    }
  }
}

</style>