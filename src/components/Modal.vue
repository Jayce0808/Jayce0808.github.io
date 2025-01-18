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
        <div v-if="show" class="modal-overlay" @click.self="close">
            <div :class="`modal ${pageName}`">
                <button class="close-btn" @click="close">×</button>
                <h1>{{ modalContent.title }}</h1>
                <p v-html="modalContent.body"></p>
                <Gallery :images="modalContent.gallery" :key="modalContent.gallery.length"/>
                <slot></slot>
            </div>
        </div>
    </teleport>
</template>

<script>
export default {
    props: {
        show: Boolean
    },
    methods: {
        close() {
            this.$emit('close');
        }
    }
};

</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background: white;
    padding: 20px;
    border-radius: 5px;
    min-width: 300px;
    width:80%;
    max-height: 70%;
    position: relative;
    overflow-y:auto;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
}

.smash {
    background-color: purple;
    color: plum;
}

.scavenger_showdown {
    background-color: gray;
    color: red;
}
</style>