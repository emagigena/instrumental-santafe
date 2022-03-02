import React from "react";
import carritodecompras from "./carritodecompras.jpg"
import "./Cart.css"

const Cart = (foo) => {
    return(

       <div className="Cart">
           <u1>
           <li><h6>{foo.numero}</h6></li>
           <li> <img src = {carritodecompras} className = 'carritodecompras'></img> </li>
           
           </u1> 
       </div> 
)
}
export default Cart