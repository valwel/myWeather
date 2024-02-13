<template>
  <router-view />
</template>
<script setup lang="ts">
import { modeStore } from '@/store/modeStore';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

const mode = modeStore();
const { getMode } = storeToRefs(mode);
watch(getMode, (isDark) => {
  isDark ? document.body.classList.remove('white') : document.body.classList.add('white')
}, {immediate: true}) 
</script>
<style lang="scss">
#app {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  white-space: nowrap;
}

li {
  list-style: none;
}

img {
  width: 100%;
  object-fit: cover;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
