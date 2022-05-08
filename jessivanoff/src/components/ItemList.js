import { useEffect, useState } from "react";
import { vinos as vinosData } from "./Data/Vinos";
import VinosCard from "./VinosCard_Tintos";


const ItemList = ( {} ) => {

        const [vinos, setVinos] = useState([])

useEffect (() => {
       
}, [])


const getVinos = new Promise (  (resolve, reject) => { 
        setTimeout (  ()  =>{
                resolve (vinosData)
        }, 1000)
})

getVinos.then( (result) => {
        console.log('Se completo la promesa', result);

} )


        return (

<div>
        {vinos.map( vino => <VinosCard vinosData={vino} /> ) }
</div>




                )
        }
        export default ItemList
            