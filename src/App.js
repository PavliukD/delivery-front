import { Route, Routes } from 'react-router';
import {Header} from './components/header'
import {Shop} from './pages/shop'
import {ShoppingCart} from './pages/shoppingCart'
import {useDispatch} from "react-redux"
import { useEffect } from "react"
import {fetchProducts} from './redux/operations/operations'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  })

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
