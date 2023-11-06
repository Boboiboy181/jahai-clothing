import styled from 'styled-components';

export const PaymentContainer = styled.div`
  display: flex;
  border-top: 2px solid black;
  justify-content: center;
  flex-direction: row;
  gap: 40px;
  margin-bottom: 50px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 0;
  }
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

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 20px;
  }
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

export const TypeOfAddress = styled.div`
  display: flex;
  justify-content: space-around;
  p {
    font-weight: bold;
  }

  div {
    display: flex;
    gap: 20px;

    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`;

export const SetDefault = styled.div`
  display: flex;
  align-items: center;
  margin-left: 55px;
  margin-top: 10px;

  @media screen and (max-width: 800px) {
    margin-left: 0; 
  }

  p {
    font-weight: 300;
  }

  input[type='checkbox'] {
    background-color: #fff;
    margin: 0;
    width: 33px;
    height: 33px;
    appearance: none;
    transform: translateY(-0.075em);
    border: 1px solid black;
    cursor: pointer;
    display: grid;
    place-content: center;
    margin-right: 15px;
  }

  input[type='checkbox']::before {
    content: '';
    display: block;
    background-color: #1534a5;
    width: 22px;
    height: 22px;
    transform: scale(0);
  }

  input[type='checkbox']:checked::before {
    transform: scale(1);
  }
`;
