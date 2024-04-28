import React from "react";
import Audios from "../Audios/Audios";
import Sprites from "../Sprites/Sprites";
import style from "./MoreInfor.module.scss"

const MoreInfor = ({ pokemon, setInfoActive }) => {
  function handleCancel(e) {
    setInfoActive(false);
  }

  return (
    <div className={style.main}>
      <button onClick={handleCancel}>X</button>

      {pokemon.abilities && (
        <div>
          <h2 style={{ textTransform: 'capitalize' }} >{pokemon.name} #{pokemon.id} </h2>
          <h3>Abilities:</h3>

          {pokemon.abilities.map((ability) => (
            <p>{ability.ability.name}</p>
          ))}

          <h3>Types:</h3>
          {pokemon.types.map((type) => (
            <p>{type.type.name}</p>
          ))}

          <h3>Height:</h3>
          {pokemon.height/10} m

          <h3>Weight:</h3>
          {pokemon.weight/10} kg

          
          
          <h3>Cry:</h3>
          <Audios src={pokemon.cries.latest}></Audios>
          <Sprites src={pokemon.sprites.front_default}></Sprites>
        </div>
      )}
    </div>
  );
};

export default MoreInfor;
