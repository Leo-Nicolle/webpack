<template>
  <div>
    <ul>
       <li v-for="association in  $store.state.associations">
         <h3 class="association-title">
         <span>{{ association.title}}</span>
         </h3>
         <p class="association-description"> {{ association.description  }}</p>
       </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
}
</script>

<style lang="scss" scoped>

</style>
