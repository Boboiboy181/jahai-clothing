import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 500px) {
    font-size: 16px;
    padding: 14px 0 10px;
    min-height: unset;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 500px) {
    width: 23%;
  }
`;

export const RemoveButton = styled.button`
  padding-left: 12px;
  cursor: pointer;
  border: none;
  background-color: white;
  font-size: 1.2rem;

  @media screen and (max-width: 500px) {
    padding-left: 0;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
`;

export const Arrow = styled.button`
  cursor: pointer;
  border: none;
  background-color: white;
  font-size: 1.2rem;

  @media screen and (max-width: 500px) {
    padding-left: 0;
  }
`;

export const Value = styled.span`
  margin: 0 10px;
`;
