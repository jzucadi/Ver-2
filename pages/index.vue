<template>
  <section class="container">
    <div>
      
      
      <h1 class="title">
        Contact
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
import { TweenMax, Back } from 'gsap'

export default {
  transition: {
    mode: 'out-in',
    css: false,
    beforeEnter (el) {
      TweenMax.set(el, {
        transformPerspective: 600,
        perspective: 300,
        transformStyle: 'preserve-3d'
      })
    },
    enter (el, done) {
      TweenMax.to(el, 1, {
        rotationY: 360,
        transformOrigin: '50% 50%',
        ease: Back.easeOut
      })
      done()
    },
    leave (el, done) {
      TweenMax.to(el, 1, {
        rotationY: 0,
        transformOrigin: '50% 50%',
        ease: Back.easeIn
      })
      done()
    }
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
