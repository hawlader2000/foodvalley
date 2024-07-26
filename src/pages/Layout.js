import React from 'react'
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
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contactus">ContactUs</a>
          </li>
          <form className="d-flex searchbox">
          <input className="form-control me-2" type="text" placeholder="Search" />
          <button className="btn btn-primary" type="button">Search</button>
          </form>
          <li className="nav-item">
            <a className="nav-link" href="/contactus">Dashboard</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
   </>
  )
}
export default Layout