import cart from './CartWidget.svg';
import './CartWidget.css'
import { Button } from 'bootstrap'
import { Link } from 'react-router-dom'

function CartWiget(obj){
return (
        <Link to = '/Cart'>
            <div className='Cart'>
                <img src = {cart} alt = 'cart' />
                {
                    obj.number ?
                        <span class = 'badge bg-primary'>{obj.number}</span>
                        :
                        <></>
                }
            </div>
        </Link>
)
}

export default CartWiget;