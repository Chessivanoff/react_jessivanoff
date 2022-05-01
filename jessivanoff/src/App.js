import logo from './logo.svg';
import './App.css';
import VinosListContainer from './components/VinosListContainer';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
//import CartWidget from './components/CartWidget';




function App() {
  return (
    <><NavBar/><VinosListContainer greeting='¿Cómo estás?'/>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Página en construcción.
        </p>
        <p>
          Pronto podrás comprar vinos, espumantes y regalos aquí
        </p>

        <ItemList/>

       
      </header>
    </div></>
   )
}

export default App
