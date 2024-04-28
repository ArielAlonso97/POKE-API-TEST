import React from 'react'
import style from './Headbar.module.scss'
import SearchBar from '../SearchBar/SearchBar'
import pokedexLogo from '../../public/Images/Pokédex_logo.png'
import Image
 from 'next/image'
const Headbar = () => {
  return (
    <div className={style.main}>
      <h1>Ariel Alonso Alvarado Arana</h1>
      <h1>Examen tecnico Junior Frontend</h1>
      <h1>Pokedex</h1>
      {/* <Image src="../../public/Images/Pokédex_logo.png" alt="" 
      width={500}
      height={300}/> */}
    </div>
  )
}

export default Headbar