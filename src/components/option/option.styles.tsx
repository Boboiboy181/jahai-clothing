import styled from 'styled-components';

type OptionProps = {
  $option?: boolean;
};

export const OptionContainer = styled.div<OptionProps>`
  border-radius: 16px;
  ${({ $option }) => $option && { border: '2px solid black' }};
  background: linear-gradient(
    to right,
    rgba(21, 52, 165, 0.5),
    rgb(199, 213, 234, 0.5)
  );
  padding: 14px 14px 11px 14px;

  p {
    margin: unset;
    font-weight: 300;
  }
`;

export const CheckContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: fit-content;

  input[type='checkbox'] {
    background-color: #fff;
    margin: 0;
    width: 33px;
    height: 33px;
    border-radius: 50px;
    appearance: none;
    transform: translateY(-0.075em);
    border: 1px solid black;
    cursor: pointer;
    display: grid;
    place-content: center;
  }

  input[type='checkbox']::before {
    content: '';
    display: block;
    background-color: #1534a5;
    width: 22px;
    height: 22px;
    border-radius: 50px;
    transform: scale(0);
  }

  input[type='checkbox']:checked::before {
    transform: scale(1);
  }

  p {
    margin-left: 18px;
  }
`;

export const OptionDes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 7px;
  margin-left: 52px;
  flex-direction: column;
  align-items: flex-start;

  p {
    margin: unset;
  }
`;
