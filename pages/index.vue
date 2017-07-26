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
<style scoped>
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
.page-enter-active {
  animation: bounceInDown .45s ease-out both;
} 

.page-leave-active {
  animation: acrossOut .65s ease-in both;
} 
@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}
.container {
    background: whitesmoke;
  }

@keyframes bounceInDown {
  from, 60%, 75%, 90%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }

  75% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0, 5px, 0);
  }

  to {
    transform: none;
  }
}
@keyframes bounceInUp {
  from, 60%, 75%, 90%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }

  75% {
    transform: translate3d(0, 10px, 0);
  }

  90% {
    transform: translate3d(0, -5px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.bounceInUp {
  animation-name: bounceInUp;
}

.bounceInDown {
  animation-name: bounceInDown;
}

</style>
