import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  top: 70px;
  right: 10px;
  z-index: 5;
  border: 1px solid #000;
  border-radius: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);

  button {
    margin-top: 1rem;
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
