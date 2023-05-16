import './CartWidget.css'
import { Link } from 'react-router-dom'

function CartWiget(obj){
return (
        <Link to = '/Cart'>
            <div className='Cart'>
                <img src = 'https://firebasestorage.googleapis.com/v0/b/instrumental-santa-fe.appspot.com/o/imagenes%20del%20inicio%2Ficoncarrito.png?alt=media&token=1e201737-c4a8-4200-b0c8-928da1ddeb03' alt = 'cart' />
                {
                    obj.number ?
                        <span className = 'badge bg-primary'>{obj.number}</span>
                        :
                        <></>
                }
            </div>
        </Link>
)
}

export default CartWiget;