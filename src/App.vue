<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #app {
    margin: 0 auto;
    font-family: 'Roboto Condensed', sans-serif;
  }
  @media screen and (min-width: 320px) {
    #app {
      min-width: 320px;
      max-width: 440px;
      width: 100vw;
    }
  }
  @media screen and (min-width: 768px) {
    #app {
      min-width: 660px;
      max-width: 660px;
      width: 100vw;
    }
  }
</style>