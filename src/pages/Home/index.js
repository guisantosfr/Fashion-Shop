import { useEffect } from 'react';

import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import SearchBar from '../../components/SearchBar';
import Section from '../../components/Section';

function Home() {
  return (
    <div className="container">
      <Header />
      <SearchBar />
      <NavBar />
      <Banner />
      <Section titulo='Ofertas' />
      <Section titulo='Feminino' />
      <Section titulo='Masculino' />
      <Footer />
    </div>
  );
}
export default Home;
