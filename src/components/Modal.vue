<script setup>
defineProps({
    show: Boolean,
    pageName: String,
    modalContent: Object
});

import Gallery from "../components/Gallery.vue";

const emit = defineEmits(["close"]);
const close = () => emit("close");
</script>

<template>
    <teleport to="body">
        <transition name="fade">
            <div v-if="show" class="modal-overlay" @click.self="close">
                <div :class="`modal ${pageName}`">
                    <button class="close-btn" @click="close">×</button>
                    <h1 class="modal-title">{{ modalContent.title }}</h1>
                    <p class="modal-body" v-html="modalContent.body"></p>
                    <Gallery :images="modalContent.gallery" :key="modalContent.gallery.length" />
                    <slot></slot>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<style scoped>
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

/* Modal Overlay */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(4px);
    padding: 20px;
}

/* Modal */
.modal {
    padding: 25px;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    position: relative;
    transform: scale(0.95);
    transition: transform 0.2s ease-out;
    background-color: rgb(0, 11, 0);
    color: rgb(0, 238, 0);
    border: 1px solid rgb(0, 238, 0);
}

/* Scale in effect */
.modal-overlay .modal {
    transform: scale(1);
}

/* Close Button */
.close-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    background: none;
    border: none;
    font-size: 22px;
    cursor: pointer;
    color: rgb(0, 238, 0);
    transition: color 0.2s ease;
}

.close-btn:hover {
    color: red;
}

/* Modal Title */
.modal-title {
    font-size: 22px;
    margin-bottom: 15px;
    font-weight: bold;
}

/* Modal Content */
.modal-body {
    font-size: 16px;
    line-height: 1.5;
}
</style>
