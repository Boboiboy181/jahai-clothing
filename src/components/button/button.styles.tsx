import styled from 'styled-components';
import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #1534a5;
  color: white;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: white;
    color: #1534a5;
    border: 1px solid #1534a5;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    border: 1px solid #4285f4;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: #1534a5;
    color: white;
    border: none;
  }
`;

export const ButtonSpinContainer = styled(SpinnerContainer)`
  height: 30px;
  width: 30px;
`;
