import { useState } from "react";
import Sprites from "../Sprites/Sprites";
import MoreInfor from "../MoreInfo/MoreInfor";
import style from "./PokemonCard.module.scss";
import Type from "../../components/Type/Type"

const PokemonCard = ({ pokemon }) => {
  const [infoActive, setInfoActive] = useState(false);

  function handleMoreInfo(e) {
    e.preventDefault();
    setInfoActive(true);
    console.log(infoActive);
  }
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll hacia arriba suavemente
  };

  const handleClick = (e) =>{
    handleMoreInfo(e);
    handleScrollToTop();
  }
  return (
    <>
      {infoActive && (
        <MoreInfor className={style.moreInfoContainer} setInfoActive={setInfoActive} pokemon={pokemon}></MoreInfor>
      )}

      {pokemon.abilities && (
        <div className={style.card}>
          <div className={style.containerPokeIdName}>
            <h2>#{pokemon.id}</h2>
            <h2 style={{ textTransform: "capitalize" }}>{pokemon.name}</h2>
          </div>
          <div className={style.containerSpriteType}>
            <Sprites src={pokemon.sprites.front_default}></Sprites>
            <div className={style.containerTypes}>
              <h3>Types:</h3>
              {pokemon.types.map((type) => (
                <p><Type type={type.type.name}></Type></p>
              ))}
            </div>
          </div>
          <div className={style.buttonContainer}>
            <button className={style.button} onClick={handleClick} >
              More Info
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonCard;
