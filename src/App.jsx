import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/navegacion/NavBar'

function App() {
  
  return (

    <div className="App">
     <Router>
       <NavBar/>
     </Router>


    </div>
  );
}

export default App;
