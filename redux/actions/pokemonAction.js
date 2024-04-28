export const fetchPokemonList = () => async dispatch => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=18&offset=0');
      if (!response.ok) {
        throw new Error('Failed to fetch Pokémon');
      }
      const data = await response.json();
      dispatch(fetchPokemonSuccess(data.results));
    } catch (error) {
      dispatch(fetchPokemonFailure(error.message));
    }
  };

  export const fetchPokemonUrl = (PokemonUrl) => async dispatch => {
    try {
      const response = await fetch(`${PokemonUrl}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Pokémon');
      }
      const data = await response.json();
      dispatch(fetchPokemonSuccessUrl(data));
    } catch (error) {
      dispatch(fetchPokemonFailureUrl(error.message));
    }
  };
  
  export const fetchPokemonSuccess = pokemonList => ({
    type: 'pokemon/fetchPokemonSuccess',
    payload: pokemonList,
  });
  
  export const fetchPokemonFailure = error => ({
    type: 'pokemon/fetchPokemonFailure',
    payload: error,
  });

  export const fetchPokemonSuccessUrl = pokemonListUrl => ({
    type: 'pokemon/fetchPokemonSuccessUrl',
    payload: pokemonListUrl,
  });
  
  export const fetchPokemonFailureUrl = error => ({
    type: 'pokemon/fetchPokemonFailureUrl',
    payload: error,
  });
  