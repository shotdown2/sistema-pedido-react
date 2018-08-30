import React, { Component } from 'react';
import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Categoria from './components/Categoria/Categoria';
import Produto from './components/Produto/Produto';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <MenuSuperior />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Switch>
                <Route path="/" exact component= {Categoria} />
                <Route path="/produtos" component= {Produto} />
                <Route path="/categorias" component= {Categoria} />
              </Switch>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
