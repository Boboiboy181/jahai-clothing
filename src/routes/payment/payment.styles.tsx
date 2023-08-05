import styled from 'styled-components';

export const PaymentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-top: 0;
  }

  @media screen and (max-width: 800px) {
    h1 {
      margin-bottom: 0;
    }

    margin-top: 40px;
  }
`;
