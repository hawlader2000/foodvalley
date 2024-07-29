import React from 'react'
import { Link } from 'react-router-dom'
function Layout() {
  return (
   <>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <div className="container-fluid">
      <h5 className="navbar-brand">FoodVallay</h5>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse text-white" id="mynavbar">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactus">ContactUs</Link>
          </li>
          <form className="d-flex searchbox">
          <input className="form-control me-2" type="text" placeholder="Search" />
          <button className="btn btn-primary" type="button">Search</button>
          </form>
          <li className="nav-item">
            <Link className="nav-link" to="/contactus">Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
    </nav>
   </>
  )
}
export default Layout