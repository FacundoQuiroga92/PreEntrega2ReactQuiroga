import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ product }) => {
  return (
    <div className='item'>
      <img src={product.img} alt='imagen del producto' />
      <div>
        <h3>{product.nombre}</h3>
        <p>Precio ${product.precio}</p>
        <Link to={`/item/${product.id}`}
        className='button'>Detalles</Link>
      </div>


    </div>
  )
}

export default Item