import React, { Component } from 'react';
import logo from './../../imgs/logo.svg';
import { Link } from 'react-router-dom';

class MenuSuperior extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/"><img src={logo} width="180" height="50" alt="" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/categorias">Categorias <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/produtos">Produtos <span className="sr-only">(current)</span></Link>
                </li>
              </ul>
            </div>

        </nav>
    );
  }
}

export default MenuSuperior;
