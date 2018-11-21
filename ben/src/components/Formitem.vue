<template>
    <div class = "form-container">
      <p>
        <span>Nom</span><br/>
        <input v-model="name" placeholder="Entrez un nom">
      </p>
      <p>
        <span>Aouter un constituant</span>
        <searchitem v-on:item-selected="addSelectedItem"
        v-bind:items ='getFilteredItems()'></searchitem>
      </p>

       <ul class = "subitem-list">
         <li v-for="item in selectedItems">
           <subitem :item="item" v-on:item-unselected="onItemUnselect(item)"></subitem>
         </li>
       </ul>

   </div>
</template>

<script>

import Searchitem from './Searchitem';
import SubItemForm from './SubItemForm';


export default {
  name: 'Formitem',
  data() {
    return {
      name: '',
      selectedItems: [],
    };
  },

  methods: {
    addSelectedItem(item) {
      this.selectedItems = this.selectedItems.concat(item);
    },
    getItems() {
      return [{ name: 'toto' }, { name: 'titi' }, { name: 'tata' }, { name: 'tutu' }];
    },
    getFilteredItems() {
      return this.getItems().filter(item => !this.selectedItems
        .find(({ name }) => item.name === name));
    },

    getSelectedItemNames() {
      return this.selectedItems().map(({ name }) => name);
    },

    onItemUnselect(item) {
      this.selectedItems = this.selectedItems.filter(({ name }) => item.name !== name);
    },
  },

  components: {
    searchitem: Searchitem,
    subitem: SubItemForm,

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
