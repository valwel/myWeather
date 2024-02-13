<template>
  <div class="switch-theme" :class="{ 'is-active': getMode }">
    <button @click="mode.changeMode" class="switch-theme__backdrop">
      <div class="switch-theme__button"></div>
    </button>
    <div class="switch-theme__label">{{ buttonText }}</div>
  </div>
</template>
<script setup lang="ts">
import { modeStore } from '@/store/modeStore';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const mode = modeStore();
const { getMode } = storeToRefs(mode);

const buttonText = computed(() => getMode.value ? 'Dark Mode' : 'Light Mode')
</script>
<style lang="scss" scoped>
$root: '.switch-theme';

.switch-theme {
  &.is-active {
    #{$root}__button {
      left: 10px;
    }
    #{$root}__label {
      color: #fff;
    }
  }

  &__backdrop {
    position: relative;
    width: 100px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 40px;
    background: #d9d9d9;
    padding: 4px;
    border: none;
    cursor: pointer;
  }

  &__button {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: calc(100% - 40px);
    border-radius: 50%;
    background-color: rgba(17, 17, 17, 1);
    transition: left .3s ease-in-out;
  }

  &__label {
    color: #111;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    padding-top: 8px;
  }
}
</style>
