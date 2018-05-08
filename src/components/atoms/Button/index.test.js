import { mount } from '@vue/test-utils';
import Button from '.';

describe('Atom - Button', () => {
  test('it renders', () => {
    const wrapper = mount(Button);
    expect(wrapper.html()).toContain('<button>Button</button>');
  });
});
