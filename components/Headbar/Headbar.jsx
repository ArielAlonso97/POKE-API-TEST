import React from 'react'
import style from './Headbar.module.scss'
import SearchBar from '../SearchBar/SearchBar'

const Headbar = () => {
  return (
    <div className={style.main}>
      <h1>Ariel Alonso Alvarado Arana</h1>
      <h1>Examen tecnico Junior Frontend</h1>
      <SearchBar></SearchBar>
    </div>
  )
}

export default Headbar