
const products = [
  {
    id: '1',
    nombre: 'Denim Celeste',
    img: '././images/tienda/denim-celeste.jpg',
    precio: 4700,
    stock: 10,
    category:'denim'
  },

  {
    id: '2',
    nombre: 'Denim Azul',
    img: '././images/tienda/denim-azul.jpg',
    precio: 4700,
    stock: 10,
    category:'denim'
  },

  {
    id: '3',
    nombre: 'Denim Blanco',
    img: '././images/tienda/denim-blanco.jpg',
    precio: 4700,
    stock: 10,
    category:'denim'
  },

  {
    id: '4',
    nombre: 'Denim Negro',
    img: '././images/tienda/denim-negro.jpg',
    precio: 4700,
    stock: 10,
    category:'denim'
  },

  {
    id: '5',
    nombre: 'Azul Marino',
    img: '././images/tienda/azul-marino.jpg',
    precio: 3900,
    stock: 10,
    category:'melange'
  },

  {
    id: '6',
    nombre: 'Borravino',
    img: '././images/tienda/borravino.jpg',
    precio: 3900,
    stock: 10,
    category:'melange'
  },

  {
    id: '7',
    nombre: 'Skinny',
    img: '././images/tienda/skinny.jpg',
    precio: 3900,
    stock: 10,
    category:'melange'
  },

  {
    id: '8',
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

export const getProductByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve (products.filter((product) => product.category === categoryId))
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

  RECIEN con DIEGO
  export const getProductByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter((product) => product.category === categoryId);
      resolve(filteredProducts);
    }, 500)
  })

*/

