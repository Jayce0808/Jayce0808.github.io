<template>
    <header>
        <button class="hamburger" @click="toggleMenu">
            ☰
        </button>
        <nav :class="{ 'nav-open': isMenuOpen }">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#aboutMe">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contactMe">Contact Me</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
</script>

<style scoped>
/* Fixed Header */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgb(0, 238, 0);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1em;
    z-index: 1000;
}

/* Hamburger button */
.hamburger {
    display: none;
    font-size: 2rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding-left: 3%;
}

/* Navigation Bar */
nav {
    display: flex;
    background-color: rgb(0, 238, 0);
    width: 100%;
    text-align: end;
}

nav ul {
    display: flex;
    list-style: none;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
}

nav a {
    font-family: 'Courier New', Courier, monospace;
    color: black;
    padding-left: 1em;
    font-size: 1.5em;
    font-weight: bold;
}

/* Mobile Styles */
@media (max-width: 768px) {
    .hamburger {
        display: block;
    }

    nav {
        position: fixed;
        top: 60px;
        /* Adjust based on header height */
        color: black;
        left: 0;
        width: 100%;
        background-color: rgb(0, 238, 0);
        display: none;
        flex-direction: column;
        text-align: center;
        padding: 1em;
    }

    nav.nav-open {
        display: flex;
    }

    nav ul {
        flex-direction: column;
    }

    nav li {
        padding: 10px 0;
    }
}
</style>
