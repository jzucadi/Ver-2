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
/* filters */
.blur {
filter: blur(4px);
}
.sepia {
filter: sepia(.8);
}

/* overflow-wrap fallback */
body {
overflow-wrap: break-word;
}

/* attribute case insensitive */
[frame=hsides i] {
border-style: solid none;
}

/* system-ui font-family */
body {
font-family: system-ui;
}
</style>
