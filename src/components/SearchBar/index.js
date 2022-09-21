import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';

import './styles.css';

function SearchBar() {

  const [pesquisa, setPesquisa] = useState('');
  let navigate = useNavigate();

  const onChanchefunc = (e) => {
    setPesquisa(e.target.value);
  }

  const handleInput = (e) => {
    e.preventDefault();
    const search = pesquisa;
    navigate(`../results?search=${search}`, { replace: true });
  }

  return (
    <section className="searchbar-container">
      <form className="form">
        <div className='label'>
          <label>Pesquisar: </label>
        </div>
        <div className='input'>
          <div>
            <input type='text' className='input-field' onChange={onChanchefunc} value={pesquisa} />
          </div>
          <div>
            <button className="search-button" onClick={handleInput}>
              <SearchIcon />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default SearchBar;