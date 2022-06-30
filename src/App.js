import { Route, Routes } from 'react-router';
import {Header} from './components/header'
import {Shop} from './pages/shop'
import {ShoppingCart} from './pages/shoppingCart'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/cart' element={<ShoppingCart/>} />
      </Routes>
    </>
  );
}

export default App;
