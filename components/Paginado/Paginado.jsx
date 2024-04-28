import React from 'react';

const Paginado = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Anterior
      </button>
      <span>{currentPage} {/* de {totalPages} */}</span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Siguiente
      </button>
    </div>
  );
};

export default Paginado;
