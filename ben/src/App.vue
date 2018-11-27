<template>
  <div id="app">
    <mainmenu></mainmenu>
    <router-view/>
  </div>
</template>

<script>
import Menu from "@/components/menu.vue"

export default {
  name: 'App',
  components: {
    mainmenu: Menu
  },

  mounted: () => {
    this.$http.get(url)
    .then((response) => {
        if(!response.body) return;
        console.log(response.body)
    });
	},
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
