import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -16px;
  left: 5px;
  font-size: 12px;
  color: ${mainColor};
`;

type FormInputLabelProps = {
  $shrink?: boolean;
};

export const FormInputLabel = styled.label<FormInputLabelProps>`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 19px;
  transition: 300ms ease all;
  ${({ $shrink }) => $shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 15px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 10px;
  border: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }

  @media screen and (max-width: 800px) {
    margin: 15px 0;
    font-size: 14px;
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 25px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }

  @media screen and (max-width: 800px) {
    margin: 30px 0;
  }
`;
