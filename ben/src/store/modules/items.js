import utils from "@/utils"

// initial state
const state = {
  items: [utils.getEmptyItem()],
  checkoutStatus: null,
};

// getters
const getters = {
  allItems: state => state.items,
  itemById: state => id =>  state.items.find(item => item.id === id),
  // emptyItem: state => utils.getEmptyItem(),
};

// actions
const actions = {

};

// mutations
const mutations = {

  pushItem(state, item) {
    state.items.push(item);
  },

  popItem(state, id) {
    state.items = state.items.filter(item => item.id !== id);
  },

  updateItem(state, id, data) {
    const itemIndex = state.items.findIndex(item => item.id === id);
    if (itemIndex < 0) return;
    Object.assign(state.items[itemIndex], data);
    computeTime(state.items[itemIndex]);
  },

};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
