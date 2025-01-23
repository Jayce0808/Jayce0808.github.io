<template>
  <div id="terminal" class="crt"> </div>
</template>

<style scoped>
.crt::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06)); */
  z-index: 2;
  background-size: 100% 2px, 3px 100%;
  pointer-events: none;
  min-height: 100%;
}

.crt::after {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(18, 16, 16, 0.02);
  opacity: 0;
  z-index: 2;
  pointer-events: none;
  animation: flicker 0.15s infinite;
  min-height: 100%;
}

@media (prefers-reduced-motion: reduce) {
  .crt {
    display: none;
  }
}

#terminal {
  background-image: radial-gradient(rgba(0, 150, 0, 0.25), black 320%);
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 16px);
  height: 96vh;
  position: fixed;
  border-radius: 25px;
  box-shadow: 0 0 0 24px rgb(25, 25, 30);
  top: 12px;
  z-index: 2000;
  pointer-events: none;
  font-family: 'Courier New', Courier, monospace;
  display: inline-block;
}
</style>
