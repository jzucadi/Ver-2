<template>
  <section class="container">
    <div>
      
      
      <h1 class="title">
        j.z
      </h1>
      <h2 class="subtitle">
        Hi. I'm James Zaccardo, a frontend developer based in Los Angeles.
      </h2>
      <div class="links">
        <a href="#" target="_blank" class="button--green">View Site</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
      <nuxt-link class="navi" to="/work">
            Work
          </nuxt-link>
    </div>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>


.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "WavehausB", Helvetica Neue, sans-serif;/* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #ccc;
  letter-spacing: 1px;
}
.subtitle
{
  font-family: "WavehausN";
  font-size: 42px;
  color: #2196F3;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
