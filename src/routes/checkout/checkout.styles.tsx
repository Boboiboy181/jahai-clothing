import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 950px) {
    width: 100%;
    min-height: 85vh;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 500px) {
    width: 8%;
    font-size: 12px;

    &:last-child {
      width: 5%;
      margin-right: 25px;
    }
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  font-size: 36px;
`;

export const GotoPayment = styled(Link)`
  margin-top: 30px;
  font-size: 36px;
`;

export const EmptyMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  height: 50svh;
`;

export const CheckoutFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 100px;

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
    flex: 1;

    ${Total} {
      margin-left: auto;
    }

    ${GotoPayment} {
      width: 100%;

      button {
        width: 100%;
      }
    }
  }
`;
