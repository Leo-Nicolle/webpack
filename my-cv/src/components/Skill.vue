<template>
  <div>
   <div class = "h2-container">
    <h2>Skills</h2>
   </div>
   <ul class= "skill-ul">
       <li class="skill-li" v-for="skill in skills">
         <h3 class="skill-title">
         <span>{{ skill.title}}</span>
         </h3>
        <ul class= "subskill-ul">
          <li class= "subskill-li" v-for="subskill in skill.subskills">
             <div class = "status-container">
              <div class = "status" :style = "{'width': subskill.percent}">
                <p >{{subskill.title}}</p>        
              </div>
            </div>
          </li>  
        </ul>
       </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Skill",
  data() {
    return {
       skills: [
        {
          title: "WebGL",
          subskills: [
            {
              title: "Babylonjs",
              percent: "90%",
            },
            {
              title: "Procedural mesh generation",
              percent: "80%",
            },
            {
              title: "Shaders",
              percent: "60%",
            },
          ]
        },
        {
          title: "Maths",
          subskills: [
            {
              title: "Matrix cooking",
              percent: "90%",
            },
            {
              title: "Linear algebra",
              percent: "70%",
            },
            {
              title: "Graphs theory",
              percent: "60%",
            },
          ]
        },
        {
          title: "Computer Vision",

          subskills: [
            {
              title: "Camera callibration",
              percent: "70%",
            },  
            {
              title: "SVM",
              percent: "65%",
            },
            {
              title: "Feature extraction",
              percent: "52%",
            },
            {
              title: "Object recognition",
              percent: "52%",
            },
          ]
        },
        {
          title: "Tools",
          subskills: [
            {
              title: "Node",
              percent: "75%",
            },
            {
              title: "Git",
              percent: "70%",
            },
            {
              title: "Webpack",
              percent: "65%",
            },
            {
              title: "c++",
              percent: "60%",
            },

            {
              title: "Open-CV",
              percent: "55%",
            },
          ]
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  ul{
    padding: 0;
  }
  li{

  }

  .skill-ul{    
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    text-align: left;
    width: 100%;
  }
  .skill-li{
    width: 25%;
    padding-right: 16px;
  }
  .skill-li > h3{
    padding-left: 16px;
  }

  .subskill-ul{    
    text-align: left;
  }
  .subskill-li {
    height:24px;
  }

  .status-container{
    width: 100%;
    height: 26px;
    border-radius: 16px;
    background-color:var(--blue-2); 
  }
  .status{
    border-radius: 16px;
    background-color: var(--second-color);
    color: var(--white-2);
    height: 100%;
  }
  .status > p{
      margin-left: 12px;
      position: relative;
      top: 4px;
      font-size: 14px;
      white-space: nowrap;
  }

</style>