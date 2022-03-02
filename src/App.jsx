import './App.css';
import NavBar from './components/navegacion/NavBar'
import ItemListContein from './components/ItemListContein';

function App() {
  
  return (

    <div className="App">
       <NavBar/>
     <ItemListContein Saludo="BIENVENIDOS AL CATÁLOGO ONLINE DE INSTRUMENTAL SANTA FE"/>

    </div>
  );
}

export default App;
