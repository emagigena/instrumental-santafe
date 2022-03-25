import { createContext, useContext, useState } from "react";


export const useCartContext = () => useContext(CartContext)
const CartContext = createContext([])

 function CartContextProvider({ children }){
    const [cartList, setCartList] = useState([])

    const agregarCart =(Item)=>{
        if(isInLIst(Item.id)){
        }else{
            setCartList( [...cartList,Item] )
        }
    }
    const isInLIst = (id) =>{
        console.log(cartList.some((prod) => prod.id === id))
       return (cartList.some((prod) => prod.id === id))
    } 
    const borrarItem = (id) =>{
        setCartList( cartList.filter((prod) => prod.id !== id))
    }
    const vaciarCart = ()=>{
        setCartList( [] )
    }
    return (
        <CartContext.Provider value={{
        cartList,
        agregarCart, 
        vaciarCart,
        borrarItem
        }}>
            {children}
        </CartContext.Provider>
    )
 }
 export default CartContextProvider 