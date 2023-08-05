import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 380px;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 950px) {
    min-width: unset;
    text-align: center;
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 950px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
  }
`;
