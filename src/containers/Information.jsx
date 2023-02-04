import { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Information.css';

export const Information = () => {
  const { state: { cart }, addToBuyer } = useContext(AppContext)
  const form = useRef(null)
  const navigate = useNavigate()

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'addres': formData.get('addres'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }
    addToBuyer(buyer);
    navigate('/checkout/payment')
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo electronico" name="email" />
            <input type="text" placeholder="Direccion de envio" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="No. de telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout"></Link>
            Regresar
          </div>
          <div className="Information-next">
            <button type='button' onClick={handleSubmit}>
              Pagar
            </button>
            {/* <Link to="/checkout/payment">
              Pagar
            </Link> */}
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido</h3>
        {cart.map(item => [
          <div className="Information-item" key={Math.random()}>
            <div className="Infomation-element">
              <h4>{item.title} <span>${item.price}</span></h4>
              <hr />
            </div>
          </div>
        ])}
      </div>
    </div>
  );
};
