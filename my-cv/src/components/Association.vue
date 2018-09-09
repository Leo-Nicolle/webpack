<script>

import Gallery from './Gallery.vue'

export default {
  name: "Association",
  extends: Gallery,
  data(){
    return {
      title: "Associative Involvment",
      "ulgallery": "association",
      "slideshowid":"association-slideshow",
      items: [
        {
          title: `Ce Murmure Festival`,
          icon: 'icon-cemurmure',
          slideshow: ['static/cemurmure/1.jpg','static/cemurmure/2.jpg','static/cemurmure/3.jpg',
          'static/cemurmure/4.jpg','static/cemurmure/5.jpg'],
          description: `Each and every year I participate to the organisation of Ce Murmure Festival. 
           The first edition welcomed only 400 people into a friend's garden. 
           Our scene was a tractor-trailer and we were 20 volunteers. 
           This year (8th edition) we welcomed 2000 people, we have a true scene, nice artists ...
           But we still want our festival to be a family event, with activities for kids, youth and a 
           wide range of music styles.
           I and two other geeks design an interactive installation for each edition of the festival.`,
        },
        {
          title: `Voluntary teatcher`,
          icon: 'icon-homework',
          description: `For 2 years now, I voluntary teach math and sciences to teenagers at SPES Villeurbanne,
          an association dedicated into giving free evening classes to unproviledged pupils. French education 
          system is free but not egalitarian and suburbs are aggrieved in matter of education. This is for me 
          a way to participate into citizen mutual help.`,
          image: `static/teach/1.jpg`,
        },
        {
          title: `Drama`,
          icon: 'icon-theater',
          image: `static/theater/1.jpg`,
          description: `I have started to practice drama in high school and during my university years, I 
          carried on with some friends. We created a Theater club and built two shows: A petites pierres and
          Petites histoire de la folie ordinaire. Then the group spread and the club ended.`,
        },
      ],
    };
  }
};
</script>

<style scoped>

.association{
  max-width: 800px;
}
</style>
