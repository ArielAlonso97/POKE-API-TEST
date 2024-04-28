import Headbar from "../../components/Headbar/Headbar";
import PokemonList from "../../components/PokemonList/PokemonList";
import style from "./home.module.scss";

export default function HomePage() {

  
  return (
    <div className={style.main}>
      <div className={style.headbar}>
        <Headbar></Headbar>
      </div >
      <PokemonList className={style.pokelist}></PokemonList>
    </div>
  );
}
