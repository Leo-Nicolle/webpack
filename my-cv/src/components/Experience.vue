<template>
  <div>
    <h2>Experience</h2>
    <ul>
       <li v-for="experience in experiences">
         <h3 class="experience-title">
          <span>{{ experience.year}} -- {{ experience.time}}: {{ experience.title}}</span>
         </h3>
         <div class= "project-container">
           <p class="experience-description" v-html= " experience.description"> </p>
           <!-- <h3 id = "projects-title">Projects</h3> -->
           <div class = "icon-list-container"> 
             <ul>
                <li v-for="project in experience.projects" @click= "onProjectClick({url:project.link.url})">
                     <div>
                        <i :class="project.icon"></i>
                        <h3 class="icon-title">{{ project.topic }}</h3>
                     </div>
                </li>
             </ul>
         </div>
        </div>
       </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Experience",

  methods: {
    onProjectClick({url}){
      console.log("click", url)
      const win = window.open(url, '_blank');
      // win.focus();
    },
  },

  data () {
    return {
      experiences: [
        {
          year: `2017`,
          title: `WebGL developper at Wanadev`,
          time: `2 years`,
          description: `I have mainly worked on a big WebGL project: Kazaplan, plus some little side-projects related to 3D.<br/>
           We were a team of 10 developpers, working with a strict gitlab workflow.<br/>
          I contributed on some big features of kazaplan like the procedural generation of the walls and the roofs, participated a bit to the project managment and had daily communication with our client. I leaned so much at Wanadev, and I will always be thanksfull to them.`,
          projects: [
            {
              topic: `Wanadev`,
              icon:"icon-wanadev",
              link: {
                title: `Wanadev page`,
                url: `https://www.wanadev.fr/`,
              },
            },  
            {
              topic: `Kazaplan`,
              icon:"icon-home",
              link: {
                title: `The Kazaplan application`,
                url: `https://www.kozikaza.com/kazaplan/new`,
              },
            },
            {
              topic: `Holes-in`,
              icon:"icon-poker",
              link: {
                title: `Holes-in demo page`,
                url: `https://wanadev.github.io/holes-in/debug/index.html#page`,
              },
            },
          ],
          image: `assts/placeholder.jpg`,
        },
        {
          year: `2016`,
          title: `Internship at LIRIS (CNRS)`,
          time: `6 months`,
          description: `During this internship I developed a program able to extract the skyline from a landscape image and match it with a Digital Elevation Model.<br/>
            The final goal is to create a smart-phone application able to display geo-localized
            informations in AR.<br/>
            This work led to a publication at VISAPP 2017`,
          projects: [
             {
              topic: `LIRIS`,
              icon:"icon-liris",
              link: {
                title: `LIRIS page`,
                url: `https://liris.cnrs.fr/`,
              },
            },  
            {
              topic: `Publication`,
              icon:"icon-mountains",
              link: {
                title: `Read the publication`,
                url: `https://hal-ujm.archives-ouvertes.fr/ujm-01486568/file/main.pdf`,
              },
            }
          ],
          image: `assets/experience/internship.png`,
        },
      ], 
    } 
  },
};

</script>

<style lang="scss" scoped>
#projects-title{
  text-align: left;
}

.project-container{
  margin-left: 32px;
}

.experience-description{
  text-align: left;
}

</style>
