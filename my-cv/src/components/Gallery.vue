<template>
  <div>
    <h2>Personnal projects</h2>
     <ul>
       <li v-for="project in  projects" >
        <div @click= "showSlideshow({content: project.slideshow, description: project.description})">
        <div class="icon-div">
          <i :class="project.icon"></i>
        </div>
        <h3 v-show="!isGalleryActive" class="project-title"> {{ project.title  }}</h3>
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
      this.$children[0].$data.visible = false;
      this.$children[0].$data.visible = true;
      this.$children[0].$data.slideshow.content = content;
      this.$children[0].$data.slideshow.description = description;
    },
  },
  data() {
    return {
      isGalleryActive: false,
      projects: [
       {
          title: 'H.O.M.E.R',
          icon: 'icon-homer',
          galleryImage: '/static/homer/1.jpg',
          slideshow: ['/static/homer/1.jpg'],
          description: `H.O.M.E.R is an out of space story telling machine. The user inserts 3 words 
          into it, press a button and H.O.M.E.R prints him a story on a receipt paper. Magic !<br/>
          Inside H.O.M.E.R there is a RFID reader, a Raspberry-PI and a thermal printer.<br/>
          But scientists still don't know how is the story generated.
          `
        },
       {
        title: 'Dynamobile',
        icon: 'icon-dynamobile',
        galleryImage: '/static/dynamo/1.jpg',
        slideshow: ['/static/dynamo/1.jpg', '/static/dynamo/1.mp4', '/static/dynamo/2.jpg'],
        description: `Dynamobile is a slot-car circuit plugged on bike dynamo.<br/> 
        The faster you pedal, the faster goes your car!<br/>
        A sensor placed below the circuit is used to measure rider's lap time,
         and a screen displays best best scores.<br/>
        Huge success with kids!`
        },
        {
          title: 'Les Ombres',
          icon: 'icon-ombres',
          galleryImage: '/static/ombres/1.jpg',
          slideshow: ['/static/ombres/1.jpg', '/static/ombres/1.mp4', '/static/ombres/2.jpg'],
          description: `Les ombres is a poetic installation.<br/>
          People are invited to create a shape with cardboard to complete a participative
        moving shadows scene. <br/>
        In front of the screen, a crank triggers the light moving system, for more variations.`
        },
        {
          title: 'Bwatazik',
          icon: 'icon-bruit',
          galleryImage: '/static/bwatazik/1.jpg',
          slideshow: ['/static/bwatazik/1.jpg', '/static/bwatazik/1.mp4', '/static/bwatazik/2.jpg'],
          description: `Bwatazik is a musical installation.<br/> 
          The table is stuffed with sensors (piezo and infrared), each one triggers a sample.<br/>
          Four people can play simultaneously ( drum, bass, voice and affects).
          A visual feedback is displayed on the table to help players to perceive what they are doing.`
        },
        {
          title: 'Carabinophotomaton',
          icon: 'icon-carabino',
          galleryImage: '/static/carabino/1.jpg',
          slideshow: ['/static/carabino/1.jpg', '/static/carabino/1.mp4', '/static/carabino/2.jpg'],
          description: `Carabinophotomaton is a pellet gun  shooting stand where 
          the user is taken in photo if he manages to reach the target's center.<br/>
          The photo is then printed and the player can bring home a nice souvenir of our festival.`
        }
      ],
    }
  },
  components: {
    'slideshow': Slideshow,
  },
};
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
