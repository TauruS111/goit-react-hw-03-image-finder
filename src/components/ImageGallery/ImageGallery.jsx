import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          src={image.webformatURL}
          alt={image.tags}
          onClick={() => onClick(image.webformatURL, image.tags)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
