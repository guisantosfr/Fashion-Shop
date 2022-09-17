import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
  return (
    <header className="header-container">
      <Link className='link' to="/">FASHION-SHOP</Link>

      <nav>
        <ul>
          <li><Link className='option' to="/registrar">Cadastrar</Link></li>
          <li><Link className='option' to="/login">Entrar</Link></li>
          <li><Link className='option' to="/carrinho">Carrinho</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;