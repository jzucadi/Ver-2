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



html
{
  font-family: "WavehausL", WavehausT, Helvetica Neue, sans-serif;/* 1 */
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
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover
{
  color: #fff;
  background-color: #3b8070;
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
</style>
