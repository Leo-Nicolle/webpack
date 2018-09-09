<template id="experience-template">
  <div>
    <ul>
       <li v-for="experience in experiences">
         <h3 class="experience-title">
         <span>{{ experience.year}} -- {{ experience.time}}: {{ experience.title}}</span>
         </h3>
         <p class="experience-description"> {{ experience.description  }}</p>
         <ul>
            <li v-for="project in experience.projects">
              <h4 class="project-title">
                {{ project.topic }}
              </h4>  
              <a :href="project.link.url">{{project.link.title}} </a>
            </li>
         </ul>
       </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Experience",
  template: '#experience-template',
  data () {
    return {
      experiences: [
        {
          year: `2016`,
          title: `Internship at LIRIS (CNRS)`,
          time: `6 months`,
          description: `During this internship I developed a program able to extract the skyline from a landscape
           image and match it with a Digital
            Elevation Model. The final goal is to create a smart-phone application able to display geo-localized
            informations in AR.
            This work led to a publication at VISAPP 2017`,
          projects: [
            {
              topic: `Developing Machine Learning tools for Embedded Augmented Reality`,
              link: {
                title: `Read the publication`,
                url: `./data/pdf/article.pdf`,
              },
            }
          ],
          image: `assets/experience/internship.png`,
        },
        {
          year: `2017`,
          title: `WebGL developper at Wanadev`,
          time: `2 years`,
          description: `I have mainly worked on a big WebGL project: kazaplan, plus some little side-projects 
          related to 3D. We were a team of 10 developpers, working with a strict gitlab workflow. I contributed
          on big features like the procedural generationof the walls and the roofs,
          participated a bit to the project managment,
          had daily communication with our client...`,
          projects: [
            {
              topic: `Kazaplan`,
              link: {
                title: `The Kazaplan application`,
                url: `https://www.kozikaza.com/kazaplan/new`,
              },
            },
            {
              topic: `Holes-in: a tool to generate meshes from paths and holes`,
              link: {
                title: `Holes-in demo page`,
                url: `https://wanadev.github.io/holes-in/debug/index.html#page`,
              },
            },
          ],
          image: `assts/placeholder.jpg`,
        },
      ], 
    } 
  },
};

</script>

<style lang="scss" scoped>

</style>
