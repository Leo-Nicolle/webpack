<template>
  <div class = "gallery-container">
    <h2>{{title}}</h2>
     <ul :class ="ulgallery">
       <li v-for="item in items" >
        <div @click= "showSlideshow({
         content: item.slideshow || item.image,
         description: item.description})">
        <div class="icon-div">
          <i :class="item.icon"></i>
        </div>
        <h3 class="item-title"> {{ item.title  }}</h3>
       </div>
       </li>
    </ul>
    <slideshow></slideshow>
  </div>
</template>

<script>

import Slideshow from './Slideshow.vue'

export default  {
  name:"Gallery",
  methods: {
   
    showSlideshow({content, description}){
      const data = this.$children[0].$data;

      if(!data.visible){
        data.slideshowid = this.slideshowid;
      }
      const shouldChange = data.visible && data.slideshow.content !== content;
      const shouldHide = data.visible && data.slideshow.content === content;
      data.slideshow.content = content;
      console.log("length: ", content.length)
      if(typeof content === "string"){
        data.slideshow.image = content;
      }else{
        data.slideshow.image = null;
      }
      data.slideshow.description = description;
      if(shouldChange){
        this.$children[0].tweenOpacity();
      }
      data.visible = !shouldHide;
     
    },
  },
  data() {
    return {
      isGalleryActive: false,
      title: "",
      items: [
      ],
      "ulgallery": "",
      "slideshowid": ""
    }
  },
  props: {
  },
  components: {
    'slideshow': Slideshow,
  },
};
</script>

<style lang="scss">

.item-gallery{
  min-width: 768px;
  min-height: 432px;
  max-width: 768px;
  max-height: 432px;
}
.item-title {
  text-align:center;
}

.gallery-container >ul{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin-left:auto;
  margin-right:auto;
  text-align: center;
}
.gallery-container > ul > li{
  cursor: pointer;
  padding-right: 16px;
  padding: 6px 0px 6px 0px;
  border-radius: 16px;
}

.gallery-container > ul > li:hover{
  background-color: var( --blue-2);
}
.icon-div{
  font-size: 56px;
}

</style>
