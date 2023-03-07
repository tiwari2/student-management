import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav className = "navbar p-0 fixed-top d-flex flex-row">
        <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
          <img src={require('../../assets/images/logo-mini.svg')} alt="logo" />
        </div>
      </nav>
    )
  }
}
