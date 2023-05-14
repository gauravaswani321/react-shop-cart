import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './components/shop/Shop';
import Cart from './components/cart/Cart';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar/>
      <div className='container mx-auto'>
          <Routes>
            <Route path='/' element={<Shop />}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route/>
          </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;