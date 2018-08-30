import React, { Component } from 'react';
import {consultaProduto} from "./../../services/produtoService";

class Produto extends Component {

  constructor(props){
    super(props);
    this.state = {listaProdutos : []};
    }

    componentDidMount(){
       consultaProduto().then(dados => this.setState({listaProdutos:dados}));
   }


  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Cod</th>
              <th>Produto</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.listaProdutos.map((item,indice) => {
                return (
                  <tr key={indice}>
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                    <td>{item.preco.toLocaleString("pt-BR", {style: "currency", currency:"BRL"})}</td>
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

export default Produto;
