import Todo from '@/components/todo/TodoPage';
import TodoForm from '@/components/todo/TodoForm';
import TodoList from '@/components/todo/TodoList';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import { shallow } from 'avoriaz';
import Vuex from 'vuex';

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

  it('matches Todo snapshot', () => {
    const wrapper = shallowMount(Todo, {});
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should contains TodoForm', () => {
    const wrapper = shallow(Todo);
    expect(wrapper.contains(TodoForm)).toEqual(true);
  });

  it('matches TodoForm snapshot', () => {
    const wrapper = shallowMount(TodoForm, { store, localVue });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should contains TodoList', () => {
    const wrapper = shallow(Todo);
    expect(wrapper.contains(TodoList)).toEqual(true);
  });

  it('matches TodoList snapshot', () => {
    const wrapper = shallowMount(TodoList, { store, localVue });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
