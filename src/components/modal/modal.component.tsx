import React, { FormEvent } from 'react';
import { ButtonContainer, ModalContainer, ModelContent } from './modal.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const Modal = ({
  children,
  isOpen,
  isLoading,
  modalTitle,
  handleOpen,
  handleConfirm,
}: {
  isLoading?: boolean;
  modalTitle: string;
  children: React.ReactNode;
  isOpen: boolean;
  handleOpen: () => void;
  handleConfirm?: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}) => {
  return (
    <ModalContainer $isOpen={isOpen}>
      <ModelContent>
        <h2>{modalTitle}</h2>
        {children}
        <ButtonContainer>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={handleOpen}
          >
            Return
          </Button>
          <form onSubmit={handleConfirm}>
            <Button isLoading={isLoading}>Confirm</Button>
          </form>
        </ButtonContainer>
      </ModelContent>
    </ModalContainer>
  );
};

export default Modal;
