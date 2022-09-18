import { Link } from 'react-router-dom';

import './styles.css';

function NavBar() {
  return (
    <section className='navbar-container'>
      <ul>
        <li><Link to='/man'>MASCULINO</Link></li>
        <li><Link to='/woman'>FEMININO</Link></li>
      </ul>
    </section>
  );
}

export default NavBar;