import { configureStore } from '@reduxjs/toolkit';

// Importa tus reducers aquí
// Ejemplo:
// import counterReducer from './reducers/counterSlice';
import pokemonReducer from './reducers/pokemonReducer';
import pokemonListReducer from './reducers/pokemonListReducer'
import pokemonListReducerLimitOffset from './reducers/pokemonListReducerLimitOffset'

export const store = configureStore({
  reducer: {
    pokemonListLimitOffset: pokemonListReducerLimitOffset,
    pokemonList: pokemonListReducer,
    pokemon: pokemonReducer,
    // Agrega tus reducers aquí
    // Ejemplo:
    // counter: counterReducer,
  },
});

export default store;
