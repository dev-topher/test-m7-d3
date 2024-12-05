// tests/unit/views/HomeView.spec.js
import { shallowMount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';

describe('HomeView.vue', () => {
  it('matches the snapshot', () => {
    const wrapper = shallowMount(HomeView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
