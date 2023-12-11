import React from 'react';

const Button = ({ onClick, disabled }) => {
  return (
    <button
      type="button"
      className="Button"
      onClick={onClick}
      disabled={disabled}
    >
      Load more
    </button>
  );
};

export default Button;
