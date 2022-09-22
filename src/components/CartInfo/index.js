import './styles.css';

function CartInfo({ total }) {
  return (
    <div className="cartinfo-container">
      <h3 className="cartinfo-title">Dados da compra</h3>

      <div className='cartinfo-data'>
        <h4>Total</h4>
        <span>{(total / 100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
      </div>

      <div>
        <input type='button' value='FECHAR COMPRA' />
      </div>
    </div>
  );
}

export default CartInfo;