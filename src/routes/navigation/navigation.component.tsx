import { Fragment, useState } from 'react';
import { Outlet } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrwnLogo } from '../../assets/jahai.svg';

import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from './navigation.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  const [isFixed, setIsFixed] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  });

  return (
    <Fragment>
      <NavigationContainer $fixed={isFixed}>
        <LogoContainer $fixed={isFixed} to="/">
          <CrwnLogo className="logo" />
          <p>JAHAI</p>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink to="/" as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
