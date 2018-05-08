import { storiesOf } from '@storybook/vue';
import Button from '.';

storiesOf('Atom - Button', module)
  .add('default', () => ({
    components: { Button },
    template: '<Button>rounded</Button>'
  }))
  .add('link', () => ({
    components: { Button },
    template: '<Button link="http://google.com">rounded</Button>'
  }));
