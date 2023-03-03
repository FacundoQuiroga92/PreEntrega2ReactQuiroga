import React from 'react'
import Navbar from './Navbar/Navbar'
import ItemListContainer from './itemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Landig = () => {
  return (

    <BrowserRouter>
      <Navbar />
      <ItemListContainer />
      
    </BrowserRouter>
  )
}

export default Landig