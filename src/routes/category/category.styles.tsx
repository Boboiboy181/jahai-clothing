import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 3rem;
  margin-bottom: 30px;
`;

export const CategoryTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 25px;
  text-align: center;
`;
