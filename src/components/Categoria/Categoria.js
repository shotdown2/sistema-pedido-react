import React, { Component } from 'react';
import { consultaCategoria } from './../../services/categoriaService';

class Categoria extends Component {

  constructor(props){
    super(props);
    this.state = {listaCategorias : []};
    }

    componentDidMount(){
       consultaCategoria().then(dados => this.setState({listaCategorias:dados}));
   }

  render() {
    return (
      <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Cod</th>
                    <th>Departamentos</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.listaCategorias.map((item,indice) => {
                      return (
                        <tr key={indice}>
                          <td>{item.id}</td>
                          <td>{item.nome}</td>
                        </tr>
                        );
                      })
                  }
                </tbody>
              </table>
      </div>
    );
  }
}
export default Categoria;
