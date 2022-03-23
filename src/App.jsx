import './App.css';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner.js';
import NavBar from './components/NavBar/NavBarExtra.js';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailContainer.js';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Cart from './components/Cart/Cart';


function App() {

  return(  
    <div className='App'>
      <Router>
       <NavBar/>
        <Routes>
          
          <Route path='/' element={<ItemListConteiner/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path={'/categoria/:categoriaID'} element={<ItemListConteiner />} />
          <Route path={'/detalle/:detalleID'} element={<ItemDetailContainer />} />
        </Routes>
      </Router>
    </div>
    )
}

export default App;
