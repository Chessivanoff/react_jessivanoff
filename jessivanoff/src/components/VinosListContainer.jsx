import VinosCard_Blancos from "./VinosCard_Blancos"
import VinosCard_Rosados from "./VinosCard_Rosados"
import VinosCard_Tintos from "./VinosCard_Tintos"



const VinosListContainer = ( {greeting} ) => {

        
return (
        <div style={{color:'darkred', fontSize: 24, textAlign: "center", paddingTop: "50px", paddingBottom: "50px"}}>Hola Usuario,  {greeting}

                <VinosCard_Tintos></VinosCard_Tintos>
                <VinosCard_Blancos></VinosCard_Blancos>
                <VinosCard_Rosados></VinosCard_Rosados>
        
        </div>

}

export default VinosListContainer
    

