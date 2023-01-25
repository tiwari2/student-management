import React, { Component } from 'react'
import { Trans } from 'react-i18next';
import {  Dropdown } from 'react-bootstrap';


export default class Sidebar extends Component {
  render() {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                <a className="sidebar-brand brand-logo" href="index.html"><img src={require('../../assets/images/logo.svg')} alt="logo" /></a>
                <a className="sidebar-brand brand-logo-mini" href="index.html"><img src={require('../../assets/images/logo-mini.svg')} alt="logo" /></a>
            </div>
            <ul className="nav">
            <li className="nav-item profile">
            <div className="profile-desc">
            <div className="profile-pic">
                <div className="count-indicator">
                  <img className="img-xs rounded-circle " src={require('../../assets/images/faces/face15.jpg')} alt="profile" />
                  <span className="count bg-success"></span>
                </div>
                <div className="profile-name">
                  <h5 className="mb-0 font-weight-normal"><Trans>Harsh Tiwari</Trans></h5>
                  <span><Trans>Gold Member</Trans></span>
                </div>
              </div>
            </div>
            <Dropdown alignRight>
                <Dropdown.Toggle as="a" className="cursor-pointer no-caret">
                  <i className="mdi mdi-dots-vertical"></i>
                </Dropdown.Toggle>
            </Dropdown>
            </li>
            </ul>
        </nav>
        
    )
  }
}
