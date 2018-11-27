import utils from "@/utils"
import socket from "@/socket"

// initial state
const state = {
  items: [utils.getEmptyItem()],
  checkoutStatus: null,
};

// getters
const getters = {
  allItems: state => state.items,
  itemById: state => id =>  state.items.find(item => item.id === id),
};

// actions
const actions = {
  pullItemsFromServer(context){
    socket.requestDatabase(context.user)
    .then(({items}) => {
      context.commit("setItems", items);
    })
    .catch(error => console.error(error));
  }
};

// mutations
const mutations = {

  setItems(state, items) {
    state.items = items;
  },

  pushItem(state, item) {
    state.items.push(item);
    socket.pushItem(state.user, item);
  },

  popItem(state, id) {
    state.items = state.items.filter(item => item.id !== id);
    socket.popItem(state.user, item);
  },

  updateItem(state, id, data) {
    const itemIndex = state.items.findIndex(item => item.id === id);
    if (itemIndex < 0) return;
    Object.assign(state.items[itemIndex], data);
    // computeTime(state.items[itemIndex]);
    socket.pushItem(state.user, item);
  },

};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
