<script setup>
import { useMainContent } from '../composables/useMainContent';
import { ref, onMounted } from 'vue';
import Terminal from './Terminal.vue';


const bootupText = [
  "Initializing...",
  "Loading system modules...",
  "Checking hardware...",
  "Starting services...",
  "Boot sequence complete.",
  "Welcome to Jayce's portfolio!"
];

const terminalText = ref(""); // Reactive variable for terminal text
const isCursorBlinking = ref(true); // To toggle cursor blinking
const { showMainContent } = useMainContent(); // Access the shared variable

function typeLine(line, callback) {
  let i = 0;
  const interval = setInterval(() => {
    if (i < line.length) {
      terminalText.value += line[i++];
    } else {
      clearInterval(interval);
      terminalText.value += "\n"; // Add a new line
      callback();
    }
  }, 10); // Typing speed
}

function showBootup() {
  let currentLine = 0;

  function nextLine() {
    if (currentLine < bootupText.length) {
      typeLine(bootupText[currentLine++], nextLine);
    } else {

      setTimeout(() => {
        showMainContent.value = true; // Show the main content
      }, 500); // Add a slight delay for smooth transition
    }
  }

  nextLine();
}

// Start boot-up sequence when the component is mounted
onMounted(() => {
  setTimeout(() => {
    showBootup();
  }, 3000); // Delay to match the screen flicker
});
</script>


<template>
  <Terminal></Terminal>

  <!-- Flicker effect -->
  <div id="screen-flicker"></div>

  <!-- Terminal screen -->
  <div id="terminal-animation">
    <pre id="bootup-text">
            {{ terminalText }}
            <span v-if="isCursorBlinking" class="blinking-cursor"></span>
        </pre>
  </div>
</template>

<style scoped>
/* Terminal container */
#terminal-container {
  background-color: black;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* Flicker effect */
#screen-flicker {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, green, #000000);
  animation: flicker 2s ease-out forwards;
  z-index: 2;
}

/* Terminal screen */
#terminal-animation {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  opacity: 0;
  /* Start hidden */
  animation: fadeIn 2s ease-in 2s forwards;
  /* Delay to match flicker */
}

#bootup-text {
  color: green;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  line-height: 1.5;
  white-space: pre-wrap;
  padding: 20px;
  text-align: left;
  max-width: 600px;
}

/* Blinking cursor effect */
.blinking-cursor::after {
  content: "_";
  animation: blink 0.8s steps(2) infinite;
}

/* Fade-in animation */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/* Cursor blinking animation */
@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
