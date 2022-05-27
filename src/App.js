import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Products from './components/Products';
import './App.css';
import Productsinfo from './components/Productsinfo';
import Addproduct from './components/Addproduct';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/Productsinfo/:id" element={<Productsinfo/>}></Route>
          <Route path="/addproduct" element={<Addproduct/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
