'use client';
import Image from 'next/image';
import React from 'react';

interface GifProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const Gif: React.FC<GifProps> = ({ src, alt, width = 80, height = 80 }) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-20 h-20"
        unoptimized
      />
    </div>
  );
};

export default Gif;
