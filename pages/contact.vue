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

/* colors stuff */
a {
color: var(--highlightColor);
transition: color 1s; /* autoprefixed ! */
}
a:hover { color: gray(255, 50%) }
a:active { color: rebeccapurple }
a:focus { background-color: rgb(255 153 0 / 33%); outline: 3px solid hsl(1turn 60% 50%); }
a:any-link { color: color(var(--highlightColor) blackness(+20%)) }

/* font stuff */
h2 {
font-variant-caps: small-caps;
}

table {
font-variant-numeric: lining-nums;
}

</style>
