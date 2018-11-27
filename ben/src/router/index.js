import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/main';
import Item from '@/components/item';
import ListItems from '@/components/views/list-items';

import store from '@/store';

import UpdateItem from '@/components/forms/update-item';


Vue.use(Router);

export default new Router({
  routes: [
    { path: '/item/:id',
      component: Item,
      props: (route) => {
        const item = store.getters.itemById(route.params.id);
        return { item };
      }
    },
    { path: '/item/:id/edit',
      component: UpdateItem,
      props: (route) => {
        const item = Object.assign({}, store.getters.itemById(route.params.id));
        return { item, mode: "update" };
      }
    },
    { path: '/items/new',
      component: UpdateItem,
      props: () => {
        return { mode: 'add' };
      }
    },
    { path: '/items',
      component: ListItems,
      props: () => {
        return { items: store.getters.allItems };
      }
    },
  ],
});
