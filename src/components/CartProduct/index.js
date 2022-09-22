import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/cartSlice';

import DeleteIcon from '@mui/icons-material/Delete';

import './styles.css';

function CartProduct({ id, img, name, size, value, quant }) {
  const dispatch = useDispatch();

  const excluirItemCarrinho = () => {
    dispatch(removeItem(id))
  }

  return (
    <div className='cart-product-container'>
      <img src={img} alt={name} className='cart-product-img' />

      <div className="cart-product-data">
        <p className=''>Produto: <br /><span>{name}</span></p>
        <p>ID: <span>{id}</span></p>
        <p>Tamanho: <span>{size.value}</span></p>
        <p>Quantidade: <span>{quant}</span></p>
        <span className="cart-product-value">R$ {(value / 100).toFixed(2)}</span>

        <div className="delete-item-cart-button">
          <button
            className='delete-item-cart-button'
            type='button'
            onClick={() => excluirItemCarrinho()}><DeleteIcon fontSize='large' /></button>
        </div>

      </div>
    </div>
  );
}

export default CartProduct;