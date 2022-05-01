const VinosCard = ( props ) => {
    return (
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

                    <strong>{props.cepa}</strong>
                    <div>{props.año}</div>
            </div>



/* CARD DE EJEMPLO - TAILBLOCKS 

<div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        </a>
        <div class="mt-4">
         <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">TINTOS</h3>
         <h2 class="text-gray-900 title-font text-lg font-medium">Malbec 1</h2>
         <p class="mt-1">$16.00</p>
        </div>
  
</div>
*/


            )
    }
    export default VinosCard