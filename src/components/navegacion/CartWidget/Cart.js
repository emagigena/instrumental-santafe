import React from "react";
import carritodecompras from "./carritodecompras.jpg"
import './Cart.css'

function CartWiget({numero}){
return (
        <div className='Cart'>
            <ul>    
                <li><img src={carritodecompras} alt="cart"/></li>
                {/* <i class="bi bi-cart-x"></i> */}
                <li><h6>{numero}</h6></li>
            </ul>
        </div>
)
}

export default CartWiget;