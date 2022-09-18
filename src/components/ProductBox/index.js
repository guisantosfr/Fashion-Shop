import { Link } from 'react-router-dom';

import './styles.css';

function BoxProduct({ img, title, preco, id }) {
  return (
    <div className="product-container">
      <Link to={`/product/${id}`} >
        <div className='image-container'>
          <img src={img} alt={title} />
        </div>

        <div>
          <h1>{title}</h1>
          <span>{preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
        </div>
      </Link>
    </div>
  );
}

export default BoxProduct;