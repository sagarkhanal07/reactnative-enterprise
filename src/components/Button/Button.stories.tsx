import { storiesOf } from '@storybook/react-native';

import { Button } from '.';

const Primary = () => <Button text="Default " />;
const Secondary = () => <Button type="transparent" text="Transparent" />;

storiesOf('Button', module)
  .add('Default', () => <Primary />)
  .add('Transparent', () => <Secondary />);
