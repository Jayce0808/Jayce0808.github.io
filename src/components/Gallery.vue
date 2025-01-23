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

// ✅ Next & Previous Image Functions
const nextImage = () => {
  if (images.value.length) {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  }
};

const prevImage = () => {
  if (images.value.length) {
    currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
  }
};

// ✅ Fullscreen Image Viewer
const isFullscreen = ref(false);
const fullscreenImage = ref(null);

// Open fullscreen modal
const openFullscreen = (image) => {
  fullscreenImage.value = image;
  isFullscreen.value = true;
};

// Close fullscreen modal
const closeFullscreen = () => {
  isFullscreen.value = false;
  fullscreenImage.value = null;
};
</script>

<template>
  <div class="gallery" v-if="images.length">
    <button @click="prevImage" class="prev">◀</button>

    <!-- Wrap title and image inside a container -->
    <div class="image-wrapper">
      <h3 class="image-text">{{ images[currentIndex]?.title }}</h3>

      <div class="image-container">
        <img :src="'/images/' + images[currentIndex]?.path" alt="Gallery Image" class="gallery-image"
          @click="openFullscreen(images[currentIndex])">
      </div>
    </div>

    <button @click="nextImage" class="next">▶</button>
  </div>

  <!-- Fullscreen Image Modal (Rendered OUTSIDE any parent modal) -->
  <teleport to="body">
    <div v-if="isFullscreen" class="fullscreen-overlay" @click.self="closeFullscreen">
      <button class="close-btn" @click="closeFullscreen">×</button>
      <img :src="'/images/' + fullscreenImage?.path" alt="Fullscreen Image" class="fullscreen-image">
    </div>
  </teleport>
</template>

<style scoped>
/* 🖼️ Gallery Styling */
.gallery {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: auto;
}

.image-container {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: gray;
  cursor: pointer;
}

.image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallery-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
  transition: transform 0.2s ease-in-out;
}

.gallery-image:hover {
  transform: scale(1.05);
}

/* 🎬 Fullscreen Modal */
.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.fullscreen-image {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

/* Close button */
.close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: white;
  transition: color 0.2s ease;
}

.close-btn:hover {
  color: red;
}
</style>
