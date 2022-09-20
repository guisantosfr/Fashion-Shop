import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Select from 'react-select';

import { addItem } from '../../redux/cartSlice';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import productsList from '../../products';

import './styles.css';

function Product() {
  const [qtdProduto, setQtdProduto] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [preco, setPreco] = useState(0);
  const [produtoData, setProdutoData] = useState({});
  const [opcoesTamanho, setOpcoesTamanho] = useState([]);
  const [checkSize, setCheckSize] = useState(true);

  const dispatch = useDispatch();
  let { idProduct } = useParams();

  useEffect(() => {
    const foundProduct = productsList.find(item => item.id === idProduct);
    console.log(foundProduct);

    setPreco(Number(foundProduct.value) * 100);

    const sizeOptions = foundProduct.sizes.map((tamanho) => (
      {
        value: tamanho,
        label: tamanho
      }
    ));
    setOpcoesTamanho(sizeOptions);
    setProdutoData(foundProduct);
  }, [idProduct]);

  const somaPrecoComEleMesmo = () => {
    let soma = Number(preco + Number(produtoData.value) * 100);
    setPreco(soma);
  }

  const subtraiPrecoComEleMesmo = () => {
    let sub = Number(preco - (Number(produtoData.value) * 100));
    setPreco(sub);
  }

  const incrementarQtd = () => {
    setQtdProduto((prevQtd) => prevQtd + 1);
    somaPrecoComEleMesmo();
  }

  const decrementarQtd = () => {
    if (qtdProduto <= 1) return;
    setQtdProduto((prevQtd) => prevQtd - 1);
    subtraiPrecoComEleMesmo();
  }

  const addItemCarrinho = () => {
    if (selectedOption !== null) {
      dispatch(addItem(
        {
          id: produtoData.id,
          img: produtoData.img[0],
          name: produtoData.name,
          tamanho: selectedOption,
          value: preco,
          qtd: qtdProduto
        }
      ));
      alert("Produto adicionado ao Carrinho");
    } else {
      setCheckSize(false);
    }
  }

  return (
    <>
      <Header />
      <div className="product-container">
        <div className='product-center'>
          <div className='product-img'>
            <img src={produtoData.img} alt={produtoData.description} />
          </div>

          <div className='product-info'>
            <div className='product-title'>
              <h1>{!produtoData ? 'loading...' : produtoData.name}</h1>
            </div>

            <div className='product-description'>
              <p>{produtoData.description}</p>
            </div>

            <div className='product-sizes'>
              <p>Tamanho: </p>

              <Select
                className="size-select"
                options={opcoesTamanho}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
              />

              <p>{!checkSize ? <span className="alert">Escolha um tamanho</span> : ''}</p>
            </div>

            <div className='product-price'>
              <span>R$ {(preco / 100).toFixed(2)}</span>
            </div>

            <div className='product-buttons'>
              <div className='pb-left'>
                <div className='pb-btn'>
                  <input type='button' value='-' onClick={decrementarQtd} />
                </div>

                <div className='pb-display'>
                  <span>{qtdProduto}</span>
                </div>

                <div className='pb-btn'>
                  {produtoData && <input type='button' value='+' onClick={incrementarQtd} />}
                </div>
              </div>

              <div className='pb-right'>
                <input type='button' value='Adicionar ao Carrinho' onClick={() => addItemCarrinho()} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Product;

