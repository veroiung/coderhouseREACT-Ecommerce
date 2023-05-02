import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import Item from '../Item/Item'



const ItemList = ({ products }) => {

    return (
        <div className='tienda'> 
            <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
            </div>
        </div>
    )
    
}

export default ItemList

/*
const list = products.map(
    (producto) =>
        <div className='col mb-3'>
                <div className='card' id={producto.id}>
                    <img className='producto-imagen' src={producto.img} alt={producto.nombre} />
                    <div className='card-body'>
                        <h4 className='card-title'><strong>{producto.nombre}</strong></h4>
                        <h5 className='card-title'>$ {producto.precio}</h5>
                        <footer>
                        </footer>
                    </div>
                </div>
        </div>
)

return (
        <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 luego' id='tienda'>
            {
                list
            }
        </div>
    )

*/