import './App.css';
import ItemListContein from './components/body/ItemList/ItemListContein.js';
import NavBar from './components/navegacion/NavBar.js';
import Footer from './components/body/Footer.js';
import ItemDetailContein from './components/body/ItemDetail/ItemDetailContein';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {
  
  return (

    <div className="App">
      <Router>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContein/>}/>
            <Route path={'/detalle/:id'} element={<ItemDetailContein/>}/>
          </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App;
