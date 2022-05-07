import React, { useEffect, useState } from 'react'
import {useParans} from "react-router-dom"
import { vinos } from './Data/Vinos'

const VinoDetailPage = () => {

    const {vinoId} = useParans()
    const [vinos, setvinos] = useState ( {} )

    useEffect (  () => {

        (async ( ) =>
          const vino = await getVinoDetail ()
        setvinos (vinos)
    })()

    }, [])

     const getVinoDetail = () => {
        return new Promise ( (resolve) =>{

        setTimeout (() => {
            resolve (vinos.find( v => v.id == vinoId) )
        }, 2000);
        })
     }

  return (
    <div>Descripción del vino elegido - {vinoId} </div>

    <strong>{vino.id}</strong>
    <strong>{vino.cepa}</strong>
    <strong>{vino.año}</strong>

    <div className='m-5'>
        <Link to='/'>Malbec</Link>
    </div>
  )
}

export default VinoDetailPage