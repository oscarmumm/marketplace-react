import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to='/'><i className="bi bi-bag-check" style={{fontSize: '2rem'}}/> Marketplace</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-sm-3">
              <NavLink className="nav-link" aria-current="page" to='/'><i className="bi bi-house"/> Inicio</NavLink>
            </li>
            <li className="nav-item mx-sm-3">
              <NavLink className="nav-link" to='/categories'><i className="bi bi-card-list"/> Categorías</NavLink>
            </li>
            <li className="nav-item mx-sm-3">
              <NavLink className="nav-link" to='/cart'><i className="bi bi-cart"/> Carrito</NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar productos" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar