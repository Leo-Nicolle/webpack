<template>
  <div>
    <h2>Personnal projects</h2>
     <ul>
       <li v-for="project in  $store.state.projects" >
        <div @click= "$store.commit('showSlideshow', {content: project.slideshow, description: project.description})">
        <div class="icon-div">
          <i :class="project.icon"></i>
        </div>
        <h3 v-show="!$store.state.isGalleryActive" class="project-title"> {{ project.title  }}</h3>
       </div>
       </li>
    </ul>
       <div class="project-description">
              <p v-html="$store.state.slideshow.description"></p>
          </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';

@Component
export default class App extends Vue {
   @Watch('slideshow.description')
      onChildChanged(val, oldVal) { console.log("change");}

}
</script>

<style lang="scss" scoped>
.project-gallery{
  min-width: 768px;
  min-height: 432px;
  max-width: 768px;
  max-height: 432px;
}


ul{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin-left:auto;
  margin-right:auto;
  text-align: center;
}
li{
  padding-right: 16px;
  width: 15%;
}
.icon-div{
  font-size: 56px;
}

</style>
