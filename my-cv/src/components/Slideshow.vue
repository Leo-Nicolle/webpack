<template>
  <div>
      <div class= "container" v-if = "visible">
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
          <div class="project-description">
              <p v-html="slideshow.description"></p>
          </div>
      </div>
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
      ratio: {height : 0},
      slideshow: {},
    }
   },

   mathods: {
      setVisible(val){
        console.log("set visible");
      },
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
  },
    watch: {
    // whenever question changes, this function will run
    slideshow: function (oldSlideshow, newSlideshow) {
      console.log("change!!");
      // this.answer = 'Waiting for you to stop typing...'
      // this.debouncedGetAnswer()
    }
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
