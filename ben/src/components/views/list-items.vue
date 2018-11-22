<template>
    <div class = "list-item">

       <ul>
         <li v-for="item in items">
            <p class = "item-name"> Name: {{item.name}}</p>
         </li>
       </ul>
   </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex';

export default {
  name: 'ListItems',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  components: {

  },
};
</script>

<style lang="css">
  .form-container{
    display: block;
  }
  /* .subitem-list{
  }
  .subitem-list > li{
    margin-top: 12px;
    display: flex;
  } */
</style>
