
// initial state
// shape: [{ id, quantity }]
const state = {
  items: [{ name: 'Titi', id: '123', subItems: [] }],
  checkoutStatus: null,
};

// getters
const getters = {
  allItems: state => state.items,
  itemById: (state, id) => state.items.find(item => item.id === id),

};

// actions
const actions = {

};

// mutations
const mutations = {
  pushItem(state, item) {
    state.items.push(item);
  },
  updateItem(state, id, data) {
    const itemIndex = state.items.findIndex(item => item.id === id);
    if (itemIndex < 0) return;
    Object.assign(state.items[itemIndex], data);
  },
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
