<template>
    <div class = "form-container">
      <p>
        <span>Nom</span><br/>
        <input v-model="item.name" placeholder="Entrez un nom"/>
      </p>
      <p>
        <span>Temps</span><br/>
        <input v-model="item.time" placeholder="Temps ? "/>
      </p>

      <p>
        <span>Aouter un constituant</span>
        <suggestitem v-on:item-selected="addSelectedItem"
        v-bind:items ='allItems'></suggestitem>
      </p>
       <ul class = "subitem-list">
         <li v-for="subItem in item.subItems">
           <addsubitem :item="subItem" v-on:item-unselected="onItemUnselect(subItem)"></addsubitem>
         </li>
       </ul>

       <p>
        <button @click="onSubmit()" v-if="mode === 'add'">Ajouter</button>
        <button @click="onSubmit()" v-else>Modifier</button>
       </p>
   </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex';
import Searchitem from '../fields/suggest-item';
import AddSubItem from './add-sub-item';

export default {
  name: 'CreateItem',

  computed: {
    ...mapGetters(['allItems']),
  },

  props: {
    mode: {
      type: String,
      default: "add",
    },
    item: {
      type: Object,
      default: () => ({
        name: '',
        time: 0,
        id: "245",
        subItems: [],
      })
    }
  },

  methods: {
    addSelectedItem(item) {
      this.item.subItems = this.item.subItems.concat(item);
    },

    getSelectedItemNames() {
      return this.item.subItems().map(({ name }) => name);
    },

    onItemUnselect(item) {
      this.item.subItems = this.item.subItems.filter(({ name }) => item.name !== name);
    },

    onSubmit() {
      if(this.mode ==="add"){
        this.$store.commit('pushItem', this.item);
      }else{
        this.$store.commit('updateItem', this.item.id, this.item);
      }

    },
  },

  components: {
    suggestitem: Searchitem,
    addsubitem: AddSubItem,
  },
};
</script>

<style lang="css">
  .form-container{
    display: block;
  }
  .subitem-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .subitem-list > li{
    margin-top: 12px;
    display: flex;
  }
</style>
