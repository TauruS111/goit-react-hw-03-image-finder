import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <li className={css.ImageGalleryItem} onClick={() => onClick(src, alt)}>
      <img className={css.ImageGalleryItemImage} src={src} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;
