<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>

   
 </template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  padding: 0 5%;
  margin-top: 60px;
  max-width: 1200px;
  padding: 0 12px;
  padding-top: 0;
}

  @media only screen and (max-width: 768px) {
    #app{
      margin-top: 12px;
      padding: 0;
    }
  }


</style>
