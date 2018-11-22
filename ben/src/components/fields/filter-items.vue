<template>
  <div>
    <input   v-model="inputText" v-on:input="onInputChange()"/>
    <div id ="list-container">
      <list-items :items="filteredItems"> </list-items>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SearchItem',
  data() {
    return {
      filteredItems: [],
      limit: 10,
    };
  },
  props: {
    items: {
      type: Array,
      default:() => [],
    },
  },

  methods: {
    onInputChange() {
      if (this.inputText === '' || this.inputText === undefined) {
        return;
      }
      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */
      this.filteredItems = this.items.filter(item =>
        item.name.toLowerCase().indexOf(this.inputText.toLowerCase()) > -1)
        .slice(0, this.limit);

      this.$emit("input-change", this.filteredItems);
    },
  },

};
</script>


<style lang="css">

.suggestion-list{
  max-height: 200px;
}

</style>
