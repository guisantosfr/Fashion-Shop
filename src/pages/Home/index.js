import { useEffect } from 'react';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import NavBar from '../../components/NavBar';
import Banner from '../../components/Banner';

/*
import Section from '../../components/Section';
import Footer from '../../components/Footer';
*/

function Home() {
  useEffect(() => {
    // recupera o produtos pela api usando fetch
  }, []);

  return (
    <div className="container">
      <Header />
      <SearchBar />
      <NavBar />
      <Banner />
      {/*<Section titulo='Ofertas' />
      <Section titulo='Feminino' />
      <Section titulo='Masculino' />
      <Footer /> */}
    </div>
  );
}
export default Home;
