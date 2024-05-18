import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux'
import { store } from './redux/Store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/cart' element={<Cart />} ></Route>
        </Routes>
      </Provider>

    </>
  );
}

export default App;
