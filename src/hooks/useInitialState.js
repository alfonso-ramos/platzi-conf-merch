import { useState } from 'react';
import initialState from '../../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [state.cart, payload]
    });
    console.log(state.cart);
    console.log(payload);
  };

  const removeToCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id)
    });
  };

  return {
    addToCart,
    removeToCart,
    state
  };
};

export default useInitialState;
