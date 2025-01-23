<script setup>
defineProps({
  pageName: String,
  modalContent: Object
});
import { ref } from 'vue';
import Modal from '../Modal.vue';

const isModalOpen = ref(false);
// Function to open modal
const openModal = () => {
  isModalOpen.value = true;
};


</script>

<template>
  <div class="project-container">
    <div class="image-container">
      <button @click="openModal(pageName)">
        <img :src="'/images/' + modalContent.icon" />
      </button>
      <Modal :show="isModalOpen" @close="isModalOpen = false" :pageName=pageName :modalContent="modalContent">
      </Modal>
    </div>
    <h3>{{ modalContent.title }}</h3>
  </div>
</template>

<style scoped>
.image-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* Maintain square container */
  width: 100%;
  /* Make responsive within grid */
  max-width: 400px;
  /* Optional: Set a maximum width */
  /* Padding inside the container */
  box-sizing: border-box;
  /* Include padding in total dimensions */
  overflow: hidden;
}

.project-container img {
  /* padding: 170px 0; */
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  /* Ensure image retains its aspect ratio */
  flex-shrink: 0;
  /* Prevent the image from shrinking */
}

.project-container h3 {
  text-align: center;
  /* Center-align the text */
  margin-top: auto;
  /* Push the text to the bottom of the container */
}

.project-container {
  display: flex;
  flex-direction: column;
  /* Stack image and text vertically */
  align-items: center;
  /* Center content horizontally */

  /* height: 400px; */
  /* Prevent content overflow */
}

.project-container:hover img {
  /* padding: 170px 0; */
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  /* Ensure image retains its aspect ratio */
  flex-shrink: 0;
  /* Prevent the image from shrinking */
  cursor: pointer;

}

.project-container:hover h3 {
  /* color: darkblue; */
  font-weight: 600;
}
</style>
