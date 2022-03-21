import './App.css';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner.js';
import NavBar from './components/NavBar/NavBarExtra.js';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailContainer.js';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


function App() {

  return(  
    <div className='App'>
      <Router>
       <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListConteiner/>}/>
          <Route path={'/categoria/:categoriaID'} element={<ItemListConteiner />} />
          <Route path={'/detalle/:detalleID'} element={<ItemDetailContainer />} />
          {/*<Route path='*' element={<Error404 />}/>}*/}
        </Routes>
      </Router>
    </div>
    )
}

export default App;
