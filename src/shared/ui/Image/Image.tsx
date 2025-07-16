import React, { useState } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc?: string; // опциональный плейсхолдер img
}

const Image: React.FC<ImageProps> = 
({ src, alt, className, placeholderSrc }) => {

  const [imgSrc, setImgSrc] = useState(src);

  const onError = () => {
    if (placeholderSrc) {
      setImgSrc(placeholderSrc);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={onError}
    />
  );
};

export default Image;
