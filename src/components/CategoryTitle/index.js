import './styles.css';

function CategoryTitle({ option }) {
  return (
    <div className='category-title'>
      <div className='category-title-center'>
        <h2>DESTAQUES MODA {option === 'man' ? 'MASCULINA' : 'FEMININA'}</h2>
      </div>
    </div>
  );
}

export default CategoryTitle;