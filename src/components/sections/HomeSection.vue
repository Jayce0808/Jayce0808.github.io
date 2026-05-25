<script setup>
</script>

<template>
  <div style="float: left">
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
    <div class="list-container">
      <h2>Education</h2>
      <ul class="sub-list">
          <li class="sub-heading">University of Melbourne</li>
          <ul>
            <li>Bachelor of Science Major (Computing and Software Systems)</li>
          </ul>
          <li class="sub-heading">Australian Science and Mathematics School</li>
          <ul>
            <li>Year 12/SACE</li>
          </ul>
      </ul>
      <h2>Qualifications</h2>
      <ul class="sub-list">
          <li class="sub-heading">Linux Foundation</li>
          <ul>
            <li>Certified IT Associate (LFCA)</li>
          </ul>
          <li class="sub-heading">Microsoft</li>
          <ul>
            <li>Azure Fundamentals (AZ-900)</li>
            <li>Azure AI Fundamentals (AI-900)</li>
          </ul>
      </ul>
    </div>
    <div class="list-container">
      <h2>Skills</h2>
      <ul class="sub-list">
          <li class="sub-heading">Azure</li>
          <li class="sub-heading">Bash</li>
          <li class="sub-heading">C</li>
          <li class="sub-heading">C#</li>
          <li class="sub-heading">HTML5 & CSS3</li>
          <li class="sub-heading">Java</li>
          <li class="sub-heading">JavaScript</li>
          <li class="sub-heading">jQuery</li>
          <li class="sub-heading">MERN Stack</li>
          <li class="sub-heading">MySQL</li>
          <li class="sub-heading">PHP</li>
          <li class="sub-heading">Python</li>
          <li class="sub-heading">Semantic UI</li>
          <li class="sub-heading">Vue.js</li>
          <li class="sub-heading">WordPress</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
li {
  text-align: left;
}

.sub-list {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.6em;
  letter-spacing: 0.12em;
  line-height: 1.3em;
}

.sub-list ul {
  font-size: 1em;
}

.sub-heading {
  font-weight: bold;
}

#skills-list {
  /* width: 50%; */
  float: left;
}

#education-list {
  /* max-width: 28em; */
  float: left;

}

#qualifications-list {
  /* max-width: 28em; */
  float: left;

}

.list-container {
  float: left;
}

.list-container h2 {
  text-align: left;
}
</style>
