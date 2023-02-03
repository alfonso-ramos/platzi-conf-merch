import { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { CheckoutItem } from '../components/CheckoutItem';
import { Link } from 'react-router-dom';

import '../styles/components/Checkout.css';

export const Checkout = () => {
  const { state:{ cart }, removeFromCart } = useContext(AppContext)

  const handleRemove = product => {
    removeFromCart(product)
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0)
    return sum;
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.lenght > 0 ? <h3>Lista de pedidos: </h3> : <h3>Sin pedidos en la cesta:</h3>}
        {cart.map((item) => (
          <CheckoutItem
            key={Math.random()}
            product={item}
            handleRemove={() => handleRemove(item)}
          />
        ))}
      </div>
      {cart.lenght > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar con el pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};
