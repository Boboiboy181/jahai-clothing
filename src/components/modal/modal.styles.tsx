import styled from 'styled-components';

type ModalProps = {
  $isOpen: boolean;
};

export const ModalContainer = styled.div<ModalProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #0c174256;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  ${({ $isOpen }) => ($isOpen ? 'display: flex' : 'display: none')};
`;

export const ModelContent = styled.div`
  position: relative;
  margin: auto;
  padding: 43px 100px 54px;
  background-color: white;
  border-radius: 16px;
  width: 50%;

  h2 {
    text-decoration: underline;
    font-size: 28px;
  }

  @media screen and (max-width: 1400px) {
    width: 50%;
    padding: 25px 50px 45px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 25px;
  margin-top: 32px;
`;
