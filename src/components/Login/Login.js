import React, { Component } from 'react';
import logo from './../../imgs/logo.svg';

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {msg : ''};
  }

  enviaForm(event){
    event.preventDefault();

    // const resquetInfo = {
    //     method:'POST',
    //     body:JSON.stringify({login:this.login.value,senha:this.senha.value}),
    //     headers: new Headers({
    //         'Content-type':'application/json'
    //     })
    // };
    //
    // fetch('http://localhost:8080/auth/criaUsuario',requestInfo)
    //   .then(response => {
    //           if(response.ok){
    //               return response.text();
    //           } else {
    //               this.setState({msg:'não foi possível fazer o login'})
    //           }
    //
    //       })
    //   .then(token => {
    //           console.log(token);
    //     })

  }

  render(){
    return(
      <div className="login-box">
        <img src={logo} width="180" height="50" alt="" />
               <form onSubmit={this.enviaForm.bind(this)}>
                <input type="text" ref={(input) => this.login = input} />
                <input type="password" ref={(input) => this.senha = input} />
                <input type="submit" value="login"/>
            </form>
        </div>

    );
  }
}

export default Login;
