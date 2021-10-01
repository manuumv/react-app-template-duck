import * as React from 'react';
import { Button } from './button.component.styles';

export interface Props {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonComponent: React.VFC<Props> = (props) => <Button onClick={props.onClick}>{props.label}</Button>;

ButtonComponent.defaultProps = {
  label: '',
};
