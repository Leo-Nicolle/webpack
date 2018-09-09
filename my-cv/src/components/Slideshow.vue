<template>
  <div>
    <transition 
    @enter="enterEl"
    @leave="leaveEl"
    :css="false">
      <div class= "container" v-if = "$store.state.slideshow.visible">
        <carousel 
        :navigationEnabled="true"
        :paginationEnabled = "false"
        :perPage = "1">
          <slide
          v-for="(content,index) in $store.state.slideshow.content"
          v-bind:item="content"
          v-bind:index="index"
          v-bind:key="content"
          >
            <img class="image-slideshow"
              v-if="content.endsWith('jpg')"
              v-bind:src= "content"
            >
            </img>
            <video class="image-slideshow" controls
              v-if="content.endsWith('mp4')"
            >
            <source v-bind:src="content" type="video/mp4">
            Your browser does not support the video tag.
            </video>
          </slide>
        </carousel>
          <div class="project-description">
              <p v-html="$store.state.slideshow.description"></p>
          </div>
      </div>
    </transition>
  </div>  
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import TWEEN from 'tween.js';

function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);


@Component
export default class App extends Vue {
 
   ratio = {height : 0};
   
   enterEl(el, done) {
    new TWEEN.Tween(this.ratio) 
        .to({height: 1}, 3000) 
        .easing(TWEEN.Easing.Quadratic.Out) 
        .onUpdate(function() { 
            el.style.setProperty('height', 
              Math.round(this.height * 470)+"px");         
        })
        .start()
        .onComplete(done);
  }
  leaveEl(el, done) {
     new TWEEN.Tween(this.ratio) 
        .to({height: 0}, 3000) 
        .easing(TWEEN.Easing.Quadratic.Out) 
        .onUpdate(function() { 
            el.style.setProperty('height', 
              Math.round(this.height * 470)+"px");         
        })
        .start()
        .onComplete(done);
  }


};

</script>

<style>
.container{    
  overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;  
    width: 100%;
    max-height: 470;
  
}

.project-description{
    padding-left: 40px;
    font-size: 24px;
    text-align: justify;

}

.VueCarousel{
  max-width: 768px;
  width: 768px;
  height: 432px;
}

.image-slideshow{
  max-width: 768px;
  height: 432px;
  width: 768px;
}

.VueCarousel-slide {
  position: relative;
  background: #42b983;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
}
.VueCarousel-navigation-button{
  font-size: 18pt;
}

</style>
