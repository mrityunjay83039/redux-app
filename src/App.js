import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
