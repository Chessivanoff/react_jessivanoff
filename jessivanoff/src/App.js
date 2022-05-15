import logo from './logo.svg';
import './App.css';
import VinosListContainer from './components/VinosListContainer';
import NavBar from './components/NavBar';
import VinoDetailPage from './components/VinoDetailPage';
import { BrowserRouter } from 'react-router-dom';
import CartContext from './components/CartContext';
//import CartWidget from './components/CartWidget';




function App() {
  return (

    <>
    
    <NavBar></NavBar>
      <VinosListContainer greeting='¿Cómo estás?'></VinosListContainer>
          <CartContext>

              <BrowserRouter>

                  <Route path ='/' element={<VinosListContainer></VinosListContainer>}></Route>
                  <Route path ='/components/:listId' element={<VinosListContainer></VinosListContainer>}></Route>
                  <Route path ='/components/:vinoId' element={<VinoDetailPage></VinoDetailPage>}></Route>
              
              </BrowserRouter>

          </CartContext>


    
    </>
   );
}

export default App

