import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 950px) {
    display: grid;
    grid-template-columns: 1fr;
    width: 90%;
    grid-row-gap: 30px;
    text-align: center;
  }

  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;
