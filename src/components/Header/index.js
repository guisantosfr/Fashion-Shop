import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
  return (
    <header className="header-container">
      <Link className='link' to="/">FASHION-SHOP</Link>

      <nav>
        <ul>
          <li><Link className='option' to="/register">Cadastrar</Link></li>
          <li><Link className='option' to="/login">Entrar</Link></li>
          <li><Link className='option' to="/cart">Carrinho</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;