import TodoForm from '@/components/todo/TodoForm';
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Todo.vue', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        todos: ['', ''],
        todo: {
          activity: '',
          completed: false,
        },
      },
    });
  });

  it('should contains one el-input', () => {
    const wrapper = shallowMount(TodoForm, { store, localVue });
    expect(wrapper.findAll('el-input').length)
      .toEqual(1);
  });

  it('should contains one el-button', () => {
    const wrapper = shallowMount(TodoForm, { store, localVue });
    expect(wrapper.findAll('el-button').length)
      .toEqual(1);
  });

  it('should contains Add text', () => {
    const wrapper = shallowMount(TodoForm, { store, localVue });
    expect(wrapper.find('el-button')
      .text())
      .toEqual('Add');
  });
});
