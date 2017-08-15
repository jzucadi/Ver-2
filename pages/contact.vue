<template>
  <section class="container">
      <nuxt-link class="navi" to="/">
            Home
          </nuxt-link>
    <h1 class="title">
      Let's talk</h1>
      <div class="email"><a href="mailto:jameszaccardo@gmail.com?Subject=Hello" target="_top">jameszaccardo@gmail.com</a></div>
  
  

   
        
  </section>
</template>
<style scoped>
:root {
  --danger-theme: {
    color: white;
    background-color: red;
  };
}

.danger {
  @apply --danger-theme;
}


/* custom media queries */
@custom-media --viewport-medium (width <= 50rem);

/* some var() & calc() */
body {
color: var(--mainColor);

font-size: var(--fontSize);
line-height: calc(var(--fontSize) * 1.5);
padding: calc((var(--fontSize) / 2) + 1px);
}

/* custom media query usage */
@media (20rem < width <= 68rem) {
body { font-size: calc(var(--fontSize) * 1.2); }
}

</style>
