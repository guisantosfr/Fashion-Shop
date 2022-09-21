import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import Search from './pages/Search';

/*
import FemMasc from './pages/FemMasc';
import Cart from './pages/Cart';
*/

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='product/:idProduct' element={<Product />} />
        <Route path='results' element={<Search />} />
        {/*
        <Route path='man' element={<FemMasc opt='masculino' />} />
        <Route path='woman' element={<FemMasc opt='feminino' />} />
        <Route path='cart' element={<Cart />} /> */}
      </Routes>
    </div>
  );
}

export default App;
