import React from 'react';
import { BtnAction, BtnSecondary } from './style';
import { Text } from '../Text';

interface IPropsButton {
  value: string;
  onClick?: () => void;
  classname?: string;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

export const ButtonAction: React.FC<IPropsButton> = ({
  value,
  onClick,
  classname,
  disabled,
  type,
}) => {
  return (
    <BtnAction
      type={type}
      onClick={onClick}
      className={classname}
      style={{ cursor: 'pointer' }}
      disabled={disabled}
    >
      <Text text={value} classname="btn-action-text" />
    </BtnAction>
  );
};

export const ButtonSecondary: React.FC<IPropsButton> = ({
  value,
  onClick,
  classname,
  disabled,
  type,
}) => {
  return (
    <BtnSecondary
      type={type}
      onClick={onClick}
      className={classname}
      style={{ cursor: 'pointer' }}
      disabled={disabled}
    >
      <Text text={value} classname="btn-action-text" />
    </BtnSecondary>
  );
};
