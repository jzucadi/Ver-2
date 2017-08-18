<template>
  <section class="container">
      <nuxt-link class="navi" to="/">
           Work
          </nuxt-link>
    <h1 class="title">
      stuff</h1>
      
      
  
  

   
        
  </section>
</template>
<script>
import WOW from 'wowjs'
if (process.BROWSER_BUILD) {
  require('wowjs')
}
export default {
  
WOW().init()
}

</script>
<style>
@lost gutter 880px;
@lost flexbox flex;
</style>
