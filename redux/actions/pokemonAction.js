/* export const fetchPokemonListLimitOffset = (limit,offset) => async dispatch => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Pokémon');
      }
      const data = await response.json();
      dispatch(fetchPokemonSuccessLimitOffset(data.results));
    } catch (error) {
      dispatch(fetchPokemonFailureLimitOffset(error.message));
    }
  }; */

  export const fetchPokemonList = (limit,offset) => async dispatch => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
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

  export const fetchPokemonSuccessLimitOffset = pokemonList => ({
    type: 'pokemon/fetchPokemonSuccessLimitOffset',
    payload: pokemonList,
  });
  
  export const fetchPokemonFailureLimitOffset = error => ({
    type: 'pokemon/fetchPokemonFailureLimitOffset',
    payload: error,
  });
  
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
  