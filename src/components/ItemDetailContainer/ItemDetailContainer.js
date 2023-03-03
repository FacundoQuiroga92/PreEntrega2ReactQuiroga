import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ProdDetail = {
    id:1 ,nombre:"camiseta Boca",detalle:"camiseta titular de Boca Juniors",img:"https://www.digitalsport.com.ar/files/products/616d7c8b743a7-565172-500x500.jpg", precio: 30000
}

export const ItemDetailContainer = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(ProdDetail)
            }, 2000);
        })
        getData.then(res => setData(res))
    }, [])
    


  return (
    <ItemDetail data={data} />
  )
}

export default ItemDetailContainer