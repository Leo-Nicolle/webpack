<template>
  <div>
    <transition 
    @enter="enterEl"
    @leave="leaveEl"
    :css="false">
      <div class= "container" :id = "slideshowid" v-if = "visible">
        <img v-if = "slideshow.image" 
            v-bind:src= "slideshow.image">
        </img>   

        <div v-else>       
            <carousel 
            :navigationEnabled="true"
            :paginationEnabled = "false"
            :perPage = "1">
              <slide
              v-for="(content,index) in slideshow.content"
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
        </div>
          <div class="project-description">
              <p v-html="slideshow.description"></p>
          </div>
      </div>
    </transition> 
  </div>  
</template>

<script>

function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);

const TWEEN = require("tween.js");
export default {
  name: "Slideshow",
   data(){
    return {
      visible: false,
      change: false,
      ratio: {height : 0, opacity: 1},
      slideshow: {},
      slideshowid: "",
    }
   },

   methods: {
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
    },

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
    },
    tweenOpacity(){
      const el = document.getElementById(this.slideshowid);
      this.change = true;
      const tweenOut =  new TWEEN.Tween(this.ratio) 
        .to({opacity: 0}, 800) 
        .easing(TWEEN.Easing.Quadratic.Out) 
        .onUpdate(function() { 
            el.style.setProperty('opacity', this.opacity);         
        })
        .onComplete(() =>{
          this.visible = false;
          this.visible = true;

        });
      const tweenIn =new TWEEN.Tween(this.ratio) 
          .to({opacity: 1}, 600) 
          .easing(TWEEN.Easing.Quadratic.Out) 
          .onUpdate(function() { 
              el.style.setProperty('opacity', this.opacity);         
          })
         .onComplete(() =>{        
          this.change = false;
        })
      
       tweenOut
        .chain(tweenIn)
        .start();

    },
  },
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
    margin-left: 40px;
    font-size: 24px;
    text-align: justify;

}

.VueCarousel{
  position: relative;
  left: -18px;
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
  left: 50px;
  background: #42b983;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
}
.VueCarousel-navigation-button{
  font-size: 18pt;
}
.VueCarousel-navigation-prev{
    margin-left: 48px;
}

</style>
