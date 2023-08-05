import { styled } from 'styled-components';

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    margin-top: 25px;
    height: fit-content;
  }
`;

export const FormContainer = styled.form`
  min-width: 500px;

  p > span {
    font-weight: bold;
  }

  @media screen and (max-width: 800px) {
    min-width: unset;
  }
`;

export const CartElementContainer = styled.div`
  border-bottom: 1px solid grey;
  margin: 1rem 0 1.5rem 0;
  padding: 1rem 0;
`;

export const PaymentFormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
