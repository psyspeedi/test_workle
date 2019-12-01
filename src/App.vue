<template>
  <div id="wrap">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #wrap {
    margin: 0 auto;
    font-family: 'Roboto Condensed', sans-serif;
  }
  @media screen and (min-width: 320px) {
    #wrap {
      min-width: 320px;
      max-width: 440px;
      width: 100vw;
    }
  }
  @media screen and (min-width: 768px) {
    #wrap {
      min-width: 660px;
      max-width: 660px;
      width: 100vw;
    }
  }
</style>