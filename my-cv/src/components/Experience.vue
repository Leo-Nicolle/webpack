<template>
  <div>
    <ul>
       <li v-for="experience in  $store.state.experiences">
         <h3 class="experience-title">
         <span>{{ experience.year}} -- {{ experience.time}}: {{ experience.title}}</span>
         </h3>
         <p class="experience-description"> {{ experience.description  }}</p>
         <ul>
            <li v-for="project in experience.projects">
              <h4 class="project-title">
                {{ project.topic }}
              </h4>  
              <a :href="project.link.url">{{project.link.title}} </a>
            </li>
         </ul>
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
