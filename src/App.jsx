import './App.css';
import ItemListContein from './components/body/ItemList/ItemListContein.js';
import NavBar from './components/navegacion/NavBar.js';
//import Footer from './components/body/Footer.js';
//import ItemDetailContein from './components/body/ItemDetail/ItemDetailContein';
//import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import Item from './components/body/ItemList/Item/Item';
import ItemList from './components/body/ItemList/ItemList';

function App() {
  
    const onAdd = () =>{
    console.log("agregue al carrito")
    }
    return(
    <div>
      <NavBar/>
      <ItemListContein />
      <ItemList/>
      <Item onAdd={onAdd}/>

    </div>
    )
  //  <BrowserRouter className="App">
  //      <NavBar/>
  //        <Routes>
  //        <Route path='/' component={<ItemListContein />} />
  //        <Route path='/categoria/:categoriaID' component={<ItemListContein />} />
  //        <Route path={'/detalle/:detalleID'} component={<ItemDetailContein />} />
  //        </Routes>
  //  </BrowserRouter>

}

export default App;
