import { useState, useEffect } from 'react'
import { getProductById } from "../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'

import { useParams } from 'react-router-dom'



const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { ItemId } = useParams()

    useEffect(() => {
        getProductById(ItemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [ItemId])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>

    )
    
}

export default ItemDetailContainer