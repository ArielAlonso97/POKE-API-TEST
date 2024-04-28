import React from 'react'
import { useEffect, useRef } from 'react';

const Audios = ({ src }) => {
    const audioRef = useRef(null);

    useEffect(() => {
      const audio = audioRef.current;
  
      // Función para manejar la reproducción del audio
      const playAudio = () => {
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
          audio.currentTime = 0;
        }
      };
  
      // Asignar evento de clic al audio para reproducir/pausar
      audio.addEventListener('click', playAudio);
  
      // Eliminar el evento al desmontar el componente
      return () => {
        audio.removeEventListener('click', playAudio);
      };
    }, []);
  
    return (
      <audio ref={audioRef} controls>
        <source src={src} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    );
  }

export default Audios