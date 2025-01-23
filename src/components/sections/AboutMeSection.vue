<script setup>
defineProps({
    pageName: String,
    imageName: String,
    projectDescription: String,
});
</script>

<template>
    <div>
        <h1 id="aboutMe">
            About Me
        </h1>
        <img src="/images/Banner.jpg" width=100%>
        <p>
            I'm Jayce, a full-stack developer with expertise in Next.js, Vue, TypeScript, PHP, and MySQL. With over
            three years of experience in web and software development, I specialize in building scalable applications,
            optimizing performance, and solving complex problems efficiently.
            <br><br>
            Passionate about technology-driven climate action, I'm always eager to learn and explore new areas like
            software security and cloud computing. Whether working independently or collaborating with teams, I focus on
            delivering user-friendly, high-performance solutions.
        </p>
    </div>
</template>
