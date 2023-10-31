import { styled } from 'styled-components';

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 16px;
  padding: 20px;
  margin-top: 40px;
  flex-basis: 35%;

  @media screen and (max-width: 800px) {
    margin-top: 25px;
    height: fit-content;
  }
`;

export const FormContainer = styled.form`
  width: 100%;

  p > span {
    font-weight: bold;
  }

  @media screen and (max-width: 800px) {
    min-width: unset;
  }
  
  button {
    width: 100%;
  }
`;

export const CartElementContainer = styled.div`
  border: 1px solid gray;
  margin: 1rem 0 1.5rem 0;
  padding: 1rem;
  border-radius: 10px;
`;

export const PaymentFormFooter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  button {
    /* margin-top: 20px; */
    width: 100%;
  }

  h2 {
    margin: unset;
  }

  p {
    margin: 10px 0;
  }

  .working-days {
    margin: unset;
    margin-bottom: 10px;
  }
`;

export const OrderSummary = styled.div`
  border-top: 1px solid gray;
  width: 100%;
  border-bottom: 1px solid gray;

  p {
    margin: unset;
  }

  .summary {
    margin-top: 20px;
    font-size: 24px;
    font-weight: bold;
  }

  .total {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }

  .shipping {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
`;
