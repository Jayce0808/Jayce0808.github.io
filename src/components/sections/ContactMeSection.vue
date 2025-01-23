<script setup>
import { CoLinkedin } from "oh-vue-icons/icons";
defineProps({
  pageName: String,
  imageName: String,
  projectDescription: String,
});
</script>

<template>
  <div>
    <h1 id="contactMe">
      Contact Me
    </h1>
    <p>
      Contact me using the form below or through any of the linked social media!
    </p>
    <CoLinkedin></CoLinkedin>
    <!--
    <aside style="float:right">
      <address style="margin: 0;">
        <h2 style="margin: 0;">Social Media</h2>
        <nav style="font-size: 1.5em;">
          <CoLinkedin></CoLinkedin>
          <a href="https://www.linkedin.com/in/jayceb/"><i class="fab fa-linkedin"></i></a>
          <a href="https://github.com/Jayce0808"><i class="fab fa-github-square"></i></a>
        </nav>
      </address>
    </aside> -->
    <form method="POST" action="https://formspree.io/f/mbjbbleo" style="padding-bottom: 5vh; margin-bottom: 5vh">
      <div>
        <ul style="list-style-type: none; padding-left: 0; ">
          <li style="float: left; margin-right: 10%; width: 15em">
            <label for="name" style="width: 100%">Name</label>
            <input type="text" name="name" id="name" style="height: 2em; width: 100%; display: block;" />
          </li>
          <li style="float: left; width: 20em">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" style="height: 2em; width: 100%; display: block;" />
          </li>
        </ul>
        <div style="clear: both;">
          <label for="message">Message</label><br>
          <textarea type="text" name="message" id="message" style="height: 17em; width: 100%; resize: none"></textarea>
        </div>
      </div>
      <br>
      <button type="submit" id="submitButton" class="button"><b>Send Message</b></button>
    </form>
  </div>
</template>

<style scoped>
#submitButton {
  padding: 0.5%;
  padding-left: 1%;
  padding-right: 1%;
  float: right;
  color: black;
  background-color: rgb(0, 238, 0);
  border-radius: 20rem;
  margin-bottom: 2rem;
  font-size: 2em;
  border: rgb(0, 238, 0);
  font-family: 'Courier New', Courier, monospace;
}

#submitButton:hover {
  cursor: grab;
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
</style>
