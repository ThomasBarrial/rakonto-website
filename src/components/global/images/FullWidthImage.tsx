'use client';

import Image from 'next/image';
import React from 'react';

interface IProps {
  path: string;
  alt: string;
  className?: string;
}

function FullWidthImage({ path, alt, className = '' }: IProps) {
  return (
    <div
      className={`w-full h-96  lg:h-screen z-0 relative max-h-[65rem] ${className}`}
    >
      <Image className="object-cover" src={path} fill priority alt={alt} />
    </div>
  );
}

export default FullWidthImage;
