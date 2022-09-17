import React, { useState } from 'react';

function PruebaContador() {
    // Declaración de una variable de estado que llamaremos "count"
    const [contador, setContador] = useState(0);
    const [apreto10, setApreto10]= useState(false);

    const verificarCantidad = () => {
        setContador(contador + 1)
        if(contador === 9){
            setApreto10(true);
        }
        console.log("Contado "+ contador +" apreto = " + apreto10);
    }
  
    return (
      <div>
        <p>Has presionado el boton {contador} veces</p>
        <button onClick={verificarCantidad}>
          Presiona el boton
        </button>
        {apreto10 && <div><p>Ha presionado el boton 10 veces. Deje de Presionar</p></div>}
          
      </div>
    );
  }

  export default PruebaContador;