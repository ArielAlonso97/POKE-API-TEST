import React from "react";
import style from "./SearchBar.module.scss";
import Reset from "../Reset/Reset";

const SearchBar = ({
  searchTerm,
  filter,
  currentPage,
  setFilter,
  setCurrentPage,
  setFilterPokemonListData,
  pokemonListData,
  setSearchTerm,
  setPokemonListData,
  pokemonList
}) => {
  //seach texto

  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  //buscar

  const handleSearch = () => {
    setFilter(true);
    setCurrentPage(1);
    const filteredPokemonList = pokemonListData.filter((pokemon) => {
      let types = [];
      let id = 0;

      if (pokemon.types && pokemon.types.length > 0) {
        types = pokemon.types.map((typeData) => typeData.type.name);
      }

      if (pokemon.id) {
        id = pokemon.id.toString();
      }

      return (
        types.some((type) =>
          type.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        (pokemon &&
          pokemon.name &&
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        id.toString() === searchTerm.toString()
      );
    });
    setFilterPokemonListData(filteredPokemonList);
  };
  return (
    <div className={style.main}>
      <div className={style.bar_searchContainer}>
        <input
          className={style.bar}
          type="text"
          placeholder="Find Pokemon.....Name, Pokedex No or Type...."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className={style.search} onClick={handleSearch}>
          Find
        </button>
      </div>
      {filter || currentPage > 1 ? (
        <Reset
          setFilter={setFilter}
          setPokemonListData={setPokemonListData}
          setCurrentPage={setCurrentPage}
          setSearchTerm={setSearchTerm}
          pokemonListData={pokemonListData}
          pokemonList={pokemonList}
        ></Reset>
      ) : null}
    </div>
  );
};

export default SearchBar;
