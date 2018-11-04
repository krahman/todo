import Vue from 'vue';
import VueRouter from 'vue-router';
import TodoPage from '@/components/todo/TodoPage';
import About from '@/components/about/About';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: TodoPage,
    },
    {
      path: '/about',
      component: About,
    },
  ],
});
