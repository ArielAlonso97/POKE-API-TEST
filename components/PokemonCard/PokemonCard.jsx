import { useState } from "react";
import Audios from "../Audios/Audios";
import Sprites from "../Sprites/Sprites";
import MoreInfor from "../MoreInfo/MoreInfor";

const PokemonCard = ({ pokemon }) => {
  const [infoActive, setInfoActive] = useState(false);

  function handleMoreInfo(e) {
    e.preventDefault();
    setInfoActive(true)
    console.log(infoActive)
  }

  return (
    <>
      {infoActive && <MoreInfor 
      setInfoActive={setInfoActive}
      pokemon={pokemon}></MoreInfor>}

      {pokemon.abilities && (
        <div>
          <h2 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h2>
          <h2>{pokemon.id}</h2>
          <Sprites src={pokemon.sprites.front_default}></Sprites>
          <button onClick={handleMoreInfo} >More Info</button>
        </div>
        
      )}

      

      {/* {infoActive && (pokemon.abilities && (
        <div>
          <h2>{pokemon.name}</h2>
          <h3>Abilities:</h3>

          {pokemon.abilities.map((ability) => (
            <p>{ability.ability.name}</p>
          ))}

          <h3>Types:</h3>
          {pokemon.types.map((type) => (
            <p>{type.type.name}</p>
          ))}
          <h3>Cry:</h3>
          <Audios src={pokemon.cries.latest}></Audios>
          <Sprites src={pokemon.sprites.front_default}></Sprites>
        </div>
      ))} */}
    </>
  );
};

export default PokemonCard;
