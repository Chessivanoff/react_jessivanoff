import vino1 from '.IMG/vino1.jpg';
import vino2 from '.IMG/vino2.jpg';
import vino3 from '.IMG/vino3.jpg';
import { BrowserRouter } from 'react-router-dom';

const VinosCard_Tintos = ( props ) => {
    return (

        <><div class="lg:w-1/4 md:w-1/2 p-4 w-full">

                    <a class="block relative h-48 rounded overflow-hidden">
                    </a>
                    <div class="mt-4">
                                <img src={vino1} alt="vino1" />
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
                                        <img src={vino2} alt="vino2"/>
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
                                        <img src={vino3} alt="vino3"/>
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
    export default VinosCard_Tintos