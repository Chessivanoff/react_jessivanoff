import logo from './logo.svg';
import './App.css';
import VinosListContainer from './components/VinosListContainer';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
import VinoDetailPage from './components/VinoDetailPage';
import { BrowserRouter } from 'react-router-dom';
//import CartWidget from './components/CartWidget';




function App() {
  return (

    <>
    
    <NavBar></NavBar>
    <VinosListContainer greeting='¿Cómo estás?'></VinosListContainer>

<BrowserRouter>
      <Route path ='/' element={<VinosListContainer></VinosListContainer>}></Route>
      <Route path ='/components/:listId' element={<VinosListContainer></VinosListContainer>}></Route>
      <Route path ='/components/:vinoId' element={<VinoDetailPage></VinoDetailPage>}></Route>
</BrowserRouter>


    
    </>
   );
}

export default App

