<script setup>
import ProjectButton from '../projects/ProjectButton.vue';
import { modalContents } from '../../modalContents.js';

defineProps({
  pageName: String,
  imageName: String,
  projectDescription: String,
});
</script>

<template>
    <h1 id="projects">
        Projects
    </h1>
    <div class="image-grid">
        <ProjectButton  v-for="(modalContent, pageName) in modalContents" :pageName=pageName :modalContent="modalContent"></ProjectButton>
    </div>
</template>

<style scoped>
.image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); /* Responsive columns */
    gap: 16px; /* Spacing between grid items */
    justify-content: center; /* Center the grid if not full-width */
}
</style>