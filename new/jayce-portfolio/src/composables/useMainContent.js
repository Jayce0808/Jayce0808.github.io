import { ref } from 'vue';

const showMainContent = ref(false); // Shared reactive variable

export function useMainContent() {
    return { showMainContent };
}