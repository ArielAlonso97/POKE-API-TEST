import React from 'react'
import { useRouter } from 'next/router';

const Paginado = ({ currentPage, totalPages }) => {
    const router = useRouter();

    const goToPage = (page) => {
      router.push(`/?page=${page}`);
    };
  
    return (
      <div>
        <button disabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)}>
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button disabled={currentPage === totalPages} onClick={() => goToPage(currentPage + 1)}>
          Siguiente
        </button>
      </div>
    );
}

export default Paginado