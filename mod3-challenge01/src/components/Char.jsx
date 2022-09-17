import { useState } from "react";

const Char = ({ image,name, status, species, setImgSrc}) => {
  
    return (
    <div className="color-square" onClick={() => setImgSrc(image)}>
      <img src={image} alt="imagen del personaje"  />
      <h2>{name}</h2>
      <h3>{species}</h3>
      <h3>{status}</h3>
    </div>
  );
}

export default Char;