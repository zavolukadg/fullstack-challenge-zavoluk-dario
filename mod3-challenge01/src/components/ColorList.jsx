import { useState } from "react";
import ClaseColor from "./Color";
/* import Color from "./Color"; */

const colors = [
    {
        id: 1,
        name: 'Rojo',
        hex: '#D7263D',
        otra: 'A'
    },
    {
        id: 2,
        name: 'Anaranjado',
        hex: '#F8BD7F',
        otra: 'B'
    },
    {
        id: 3,
        name: 'Azul',
        hex: '#0496FF',
        otra: 'C'
    },
];


const ColorList = () => {

    const [colorList, setColorList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const cargarColores = () => {
        setIsLoading(true)
        setTimeout(() => {
            setColorList(colors)
            setIsLoading(false)
        }, 3000);
    }

    return (
        <>
            <button onClick={cargarColores}>Click me</button>
            {isLoading && <h1>Loading</h1>}
            <div>
                {
                    colorList.map(cuadritoColor =>
                        <ClaseColor name={cuadritoColor.name} hex={cuadritoColor.hex} key={cuadritoColor.id} id={cuadritoColor.id} otra ={cuadritoColor.otra}/>
                    )
                }
            </div>
        </>
    );
}

export default ColorList;

