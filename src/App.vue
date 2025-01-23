<script setup>
import { ref, onMounted } from 'vue';
import { useMainContent } from './composables/useMainContent';

import MainContent from './components/MainContent.vue';
import LoaderAnimation from './components/LoaderAnimation.vue';

const { showMainContent } = useMainContent(); // Access the shared variable

// Start boot-up sequence when the component is mounted
onMounted(() => {
  setTimeout(() => {
    showBootup();
  }, 4000); // Delay to match the screen flicker
});
</script>

<template>
  <!-- Terminal loading animation -->
  <div v-if="!showMainContent" id="terminal-container">
    <LoaderAnimation></LoaderAnimation>
  </div>

  <!-- Main content -->
  <div v-else id="main-container">
    <MainContent></MainContent>
  </div>
</template>

<style scoped>
#main-container {
  color: rgb(0, 238, 0);
  display: grid;
  place-items: center;
  /* Centers content both horizontally and vertically */
  text-align: center;
  overflow: auto;
  margin: auto;
}
</style>
