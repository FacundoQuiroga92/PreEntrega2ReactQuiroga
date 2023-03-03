import React, { useEffect, useState } from 'react'
import getList from '../utils/products'
import ItemList from './ItemList'

const ItemListContainer = () => {
   const [arrayList, setArrayList] = useState([])


   useEffect(()=> {
    getList()
      .then((response)=> setArrayList(response))
      .catch((err)=> console.error(err))
      .finally()
  }, [])

   

  return(
    <div className='listContainer'>
          <ItemList products={arrayList}/>
          
    </div>
    
  )
}

export default ItemListContainer