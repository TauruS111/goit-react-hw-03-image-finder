import React from 'react';

const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => onClick(src, alt)}>
      <img className="ImageGalleryItem-image" src={src} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;
