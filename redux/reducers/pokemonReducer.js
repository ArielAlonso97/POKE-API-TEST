const initialState = {
    pokemonListUrl: [],
    error: null,
  };
  
  const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'pokemon/fetchPokemonSuccessUrl':
        return {
          ...state,
          pokemonListUrl: action.payload,
          error: null,
        };
      case 'pokemon/fetchPokemonFailureUrl':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default pokemonReducer;
  