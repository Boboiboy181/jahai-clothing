import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    overflow: hidden;
    border-radius: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    button {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;

      &:hover {
        img {
          opacity: unset;
        }

        buton {
          opacity: unset;
        }
      }
    }
  }

  @media screen and (max-width: 450px) {
    width: 80vw;
  }
`;

export const ProductCartFooter = styled.div`
  width: 98%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;  
  margin-top: .5rem;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;
