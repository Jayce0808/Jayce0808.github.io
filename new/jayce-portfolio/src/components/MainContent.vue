<script setup>
import HomeSection from './sections/HomeSection.vue';
import AboutMeSection from './sections/AboutMeSection.vue';
import ProjectsSection from './sections/ProjectsSection.vue';
import ContactMeSection from './sections/ContactMeSection.vue';

</script>

<template>

    <div id="terminal" class="crt"> </div>
    <header>
        <a href="#home">Home</a>
        <a href="#aboutMe">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contactMe">Contact Me</a>
    </header>

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
.crt::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
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

#mainContent {
    color: rgb(0, 238, 0);
    padding-top: 3em;
    padding-left: 4em;
    padding-right: 4em;
    background-color: rgb(0, 11, 0);
    height: 93vh;
    display: inline-block;
    overflow: auto
}

body {
    background-color: rgb(25, 25, 30);
    height: 0;
    display: inline-block
}

header {
    z-index: 1;
    display: inline-block;
    background-color: rgb(0, 238, 0);
    position: fixed;
    width: calc(100% - 2em);
    padding-top: 1em;
    padding-bottom: 1em;
    padding-right: 5em;
    text-align: end;
}

header>a {
    font-family: 'Courier New', Courier, monospace;
    color: black;
    padding-left: 1em;
    font-size: 1.5em;
    font-weight: bold;
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
    z-index: 2;
    pointer-events: none;
    font-family: 'Courier New', Courier, monospace;
    display: inline-block;
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

.loader {

    margin: auto;
    animation: spinner 6s ease-in inherit;
    z-index: 9999;
}

@keyframes spinner {
    0% {
        background-image: radial-gradient(rgba(0, 0, 0, 1), black 320%);
        height: 100%;
    }

    5% {
        background-image: radial-gradient(rgba(0, 7.5, 0, 0.98), black 320%);
        height: 100%;
    }

    50% {
        background-image: radial-gradient(rgba(0, 75, 0, 0.66), black 320%);
        height: 100%;
    }

    100% {
        background-image: radial-gradient(rgba(0, 150, 0, 0.25), black 320%);
        height: 100%
    }
}

body {
    overflow: hidden;
}

#mainContent {
    overflow-y: auto;
}

body {
    scrollbar-width: thin;
    /* "auto" or "thin" */
    scrollbar-color: rgba(18, 16, 16) rgb(0, 238, 0);
    /* scroll thumb and track */
}

#submitButton {
    padding: 0.5%;
    padding-left: 1%;
    padding-right: 1%;
    float: right;
    color: black;
    background-color: rgb(0, 238, 0);
    border-radius: 20rem;
    margin-bottom: 2rem;
}

::-webkit-scrollbar-thumb {
    background: rgba(18, 16, 16);
    -webkit-border-radius: 1ex;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
}

::-webkit-scrollbar {
    height: 12px;
    width: 12px;
    background: rgb(0, 238, 0);
}
</style>