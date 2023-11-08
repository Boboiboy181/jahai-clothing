import styled from 'styled-components';

export const ThankYouContainer = styled.div`
  border-radius: 33px;
  border: 1px solid black;
  position: relative;
  text-align: center;
  width: fit-content;
  padding: 30px;
  margin: auto;
  top: 50%;
  transform: translateY(25%);
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);

  p {
    margin: unset;
  }

  div {
    margin-top: 30px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Line = styled.div`
  width: 2px;
  height: 50px;
  background-color: black;
  margin: unset !important;
`;

