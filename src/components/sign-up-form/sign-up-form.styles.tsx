import styled from 'styled-components';
import Button from '../button/button.component';

export const SignUpContainer = styled.div`
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

export const ButtonStyles = styled(Button)`
  @media screen and (max-width: 950px) {
    width: 100%;
    margin: unset;
  }
`