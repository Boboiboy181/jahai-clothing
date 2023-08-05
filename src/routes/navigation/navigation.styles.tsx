import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { LinkHTMLAttributes } from 'react';

type NavLinksProps = LinkHTMLAttributes<HTMLAnchorElement>;

type NavigationContainerProps = {
  $fixed?: boolean;
};

const fixed = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: white;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  padding: 0 40px;
`;

export const NavigationContainer = styled.div<NavigationContainerProps>`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
  position: relative;
  ${({ $fixed }) => $fixed && fixed};

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px 20px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  width: 70px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 10px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const NavLinks = styled.div`
  flex: 1;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80px;
  }
`;

export const NavLink = styled(Link)<NavLinksProps>`
  padding: 10px 15px;
  cursor: pointer;
`;
