import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, nombre, img, precio, cantidad }) => {
    return(
         <div className='col mb-6'>
            <div className='card' id={'denimceleste'}>
                 <img className='producto-imagen' src={img} alt={nombre} />
                 <div className='card-body'>
                    <h4 className='card-title'><strong>{nombre}</strong></h4>
                    <h5 className='card-title'>$ {precio}</h5>
                    <footer className='ItemFooter'>
                    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
                    </footer>
                 </div>
            </div>
        </div>
        )
}

export default ItemDetail