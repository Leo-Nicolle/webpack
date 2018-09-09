<template>
  <div>
  <button v-on:click="$store.commit('showSlideshow', {})">
    Permuter
  </button>
  <h2>Skills</h2>
   <ul class= "skill-ul">
       <li class="skill-li" v-for="skill in $store.state.skills">
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
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  
}
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