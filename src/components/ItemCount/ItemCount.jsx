import { useState } from 'react' 
import Button from 'react-bootstrap/Button';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='btn-style-number' onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className='btn-style-number' onClick={increment}>+</button>
            </div>
            <div>
                <btn className='btn-style' type onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al Carrito
                </btn>
            </div>
        </div>
    )
}

export default ItemCount
