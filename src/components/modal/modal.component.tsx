import React from 'react';
import { ButtonContainer, ModalContainer, ModelContent } from './modal.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const Modal = ({
  children,
  isOpen,
  handleOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  handleOpen: () => void;
}) => {
  return (
    <ModalContainer $isOpen={isOpen}>
      <ModelContent>
        <h2>Change address</h2>
        {children}
        <ButtonContainer>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={handleOpen}
          >
            Return
          </Button>
          <Button onClick={handleOpen}>Confirm</Button>
        </ButtonContainer>
      </ModelContent>
    </ModalContainer>
  );
};

export default Modal;
