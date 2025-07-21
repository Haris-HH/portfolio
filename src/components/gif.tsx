import React from 'react';

interface GifProps {
  src: string;
  alt: string;
}

const Gif: React.FC<GifProps> = ({src, alt}) => {
  return (
    <div>
      <img src={src} alt={alt} className='w-20 h-20' />
    </div>
  );
}

export default Gif;