<template>
  <div>
  <!-- <intro></intro>      -->
  <!-- <experience></experience>   -->
  <!-- <skill></skill> -->
  <gallery></gallery>
	<!-- <slideshow></slideshow> -->
  <!-- <association></association> -->

  </div>
</template>

<script>
  //import your components here
  import Intro from './Intro.vue'
  import Experience from './Experience.vue'
  import Gallery from './Gallery.vue'
  import Skill from './Skill.vue'
  import Association from './Association.vue'
  import Slideshow from './Slideshow.vue'

  export default {
    components: {
      'intro': Intro,
      'experience': Experience,
      'skill': Skill,
      'gallery': Gallery,
      'association' : Association,
      'slideshow': Slideshow,
    },
 };

</script>


<style lang="scss">
:root {
 --first-color: #76E18E;
 --second-color: #1CA3BD;
 --third-color: #FFB976;
 --black-1: #17180B;
 --white-1: #FAFAFA;
 --white-2: #FFFFFF;
 --white-3: #DDFFDD;
 --blue-1: #00B7CE;
 --blue-2: #13C8DA;
 --grey-1:#eaf0eb;

}
document{

@font-face {
  font-family: 'antique_olive_t_otbold';
  src: url('~/assets/font/antiqueolivetot-bold-webfont.woff') format('woff');
  src: url('~/assets/font/antiqueolivetot-bold-webfont.woff2') format('woff2');
  src: url('~/assets/font/icons.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
@import '~/assets/font/icons.css';
}

body
{
  color: var(--black-1  );
  background-color: var(--grey-1);
  font-family: 'Source Sans Pro', sans-serif; 
  margin: 0 0 12px; 
  letter-spacing: 0.2px;
  width:100%;
}

h1,h2,h3
{
   color: var(--black-1); 
   font-family: 'antique_olive_t_otbold', serif;
   font-weight: bold;
   margin: 0;
   letter-spacing: 0.8px;
   line-height: 48px;
}
h1
{
   font-size: 28px;
}
h2
{

}

ul
{
    list-style: none;
}

</style>
