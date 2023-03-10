import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Mundo Deportivo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to={`/`} >home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Equipos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Selecciones</a>
        </li>
        
      </ul>
      <CartWidget/>
    </div>
  </div>
</nav>
  )
}

export default Navbar