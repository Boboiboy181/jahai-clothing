import styled from 'styled-components';

export const PaymentContainer = styled.div`
  display: flex;
  border-top: 2px solid black;
  justify-content: center;
  flex-direction: row;
  gap: 40px;
`;

export const PaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const PaymentAddress = styled.div`
  margin-top: 40px;
  border-radius: 16px;
  border: 1px solid black;
  padding: 20px 35px;

  h3 {
    margin: unset;
    font-size: 28px;
    text-decoration: underline;
  }

  .name {
    font-size: 20px;
    font-weight: bold;
  }

  .address {
    font-size: 18px;
    font-weight: 300;
  }
`;

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

export const DeliveryContainer = styled.div`
  margin-top: 30px;
  border-radius: 16px;
  border: 1px solid black;
  width: fit-content;
  padding: 20px 35px;

  h3 {
    margin: unset;
    font-size: 28px;
    text-decoration: underline;
  }
`;
