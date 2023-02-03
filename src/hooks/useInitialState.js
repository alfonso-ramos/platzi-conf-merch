import { useState } from 'react';
import initialState from '../../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    });
  };
  // console.log(state);
  // console.log(state.cart);
  // console.log(payload);
  // console.log(state.cart.length);

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id)
    });
  };

  return {
    addToCart,
    removeFromCart,
    state
  };
};

export default useInitialState;
