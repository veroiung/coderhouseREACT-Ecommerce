import { Link } from 'react-router-dom'
 
const Item = ({ id, nombre, img, precio, stock }) => {
    return(
            <div className='tienda' id={id}>
               <div className='col mb-3'>
                  <picture>
                 <img className='producto-imagen' src={img} alt={nombre} />
                 </picture>
                 <div className='card-body'>
                    <h4 className='card-title'><strong>{nombre}</strong></h4>
                    <h5 className='card-title'>$ {precio}</h5>
                 </div>
                 <footer className='footer-btn'>
                    <Link to={`/item/${id}`} className='btn-style'>Ver detalle</Link>
                  </footer>
               </div>
            </div>
        )
}

export default Item