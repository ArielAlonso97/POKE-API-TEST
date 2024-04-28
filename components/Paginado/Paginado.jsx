import React from 'react';
import style from './Paginado.module.scss'

const Paginado = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className={style.paginado}>
      <button className={style.anterior} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Anterior
      </button>
      <span>{currentPage}  de {totalPages} </span>
      <button className={style.siguiente} onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Siguiente
      </button>
    </div>
  );
};

export default Paginado;
