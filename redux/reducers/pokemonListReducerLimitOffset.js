const initialState = {
    pokemonListLimitOffset: [],
    error: null,
  };
  
  const pokemonListReducerLimitOffset = (state = initialState, action) => {
    switch (action.type) {
      case 'pokemon/fetchPokemonSuccessLimitOffset':
        return {
          ...state,
          pokemonListLimitOffset: action.payload,
          error: null,
        };
      case 'pokemon/fetchPokemonFailureLimitOffset':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default pokemonListReducerLimitOffset;
  