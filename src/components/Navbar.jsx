import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-info">
      <div className="container-fluid">
        <NavLink className="navbar-brand  text-white" to='/'><i className="bi bi-bag-check" style={{fontSize: '2rem'}}/> Marketplace</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-sm-3 ">
              <NavLink className="nav-link text-white" aria-current="page" to='/'><i className="bi bi-house"/> Home</NavLink>
            </li>
            <li className="nav-item mx-sm-3">
              <NavLink className="nav-link text-white" to='/login'><i className="bi bi-box-arrow-in-right"/> Login / Sign Up</NavLink>
            </li>
            <li className="nav-item mx-sm-3">
              <NavLink className="nav-link text-white" to='/categories'><i className="bi bi-card-list"/> Categories</NavLink>
            </li>
            <li className="nav-item mx-sm-3">
              <NavLink className="nav-link text-white" to='/cart'><i className="bi bi-cart"/> Cart</NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search products" aria-label="Search"/>
              <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar