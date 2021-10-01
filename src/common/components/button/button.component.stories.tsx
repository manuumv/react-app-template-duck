import { Meta } from '@storybook/react';
import * as React from 'react';
import { ButtonComponent, Props } from './button.component';

const meta: Meta = {
  component: ButtonComponent,
  title: 'Components/Common',
  parameters: {
    layout: 'centered',
  },
};

export const Button: React.VFC<Props> = (props) => <ButtonComponent {...props} />;

export default meta;
