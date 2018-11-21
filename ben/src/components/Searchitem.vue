<template>
  <div>
    <input   v-model="inputText" v-on:input="onInputChange()"/>
    <div id ="suggest-container">
      <ul class ="suggestion-list">
        <li v-for="item in filteredItems"
        @click="onSuggestClick(item)" v-if ="!selected">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Searchitem',
  data() {
    return {
      selected: null,
      filteredItems: [],
      limit: 10,
    };
  },
  props: {
    items: {
      type: Array,
      default: [],
    },
  },

  methods: {
    setItems(items) {
      this.items = items;
    },
    onSelected(option) {
      this.selected = option.item;
    },
    onInputChange() {
      if (this.inputText === '' || this.inputText === undefined) {
        return;
      }
      this.selected = null;

      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */
      this.filteredItems = this.items.filter(item =>
        item.name.toLowerCase().indexOf(this.inputText.toLowerCase()) > -1)
        .slice(0, this.limit);
    },
    onSuggestClick(item) {
      this.selected = item;
      this.inputText = '';
      this.$emit('item-selected', item);
    },
  },

};
</script>


<style lang="css">

.suggestion-list{
  max-height: 200px;
}

</style>
