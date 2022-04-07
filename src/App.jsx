import './App.css';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner.js';
import NavBar from './components/NavBar/NavBarExtra.js';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailContainer.js';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartContextProvider from './components/Context/CartContext';
import Inicio from './components/Inicio/InicioContainer';
import UserContextProvider from './components/Context/UserContext';
import LoginUser from './components/User/LoginUser'
import InfoUser from './components/User/InfoUser'



function App() {

  return(  
    <div className='App'>
      {
      <CartContextProvider>
        <UserContextProvider>
        <Router>
          <NavBar/>
            <Routes>
               {<Route path='/' element={<Inicio/>}/>}
              {<Route path='/cart' element={<Cart/>}/>}
              {<Route path={'/categoria/:categoriaID'} element={<ItemListConteiner />} />}
              {<Route path={'/detalle/:detalleID'} element={<ItemDetailContainer />} />}
              { <Route path={'/login'} element={<LoginUser/>}/> }
              { <Route path={'/infouser'} element={<InfoUser/>}/> }
            </Routes>
          </Router>
        </UserContextProvider>
        </CartContextProvider>
     }
    </div>
    )
}

export default App;
