const initialState = {
    pokemonList: [],
    error: null,
  };
  
  const pokemonListReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'pokemon/fetchPokemonSuccess':
        return {
          ...state,
          pokemonList: action.payload,
          error: null,
        };
      case 'pokemon/fetchPokemonFailure':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default pokemonListReducer;
  