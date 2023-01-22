import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import { Link } from 'react-router-dom';

import '../styles/components/Header.css';

export const Header = () => {
  const {
    state: { cart }
  } = useContext(AppContext);

  return (
    <div className="Header">
      <Link to="/">
        <h1 className="Header-title">Platzi Conf Merch</h1>
      </Link>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
};
