import ProductBox from '../ProductBox';

import './styles.css';

import products from '../../products';

function Section({ titulo }) {
  return (
    <section className='section-container'>
      <div className='section-center'>
        <div className='section-title'>
          <span className='title'>{titulo}</span>
        </div>

        <div className='products-container'>

          <ProductBox img={products[0].img}
            title={products[0].name}
            preco={products[0].value}
            id={products[0].id} />

          <ProductBox img={products[1].img}
            title={products[1].name}
            preco={products[1].value}
            id={products[1].id} />

          <ProductBox img={products[2].img}
            title={products[2].name}
            preco={products[2].value}
            id={products[2].id} />

          <ProductBox img={products[3].img}
            title={products[3].name}
            preco={products[3].value}
            id={products[3].id} />

        </div>
      </div>
    </section>
  );
}

export default Section;