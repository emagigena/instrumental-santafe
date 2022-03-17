import './App.css';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner.js';
import NavBar from './components/NavBar/NavBar.js';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailContainer.js';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import ItemDetail from './components/ItemDetail/ItemDetail';
//import { Checkout } from "./components/Checkout/Checkout";

function App() {

  return(  
    <div className='App'>
  
        <NavBar/>
       
          <ItemListConteiner/>
          <ItemDetailContainer/>
           
        
  
    </div>
    )
}

export default App;
