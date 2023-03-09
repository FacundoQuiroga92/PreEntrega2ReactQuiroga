import React from 'react'
import Navbar from './Navbar/Navbar'
import ItemListContainer from './itemListContainer/ItemListContainer'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import '../App.css'


const Landig = () => {
  return (

    <BrowserRouter>
      <Navbar />
      
      <Routes>

        <Route path='/'
      element={<ItemListContainer />}/>
      <Route path='/item/:id'
      element={<ItemDetailContainer /> }/>


      </Routes>
    </BrowserRouter>
  )
}

export default Landig