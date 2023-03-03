import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const CartWidget = () => {
  return (
    <div>
      <FaShoppingCart size={'2rem'} color={'red'} />
      <span>{2}</span>
    </div>
  )
}

export default CartWidget