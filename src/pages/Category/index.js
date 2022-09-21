import { useEffect, useState } from "react";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CategoryTitle from "../../components/CategoryTitle";
import SearchResults from "../../components/SearchResults";

import productsList from '../../products';

import './styles.css';

function Category({ option }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (option === 'man') {
      setFilteredProducts(productsList.filter(product => product.sex === 'man'));
    } else if (option === 'woman') {
      setFilteredProducts(productsList.filter(product => product.sex === 'woman'));
    }
  }, [option]);

  return (
    <div className="category-container">
      <Header />

      <CategoryTitle option={option} />
      <SearchResults dados={filteredProducts} />

      <Footer />
    </div>
  );
}
export default Category;