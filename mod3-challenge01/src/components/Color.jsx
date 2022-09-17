/* const Color = ({ name, hex, id }) => {
  return (
    <div className="color-square" style={{ backgroundColor: hex }}>
      <h2>Id: {id} y Nombre: {name}</h2>
    </div>

  );
} */

import React from "react";

class ClaseColor extends React.Component {
  /* constructor(props) {
    super(props);
    this.state = {id:'1',name:'Rojo',hex:'#000'}
  } */
  render() {
    return (
      <> <h2>Bienvenido al curso de REACT {this.props.id}</h2> 
      <div className="color-square" style={{ backgroundColor: this.props.hex }}>
        <h2>Id: {this.props.id} y Nombre: {this.props.name}</h2>
        <h3> Categoria: {this.props.otra}</h3>
      </div>
      </>
    );
  }
}

export default ClaseColor;

