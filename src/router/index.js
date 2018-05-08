import Vue from 'vue';
import Router from 'vue-router';
import { Button } from 'components';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Button',
      component: Button,
    },
  ],
});
