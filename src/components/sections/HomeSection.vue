<script setup>
defineProps({
  pageName: String,
  imageName: String,
  projectDescription: String,
});
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
        <h3>
          <li>University of Melbourne</li>
          <ul>
            <li>Bachelor of Science Major (Computing and Software Systems)</li>
          </ul>
          <li>Australian Science and Mathematics School</li>
          <ul>
            <li>Year 12/SACE</li>
          </ul>
        </h3>
      </ul>
      <h2>Qualifications</h2>
      <ul class="sub-list">
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
    </div>
    <div class="list-container">
      <h2>Skills</h2>
      <ul class="sub-list">
        <h3>
          <li>Azure</li>
          <li>Bash</li>
          <li>C</li>
          <li>C#</li>
          <li>HTML5 & CSS3</li>
          <li>Java</li>
          <li>Java Script</li>
          <li>Jquery</li>
          <li>MERN Stack</li>
          <li>MySQL</li>
          <li>PHP</li>
          <li>Python</li>
          <li>Semantic UI</li>
          <li>Vue.js</li>
          <li>Word Press</li>
        </h3>
      </ul>
    </div>
  </div>
</template>

<style scoped>
li {
  /* list-style-type: none; */
  /* margin-right: 100px; */
  text-align: left;
  /* Override any inherited center alignment */
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
