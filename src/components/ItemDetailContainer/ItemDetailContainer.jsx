import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/firebase/firebaseConfig'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'Productos', itemId) 

        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productsAdapted = { id: response.id, ...data }
            setProduct(productsAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [itemId])

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail {...product} />
        </div>
    
    )
   
}

export default ItemDetailContainer

/*useEffect(() => {
    getProductById(ItemId)
    .then(response => {
        setProduct(response)
    })
    .catch(error => {
        console.error(error)
    })
}, [ItemId])

return(
    <div className='ItemDetailContainer' >
        <ItemDetail {...product} />
    </div>

)*/