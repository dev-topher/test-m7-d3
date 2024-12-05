// tests/unit/views/ContactView.spec.js
import { shallowMount } from '@vue/test-utils';
import ContactView from '@/views/ContactView.vue';

describe('ContactView.vue', () => {
  it('renders the Contact page', () => {
    const wrapper = shallowMount(ContactView);
    expect(wrapper.text()).toContain('Contact Us');
    expect(wrapper.text()).toContain('This is the Contact page.');
  });

  it('matches the snapshot', () => {
    const wrapper = shallowMount(ContactView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
