import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import SearchResults from "../../components/SearchResults";

import products from "../../products";

import './styles.css';

function Search() {
  let [searchParams, setSearchParams] = useSearchParams();
  let [filteredProducts, setFilteredProducts] = useState([]);

  let search = searchParams.get('search');
  console.log(setSearchParams);

  useEffect(() => {
    const newSearch = search.trim().toUpperCase();
    setFilteredProducts(products.filter(product => product.name.trim().toUpperCase().includes(newSearch)));
  }, [search]);

  console.log(filteredProducts);

  return (
    <div className="search-container">
      <Header />
      <SearchBar />

      <div className='results-container'>
        <div>
          <h3>Resultados</h3>
        </div>

        {
          filteredProducts.length > 0 ?
            <SearchResults dados={filteredProducts} /> :
            <span>Nenhum resultado encontrado</span>
        }

      </div>
    </div>
  );
}

export default Search;