import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
//import CartWidget from './components/CartWidget';




function App() {
  return (
    <><NavBar></NavBar><ItemListContainer greeting='¿Cómo estás?'></ItemListContainer>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ItemList></ItemList>
        <p>
          Página en construcción.
        </p>
        <p>
          Pronto podrás comprar vinos, espumantes y regalos aquí
        </p>
       
      </header>
    </div></>
   )
}

export default App
