'use client'

// components/PokemonList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonList, fetchPokemonUrl } from '../../redux/actions/pokemonAction';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import PokemonCard from '../PokemonCard/PokemonCard';
import Paginado from '../Paginado/Paginado';

function PokemonList() {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemonList.pokemonList);
  const pokemonListUrl = useSelector((state) => state.pokemon.pokemonListUrl);
  const error = useSelector((state) => state.pokemon.error);
  const [pokemonListData, setPokemonListData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  useEffect(() => {
    if (pokemonList.length > 0) {
      pokemonList.forEach((pokemon) => {
        dispatch(fetchPokemonUrl(pokemon.url));
      });
    }
  }, [pokemonList, dispatch]);

  useEffect(() => {
    const newPokemonListData = [...pokemonListData];

    const newDataToAdd = {
      // Aquí selecciona las propiedades específicas que deseas agregar
      name: pokemonListUrl.name,
      abilities: pokemonListUrl.abilities,
      types: pokemonListUrl.types,
      cries: pokemonListUrl.cries,
      sprites: pokemonListUrl.sprites,
      weight: pokemonListUrl.weight,
      stats: pokemonListUrl.stats,
      id: pokemonListUrl.id,
      height: pokemonListUrl.height,
      // Agrega más propiedades si es necesario
    };

    if (
      !newPokemonListData.some((pokemon) => pokemon.name === newDataToAdd.name)
    ) {
      newPokemonListData.push(newDataToAdd);
    }

    setPokemonListData(newPokemonListData);
  }, [pokemonListUrl]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  const itemsPerPage = 6; // Número de Pokémon a mostrar por página
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPokemonListData = pokemonListData.slice(startIndex, endIndex);

  return (
    <>
      {currentPokemonListData.map((pokemon, index) => (
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
