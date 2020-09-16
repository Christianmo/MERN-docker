import React, { FC } from 'react';

import styles from './styles.module.scss';

interface GalleryProps {
  id: number;
  properties: {
    images: [];
  }
}

interface Image {
  src: string;
  alt: string;
}

const renderImage = (image: Image, key: number) => {
  return (
    <div className={styles.imageContainer} key={`image_${key}`}>
      <img src={image.src} alt={image.alt} />
    </div>
  );
}

const Gallery: FC<GalleryProps> = ({ id, properties }) => {
  return (
    <div className={styles.container}>
      {properties.images.map(renderImage)}
    </div>
  )
}

export default Gallery;