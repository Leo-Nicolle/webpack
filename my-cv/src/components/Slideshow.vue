<template>
  <div>
    <transition 
    @enter="enterEl"
    @leave="leaveEl"
    :css="false">
      <div class= "container" :id = "slideshowid" v-if = "visible">
        <div  class = "slideshow-image-container"
         v-on:resize="handleResize($event)">
          <img v-if = "slideshow.image" class= "image-slideshow"
            v-bind:src= "slideshow.image">
          </img>   

          <ul v-else class="ul-slideshow">
             <li v-for="(content,index) in slideshow.content"
               v-bind:index="index"
               >
                 <img class="image-slideshow"
                  v-bind:src= "content"
                  v-if = "isVisible(index)"
                  @click= "onImageClick({index, array: slideshow.content})"
                >
                </img>
             </li>
          </ul>
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
      currentIndex: 0,
      change: false,
      ratio: {height : 0, opacity: 1, scrollDiff: 0},
      slideshow: {},
      slideshowid: "",
    }
   },

   methods: {
     enterEl(el, done) {
        this.tweenHeight(0, 1, el, done);
    },
    leaveEl(el, done) {
      this.tweenHeight(1, 0, el, done);
    },
    isVisible(index) {
      console.log("isVisible", index, this.currentIndex);
      return this.currentIndex == index;
    },
    onImageClick({index, array}) {
      this.currentIndex = (index+1)%array.length;
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

    tweenHeight(start,  end ,el , done){
       this.ratio.element = el;
       this.ratio.height = start;
        const image = el.firstChild.firstChild;
        const text = el.children[1];
       /* this.ratio.element = text.offsetTop < image.offsetTop + image.offsetHeight
          ? text
          : image;
        */
       new TWEEN.Tween(this.ratio) 
          .to({height: end}, 3000) 
          .easing(TWEEN.Easing.Quadratic.Out) 
          .onUpdate(this.computeSlideshowHeight)
          .start()
          .onComplete(done);
    },
    computeSlideshowHeight(){
        this.ratio.element.style.setProperty('height', 
          Math.round(this.ratio.height 
            * (this.ratio.element.firstChild.firstChild.offsetWidth 
            / 1.777 + 18)
          )+"px");        
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
    max-width: 100%
}

.slideshow-image-container{
    max-width: 60%;
    min-width: 60%;
    margin-left: 32px;
    margin-top: 16px;
}
.ul-slideshow{
  padding: 0;
  margin: 0;

}
.image-slideshow {
    width: 100%;
}

.project-description{
    text-align: justify;
    margin-left: 32px ;

}

@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    .container{
      flex-wrap: wrap; 
    }
    .slideshow-image-container {
        width: 85%;
        min-width: 85%;
        margin: auto;
    }
    .project-description{
        margin: 0 12px;
    }
}

</style>
