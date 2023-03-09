import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import getList from '../utils/products'

    

 export const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    const {id} = useParams()
    useEffect(() => {
        getList()
        .then((res)=> setData(res.find((item)=> item.id === parseInt(id))))
        }, [id]) 





  return (
    <ItemDetail data={data} />
  )
}

export default ItemDetailContainer