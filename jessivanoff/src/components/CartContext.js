import {createContext} from 'react'

export const CartContext = createContext ({
 compra: [],
 addCompra: (item, quantity) => {},
 removeCompra: (itemId) => {},
 clearCompra: () => {},
 isInCart: () => {},
})


const CartContextProvider = ({children}) => {

    const [setCompra] = useState([])

    const addToCompras = (vinoId) => {
        setCompra (currentCompra => {
            return currentCompra.concat(vinoId)
        })
    }

const context = {
    compra,
    addCompra,
    removeCompra,
    clearCompra,
    isInCart
}

  return (
    <CartContext.Provider value={context}>
        {children}

    </CartContext.Provider>
  )
}

export default CartContextProvider