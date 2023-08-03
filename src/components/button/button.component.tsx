import React, { ButtonHTMLAttributes } from 'react';
import {
  BaseButton,
  ButtonSpinContainer,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles';

export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inverted',
}

export type ButtonProps = {
  children?: React.ReactNode;
  isLoading?: boolean;
  buttonType?: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonType =
  | typeof BaseButton
  | typeof GoogleSignInButton
  | typeof InvertedButton;

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): ButtonType =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  })[buttonType];

const Button = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}: ButtonProps) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinContainer /> : children}
    </CustomButton>
  );
};

export default Button;
