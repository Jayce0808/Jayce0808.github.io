<script setup>
defineProps({
  pageName: String,
  imageName: String,
  projectDescription: String,
});
</script>

<template>
    <div>
        <span class="link">
        </span>
        <h1 id="home">
            Home
        </h1>
        <p>
            Welcome to my portfolio! Through this page you can learn more about myself as well as my projects
            and contact
            me if you wish.
            <br>
        </p>
        <ul>
            <li style="list-style-type: none; padding-left: 0; float: left; margin-right: 10%; width: 15em">
                <h2 style="float: left; display: block;">Skills</h2>
                <ul style="float: left; display: block;">
                    <h3>
                        <li>Azure</li>
                        <li>Bash</li>
                        <li>C</li>
                        <li>C#</li>
                        <li>HTML & CSS</li>
                        <li>Java</li>
                        <li>Java Script</li>
                        <li>MERN Stack</li>
                        <li>MySQL</li>
                        <li>PHP</li>
                        <li>Python</li>
                        <li>Semantic UI</li>
                        <li>Vue.js</li>
                        <li>Word Press</li>
                    </h3>
                </ul>
            </li>
            <li style="list-style-type: none; padding-left: 0; float: left; margin-right: 10%; width: 30em">
                <h2 style="float: left">Education</h2>
                <ul style="float: left; display: block;">
                    <h3>
                        <li>University of Melbourne</li>
                        <ul>
                            <li>Bachelor of Science Major in Computing and Software Systems</li>
                        </ul>
                        <li>Australian Science and Mathematics School</li>
                        <ul>
                            <li>Year 12/SACE</li>
                        </ul>
                    </h3>
                </ul>
            </li>
            <li style="list-style-type: none; padding-left: 0; float: left; margin-right: 10%; width: 30em">
                <h2 style="float: left">Qualifications</h2>
                <ul style="float: left; display: block;">
                    <h3>
                        <li>Linux Foundation</li>
                        <ul>
                            <li>Certified IT Associate (LFCA)</li>
                        </ul>
                        <li>Microsoft</li>
                        <ul>
                            <li>Azure Fundamentals (AZ-900)</li>
                            <li>Azure AI Fundamentals (AI-900)</li>
                        </ul>
                    </h3>
                </ul>
            </li>
        </ul>
    </div>
</template>
