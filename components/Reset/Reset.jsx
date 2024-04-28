import React from 'react'
import style from './Reset.module.scss'

const Reset = ({setPokemonListData, setCurrentPage, setSearchTerm, setFilter,pokemonListData}) => {

    const handleReset = () => {
        setPokemonListData(pokemonListData);
        setCurrentPage(1);
        setSearchTerm("");
        setFilter(false);
      };
    
  return (
    <button className={style.reset} onClick={handleReset}>
          Reset
        </button>
  )
}

export default Reset