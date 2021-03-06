import vino4 from '.IMG/vino4.jpg';
import vino5 from '.IMG/vino5.jpg';
import vino6 from '.IMG/vino6.jpg';
import { BrowserRouter } from 'react-router-dom';


const VinosCard_Rosados = ( props ) => {
    return (

        <><div class="lg:w-1/4 md:w-1/2 p-4 w-full">

                    <a class="block relative h-48 rounded overflow-hidden">
                    </a>
                    <div class="mt-4">
                                <img src={vino4} alt="vino4" />
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{props.cepa}
                            </h3>
                            <h2 class="text-gray-900 title-font text-lg font-medium">{props.año}</h2>

                            <p class="mt-1">$150.00</p>
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    <BrowserRouter>
                                        <Route OnClick path ='/item/:id'></Route>
                                        </BrowserRouter>Ver</button>
                    </div>

            </div><div class="lg:w-1/4 md:w-1/2 p-4 w-full">

                            <a class="block relative h-48 rounded overflow-hidden">
                            </a>
                            <div class="mt-4">
                                        <img src={vino5} alt="vino5"/>
                                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{props.cepa}
                                    </h3>
                                    <h2 class="text-gray-900 title-font text-lg font-medium">{props.año}</h2>

                                    <p class="mt-1">$80.00</p>
                                    <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    <BrowserRouter>
                                        <Route OnClick path ='/item/:id'></Route>
                                        </BrowserRouter>Ver</button>
                            </div>

                    </div><div class="lg:w-1/4 md:w-1/2 p-4 w-full">

                            <a class="block relative h-48 rounded overflow-hidden">
                            </a>
                            <div class="mt-4">
                                        <img src={vino6} alt="vino6"/>
                                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{props.cepa}
                                    </h3>
                                    <h2 class="text-gray-900 title-font text-lg font-medium">{props.año}</h2>

                                    <p class="mt-1">$100.00</p>
                                    <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    <BrowserRouter>
                                        <Route OnClick path ='/item/:id'></Route>
                                        </BrowserRouter>Ver</button>
                            </div>

                    </div></>


            )
    }
    export default VinosCard_Rosados