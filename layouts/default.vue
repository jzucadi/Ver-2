<template>
  <div>
    <nuxt/>
    
  </div>
</template>

<style>
@font-face {
   font-family: WavehausL; 
   src: url('~assets/Wavehaus-42Light.otf');
} 
@font-face {
   font-family: WavehausT; 
   src: url('~assets/Wavehaus-28Thin.otf');
} 
@font-face {
   font-family: WavehausB; 
   src: url('~assets/Wavehaus-128Bold.otf');
} 
@font-face {
   font-family: WavehausS; 
   src: url('~assets/Wavehaus-95SemiBold.otf');
} 
@font-face {
   font-family: WavehausN; 
   src: url('~assets/Wavehaus-66Book.otf');
} 



html
{
  font-family: "WavehausN", WavehausT, Helvetica Neue, sans-serif;/* 1 */
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.button--green
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #2196f3;
  color: #2196f3;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover
{
  color: #fff;
  background-color: #2196f3;
}
.button--grey
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover
{
  color: #fff;
  background-color: #35495e;
}
body {
  background-image:linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}
</style>
