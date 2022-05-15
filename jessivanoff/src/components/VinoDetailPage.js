import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"

const VinoDetailPage = () => {

    const {vinoId} = useParams()
    const [vinos, setvinos] = useState ( {} )

    useEffect (  () => {

        <></>
        (async ( ) => {
          const vino = await getVinoDetail ()
        setvinos (vinos)
    })

}, [])

     const getVinoDetail = () => {
        return new Promise ( (resolve) =>{

        setTimeout (() => {
            resolve (vinos.find( v => v.id == vinoId) )
        }, 2000);
        })
     }

  return (

    <>
    
    <div>Descripción del vino elegido - {vinoId} </div>

<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"> 
        <strong>{vino.id}</strong>
        <strong>{vino.cepa}</strong>
        <strong>{vino.año}</strong>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Salentein Numina</h1>
      <p class="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar enim quis neque finibus efficitur. Etiam pretium urna non turpis cursus, nec porta magna aliquet. Etiam varius pellentesque ligula eget porttitor. Maecenas non volutpat erat, a gravida libero. Ut ullamcorper felis vitae placerat lacinia. Donec quam enim, tempor vitae suscipit et, malesuada et erat. Maecenas eu pulvinar sapien. Nulla facilisi.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Agregar al carrito</button>
      </div>
    </div>
  </div>
</section>



</>
    
  )
}

export default VinoDetailPage

