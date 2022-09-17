import { useState } from "react";
import { useEffect } from "react";
import { getCharacters } from "../service";
import Char from "./Char";

const CharList = () => {

    const [charList, setCharList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [imgSrc, setImgSrc] = useState("");

    useEffect(() => {
        console.log("Se ejecuta use");
        setIsLoading(true);
        getCharacters()
        .then((data) => setCharList(data.results))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }, []);

    return (
        <>
            <img src={imgSrc} className="imgInicial" alt="No Selecciono Imagen"/>
            <div>
                {
                    charList.map(personaje =>
                        <Char 
                        image={personaje.image} 
                        name={personaje.name} 
                        status={personaje.status} 
                        specie={personaje.species} 
                        setImgSrc={setImgSrc}
                        />
                    )
                }
            </div>
        </>
    );
}

export default CharList