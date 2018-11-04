import Menu from '@/components/header/Menu';
import { shallowMount } from '@vue/test-utils';

describe('Menu.vue', () => {
  it('should contains two menu items', () => {
    const wrapper = shallowMount(Menu);
    expect(wrapper.findAll('el-menu-item').length).toEqual(2);
  });
});
