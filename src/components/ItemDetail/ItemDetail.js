import React from 'react'


const ItemDetail = ( {data} ) => {
  return (
    <div className='item'>
      <img src={data.img} alt='imagen del producto' />
        <h3>{data.nombre}</h3>
        <p>Precio ${data.precio}</p>
        <h3>
            DETALLE: {data.detalle}
        </h3>
    </div>
  )
}

export default ItemDetail