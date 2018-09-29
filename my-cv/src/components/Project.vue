<script>

import Gallery from './Gallery.vue'

export default  {
  name:"Projects",
  extends: Gallery,
  data() {
    return {
      title: "Personal Projects",
      "ulgallery": "project",   
      "slideshowid":"project-slideshow",  
      items: [
         {
            title: 'H.O.M.E.R',
            icon: 'icon-homer',
            image: 'static/homer/1.jpg',
            description: `H.O.M.E.R is an outer space story telling machine.<br/>
             The user inserts three words in it, presses a button and H.O.M.E.R prints them a story on a receipt. Magic!<br/>
              Inside H.O.M.E.R there is an RFID reader, a Raspberry-PI and a thermal printer.<br/>
                However, scientists still don't know how the story is generated.
            `
          },
         {
          title: 'Dynamobile',
          icon: 'icon-dynamobile',
          slideshow: ['static/dynamo/1.jpg', 'static/dynamo/2.jpg'],
          description: `Dynamobile is a slot-car circuit plugged on bike dynamo.<br/>
          The faster you pedal, the faster your car goes!<br/>
          A sensor placed below the circuit is used to measure riders lap time, and a screen displays the top scores.<br/>
          Huge success with kids!<br/>`
          },
          {
            title: 'Les Ombres',
            icon: 'icon-ombres',
            slideshow: ['static/ombres/1.jpg', 'static/ombres/3.jpg', 'static/ombres/4.jpg'],
            description: `
Les ombres is a poetic installation.<br/>
People are invited to cut out a cardboard shape to complete a participatory moving shadows scene. <br/>
In front of the screen, a crank triggers the light moving system, for more variations.<br/>`
          },
          {
            title: 'Bwatazik',
            icon: 'icon-bruit',
            slideshow: ['static/bwatazik/1.jpg', 'static/bwatazik/2.jpg'],
            description:  `Bwatazik (music box) is a musical installation.<br/>
          The table is stuffed with piezo and infrared sensors which each trigger a musical sample.<br/>
          Four people can play simultaneously (drum, bass, voice and effects). A visual feedback is displayed on the table to help players perceive what they are doing.<br/>`
          },
          {
            title: 'Carabino',
            icon: 'icon-carabino',
            slideshow: ['static/carabino/1.jpg', 'static/carabino/2.jpg', 'static/carabino/4.jpg'],
            description:`Carabinophotomaton is a pellet gun shooting stand where a photo if taken of the player if they manage to hit the target.<br/>
            The photo is then printed and the player can bring home a nice souvenir of our festival.`
          }
      ]
    }
  },
};
</script>

<style lang="scss" scoped>

.item-gallery{
  min-width: 768px;
  min-height: 432px;
  max-width: 768px;
  max-height: 432px;
}
.item-title {
  text-align:center;
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
  cursor: pointer;
  padding-right: 16px;
  width: 15%;
  padding: 6px 0px 6px 0px;
  border-radius: 16px;
}

li:hover{
  background-color: var( --blue-2);
}
.icon-div{
  font-size: 56px;
}

</style>
