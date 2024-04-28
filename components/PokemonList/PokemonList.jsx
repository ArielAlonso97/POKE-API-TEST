'use client'

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList, fetchPokemonUrl } from "../../redux/actions/pokemonAction";
import { Provider } from "react-redux";
import store from "../../redux/store";
import PokemonCard from "../PokemonCard/PokemonCard";
import Paginado from "../Paginado/Paginado";

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
  const [isLoading, setIsLoading] = useState(true); // Nuevo estado para controlar la carga

  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage + 1;

  const currentPokemonListData = filter
    ? filterPokemonListData.slice(startIndex, endIndex)
    : pokemonListData.slice(startIndex + 1, endIndex);

  const limit = 1025;
  const offset = startIndex;

  useEffect(() => {
    setIsLoading(true); // Marcar como cargando al iniciar la carga de la lista
    dispatch(fetchPokemonList(limit, offset))
      .then(() => setIsLoading(false)) // Cuando la carga finaliza, marcar como no cargando
      .catch(() => setIsLoading(false)); // Manejar errores también
  }, [dispatch, filter]);

  useEffect(() => {
    if (pokemonList.length > 0) {
      pokemonList.forEach((pokemon) => {
        dispatch(fetchPokemonUrl(pokemon.url));
      });
    }
  }, [pokemonList, dispatch, filter]);

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

    if (!newPokemonListData.some((pokemon) => pokemon.name === newDataToAdd.name)) {
      newPokemonListData.push(newDataToAdd);
    }

    setPokemonListData(newPokemonListData);
  }, [pokemonListUrl, filter]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
        types.some((type) => type.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (pokemon &&
          pokemon.name &&
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        id.toString() === searchTerm.toString()
      );
    });
    setFilterPokemonListData(filteredPokemonList);
  };

  const handleReset = () => {
    setPokemonListData(pokemonListData);
    setCurrentPage(1);
    setSearchTerm("");
    setFilter(false);
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearch}>Buscar</button>
      {filter || currentPage>1 ? <button onClick={handleReset}>Reset</button>: null}
      

      {!filter
        ? currentPokemonListData.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon}></PokemonCard>
          ))
        : currentPokemonListData.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon}></PokemonCard>
          ))}
      <Paginado
        currentPage={currentPage}
        totalPages={Math.ceil(pokemonListData.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </>
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
