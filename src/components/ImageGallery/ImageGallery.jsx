import React from 'react';
import css from './ImageGallery.module.css';

const ImageGallery = ({ children }) => {
  return <ul className={css.ImageGallery}>{children}</ul>;
};

export default ImageGallery;
