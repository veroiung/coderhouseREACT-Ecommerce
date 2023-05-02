
const products = [
  {
    id: 'denimceleste',
    nombre: 'Denim Celeste',
    img: '././images/tienda/denim-celeste.jpg',
    precio: 4700,
    stock: 10,
    category:'denim'
  },

  {
    id: 'denimazul',
    nombre: 'Denim Azul',
    img: '././images/tienda/denim-azul.jpg',
    precio: 4700,
    stock: 10,
    category:'denim'
  },

  {
    id: 'denimblanco',
    nombre: 'Denim Blanco',
    img: '././images/tienda/denim-blanco.jpg',
    precio: 4700,
    stock: 10,
    category:'denim'
  },

  {
    id: 'denimnegro',
    nombre: 'Denim Negro',
    img: '././images/tienda/denim-negro.jpg',
    precio: 4700,
    stock: 10,
    category:'denim'
  },

  {
    id: 'azulmarino',
    nombre: 'Azul Marino',
    img: '././images/tienda/azul-marino.jpg',
    precio: 3900,
    stock: 10,
    category:'melange'
  },

  {
    id: 'borravino',
    nombre: 'Borravino',
    img: '././images/tienda/borravino.jpg',
    precio: 3900,
    stock: 10,
    category:'melange'
  },

  {
    id: 'skinny',
    nombre: 'Skinny',
    img: '././images/tienda/skinny.jpg',
    precio: 3900,
    stock: 10,
    category:'melange'
  },

  {
    id: 'oliva',
    nombre: 'Oliva',
    img: '././images/tienda/oliva.jpg',
    precio: 3900,
    stock: 10,
    category:'melange'
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId))
    }, 500)
  })
}

export const getProductByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === productCategory))
    }, 500)
  })
}


/*
export const ProductList = () => {

  const list = products.map(
    (producto) =>
    <div className="col mb-3">
      <div className="card" id={producto.id}>
        <img className="producto-imagen" src={producto.img} alt={producto.nombre} />
        <div className="card-body">
          <h4 className="card-title"><strong>{producto.nombre}</strong></h4>
          <h5 className="card-title">$ {producto.precio}</h5>
          <button type="button" className="btn-agregar" id="{producto.id}">+ Agregar al Carrito</button>
        </div>
      </div>
    </div>
  )
  return (
    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 luego" id="tienda">
      {
        list
      }
    </div>
  )
*/

