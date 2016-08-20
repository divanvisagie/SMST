import React from 'react'

const Navbar = ({title}) =>
  <div className='navbar navbar-danger background-red free-navbar'>
    <div className='container-fluid'>
      <div className='navbar-header'>
        <a className='navbar-brand' href='javascript:void(0)'>{title}</a>
      </div>
      <div className='navbar-collapse collapse navbar-warning-collapse'>
      </div>
    </div>
  </div>

export default Navbar
