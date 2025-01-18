<script setup>
import { ref, computed, watch } from 'vue';

// ✅ Define props correctly
const props = defineProps({
    images: Array,
});

// ✅ Ensure images is always an array
const images = computed(() => props.images || []);

// ✅ Debugging: Watch images to check if it changes
watch(images, (newVal, oldVal) => {
    console.log("Images changed:", oldVal, "→", newVal);
}, { immediate: true });

const currentIndex = ref(0);

// ✅ Use computed `images.value` inside functions
const nextImage = () => {
    if (images.value.length) {
        console.log("Next Image: ", images.value);
        currentIndex.value = (currentIndex.value + 1) % images.value.length;
    }
};

const prevImage = () => {
    if (images.value.length) {
        console.log("Previous Image: ", images.value);
        currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
    }
};
</script>
<template>
    <div class="gallery" v-if="images.length">
        <button @click="prevImage" class="prev">◀</button>
        
        <!-- Wrap title and image inside a container -->
        <div class="image-wrapper">
            <h2>{{ images[currentIndex]['title'] }}</h2>

            <div class="image-container">
                <img :src="'../images/' + images[currentIndex]['path']" alt="Gallery Image" class="gallery-image">
            </div>
        </div>

        <button @click="nextImage" class="next">▶</button>
    </div>
</template>

<style scoped>
.gallery {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    /* max-width: 600px; */
    margin: auto;
}

.image-container {
    width: 600px;
    height: 400px; /* Set a fixed height if needed */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Ensures images don’t overflow */
    background-color: gray;
}

.image-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centers h2 and image */
}


.gallery-image {
    max-width: 100%; /* Ensures image fits within container */
    max-height: 100%; /* Ensures image does not exceed container height */
    width: auto; /* Maintain aspect ratio */
    height: auto;
    object-fit: contain; /* Ensures entire image is visible */
    border-radius: 10px;
}
button {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #333;
}

button:hover {
    color: #000;
}
</style>
