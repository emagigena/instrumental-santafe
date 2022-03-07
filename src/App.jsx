import './App.css';
import NavBar from './components/navegacion/NavBar'
import ItemListContein from './components/ItemListContein';
import ItemCount from './components/ItemCount';


function App() {
  
  return (

    <div className="App">
       <NavBar/>
     <ItemListContein Saludo="BIENVENIDOS AL CATÁLOGO ONLINE DE INSTRUMENTAL SANTA FE"/>
     <ItemCount stock={10} initial={1} onAdd/>
    </div>
  );
}

export default App;
