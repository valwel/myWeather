<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
body.white {
  .card {
    background: #D9D9D9;
    color: #111;
  }
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #444;
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.5);
  padding: 16px;
  color: #fff;
  width: 100%;

  &:nth-child(2n) {
    margin: 0 0 0 55px;

    @media (max-width: 1024px) {
      margin: 55px 0 0 0;
    }
  }
}
</style>
  