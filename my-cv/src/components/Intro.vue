<template>
  <div>
  <p>Computer Vision, 3D Developer</p>
      <h1>Léo Nicolle</h1>     
      <address>
          Hameau de Pothenée<br>
          21530, La Roche en Brenil<br>
          FRANCE<br>
          +336 48 62 30 01<br>
          <a href="mailto:nicolle_leo@yahoo.fr">nicolle_leo@yahoo.fr</a>  
      </address>
    </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  version = APP_VERSION;
}
</script>

<style lang="scss" scoped>

</style>
