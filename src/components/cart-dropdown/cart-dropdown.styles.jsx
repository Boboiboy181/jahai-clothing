import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  border: 1px solid #000;
  border-radius: 2px;

  ::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 9px solid #fff;
    top: -10px;
    right: 12px;
    z-index: 1;
  }

  ::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    border-bottom: 11px solid #000;
    top: -11px;
    right: 10px;
  }

  button {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
