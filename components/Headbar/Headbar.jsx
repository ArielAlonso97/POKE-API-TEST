import React from "react";
import style from "./Headbar.module.scss";
import pokedexLogo from "../../public/Images/Pokédex_logo.png";
import Image from "next/image";
const Headbar = () => {
  return (
    <div className={style.main}>
      <div className={style.top_left}>
        <h1>Ariel Alonso Alvarado Arana</h1>
        <h1>Examen técnico Junior Frontend</h1>
      </div>
      <div className={style.top_right}>
      <h1>Pokedex</h1>
      <Image className={style.pokeLogo} src={pokedexLogo} alt="" width={70} height={70} />
      </div>

      
    </div>
  );
};

export default Headbar;
