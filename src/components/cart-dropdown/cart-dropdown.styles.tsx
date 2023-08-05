import styled from 'styled-components';

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

  button {
    margin-top: auto;
  }

  @media screen and (max-width: 800px) {
    top: 65px;
    right: 20px;
    width: 200px;
    height: 300px;
    padding: 15px;
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

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;
