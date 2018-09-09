export default {
  slideshow: {
    visible: false,
  },

  projects: [
   {
      title: 'H.O.M.E.R',
      icon: 'icon-homer',
      galleryImage: 'assets/homer/1.jpg',
      slideshow: ['assets/homer/1.jpg'],
      description: `H.O.M.E.R is an out of space story telling machine. The user inserts 3 words 
      into it, press a button and H.O.M.E.R prints him a story on a receipt paper. Magic !<br/>
      Inside H.O.M.E.R there is a RFID reader, a Raspberry-PI and a thermal printer.<br/>
      But scientists still don't know how is the story generated.
      `
    },
   {
    title: 'Dynamobile',
    icon: 'icon-dynamobile',
    galleryImage: 'assets/dynamo/1.jpg',
    slideshow: ['assets/dynamo/1.jpg', 'assets/dynamo/1.mp4', 'assets/dynamo/2.jpg'],
    description: `Dynamobile is a slot-car circuit plugged on bike dynamo.<br/> 
    The faster you pedal, the faster goes your car!<br/>
    A sensor placed below the circuit is used to measure rider's lap time,
     and a screen displays best best scores.<br/>
    Huge success with kids!`
    },
    {
      title: 'Les Ombres',
      icon: 'icon-ombres',
      galleryImage: 'assets/ombres/1.jpg',
      slideshow: ['assets/ombres/1.jpg', 'assets/ombres/1.mp4', 'assets/ombres/2.jpg'],
      description: `Les ombres is a poetic installation.<br/>
      People are invited to create a shape with cardboard to complete a participative
    moving shadows scene. <br/>
    In front of the screen, a crank triggers the light moving system, for more variations.`
    },
    {
      title: 'Bwatazik',
      icon: 'icon-bruit',
      galleryImage: 'assets/bwatazik/1.jpg',
      slideshow: ['assets/bwatazik/1.jpg', 'assets/bwatazik/1.mp4', 'assets/bwatazik/2.jpg'],
      description: `Bwatazik is a musical installation.<br/> 
      The table is stuffed with sensors (piezo and infrared), each one triggers a sample.<br/>
      Four people can play simultaneously ( drum, bass, voice and affects).
      A visual feedback is displayed on the table to help players to perceive what they are doing.`
    },
    {
      title: 'Carabinophotomaton',
      icon: 'icon-carabino',
      galleryImage: 'assets/carabino/1.jpg',
      slideshow: ['assets/carabino/1.jpg', 'assets/carabino/1.mp4', 'assets/carabino/2.jpg'],
      description: `Carabinophotomaton is a pellet gun  shooting stand where 
      the user is taken in photo if he manages to reach the target's center.<br/>
      The photo is then printed and the player can bring home a nice souvenir of our festival.`
    }
  ],

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

 
  associations: [
    {
      title: `Ce Murmure Festival`,
      description: `Each and every year I participate to the organisation of Ce Murmure Festival. 
       The first edition welcomed only 400 people into a friend's garden. 
       Our scene was a tractor-trailer and we were 20 volunteers. 
       This year (8th edition) we welcomed 2000 people, we have a true scene, nice artists ...
       But we still want our festival to be a family event, with activities for kids, youth and a 
       wide range of music styles.
       I and two other geeks design an interactive installation for each edition of the festival.`,
      image: `assets/associations/cemurmure.png`,
    },
    {
      title: `Voluntary teatcher`,
      description: `For 2 years now, I voluntary teach math and sciences to teenagers at SPES Villeurbanne,
      an association dedicated into giving free evening classes to unproviledged pupils. French education 
      system is free but not egalitarian and suburbs are aggrieved in matter of education. This is for me 
      a way to participate into citizen mutual help.`,
      image: `assets/associations/spes.png`,
    },
    {
      title: `Drama`,
      description: `I have started to practice drama in high school and during my university years, I 
      carried on with some friends. We created a Theater club and built two shows: A petites pierres and
      Petites histoire de la folie ordinaire. Then the group spread and the club ended.`,
      image: `assets/associations/drama.png`,
    },

  ],


};
