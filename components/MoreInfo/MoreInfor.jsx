import React from "react";
import Audios from "../Audios/Audios";
import Sprites from "../Sprites/Sprites";
import style from "./MoreInfor.module.scss";
import Type from "../Type/Type";

const MoreInfor = ({ pokemon, setInfoActive }) => {
  function handleCancel(e) {
    setInfoActive(false);
  }

  return (
    <div className={style.main}>
      {pokemon.abilities && (
        <div className={style.mainContainer}>
          <div className={style.topContainer}>
            <h2 style={{ textTransform: "capitalize" }}>
              {pokemon.name} #{pokemon.id}{" "}
            </h2>
            <button className={style.close} onClick={handleCancel}>X</button>
          </div>
          <div className={style.sprites}>
            {Object.keys(pokemon.sprites).map((key) =>
              pokemon.sprites[key] !== null &&
              typeof pokemon.sprites[key] == "string" ? (
                <div>
                  <p className={style.spriteDescription}>
                    {/* {key.replace(/_/g, " ")} */}
                    {/* {pokemon.sprites[key].includes("female") && key.replace(/_/g, " ").replace("default", "male")} */}
                    {   key.replace(/_/g, " ").replace("default","")}
                  </p>

                  <Sprites key={key} src={pokemon.sprites[key]} />
                </div>
              ) : null
            )}
          </div>
          <div className={style.dataContainer}>
            <div>
              <div className={style.topDataContainer}>
                <div className={style.data}>
                  <h3>Abilities:</h3>
                  {pokemon.abilities.map((ability) => (
                    <p>{ability.ability.name}</p>
                  ))}
                </div>
                <div className={style.data}>
                  <h3>Types:</h3>
                  {pokemon.types.map((type) => (
                    <p>
                      <Type type={type.type.name}></Type>
                    </p>
                  ))}
                </div>
                <div className={style.data}>
                  <h3>Height:</h3>
                  {pokemon.height / 10} m<h3>Weight:</h3>
                  {pokemon.weight / 10} kg
                </div>
              </div>
              <div className={style.cryContainer}>
                <h3>Cry:</h3>
                <Audios src={pokemon.cries.latest}></Audios>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreInfor;
