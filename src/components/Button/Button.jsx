import React from 'react';
import css from './Buttom.module.css';

const Button = ({ onClick, disabled }) => {
  return (
    <button
      type="button"
      className={css.Button}
      onClick={onClick}
      disabled={disabled}
    >
      Load more
    </button>
  );
};

export default Button;
