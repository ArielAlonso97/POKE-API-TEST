import React from 'react';
import style from './Type.module.scss'

const Type = ({ type }) => {
  return (
    <div className={`${style[type]} ${style.main}`}>
      {type}
    </div>
  );
};

export default Type;
