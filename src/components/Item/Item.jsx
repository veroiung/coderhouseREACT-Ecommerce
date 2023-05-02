import { Link } from 'react-router-dom'
 
const Item = ({ id, nombre, img, precio, stock }) => {
    return(
         
            <div className='card' id={id}>
                  <picture>
                 <img className='producto-imagen' src={img} alt={nombre} />
                 </picture>
                 <div className='card-body'>
                    <h4 className='card-title'><strong>{nombre}</strong></h4>
                    <h5 className='card-title'>$ {precio}</h5>
                    <footer>
                    <Link to={`/Item/${id}`} className='btn-agregar'>Ver detalle</Link>
                    </footer>
                 </div>
            </div>
       
        )
}

export default Item