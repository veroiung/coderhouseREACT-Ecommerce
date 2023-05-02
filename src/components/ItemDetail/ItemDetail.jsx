import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ id, nombre, img, precio, stock }) => {
    return(
         <div className='col mb-3'>
            <div className='card' id={id}>
            </div>
               <picture>
                  <img className='producto-imagen' src={img} alt={nombre} />
               </picture>
                 <div className='card-body'>
                    <h4 className='card-title'><strong>{nombre}</strong></h4>
                    <h5 className='card-title'>$ {precio}</h5>
                    <footer>
                    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
                    </footer>
                 </div>
        </div>
        )
}

export default ItemDetail