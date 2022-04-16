import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Products from './components/products';
import Add from './components/add';
import Buy from './components/buy';
import Edit from './components/edit';
import Cart from './components/cart';


function App() {
  
  return (
    <>
      <Routes>
        <Route exact path="/" element={[<Navbar/>,<Products/>]}/>
        <Route exact path="/home" element={[<Navbar/>,<Products/>]}/>
        <Route exact path="/add" element={[<Navbar/>,<Add/>]}/>
        <Route exact path="/products/:id" element={[<Navbar/>,<Buy/>]}/>
        <Route exact path="/edit/:id" element={[<Navbar/>,<Edit/>]}/>
        <Route exact path="/items" element={[<Navbar/>,<Cart/>]}/>
      </Routes>
    </>
  );
}

export default App;
