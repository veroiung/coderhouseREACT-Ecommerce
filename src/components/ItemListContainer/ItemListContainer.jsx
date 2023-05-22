import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../service/firebase/firebaseConfig'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'Productos'), where('category', '==', categoryId))
            : collection(db, 'Productos')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div className="greeting">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )

}
export default ItemListContainer


//        const collectionRef = categoryId
//            ? query(collection(db, 'Productos'), where('category', '==', categoryId))
//            : collection(db, 'Productos')

/*   getDocs(collectionRef)
       .then(response => {
           const productsAdapted = response.docs.map(doc => {
               const data = doc.data()
               return { id: doc.id, ...data }
           })
           setProducts(productsAdapted)
       })
       .catch(error => {
           console.log(error)
       })
       .finally(() => {
           setLoading(false)
       })
} , [categoryId])*/




/*useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts


    asyncFunc(categoryId)
    .then(response => {
        setProducts(response)
       })
      .catch(error => {
          console.error(error)
      })
}, [categoryId])

        
return (
    <div className="greeting">
        <h1>{greeting}</h1>
        <ItemList products={products}/>
    </div> 
    ) */
