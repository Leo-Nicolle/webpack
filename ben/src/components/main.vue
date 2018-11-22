<template>
  <div>
    <createItem></createItem>
    <listItem v-bind:items="allItems"></listItem>
  </div>
</template>

<script>
import CreateItemForm from './forms/create-item';
import ListItems from './views/list-items';
import { mapGetters } from 'vuex';

export default {
  name: 'Main',
  components: {
    createItem: CreateItemForm,
    listItem: ListItems,
  },
  computed: {
    ...mapGetters(['allItems']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
