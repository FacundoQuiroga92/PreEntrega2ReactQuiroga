import React from 'react'

const item = ({ product }) => {
  return (
    <div className='item'>
      <img src={product.img} alt='imagen del producto' />
      <div>
        <h3>{product.nombre}</h3>
        <p>Precio ${product.precio}</p>
        <button className='button'>Detalles</button>
      </div>


    </div>
  )
}

export default item