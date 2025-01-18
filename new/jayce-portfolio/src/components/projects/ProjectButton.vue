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
    <div class="image-container">
        <!-- <a :href="project.main_link" @click="show(project.main_link, $event)"></a> -->
        <button @click="openModal(pageName)">
            <img :src="'../images/' + modalContent.icon" />
        </button>
        <Modal :show="isModalOpen" @close="isModalOpen = false" :pageName=pageName :modalContent="modalContent" >
        </Modal>
        <h3>{{ modalContent.title }}</h3>
    </div>
</template>

<style scoped>
.image-container {
    display: flex;
    flex-direction: column;
    /* Stack image and text vertically */
    align-items: center;
    /* Center content horizontally */
    justify-content: space-between;
    /* Ensure equal spacing between image and text */
    aspect-ratio: 1;
    /* Maintain square container */
    width: 100%;
    /* Make responsive within grid */
    max-width: 400px;
    /* Optional: Set a maximum width */
    padding: 16px;
    /* Padding inside the container */
    box-sizing: border-box;
    /* Include padding in total dimensions */
    overflow: hidden;
    /* height: 400px; */
    /* Prevent content overflow */
}

.image-container img {
    padding: 170px 0;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    /* Ensure image retains its aspect ratio */
    flex-shrink: 0;
    /* Prevent the image from shrinking */
}

.image-container h3 {
    text-align: center;
    /* Center-align the text */
    margin-top: auto;
    /* Push the text to the bottom of the container */
}
</style>
