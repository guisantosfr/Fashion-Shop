import BannerImage from '../BannerImage';

import './styles.css';

import products from '../../products';

function Banner() {
  return (
    <section className='banner-container'>
      <div className='center'>
        <div className='left-image'>
          <BannerImage
            id={products[1].id}
            img={products[1].img}
            description={products[1].description}
            name={products[1].name}
          />
        </div>

        <div className='center-image'>
          <BannerImage
            id={products[4].id}
            img={products[4].img}
            description={products[4].description}
            name={products[4].name}
          />
        </div>

        <div className='right-image'>
          <BannerImage
            id={products[7].id}
            img={products[7].img}
            description={products[7].description}
            name={products[7].name}
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;