import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

import '../styles/components/Checkout.css';

export const Checkout = () => {
  const { state: { cart },addToCart, removeFromCart } = useContext(AppContext)

  // const handleAddToCart = product = () => {
  //   addToCart(product)
  // }

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
        {cart.lenght > 0 ? <h3>Lista de pedidos: </h3> : <h3>Sin pedidos en la cesta:</h3> }
        {cart.map(item => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={handleRemove(item)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
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
