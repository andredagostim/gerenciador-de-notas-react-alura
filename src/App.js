import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import './assets/index.css';
import "./assets/App.css"

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: []
    };
  }

  _criarNota(titulo, texto){
    const novaNota = {titulo, texto}
    const novoArrayDeNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayDeNotas
    }
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this._criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
