import logo from './logo.svg';
import './App.css';
import VinosListContainer from './components/VinosListContainer';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
import VinoDetailPage from './components/VinoDetailPage';
//import CartWidget from './components/CartWidget';




function App() {
  return (

    <>
    

    
    <NavBar></NavBar>
    <VinosListContainer greeting='¿Cómo estás?'></VinosListContainer>


      <Route path ='/components/' element={<VinosListContainer></VinosListContainer>}></Route>
      <Route path ='/components/:vinoId' element={<VinoDetailPage></VinoDetailPage>}></Route>


    
    </>
   );
}

export default App
