import { styled } from 'styled-components';

export const PaymentOptionContainer = styled.div`
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

export const OptionContainer = styled.div`
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

export const PaymentOptionFooter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  button {
    margin-top: 10px;
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

export const OptionsList = styled.div`
  margin-bottom: 20px;

  .option {
    margin-bottom: 10px;
    background: unset;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;

    div:last-child {
      margin: unset;
    }
  }
`;

export const VoucherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-top: 1px solid black;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    p:first-child {
      font-weight: bold;
      font-size: 20px;
    }

    p:last-child {
      font-size: 12px;
      cursor: pointer;
      text-decoration: underline;
    }
  }

  div:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 15px;
    gap: 5px;

    @media screen and (max-width: 800px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;

      button {
        width: 100% !important;
        min-width: unset;
      }
    }

    input {
      width: 100%;
      padding: 15px;
      border-radius: 10px;
      border: 1px solid black;
      flex-basis: 80%;
    }

    button {
      width: 20%;
      min-width: unset;
    }
  }
`;
