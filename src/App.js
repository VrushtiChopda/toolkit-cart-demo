import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/cart' element={<Cart />} ></Route>
      </Routes>
    </>
  );
}

export default App;
