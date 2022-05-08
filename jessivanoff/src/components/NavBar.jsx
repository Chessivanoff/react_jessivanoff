import CartWidget from "./CartWidget"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartArrowDown, faCoffee, faWineGlass } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter } from 'react-router-dom';

const NavBar = () => {
    return (
      <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
             
             <a className="flex title-font font-medium items-center text-grey-200 mb-4 md:mb-0">
               
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-rose-900 rounded-full" viewBox="0 0 24 24">
                  <BrowserRouter>
                      <Route OnClick path ='/'></Route>
                  </BrowserRouter>
                </svg>

                 <span className="ml-5 text-xl">Uvas Vivas</span>
             </a>

            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a className="py-1 px-3 rounded text-base focus:outline-none hover:bg-gray-200 mr-5 hover:text-red-50 hover:bg-red-900">
                <BrowserRouter>
                  <Route OnClick path ='/components/:categoryId'></Route>
                </BrowserRouter>Tintos</a>
              <a className="py-1 px-3 rounded text-base focus:outline-none hover:bg-gray-200 mr-5 hover:text-red-50 hover:bg-red-900">
              <BrowserRouter>
                  <Route OnClick path ='/components/:categoryId'></Route>
                </BrowserRouter>Blancos</a>
              <a className="py-1 px-3 rounded text-base focus:outline-none hover:bg-gray-200 mr-5 hover:text-red-50 hover:bg-red-900">
              <BrowserRouter>
                  <Route OnClick path ='/components/:categoryId'></Route>
                </BrowserRouter>Rosados</a>
              <a className="py-1 px-3 rounded text-base focus:outline-none hover:bg-gray-200 mr-5 hover:text-red-50 hover:bg-red-900">
              <BrowserRouter>
                  <Route OnClick path ='/components/:categoryId'></Route>
                </BrowserRouter>Espumantes</a>
              <a className="py-1 px-3 rounded text-base focus:outline-none hover:bg-gray-200 mr-5 hover:text-red-50 hover:bg-red-900">
              <BrowserRouter>
                  <Route OnClick path ='/components/:categoryId'></Route>
                </BrowserRouter>Para Regalar</a>
            </nav>

            <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 hover:text-gray-100 rounded text-base mt-4 md:mt-0">
              <span> 
                <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>
              </span>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
         </header>

    )
}
export default NavBar


