import cart from './CartWidget.svg';
import './CartWidget.css'

function CartWiget(obj){
return (
        <div className='Cart'>
            <ul>    
                <li><img src={cart} alt="cart"/></li>
                {/* <i class="bi bi-cart-x"></i> */}
                <li><h6>{obj.number}</h6></li>
            </ul>
        </div>
)
}

export default CartWiget;