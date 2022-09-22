import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";

import CartInfo from "../../components/CartInfo";
import CartProduct from "../../components/CartProduct";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import './styles.css';

function Cart() {
  const cart = useSelector(state => state.cart);
  const [totalCartValue, setTotalCartValue] = useState(0);

  const valuesArray = cart.map((item) => item.value);
  const initialCartValue = 0;

  useEffect(() => {
    setTotalCartValue(valuesArray.reduce((previousValue, currentValue) => previousValue + currentValue, initialCartValue));
  }, [cart.length, valuesArray]);

  return (
    <>
      <Header />

      <div className="cart-container">
        <div className="cart-titles">
          <h1>CARRINHO</h1>
          <h3>{cart.length} Produto(s)</h3>
        </div>

        <div className='cart-main'>
          <div>
            {cart.map((item) => {
              return (
                <CartProduct key={item.id} id={item.id} name={item.name} img={item.img} size={item.tamanho} value={item.value} quant={item.qtd} />
              );
            })}
          </div>
          <div>
            <CartInfo total={totalCartValue.toFixed(2)} />
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Cart;