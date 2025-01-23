<script setup>
import HomeSection from './sections/HomeSection.vue';
import AboutMeSection from './sections/AboutMeSection.vue';
import ProjectsSection from './sections/ProjectsSection.vue';
import ContactMeSection from './sections/ContactMeSection.vue';
import Header from './Header.vue';
import Terminal from './Terminal.vue';

</script>

<template>
  <Terminal></Terminal>
  <Header></Header>

  <main id="mainContent">

    <HomeSection></HomeSection>
    <AboutMeSection></AboutMeSection>
    <ProjectsSection></ProjectsSection>
    <ContactMeSection></ContactMeSection>
  </main>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}

/* Flicker animation */
@keyframes flicker {
  0% {
    opacity: 0.05;
    background: radial-gradient(circle, green 20%, #000000 80%);
  }

  50% {
    opacity: 0.025;
    background: radial-gradient(circle, green 10%, #000000 90%);
  }

  100% {
    opacity: 0;
  }
}

#mainContent {
  color: rgb(0, 238, 0);
  padding-top: 3em;
  display: inline-block;
  max-width: 1400px;
}

/* Mobile Styles */
@media (max-width: 1200px) {
  #mainContent {
    /* max-width: 600px; */
    max-width: 90%;

  }

  h1 {
    font-size: 4em;
  }
}

/* Mobile Styles */
@media (max-width: 768px) {
  #mainContent {
    /* max-width: 600px; */
    max-width: 85%;

  }

  h1 {
    font-size: 3em;
  }
}

a {
  text-decoration: none;
  font-weight: bold;
  padding: 1px;
  color: rgb(0, 238, 0);
}

address a {
  color: rgb(0, 238, 0);
  font-size: 2em;
}

p {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.6em;
  letter-spacing: 0.12em;
  line-height: 1.3em;
}

h3 {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.6em;
  letter-spacing: 0.12em;
  line-height: 1.3em;
}

h1 {
  clear: both;
  font-family: 'Courier New', Courier, monospace;
  font-size: 5em;
}

h2 {
  font-family: 'Courier New', Courier, monospace;
  font-size: 2.5em;
}

label {
  font-family: 'Courier New', Courier, monospace;
  font-size: 2.5em;
  font-weight: bold;
}

input,
textarea {
  color: rgb(0, 238, 0);
  border: 2px solid rgb(0, 238, 0);
  border-radius: 1em;
  background-color: rgb(0, 11, 0);
  font-size: 1.5em;
  padding-left: 0.5em;
}

.link {
  position: absolute;
  margin-top: -120px;
  padding-bottom: 120px;
  display: inline-block;
}

div {
  clear: "both";
}

.button {
  color: rgb(0, 238, 0);
  font-size: 2em;
  border: rgb(0, 238, 0);
  font-family: 'Courier New', Courier, monospace;
}

h1::before {
  display: block;
  content: " ";
  margin-top: -55px;
  height: 55px;
  visibility: hidden;
  pointer-events: none;
}

body {
  overflow: hidden;
}

body {
  scrollbar-width: thick;
  /* "auto" or "thin" */
  scrollbar-color: rgba(0, 238, 0);
  /* scroll thumb and track */
}
</style>
