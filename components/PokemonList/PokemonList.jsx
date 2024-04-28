"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPokemonList,
  fetchPokemonUrl,
} from "../../redux/actions/pokemonAction";
import { Provider } from "react-redux";
import store from "../../redux/store";
import PokemonCard from "../PokemonCard/PokemonCard";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
import style from "./PokemonList.module.scss";
import Reset from "../Reset/Reset";
import pokeball from "../../public/Images/pokebal.png"
import Image from "next/image";

function PokemonList() {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemonList.pokemonList);
  const pokemonListUrl = useSelector((state) => state.pokemon.pokemonListUrl);
  const error = useSelector((state) => state.pokemon.error);
  const [pokemonListData, setPokemonListData] = useState([]);
  const [filterPokemonListData, setFilterPokemonListData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage + 1;

  const currentPokemonListData = filter
    ? filterPokemonListData.slice(startIndex, endIndex - 1)
    : pokemonListData.slice(startIndex + 1, endIndex);

  const limit = 1025;
  const offset = startIndex;

  //fetch api
  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchPokemonList(limit, offset))
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch, filter]);

  //fetch pokemon details
  useEffect(() => {
    if (pokemonList.length > 0) {
      pokemonList.forEach((pokemon) => {
        dispatch(fetchPokemonUrl(pokemon.url));
      });
    }
  }, [pokemonList, dispatch, filter]);

  //guardando pokemons y detalles en variables
  useEffect(() => {
    const newPokemonListData = [...pokemonListData];

    const newDataToAdd = {
      name: pokemonListUrl.name,
      abilities: pokemonListUrl.abilities,
      types: pokemonListUrl.types,
      cries: pokemonListUrl.cries,
      sprites: pokemonListUrl.sprites,
      weight: pokemonListUrl.weight,
      stats: pokemonListUrl.stats,
      id: pokemonListUrl.id,
      height: pokemonListUrl.height,
    };

    if (
      !newPokemonListData.some((pokemon) => pokemon.name === newDataToAdd.name)
    ) {
      newPokemonListData.push(newDataToAdd);
    }

    setPokemonListData(newPokemonListData);
  }, [pokemonListUrl, filter]);

  //cambiar páginas
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return ( <div className={style.pokeball_loading}><Image src={pokeball} width={250}/></div> );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (filterPokemonListData.length === 0 && filter) {
    return (
      <div className={style.main}>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filter={filter}
          currentPage={currentPage}
          setFilter={setFilter}
          setCurrentPage={setCurrentPage}
          setFilterPokemonListData={setFilterPokemonListData}
          pokemonListData={pokemonListData}
          setPokemonListData={setPokemonListData}
        ></SearchBar>
        <h2 className={style.searchAgain}>
          Sorry, no results found. Please try again with different search
          criteria or browse our other categories. Thank you!
        </h2>
        {/* <Reset
          setFilter={setFilter}
          setPokemonListData={setPokemonListData}
          setCurrentPage={setCurrentPage}
          setSearchTerm={setSearchTerm}
          pokemonListData={pokemonListData}
        ></Reset> */}
      </div>
    );
  }

  return (
    <div className={style.main}>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        currentPage={currentPage}
        setFilter={setFilter}
        setCurrentPage={setCurrentPage}
        setFilterPokemonListData={setFilterPokemonListData}
        pokemonListData={pokemonListData}
        setPokemonListData={setPokemonListData}
      ></SearchBar>
      <div className={style.list}>
        {!filter
          ? currentPokemonListData.map((pokemon, index) => (
              <PokemonCard
                className={style.pokecard}
                key={index}
                pokemon={pokemon}
              ></PokemonCard>
            ))
          : currentPokemonListData.map((pokemon, index) => (
              <PokemonCard key={index} pokemon={pokemon}></PokemonCard>
            ))}
      </div>
      <div className={style.paginado}>
        <Paginado
          currentPage={currentPage}
          totalPages={
            !filter
              ? Math.ceil(pokemonListData.length / itemsPerPage)
              : Math.ceil(filterPokemonListData.length / itemsPerPage)
          }
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

function PokemonListWithProvider() {
  return (
    <Provider store={store}>
      <PokemonList />
    </Provider>
  );
}

export default PokemonListWithProvider;
