import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/components/App';
import Menu from '@/components/header/Menu';
import { shallow } from 'avoriaz';

describe('App.vue', () => {
  beforeEach(() => {
    Vue.use(VueRouter);
  });

  it('should called App', () => {
    const Constructor = Vue.extend(App);
    expect(Constructor.options.name).toEqual('App');
  });

  it('should declares Menu component', () => {
    const Constructor = Vue.extend(App);
    expect(Constructor.options.components.Menu).toEqual(Menu);
  });

  it('should contains Menu', () => {
    const wrapped = shallow(App);
    expect(wrapped.contains(Menu)).toEqual(true);
  });
});
