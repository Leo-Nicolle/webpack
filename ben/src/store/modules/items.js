
// initial state
// shape: [{ id, quantity }]
const state = {
  items: [{name:"Titi"}],
  checkoutStatus: null
};

// getters
const getters = {
  allItems: state => {
        return state.items;
  },
};

// actions
const actions = {

};

// mutations
const mutations = {
  pushItem (state, item) {
    state.items.push(item)
  },
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}
